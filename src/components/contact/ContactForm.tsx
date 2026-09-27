import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../../services/contactService';
import { ContactFormData } from '../../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setFeedbackMessage('');

    try {
      const res = await submitContactForm(formData);
      setStatus('success');
      setFeedbackMessage(res.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setFeedbackMessage(
        err instanceof Error ? err.message : 'An unexpected error occurred while transmitting your message.'
      );
    }
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-[#181716] border border-stone-200/90 dark:border-stone-800 p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-2">Send a Direct Inquiry</h3>
      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mb-6">
        Whether you are discussing entry-level engineering roles, internships, or technical collaborations, feel free to drop a message.
      </p>

      {status === 'success' ? (
        <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
          <CheckCircle2 className="w-8 h-8 text-emerald-700 dark:text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-300">Message Dispatched!</h4>
          <p className="text-xs text-stone-700 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
            {feedbackMessage}
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 px-5 py-2 text-xs font-bold rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-950 hover:bg-stone-800 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                Your Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. sarah@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Software Developer Opportunity / Interview"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Shreyas, I came across your portfolio and would like to connect regarding..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-stone-900 dark:bg-white hover:bg-stone-800 dark:hover:bg-stone-100 disabled:bg-stone-400 text-white dark:text-stone-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-400 dark:text-amber-600" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-400 dark:text-amber-600" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
