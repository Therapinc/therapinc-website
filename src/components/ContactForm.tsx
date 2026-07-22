'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl sm:p-12">
          {/* Subtle gradient background decoration */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get in Touch with <span className="gradient-text">Therapinc</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Ready to elevate your therapy practice? Request a demonstration or ask us any
              questions.
            </p>
          </div>

          {status === 'success' ? (
            <div className="space-y-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-300">
                Thank you for reaching out. A member of our team will be in touch shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-gray-300 uppercase"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-gray-300 uppercase"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@clinic.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold text-gray-300 uppercase"
                >
                  Organization / Practice Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Mindful Therapy Health Network"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-gray-300 uppercase"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your practice and goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Submit Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
