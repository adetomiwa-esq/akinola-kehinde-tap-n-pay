import { useEffect, useState } from "react"

export function useCountdown(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

  useEffect(() => {
    if (secondsLeft <= 0) return

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [secondsLeft])

  const reset = () => setSecondsLeft(initialSeconds)

  return { secondsLeft, reset }
}
