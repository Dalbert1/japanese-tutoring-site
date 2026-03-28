import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import StatCounter from './StatCounter'

const stats = [
  { value: '10+', label: 'Years Teaching' },
  { value: '200+', label: 'Students Taught' },
  { value: '5', label: 'JLPT Levels Covered' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest mb-3 text-center">About</p>
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            Meet Hikaru <span className="font-serif text-accent-sakura">宇多田 光</span>
          </h2>

          <div className="bg-bg-card border border-border rounded-2xl p-8 shadow-sm mt-8">
            <div className="max-w-2xl mx-auto space-y-4 text-text-secondary leading-relaxed">
              <p>
                Born and raised in Japan, I bring the nuance, culture, and natural rhythm of the language into every lesson.
                I moved to Southern California over a decade ago, and I've been helping students of all ages and backgrounds
                discover the beauty of Japanese ever since.
              </p>
              <p>
                My teaching philosophy is simple: language is connection. Whether you want to travel, work with
                Japanese colleagues, pass the JLPT, or bond with family members, I tailor every lesson to your
                real-world goals — not just textbook exercises.
              </p>
              <p>
                Based in Carlsbad, I offer in-person lessons locally and online lessons for students anywhere in the world.
                I believe learning should be enjoyable, and I love seeing the moment when something finally clicks for a student.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border">
              {stats.map(s => (
                <StatCounter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
