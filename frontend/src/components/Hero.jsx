import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Soft radial background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(194,24,91,0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-6">
        {/* Profile placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 rounded-full ring-2 ring-accent-sakura/40 shadow-[0_0_30px_rgba(194,24,91,0.15)] bg-bg-surface flex items-center justify-center"
        >
          <span className="text-3xl font-serif text-accent-sakura">光</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-6xl font-extrabold text-text-primary tracking-tight"
        >
          Hikaru Utada
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl font-serif text-accent-sakura"
        >
          Native Japanese Instruction
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed"
        >
          Personalized Japanese lessons for every level — from first words to fluency.
          Learn with a native speaker in Carlsbad or from anywhere online.
        </motion.p>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border text-text-secondary text-sm shadow-sm"
        >
          <MapPin size={14} className="text-accent-sakura" />
          <span>Carlsbad, California &middot; Online Worldwide</span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-lg bg-accent-sakura text-white font-semibold text-sm hover:bg-pink-700 transition-colors shadow-[0_0_20px_rgba(194,24,91,0.2)]"
          >
            View Services
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 rounded-lg border border-border text-text-secondary font-semibold text-sm hover:border-accent-sakura hover:text-accent-sakura transition-colors bg-bg-card"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
