import { motion } from 'framer-motion'
import { Building2, Users, UserCheck, CheckCircle } from 'lucide-react'

const personas = [
  {
    icon: Building2,
    title: 'Donos & Proprietários',
    description: 'Visão completa do seu negócio em tempo real',
    benefits: [
      'Dashboard com métricas de equipe',
      'Ver quem está a trabalhar agora',
      'Acompanhar produtividade',
      'Identificar top performers',
      'Reduzir turnover com gamificação',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Gerentes & Supervisores',
    description: 'Ferramentas para gerir equipes de alta pressão',
    benefits: [
      'Criar e atribuir tarefas rapidamente',
      'Check-in/out da equipe em tempo real',
      'Comunicação centralizada',
      'Relatórios diários automáticos',
      'Alertas de tarefas pendentes',
    ],
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: UserCheck,
    title: 'Funcionários',
    description: 'App simples e motivador para o dia-a-dia',
    benefits: [
      'Ver tarefas do turno claramente',
      'Ganhar XP e subir de nível',
      'Competir no ranking da equipe',
      'Registar presença com GPS',
      'Receber feedback instantâneo',
    ],
    gradient: 'from-yellow-500 to-green-500',
  },
]

export function ForWho() {
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
          Para Quem
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Feito para quem vive{' '}
          <span className="gradient-text">a realidade do restaurante</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Cada função tem ferramentas específicas para as suas necessidades
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {personas.map((persona, index) => (
          <motion.div
            key={persona.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
          >
            <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${persona.gradient} shadow-lg`}>
              <persona.icon size={28} className="text-white" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {persona.title}
            </h3>
            <p className="text-slate-400 mb-6">{persona.description}</p>

            <ul className="space-y-3">
              {persona.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
