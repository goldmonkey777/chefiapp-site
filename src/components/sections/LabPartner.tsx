import { motion } from 'framer-motion'
import { ExternalLink, MapPin, Users, Calendar, Award } from 'lucide-react'

export function LabPartner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
          <Award size={16} className="text-orange-400" />
          <span className="text-sm font-medium text-orange-400">Laboratório de Testes</span>
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Nascido em Ibiza, testado no Sofia Gastrobar
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          O primeiro restaurante a usar o ChefIApp no dia a dia.
          Todo o desenvolvimento foi testado e validado aqui.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Logo & Info */}
          <div className="text-center md:text-left">
            {/* Sofia Gastrobar Logo */}
            <img 
              src="/partners/sofia-gastrobar-logo.svg" 
              alt="Sofia Gastrobar Ibiza" 
              className="w-32 h-32 mb-6 rounded-2xl shadow-xl shadow-orange-500/25 mx-auto md:mx-0"
            />

            <h3 className="text-3xl font-bold text-white mb-2">
              Sofia Gastrobar
            </h3>

            <div className="flex items-center gap-2 text-slate-300 mb-6 justify-center md:justify-start">
              <MapPin size={18} className="text-orange-400" />
              <span>Ibiza, Espanha</span>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Restaurante gastropub em Ibiza que serve como <strong className="text-orange-400">laboratório oficial</strong> do ChefIApp.
              Todas as funcionalidades são testadas em operação real antes do lançamento.
            </p>

            <a
              href="https://sofigastrobar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <ExternalLink size={18} />
              sofigastrobar.com
            </a>
          </div>

          {/* Right: Stats & Benefits */}
          <div className="space-y-4">
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Users className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Equipa Real</h4>
                  <p className="text-sm text-slate-400">
                    15 funcionários usando ChefIApp diariamente em operação completa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Calendar className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Teste Contínuo</h4>
                  <p className="text-sm text-slate-400">
                    Desde 2024, testando tarefas, check-in GPS, gamificação e dashboards
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Award className="text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Parceiro Fundador</h4>
                  <p className="text-sm text-slate-400">
                    Primeiro restaurante do ChefIApp. Feedback direto para evolução do produto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-8 pt-8 border-t border-slate-700"
        >
          <blockquote className="text-center italic text-slate-300">
            "O ChefIApp mudou a forma como gerimos a equipe. Gamificação, check-in GPS e tarefas
            organizadas tornaram tudo mais simples e motivador."
          </blockquote>
          <p className="text-center mt-4 text-sm">
            <span className="font-semibold text-white">Elder Miranda de Andrade</span>
            <br />
            <span className="text-slate-500">Owner, Sofia Gastrobar Ibiza</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Additional info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-slate-500 text-sm">
          🏝️ <strong>From Ibiza with Love</strong> — Desenvolvido e testado na ilha branca
        </p>
      </motion.div>
    </div>
  )
}
