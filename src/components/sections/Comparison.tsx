import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface ComparisonRow {
  feature: string
  chefiapp: boolean | string
  spreadsheet: boolean | string
  competitors: boolean | string
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Check-in GPS com Geofencing',
    chefiapp: true,
    spreadsheet: false,
    competitors: '⚠️ Alguns'
  },
  {
    feature: 'Gamificação Nativa (XP, Níveis)',
    chefiapp: true,
    spreadsheet: false,
    competitors: false
  },
  {
    feature: 'App Mobile Nativo (iOS/Android)',
    chefiapp: true,
    spreadsheet: false,
    competitors: true
  },
  {
    feature: 'Dashboards em Tempo Real',
    chefiapp: true,
    spreadsheet: '⚠️ Manual',
    competitors: true
  },
  {
    feature: 'Multi-idioma (PT/EN/ES)',
    chefiapp: true,
    spreadsheet: false,
    competitors: '⚠️ Alguns'
  },
  {
    feature: 'Rankings de Equipe',
    chefiapp: true,
    spreadsheet: false,
    competitors: false
  },
  {
    feature: 'Tarefas e Checklists',
    chefiapp: true,
    spreadsheet: '⚠️ Manual',
    competitors: true
  },
  {
    feature: 'Notificações Push',
    chefiapp: true,
    spreadsheet: false,
    competitors: true
  },
  {
    feature: 'Custo Mensal (base)',
    chefiapp: '€29',
    spreadsheet: '€0',
    competitors: '€150-300'
  },
  {
    feature: 'ROI Comprovado',
    chefiapp: '+40% produtividade',
    spreadsheet: 'N/A',
    competitors: 'Variável'
  },
  {
    feature: 'Setup Time',
    chefiapp: '< 24h',
    spreadsheet: 'Semanas',
    competitors: '1-2 semanas'
  },
  {
    feature: 'Suporte Brasileiro',
    chefiapp: true,
    spreadsheet: false,
    competitors: false
  }
]

const CellContent = ({ value }: { value: boolean | string }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-6 h-6 text-green-400 mx-auto" />
    ) : (
      <X className="w-6 h-6 text-red-400 mx-auto" />
    )
  }

  if (value.startsWith('⚠️')) {
    return <span className="text-yellow-400 text-sm">{value}</span>
  }

  if (value.startsWith('€') || value.startsWith('+') || value.includes('prod')) {
    return <span className="text-orange-400 font-semibold text-sm">{value}</span>
  }

  return <span className="text-slate-300 text-sm">{value}</span>
}

export function Comparison() {
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
          Comparação
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ChefIApp vs. Alternativas
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Veja por que ChefIApp é a escolha inteligente para restaurantes, bares e hotéis modernos
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="px-6 py-4 text-left text-slate-400 font-medium">Funcionalidade</th>
                <th className="px-6 py-4 text-center bg-orange-500/5">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-orange-400 font-bold text-lg">ChefIApp</span>
                    <span className="text-xs text-slate-500">Recomendado</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-slate-400 font-medium">Planilhas Excel</th>
                <th className="px-6 py-4 text-center text-slate-400 font-medium">
                  <div className="flex flex-col items-center gap-1">
                    <span>Concorrentes</span>
                    <span className="text-xs text-slate-500">(7shifts, Harri, etc.)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 text-slate-300 font-medium">{row.feature}</td>
                  <td className="px-6 py-4 text-center bg-orange-500/5">
                    <CellContent value={row.chefiapp} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellContent value={row.spreadsheet} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellContent value={row.competitors} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Footer */}
        <div className="px-6 py-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-1">
                Pronto para modernizar sua gestão?
              </h3>
              <p className="text-slate-400 text-sm">
                Junte-se a centenas de estabelecimentos que escolheram ChefIApp
              </p>
            </div>
            <a
              href="#early-access"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid sm:grid-cols-3 gap-6 mt-12"
      >
        <div className="text-center p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <div className="text-3xl font-bold text-orange-400 mb-2">76%</div>
          <div className="text-slate-400 text-sm">Mais barato que concorrentes</div>
        </div>
        <div className="text-center p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <div className="text-3xl font-bold text-green-400 mb-2">-35%</div>
          <div className="text-slate-400 text-sm">Redução de turnover</div>
        </div>
        <div className="text-center p-6 bg-slate-900/30 border border-slate-800 rounded-xl">
          <div className="text-3xl font-bold text-blue-400 mb-2">+40%</div>
          <div className="text-slate-400 text-sm">Aumento de produtividade</div>
        </div>
      </motion.div>
    </div>
  )
}
