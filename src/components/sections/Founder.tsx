import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import { useT } from '../../i18n'

export function Founder() {
  const t = useT()
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {t.founder.title}
        </h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
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
              {t.founder.name}
            </h3>
            <p className="text-orange-500 font-medium mb-2">{t.founder.role}</p>
            <div className="flex items-center gap-2 text-slate-400 mb-4 justify-center md:justify-start">
              <MapPin size={14} />
              <span className="text-sm">{t.founder.location}</span>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t.founder.bio}
            </p>

            {/* Quote */}
            <blockquote className="text-lg italic text-slate-300 mb-6">
              "{t.founder.quote}"
            </blockquote>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={t.founder.social.linkedin}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label={t.founder.social.instagram}
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:elder@goldmonkey.studio"
                className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Email"
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
