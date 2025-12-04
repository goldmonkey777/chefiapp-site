import { motion } from 'framer-motion'
import { ExternalLink, Scale } from 'lucide-react'
import { useT } from '../../i18n'

const competitorUrls: Record<string, string> = {
  '7shifts': 'https://www.7shifts.com',
  'Harri': 'https://harri.com',
  'Fourth / HotSchedules': 'https://www.fourth.com',
  'Unifocus': 'https://www.unifocus.com',
  'HelloShift / STAY': 'https://www.helloshift.com',
}

export function Alternatives() {
  const t = useT()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
          <Scale size={16} className="text-purple-400" />
          <span className="text-sm font-medium text-purple-400">{t.alternatives.badge}</span>
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.alternatives.title}
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
          {t.alternatives.subtitle}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.alternatives.competitors.map((competitor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{competitor.name}</h3>
              <a
                href={competitorUrls[competitor.name]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={12} />
                {t.alternatives.visitSite}
              </a>
            </div>
            
            <p className="text-sm text-slate-300 mb-4">
              <span className="font-semibold text-slate-100">{t.alternatives.focusLabel} </span>
              {competitor.focus}
            </p>
            
            <div className="pt-4 border-t border-slate-700">
              <p className="text-sm text-orange-200/90 leading-relaxed">
                <span className="text-orange-400 font-semibold">ChefIApp: </span>
                {competitor.whyChefIApp}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-orange-500/10 border border-orange-500/30 p-8"
      >
        <p className="text-center text-slate-100 leading-relaxed">
          {t.alternatives.cta}{' '}
          <span className="font-bold text-orange-400">
            {t.alternatives.ctaHighlight}
          </span>
        </p>
        
        <div className="mt-6 flex justify-center">
          <a
            href="#early-access"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            {t.hero.cta}
          </a>
        </div>
      </motion.div>
    </div>
  )
}

