import { motion } from 'framer-motion'
import { ChefHat, Zap, Globe, Heart } from 'lucide-react'

const differentiators = [
  {
    icon: ChefHat,
    title: 'Feito por quem conhece restaurantes',
    description: 'Não é mais um app genérico adaptado. Foi criado especificamente para a realidade de cozinhas, salões e bastidores.',
  },
  {
    icon: Zap,
    title: 'Pensado para alta pressão',
    description: 'Interface rápida, poucos cliques, funciona offline. Porque num serviço lotado não há tempo para apps complicados.',
  },
  {
    icon: Globe,
    title: 'Linguagem de restaurante',
    description: 'Termos como "mise en place", "serviço", "turno", "passagem" — falamos a sua língua, não jargão corporativo.',
  },
  {
    icon: Heart,
    title: 'Gamificação que faz sentido',
    description: 'XP, níveis e rankings adaptados à rotina do restaurante. Motivação real, não só badges vazios.',
  },
]

export function WhyDifferent() {
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
          Por Que Somos Diferentes
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ChefIApp não é{' '}
          <span className="gradient-text">"mais um app de gestão"</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Entendemos que restaurantes não são escritórios e não podem ser geridos como tal
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {differentiators.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-500">
                <item.icon size={24} />
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
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <blockquote className="text-xl md:text-2xl text-slate-400 italic max-w-3xl mx-auto">
          "Depois de anos a ver restaurantes a lutarem com ferramentas genéricas, decidimos criar algo que realmente funciona para a nossa indústria."
        </blockquote>
      </motion.div>
    </div>
  )
}
