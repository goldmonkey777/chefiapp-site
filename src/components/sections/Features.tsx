import { motion } from 'framer-motion'
import { 
  CheckSquare, 
  MapPin, 
  Award, 
  Trophy, 
  BarChart3, 
  Bell, 
  Globe, 
  Smartphone 
} from 'lucide-react'

const features = [
  {
    icon: CheckSquare,
    title: 'Tarefas & Checklists',
    description: 'Crie tarefas, checklists de abertura/fecho e atribua por turno, departamento ou funcionário.',
  },
  {
    icon: MapPin,
    title: 'Check-in com GPS',
    description: 'Validação de presença por geolocalização. Saiba quem está a trabalhar e onde.',
  },
  {
    icon: Award,
    title: 'XP & Níveis',
    description: 'Funcionários ganham XP ao completar tarefas, progridem em níveis e desbloqueiam conquistas.',
  },
  {
    icon: Trophy,
    title: 'Ranking da Equipe',
    description: 'Competição saudável entre colegas com rankings semanais e mensais.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards em Tempo Real',
    description: 'Métricas visuais: produtividade, presença, tarefas concluídas — tudo ao vivo.',
  },
  {
    icon: Bell,
    title: 'Notificações Inteligentes',
    description: 'Alertas de tarefas pendentes, chegadas, subidas de nível. Personalize o que recebe.',
  },
  {
    icon: Globe,
    title: 'Multi-idioma',
    description: 'Interface em Português, Español e English. Equipe internacional entende tudo.',
  },
  {
    icon: Smartphone,
    title: 'App Instalável (PWA)',
    description: 'Funciona como app nativo. Instalação em um clique, sem App Store.',
  },
]

export function Features() {
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
          Funcionalidades
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Tudo o que precisa,{' '}
          <span className="gradient-text">nada que não precise</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Ferramentas essenciais para gerir a sua equipe de restaurante sem complicações
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 hover:bg-slate-900/70 transition-all cursor-default"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 text-orange-500">
              <feature.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
