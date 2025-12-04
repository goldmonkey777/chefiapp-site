import { forwardRef } from 'react'
import type { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
            text-white
            focus:outline-none focus:ring-2 focus:ring-chef-orange/50 focus:border-chef-orange/50
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500/50' : ''}
            ${className}
          `}
          {...props}
        >
          <option value="" className="bg-chef-dark">Selecione...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-chef-dark">
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

