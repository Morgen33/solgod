import * as React from "react"
import { balloons, textBalloons } from "balloons-js"

export interface BalloonsProps {
  type?: "default" | "text"
  text?: string
  fontSize?: number
  color?: string
  onLaunch?: () => void
}

const Balloons = React.forwardRef<
  { launchAnimation: () => void },
  BalloonsProps
>(({ type = "default", text, fontSize = 120, color = "#000000", onLaunch }, ref) => {
  const launchAnimation = React.useCallback(() => {
    if (type === "default") {
      balloons()
    } else if (type === "text" && text) {
      textBalloons([{ text, fontSize, color }])
    }
    onLaunch?.()
  }, [type, text, fontSize, color, onLaunch])

  React.useImperativeHandle(ref, () => ({ launchAnimation }), [launchAnimation])

  return null
})

Balloons.displayName = "Balloons"

export { Balloons }
