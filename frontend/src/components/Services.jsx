import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import ServiceCard from './ServiceCard'
import services from '../data/services.json'

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-24 px-6 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3">Services</p>
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Lessons for Every Goal <span className="font-serif text-accent-sakura">目標</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From your first "konnichiwa" to business-level fluency, I offer a range of lesson formats to match your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
