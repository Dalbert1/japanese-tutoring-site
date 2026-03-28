import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { User, Users, Monitor, Award, Briefcase, Smile, Check } from 'lucide-react'

const iconMap = { User, Users, Monitor, Award, Briefcase, Smile }

export default function ServiceCard({ service, delay = 0 }) {
  const { ref, inView } = useInView()
  const Icon = iconMap[service.icon] || User

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="bg-bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent-sakura/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-sakura/10 flex items-center justify-center">
          <Icon size={20} className="text-accent-sakura" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">{service.title}</h3>
          <p className="text-xs text-accent-sakura font-serif">{service.titleJp}</p>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {service.description}
      </p>

      <ul className="space-y-1.5">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
            <Check size={14} className="text-accent-sakura flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
