import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'O ChefIApp funciona offline?',
    answer:
      'Sim! A app mobile funciona offline com sincronização automática quando volta a conexão. Perfeito para locais com WiFi instável.',
  },
  {
    question: 'Quantos funcionários posso adicionar?',
    answer:
      'Depende do plano. O plano Starter suporta até 20 usuários, Pro até 100, e Enterprise é ilimitado.',
  },
  {
    question: 'Como funciona o check-in GPS?',
    answer:
      'O funcionário abre a app e faz check-in. O GPS valida se está no local de trabalho (configurável). Tudo automático e seguro.',
  },
  {
    question: 'Posso personalizar as tarefas e checklists?',
    answer:
      'Totalmente! Você cria tarefas, checklists, workflows e categorias personalizadas para o seu negócio.',
  },
  {
    question: 'A gamificação realmente funciona?',
    answer:
      'Sim! XP, níveis, badges e rankings criam competição saudável e aumentam motivação. Clientes reportam +40% de engajamento.',
  },
  {
    question: 'Quanto tempo leva para configurar?',
    answer:
      'Setup básico em 5 minutos. Adicione funcionários, crie tarefas e pronto. Onboarding guiado incluído.',
  },
  {
    question: 'Tem suporte em português?',
    answer:
      'Sim! Interface e suporte em PT, ES e EN. Time de suporte responde em português.',
  },
  {
    question: 'Posso testar antes de pagar?',
    answer:
      'Sim! O Early Access é gratuito durante o Beta. Depois, oferecemos trial de 14 dias sem cartão.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Tudo o que você precisa saber sobre o ChefIApp
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-lg font-semibold text-white pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA after FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-3">
          Ainda tem dúvidas?
        </h3>
        <p className="text-slate-300 mb-6">
          Fale connosco e vamos ajudar a perceber se o ChefIApp é ideal para o seu negócio.
        </p>
        <a
          href="#early-access"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all"
        >
          Falar com a equipa
        </a>
      </motion.div>
    </div>
  )
}
