import { motion } from 'framer-motion'
import { 
  CheckSquare, 
  MapPin, 
  Trophy, 
  BarChart3, 
  Users,
  Bell
} from 'lucide-react'
import { useT } from '../../i18n'

const iconMap = {
  CheckSquare,
  MapPin,
  Trophy,
  BarChart3,
  Users,
  Bell,
}

export function Features() {
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
          {t.features.title}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.features.subtitle}
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {t.features.items.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/70 transition-all cursor-default"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-500">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
