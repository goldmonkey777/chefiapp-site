import { motion } from 'framer-motion'
import { Building, QrCode, ClipboardList, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Building,
    number: '01',
    title: 'Crie a sua empresa',
    description: 'Registe o seu restaurante em menos de 2 minutos. Configure departamentos e turnos.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: QrCode,
    number: '02',
    title: 'Convide a equipe por QR',
    description: 'Cada funcionário escaneia um QR Code único para entrar. Sem emails complicados.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Configure tarefas',
    description: 'Crie checklists, tarefas recorrentes e atribua por turno ou departamento.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Acompanhe em tempo real',
    description: 'Veja quem está a trabalhar, tarefas completas e o ranking da equipe ao vivo.',
    color: 'from-yellow-500 to-green-500',
  },
]

export function HowItWorks() {
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
          Como Funciona
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Comece em{' '}
          <span className="gradient-text">4 passos simples</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Da criação da conta ao controle total da sua equipe em minutos
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-6 shadow-lg`}>
              {step.number}
            </div>

            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-400">
              <step.icon size={24} />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
