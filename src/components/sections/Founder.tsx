import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export function Founder() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-1">
              <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-4xl md:text-5xl font-bold text-orange-500">
                  EA
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Elder Miranda de Andrade
            </h3>
            <p className="text-orange-500 font-medium mb-4">Fundador & CEO</p>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Com mais de uma década de experiência em tecnologia e paixão pela indústria de hospitality, 
              criei o ChefIApp para resolver os problemas reais que vi em dezenas de restaurantes. 
              Acredito que equipes motivadas e bem geridas são o segredo de qualquer estabelecimento de sucesso.
            </p>

            {/* Signature */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <blockquote className="text-lg italic text-slate-300">
                "From Ibiza with Love"
              </blockquote>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>—</span>
                <span className="font-medium">goldmonkey.studio</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:elder@goldmonkey.studio"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
