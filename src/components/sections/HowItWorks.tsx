import { motion } from 'framer-motion'
import { Building, Users, BarChart3 } from 'lucide-react'
import { useT } from '../../i18n'

const icons = [Building, Users, BarChart3]
const colors = [
  'from-orange-500 to-red-500',
  'from-orange-500 to-yellow-500',
  'from-yellow-500 to-green-500',
]

export function HowItWorks() {
  const t = useT()
  
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
          {t.howItWorks.title}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.howItWorks.subtitle}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {t.howItWorks.steps.map((step, index) => {
          const IconComponent = icons[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} text-white font-bold text-lg mb-6 shadow-lg`}>
                {step.step}
              </div>

              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-400">
                {IconComponent && <IconComponent size={24} />}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
