import { useState, useEffect } from 'react'
import { useInView } from './useInView'

export function useCountUp(target, duration = 1500) {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)
  const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''))
  const suffix = String(target).replace(/[0-9.]/g, '')
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = numericTarget / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, numericTarget, duration])
  return { count, suffix, ref }
}
