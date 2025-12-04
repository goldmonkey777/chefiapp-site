import { motion } from 'framer-motion'
import { Check, Clock, Sparkles } from 'lucide-react'
import { useT } from '../../i18n'

export function Roadmap() {
  const t = useT()
  
  const statusConfig = {
    completed: {
      icon: Check,
      bg: 'bg-green-500/20',
      text: 'text-green-400',
      itemBg: 'bg-green-500/5',
      itemBorder: 'border-green-500/10',
      dotBg: 'bg-green-500/20',
    },
    current: {
      icon: Clock,
      bg: 'bg-orange-500/20',
      text: 'text-orange-400',
      itemBg: 'bg-orange-500/5',
      itemBorder: 'border-orange-500/10',
      dotBg: 'bg-orange-500/20',
    },
    upcoming: {
      icon: Sparkles,
      bg: 'bg-blue-500/20',
      text: 'text-blue-400',
      itemBg: 'bg-blue-500/5',
      itemBorder: 'border-blue-500/10',
      dotBg: 'bg-blue-500/20',
    },
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
          {t.roadmap.title}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.roadmap.subtitle}
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {t.roadmap.phases.map((phase, phaseIndex) => {
          const config = statusConfig[phase.status as keyof typeof statusConfig]
          const IconComponent = config.icon
          return (
            <motion.div
              key={phaseIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center`}>
                  <IconComponent size={20} className={config.text} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <p className={`text-sm ${config.text}`}>
                    {t.roadmap.statusLabels[phase.status as keyof typeof t.roadmap.statusLabels]}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {phase.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`flex items-center gap-3 p-3 ${config.itemBg} rounded-xl border ${config.itemBorder}`}
                  >
                    <div className={`w-5 h-5 rounded-full ${config.dotBg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent size={12} className={config.text} />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
