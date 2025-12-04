import { motion } from 'framer-motion'
import { Smartphone, Apple, PlayCircle } from 'lucide-react'
import { useT } from '../../i18n'

export function Download() {
  const t = useT()
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
          <Smartphone size={32} className="text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t.download.title}
        </h2>
        
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          {t.download.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
          >
            <Apple size={28} />
            <div className="text-left">
              <p className="text-xs text-slate-400">{t.download.comingSoon}</p>
              <p className="font-semibold">{t.download.appStore}</p>
            </div>
          </motion.a>

          {/* Google Play Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
          >
            <PlayCircle size={28} />
            <div className="text-left">
              <p className="text-xs text-slate-400">{t.download.comingSoon}</p>
              <p className="font-semibold">{t.download.googlePlay}</p>
            </div>
          </motion.a>
        </div>

        <a
          href="#early-access"
          className="inline-block mt-6 text-sm text-orange-400 hover:text-orange-300 transition-colors"
        >
          {t.download.notifyMe} →
        </a>
      </motion.div>
    </div>
  )
}
