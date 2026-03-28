import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronDown } from 'lucide-react'
import faqData from '../data/faq.json'

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-bg-card">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-surface/50 transition-colors"
      >
        <span className="font-medium text-sm text-text-primary pr-4">{item.question}</span>
        <ChevronDown
          size={18}
          className={`text-text-secondary flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-4 text-sm text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { ref, inView } = useInView()

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Common Questions <span className="font-serif text-accent-sakura">よくある質問</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqData.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
