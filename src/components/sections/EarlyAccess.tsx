import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useT } from '../../i18n'

interface FormData {
  restaurant_name: string
  business_type: string
  city_country: string
  employee_count: string
  contact: string
  main_pain_point: string
}

const initialFormData: FormData = {
  restaurant_name: '',
  business_type: '',
  city_country: '',
  employee_count: '',
  contact: '',
  main_pain_point: '',
}

export function EarlyAccess() {
  const t = useT()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    
    setIsSubmitting(true)
    setError('')

    try {
      const { error: supabaseError } = await supabase
        .from('marketing_leads_restaurants')
        .insert([formData])

      if (supabaseError) {
        throw supabaseError
      }

      setSubmitted(true)
      setFormData(initialFormData)
    } catch (err) {
      console.error('Error submitting form:', err)
      setError(t.earlyAccess.error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle size={32} className="text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {t.earlyAccess.success.title}
          </h3>
          <p className="text-slate-300 mb-6">
            {t.earlyAccess.success.message}
          </p>
          <p className="text-sm text-slate-500">
            From Ibiza with Love — by goldmonkey.studio
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
          <Sparkles size={16} className="text-orange-400" />
          <span className="text-sm font-medium text-orange-400">{t.earlyAccess.badge}</span>
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.earlyAccess.title}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t.earlyAccess.subtitle}
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {/* Restaurant Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.restaurantName} *
            </label>
            <input
              type="text"
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              placeholder={t.earlyAccess.form.restaurantNamePlaceholder}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            />
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.businessType} *
            </label>
            <select
              name="business_type"
              value={formData.business_type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            >
              <option value="">{t.earlyAccess.form.businessTypePlaceholder}</option>
              {t.earlyAccess.form.businessTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* City/Country */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.cityCountry} *
            </label>
            <input
              type="text"
              name="city_country"
              value={formData.city_country}
              onChange={handleChange}
              placeholder={t.earlyAccess.form.cityCountryPlaceholder}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            />
          </div>

          {/* Employee Count */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.employeeCount} *
            </label>
            <select
              name="employee_count"
              value={formData.employee_count}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            >
              <option value="">{t.earlyAccess.form.employeeCountPlaceholder}</option>
              {t.earlyAccess.form.employeeCounts.map((count) => (
                <option key={count.value} value={count.value}>
                  {count.label}
                </option>
              ))}
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.contact} *
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder={t.earlyAccess.form.contactPlaceholder}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            />
          </div>

          {/* Pain Point */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              {t.earlyAccess.form.painPoint}
            </label>
            <textarea
              name="main_pain_point"
              value={formData.main_pain_point}
              onChange={handleChange}
              placeholder={t.earlyAccess.form.painPointPlaceholder}
              rows={3}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        {/* Submit */}
        <div className="mt-6 flex justify-end">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t.earlyAccess.form.submitting}
              </>
            ) : (
              <>
                <Send size={18} />
                {t.earlyAccess.form.submit}
              </>
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  )
}
