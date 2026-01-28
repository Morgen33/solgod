
# Fix Mobile Freeze on Portal Enter

## Problem
When tapping "Enter" on the intro portal on mobile, the app freezes for 5+ seconds before showing the home page. This happens because navigating from `/` to `/home` triggers simultaneous initialization of heavy components:
- VaporizeTextCycle (800+ lines, particle-based canvas with hundreds of particles)
- Multiple GlowCard components with CSS variable calculations
- Layout background animations (already optimized with mobile fallback)

## Solution Overview
Implement a three-phase optimization strategy using lazy loading and deferred initialization.

---

## Phase 1: Add Exit Transition to Portal

Add a fade-out animation when clicking "Enter" to provide immediate visual feedback and mask loading time.

**File: `src/components/ui/plasma-hero.tsx`**
- Add `isExiting` state to track when user clicks Enter
- Modify the container div to apply opacity transition when exiting
- Delay the actual `onEnter()` navigation by 400ms to allow fade to complete

---

## Phase 2: Lazy Load the Home Page

Use React's `lazy()` and `Suspense` to code-split the Index page so it loads separately from the main bundle.

**File: `src/App.tsx`**
- Import `lazy` and `Suspense` from React
- Replace static `import Index from './pages/Index'` with `const Index = lazy(() => import('./pages/Index'))`
- Wrap the Routes in a Suspense component with a minimal black loading screen fallback

---

## Phase 3: Defer VaporizeTextCycle on Mobile

Delay the heavy VaporizeTextCycle component initialization on mobile to allow the page shell to render first.

**File: `src/pages/Index.tsx`**
- Import `useIsMobile` hook and add `useState` + `useEffect`
- Add a `showVaporize` state that starts as `false` on mobile
- Use `useEffect` to set `showVaporize` to `true` after 300ms delay on mobile
- Conditionally render VaporizeTextCycle only when `showVaporize` is true
- Show a simple static text placeholder during the delay

---

## Technical Details

### plasma-hero.tsx Changes
```text
Line 129: Add new state:
  const [isExiting, setIsExiting] = useState(false);

Line 582-590: Modify the button div and handler:
  - Add transition class to container: 
    className={`... transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
  - Modify ShinyButton onClick:
    onClick={() => {
      setIsExiting(true);
      setTimeout(() => onEnter?.(), 400);
    }}
```

### App.tsx Changes
```text
Line 1: Add lazy, Suspense imports:
  import { lazy, Suspense } from 'react';

Line 10: Change Index import to lazy:
  const Index = lazy(() => import('./pages/Index'));

Line 23-24: Wrap Routes in Suspense:
  <Suspense fallback={<div className="min-h-screen bg-black" />}>
    <Routes>...</Routes>
  </Suspense>
```

### Index.tsx Changes
```text
Line 1-2: Add imports:
  import { useState, useEffect } from 'react';
  import { useIsMobile } from '@/hooks/use-mobile';

Line 14-22: Add state and effect:
  const isMobile = useIsMobile();
  const [showVaporize, setShowVaporize] = useState(!isMobile);
  
  useEffect(() => {
    if (isMobile && !showVaporize) {
      const timer = setTimeout(() => setShowVaporize(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isMobile, showVaporize]);

Line 27-45, 47-66: Wrap VaporizeTextCycle in conditional:
  {showVaporize ? (
    <VaporizeTextCycle ... />
  ) : (
    <div className="text-3xl font-bold text-[rgb(1,178,255)]" 
         style={{ fontFamily: 'Cinzel, serif' }}>
      Probably Nothing
    </div>
  )}
```

---

## Expected Results

1. **Instant feedback** - Enter button triggers immediate fade-out (400ms)
2. **Smoother transition** - Page loading happens during the fade animation
3. **Faster perceived performance** - Home page shell appears quickly, then VaporizeTextCycle fades in
4. **No more 5+ second freeze** - Heavy initialization is spread out and doesn't block the main thread

---

## Files to Modify
1. `src/components/ui/plasma-hero.tsx` - Exit transition animation
2. `src/App.tsx` - Lazy loading with Suspense
3. `src/pages/Index.tsx` - Deferred VaporizeTextCycle rendering
