import { motion } from 'framer-motion'
import { ChefHat, Zap, Smartphone, FlaskConical } from 'lucide-react'
import { useT } from '../../i18n'

const icons = [ChefHat, Zap, Smartphone, FlaskConical]

export function WhyDifferent() {
  const t = useT()
  
  return (
    <div className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
          {t.whyDifferent.title}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.whyDifferent.subtitle}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.whyDifferent.items.map((item, index) => {
          const IconComponent = icons[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-500">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
