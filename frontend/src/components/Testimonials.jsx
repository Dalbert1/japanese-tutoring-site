import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Quote } from 'lucide-react'
import testimonials from '../data/testimonials.json'

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section id="testimonials" className="py-24 px-6 bg-bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Student Stories <span className="font-serif text-accent-sakura">生徒の声</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Hear from students who have achieved their Japanese language goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <Quote size={20} className="text-accent-sakura/30 mb-3" />
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {t.text}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.type}</p>
                </div>
                <span className="text-xs font-medium text-accent-sakura bg-accent-sakura/10 px-2.5 py-1 rounded-full">
                  {t.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
