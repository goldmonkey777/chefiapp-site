import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <img 
            src="/logo.png" 
            alt="ChefIApp Logo" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300"
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Beta aberto para restaurantes selecionados
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
        >
          Controle total da sua{' '}
          <span className="gradient-text">equipe de restaurante</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Plataforma de gestão de equipe para hospitality. Tarefas, check-in, 
          gamificação e dashboards — tudo num só lugar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <a
            href="#early-access"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
          >
            Quero testar no meu restaurante
            <ArrowRight size={18} />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <Play size={18} />
            Ver como funciona
          </a>
        </motion.div>

        {/* Business Types */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-10"
        >
          <p className="text-sm text-slate-500 mb-4">Funciona para:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { emoji: '🍽️', label: 'Restaurantes' },
              { emoji: '🍸', label: 'Bares' },
              { emoji: '🏨', label: 'Hotéis' },
              { emoji: '🏠', label: 'Hostels' },
              { emoji: '🎉', label: 'Buffets' },
            ].map((type, i) => (
              <motion.span
                key={type.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 cursor-default"
              >
                {type.emoji} {type.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-slate-500 pt-6"
        >
          From Ibiza with Love — by goldmonkey.studio
        </motion.p>
      </motion.div>
    </section>
  )
}
