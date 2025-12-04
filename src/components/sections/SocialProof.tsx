import { motion } from 'framer-motion'
import { Star, Users, Building2, TrendingUp } from 'lucide-react'
import { useT } from '../../i18n'

const statIcons = [Star, Users, Building2, TrendingUp]

export function SocialProof() {
  const t = useT()
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {t.socialProof.stats.map((stat, index) => {
          const IconComponent = statIcons[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/30 transition-all"
            >
              {IconComponent && <IconComponent className="w-8 h-8 mx-auto mb-3 text-orange-500" />}
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.socialProof.title}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t.socialProof.subtitle}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {t.socialProof.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl p-6 hover:border-orange-500/30 transition-all ${
              testimonial.featured
                ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 shadow-lg shadow-orange-500/10'
                : 'bg-slate-900/60 border border-slate-800'
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>

            {/* Author */}
            <div>
              <div className="font-semibold text-white">{testimonial.author}</div>
              <div className="text-sm text-slate-500">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
