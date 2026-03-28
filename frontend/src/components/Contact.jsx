import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Copy, Check, MapPin, Clock } from 'lucide-react'

const EMAIL = 'hello@carlsbad-japanese-tutor.com'

export default function Contact() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-bg-surface">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div>
            <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              Start Your Journey <span className="font-serif text-accent-sakura">始めましょう</span>
            </h2>
            <p className="text-text-secondary">
              Ready to learn Japanese? Reach out to discuss your goals and schedule a trial lesson.
            </p>
          </div>

          {/* Email card */}
          <div className="w-full bg-bg-card border border-border rounded-xl px-6 py-5 flex items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-accent-sakura flex-shrink-0" />
              <span className="text-sm text-text-primary break-all">{EMAIL}</span>
            </div>
            <div className="relative flex-shrink-0">
              <button
                onClick={handleCopy}
                className="w-9 h-9 rounded-lg bg-bg-surface border border-border flex items-center justify-center hover:border-accent-sakura hover:text-accent-sakura text-text-secondary transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={15} className="text-green-600" /> : <Copy size={15} />}
              </button>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-bg-card border border-border text-text-primary text-[11px] px-2 py-1 rounded-md whitespace-nowrap shadow-sm"
                >
                  Copied!
                </motion.div>
              )}
            </div>
          </div>

          {/* Info badges */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-accent-sakura" />
              <span>Carlsbad, CA &middot; Online Worldwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-accent-sakura" />
              <span>Mon&ndash;Sat, 9am&ndash;7pm</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`mailto:${EMAIL}?subject=Japanese Lesson Inquiry`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-accent-sakura text-white font-semibold text-sm hover:bg-pink-700 transition-colors shadow-[0_0_20px_rgba(194,24,91,0.2)]"
          >
            <Mail size={16} />
            Send an Inquiry
          </a>
        </motion.div>
      </div>
    </section>
  )
}
