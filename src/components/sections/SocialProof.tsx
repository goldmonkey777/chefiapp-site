import { motion } from 'framer-motion'
import { Star, Users, Building2, TrendingUp, Quote } from 'lucide-react'
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
            {/* Featured Badge */}
            {testimonial.featured && (
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-400">
                  Lab Partner
                </span>
              </div>
            )}

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
              ))}
            </div>

            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-orange-500/30 mb-3" />

            {/* Quote */}
            <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

            {/* Author with Avatar Placeholder */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-800">
              {/* Avatar Circle with Initials */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div className="flex-1">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-500">{testimonial.role}</div>

                {/* Restaurant Logo/Name for featured testimonials */}
                {testimonial.featured && (
                  <div className="mt-1 flex items-center gap-2">
                    <Building2 className="w-3 h-3 text-orange-400" />
                    <span className="text-xs text-orange-400 font-medium">Sofia Gastrobar Ibiza</span>
                  </div>
                )}
              </div>
            </div>

            {/* Video Testimonial Badge (placeholder for future) */}
            {testimonial.featured && (
              <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                <div className="text-xs text-slate-400 text-center">
                  📹 Video testimonial disponível em breve
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-8 p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-slate-400 text-sm">4.9/5 Rating</span>
          </div>
          <div className="w-px h-8 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-slate-400 text-sm">200+ Usuários Ativos</span>
          </div>
          <div className="w-px h-8 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-400" />
            <span className="text-slate-400 text-sm">Testado no Sofia Gastrobar</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
