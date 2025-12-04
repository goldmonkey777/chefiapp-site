import { motion } from 'framer-motion'
import { Star, Users, Building2, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.9/5', label: 'Rating médio' },
  { icon: Users, value: '+5K', label: 'Usuários ativos' },
  { icon: Building2, value: '+200', label: 'Restaurantes' },
  { icon: TrendingUp, value: '40%', label: 'Aumento produtividade' },
]

const testimonials = [
  {
    quote: 'O ChefIApp nasceu no Sofia Gastrobar. Testamos tudo em operação real antes de lançar. A gamificação e check-in GPS mudaram completamente a gestão da equipe.',
    author: 'Elder Miranda de Andrade',
    role: 'Owner, Sofia Gastrobar Ibiza 🏝️',
    rating: 5,
    featured: true,
  },
  {
    quote: 'Como primeiro restaurante a usar o ChefIApp, vimos a plataforma evoluir com nosso feedback. Essencial para qualquer restaurante moderno.',
    author: 'Equipa Sofia Gastrobar',
    role: 'Laboratório Oficial, Ibiza',
    rating: 5,
    featured: true,
  },
  {
    quote: 'As tarefas e checklists organizaram tudo. Check-in GPS eliminou problemas de presença. Recomendo totalmente!',
    author: 'Ana Costa',
    role: 'Manager, Hotel Boutique',
    rating: 5,
  },
]

export function SocialProof() {
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
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/30 transition-all"
          >
            <stat.icon className="w-8 h-8 mx-auto mb-3 text-orange-500" />
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
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
          O que dizem nossos clientes
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Restaurantes, bares e hotéis que já usam o ChefIApp no dia a dia
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
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
              {[...Array(testimonial.rating)].map((_, i) => (
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
