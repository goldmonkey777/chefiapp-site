import { motion } from 'framer-motion'
import { Smartphone, Apple, PlayCircle } from 'lucide-react'

export function Download() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
          <Smartphone size={32} className="text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Baixe o app e comece hoje
        </h2>
        
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Disponível para iOS e Android. Também funciona como PWA — instale diretamente do navegador.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Apple size={28} />
            <div className="text-left">
              <p className="text-xs text-slate-500">Baixar na</p>
              <p className="font-semibold">App Store</p>
            </div>
          </motion.a>

          {/* Google Play Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <PlayCircle size={28} />
            <div className="text-left">
              <p className="text-xs text-slate-500">Disponível no</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Em breve nas lojas oficiais. Por agora, acesse via web ou instale como PWA.
        </p>
      </motion.div>
    </div>
  )
}
