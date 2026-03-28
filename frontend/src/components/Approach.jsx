import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MessageCircle, BookOpen, Globe, Heart } from 'lucide-react'

const pillars = [
  {
    icon: MessageCircle,
    title: 'Conversation First',
    titleJp: '会話重視',
    description: 'Speaking from lesson one. Real dialogue builds confidence faster than drills alone.',
  },
  {
    icon: BookOpen,
    title: 'Structured Progression',
    titleJp: '段階的な学習',
    description: 'Clear milestones from beginner to advanced, so you always know where you stand and where you\'re headed.',
  },
  {
    icon: Globe,
    title: 'Cultural Context',
    titleJp: '文化的背景',
    description: 'Language lives inside culture. I weave in customs, etiquette, and real-world context to make your Japanese natural.',
  },
  {
    icon: Heart,
    title: 'Patient & Supportive',
    titleJp: '丁寧なサポート',
    description: 'Everyone learns differently. I adapt to your pace, celebrate your wins, and make sure learning stays enjoyable.',
  },
]

export default function Approach() {
  const { ref, inView } = useInView()

  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3">Approach</p>
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            How I Teach <span className="font-serif text-accent-sakura">教え方</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            My lessons blend structure with flexibility — grounded in proven methods but always adapted to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-indigo/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-accent-indigo" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{p.title}</h3>
                    <p className="text-xs text-accent-indigo font-serif mb-2">{p.titleJp}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
