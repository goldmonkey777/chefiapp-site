import { motion } from 'framer-motion'
import { Check, Clock, Sparkles } from 'lucide-react'

const mvpFeatures = [
  'Onboarding completo de empresa',
  'Sistema de tarefas & checklists',
  'Gamificação com XP e níveis',
  'Check-in/out com validação GPS',
  'Dashboard para donos e gerentes',
  'Multi-idioma (PT, ES, EN)',
  'Auth via Google, Apple & Magic Link',
  'Convite de equipe por QR Code',
  'Notificações push',
  'PWA instalável',
]

const roadmapFeatures = [
  { name: 'Terminal Ponto de Venda (TPV)', quarter: 'Q1 2025' },
  { name: 'Analytics avançados & relatórios', quarter: 'Q1 2025' },
  { name: 'Academy de formação in-app', quarter: 'Q2 2025' },
  { name: 'Integrações (iFood, Uber Eats, etc)', quarter: 'Q2 2025' },
  { name: 'IA para previsão de demanda', quarter: 'Q3 2025' },
  { name: 'Gestão de inventário', quarter: 'Q3 2025' },
  { name: 'Chat interno & comunicação', quarter: 'Q3 2025' },
  { name: 'Módulo de RH & documentos', quarter: 'Q4 2025' },
]

export function Roadmap() {
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
          Roadmap
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          O que já existe{' '}
          <span className="gradient-text">vs. o que vem aí</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Transparência total sobre o estado atual e os próximos passos do produto
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* MVP Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Check size={20} className="text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">MVP Atual</h3>
              <p className="text-sm text-slate-500">Disponível agora</p>
            </div>
          </div>

          <div className="grid gap-3">
            {mvpFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 bg-green-500/5 rounded-xl border border-green-500/10"
              >
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-green-400" />
                </div>
                <span className="text-sm text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <Sparkles size={20} className="text-orange-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Em Desenvolvimento</h3>
              <p className="text-sm text-slate-500">Roadmap 2025</p>
            </div>
          </div>

          <div className="grid gap-3">
            {roadmapFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-xl border border-orange-500/10"
              >
                <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={12} className="text-orange-400" />
                </div>
                <span className="text-sm text-slate-300 flex-1">{feature.name}</span>
                <span className="text-xs text-orange-400 font-medium px-2 py-1 bg-orange-500/10 rounded-full">
                  {feature.quarter}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
