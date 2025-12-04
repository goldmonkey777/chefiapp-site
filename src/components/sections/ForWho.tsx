import { motion } from 'framer-motion'
import { UtensilsCrossed, Wine, Hotel, ChefHat } from 'lucide-react'
import { useT } from '../../i18n'

const iconMap = {
  UtensilsCrossed,
  Wine,
  Hotel,
  ChefHat,
}

export function ForWho() {
  const t = useT()
  
  const gradients = [
    'from-orange-500 to-red-500',
    'from-orange-500 to-yellow-500',
    'from-yellow-500 to-green-500',
    'from-green-500 to-teal-500',
  ]

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
          {t.forWho.title}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.forWho.subtitle}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {t.forWho.items.map((item, index) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
            >
              <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index]} shadow-lg`}>
                {IconComponent && <IconComponent size={28} className="text-white" />}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
