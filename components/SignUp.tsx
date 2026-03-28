'use client'

import { useState } from 'react'
import { Shield, CheckCircle, Upload } from 'lucide-react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Create Your Account</h2>
          <p className="text-xl text-gray-600">Join thousands of Diasporans managing their finances securely</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition outline-none"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country of Residence</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition outline-none"
                  required
                >
                  <option value="">Select country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {[
                { label: 'Password', name: 'password', placeholder: 'Create a strong password' },
                { label: 'Confirm Password', name: 'confirmPassword', placeholder: 'Re-enter password' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>
                  <input
                    type="password"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition outline-none"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}
            </div>

            {/* KYC Section */}
            <div className="border-t pt-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                KYC Verification
              </h3>
              <p className="text-sm text-gray-600 mb-6">Please upload the following documents for identity verification</p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Upload ID', desc: 'International Passport / National ID' },
                  { label: 'Upload Selfie', desc: 'Selfie Verification' },
                  { label: 'Proof of Address', desc: 'Utility Bill or Bank Statement' },
                ].map((doc) => (
                  <div key={doc.label}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{doc.label}</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-xs text-gray-600">{doc.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start pt-6">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 mr-3 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <label className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline font-semibold">Terms and Conditions</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline font-semibold">Privacy Policy</a>
              </label>
            </div>

            {/* Security badges */}
            <div className="flex items-center justify-center space-x-4 pt-4 flex-wrap gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Bank-level security</span>
              <span className="text-gray-300">•</span>
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">KYC Verified</span>
              <span className="text-gray-300">•</span>
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Encrypted</span>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-xl transition transform hover:scale-105 font-bold text-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
