import { useCountUp } from '../hooks/useCountUp'

export default function StatCounter({ value, label }) {
  const { count, suffix, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-accent-sakura">
        {count}{suffix}
      </p>
      <p className="text-sm text-text-secondary mt-1">{label}</p>
    </div>
  )
}
