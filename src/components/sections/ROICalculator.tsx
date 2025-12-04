import { motion } from 'framer-motion'
import { useState } from 'react'
import { TrendingUp, Users, DollarSign, Clock, Mail } from 'lucide-react'
import { supabase } from '../../lib/supabase'

export function ROICalculator() {
  const [employees, setEmployees] = useState(15)
  const [avgSalary, setAvgSalary] = useState(1500)
  const [turnoverRate, setTurnoverRate] = useState(40)
  const [hiringCost, setHiringCost] = useState(2000)
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  // Calculations
  const annualTurnover = Math.round((employees * turnoverRate) / 100)
  const currentTurnoverCost = annualTurnover * hiringCost

  // With ChefIApp (35% turnover reduction + 40% productivity boost)
  const newTurnoverRate = turnoverRate * 0.65 // 35% reduction
  const newAnnualTurnover = Math.round((employees * newTurnoverRate) / 100)
  const newTurnoverCost = newAnnualTurnover * hiringCost
  const turnoverSavings = currentTurnoverCost - newTurnoverCost

  const productivityGain = Math.round(employees * avgSalary * 12 * 0.15) // 15% productivity boost impact
  const totalAnnualSavings = turnoverSavings + productivityGain
  const chefiappCost = 29 * employees * 12 // €29/employee/month
  const netBenefit = totalAnnualSavings - chefiappCost
  const roiMultiplier = (totalAnnualSavings / chefiappCost).toFixed(1)

  const handleCalculate = () => {
    setShowResults(true)
  }

  const handleSendReport = async () => {
    if (!email) return

    try {
      await supabase.from('marketing_leads_restaurants').insert({
        contact: email,
        employee_count: String(employees),
        main_pain_point: `ROI Calculator: ${employees} funcionários, ${turnoverRate}% turnover`,
        source: 'roi-calculator'
      })
      setEmailSent(true)
    } catch (error) {
      console.error('Error saving lead:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-green-400 bg-green-500/10 rounded-full border border-green-500/20">
          Calculadora ROI
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Quanto Você Pode Economizar?
        </h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Descubra o retorno sobre investimento (ROI) do ChefIApp para o seu estabelecimento
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-6">Dados do Seu Negócio</h3>

          <div className="space-y-6">
            {/* Employees */}
            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2">
                <Users className="w-4 h-4" />
                <span>Número de Funcionários</span>
              </label>
              <input
                type="range"
                min="5"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-500">5</span>
                <span className="text-orange-400 font-bold">{employees}</span>
                <span className="text-slate-500">100</span>
              </div>
            </div>

            {/* Avg Salary */}
            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Salário Médio Mensal (€)</span>
              </label>
              <input
                type="range"
                min="1000"
                max="5000"
                step="100"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-500">€1.000</span>
                <span className="text-orange-400 font-bold">€{avgSalary.toLocaleString()}</span>
                <span className="text-slate-500">€5.000</span>
              </div>
            </div>

            {/* Turnover Rate */}
            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Taxa de Turnover Anual (%)</span>
              </label>
              <input
                type="range"
                min="10"
                max="80"
                value={turnoverRate}
                onChange={(e) => setTurnoverRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-500">10%</span>
                <span className="text-orange-400 font-bold">{turnoverRate}%</span>
                <span className="text-slate-500">80%</span>
              </div>
            </div>

            {/* Hiring Cost */}
            <div>
              <label className="flex items-center gap-2 text-slate-300 mb-2">
                <Clock className="w-4 h-4" />
                <span>Custo de Contratação (€)</span>
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={hiringCost}
                onChange={(e) => setHiringCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-sm mt-1">
                <span className="text-slate-500">€500</span>
                <span className="text-orange-400 font-bold">€{hiringCost.toLocaleString()}</span>
                <span className="text-slate-500">€5.000</span>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Calcular ROI
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-orange-500/10 to-green-500/10 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-6">Seu ROI com ChefIApp</h3>

          {showResults ? (
            <div className="space-y-6">
              {/* Main ROI */}
              <div className="bg-slate-900/50 border border-green-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  €{totalAnnualSavings.toLocaleString()}
                </div>
                <div className="text-slate-300 font-medium">Economia Anual Estimada</div>
                <div className="mt-4 text-sm text-slate-400">
                  ROI de <span className="text-green-400 font-bold">{roiMultiplier}x</span> sobre o investimento
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300">Economia em Turnover</span>
                  <span className="text-green-400 font-bold">€{turnoverSavings.toLocaleString()}/ano</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300">Ganho de Produtividade</span>
                  <span className="text-green-400 font-bold">€{productivityGain.toLocaleString()}/ano</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-900/30 rounded-lg">
                  <span className="text-slate-300">Custo ChefIApp</span>
                  <span className="text-orange-400 font-bold">-€{chefiappCost.toLocaleString()}/ano</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-white font-semibold">Benefício Líquido</span>
                  <span className="text-green-400 font-bold text-xl">€{netBenefit.toLocaleString()}/ano</span>
                </div>
              </div>

              {/* Email CTA */}
              {!emailSent ? (
                <div className="mt-6 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-orange-400" />
                    Receber Análise Completa por Email
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                    <button
                      onClick={handleSendReport}
                      className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-6 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
                  <div className="text-green-400 font-semibold mb-2">Análise enviada com sucesso!</div>
                  <div className="text-slate-400 text-sm">Confira seu email em alguns minutos.</div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">
                  Preencha os dados ao lado e clique em "Calcular ROI" para ver seus resultados
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center text-sm text-slate-500"
      >
        * Cálculos baseados em dados médios da indústria de hospitalidade e resultados comprovados do Sofia Gastrobar Ibiza
      </motion.div>
    </div>
  )
}
