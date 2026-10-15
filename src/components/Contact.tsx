import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Senior React Native Role',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or project details.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.projectType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Amee,\n\nMy name is ${formData.name} (${formData.email}).\nSubject: ${formData.projectType}\n\nMessage:\n${formData.message}\n\nLooking forward to connecting!`
    );
    
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#131210] border-t border-[#2e2b26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-left">
          <p className="text-xs uppercase tracking-widest text-[#a39d92] font-medium">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#f0ece4] tracking-tight">
            Hiring for React Native? Let's talk.
          </h2>
          <p className="text-base text-[#a39d92] max-w-xl">
            I’m always happy to connect with people building useful mobile products and solving interesting engineering challenges.
          </p>

          {/* Large Serif Email link like Jaydeep reference */}
          <div className="pt-2">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f08a5d] hover:underline underline-offset-4 decoration-1 transition-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1c1a17] border border-[#2e2b26] space-y-5">
              
              {/* Personal Avatar Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#2e2b26]">
                <div className="relative w-12 h-12 rounded-full p-[1.5px] bg-[#f08a5d] shadow-sm shrink-0">
                  <img 
                    src="/images/amee-avatar.jpg" 
                    alt="Amee Nimavat" 
                    className="w-full h-full object-cover rounded-full filter grayscale contrast-[1.02]" 
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#f08a5d] ring-2 ring-[#131210]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#f0ece4] tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-[#f08a5d] font-medium">
                    {PERSONAL_INFO.role}
                  </p>
                </div>
              </div>

              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-[#131210] border border-[#2e2b26] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a39d92] font-medium">Direct Email</span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="text-[11px] text-[#f08a5d] hover:text-[#fa9d73] transition-colors flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1c1a17] border border-[#2e2b26]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#f08a5d]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-[#f0ece4] hover:text-[#f08a5d] transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-[#f08a5d] shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>

              {/* Phone item with copy button */}
              <div className="p-4 rounded-xl bg-[#131210] border border-[#2e2b26] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a39d92] font-medium">Phone & WhatsApp</span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="text-[11px] text-[#f08a5d] hover:text-[#fa9d73] transition-colors flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1c1a17] border border-[#2e2b26]"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-[#f08a5d]" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-medium text-[#f0ece4] hover:text-[#f08a5d] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#f08a5d] shrink-0" />
                  <span>{PERSONAL_INFO.phoneFormatted}</span>
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#131210] border border-[#2e2b26] space-y-1">
                <span className="text-xs text-[#a39d92] font-medium">Location</span>
                <div className="text-sm font-medium text-[#f0ece4] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f08a5d] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <p className="text-[11px] text-[#a39d92] pl-6">Open to remote opportunities</p>
              </div>

              {/* LinkedIn Profile */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-xl bg-[#131210] border border-[#2e2b26] hover:border-[#f08a5d]/60 text-[#f0ece4] hover:text-[#f08a5d] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1c1a17] text-[#f08a5d]">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#f0ece4]">Connect on LinkedIn</div>
                    <div className="text-[11px] text-[#a39d92]">linkedin.com/in/ameenimavat</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#a39d92] group-hover:text-[#f08a5d] transition-colors" />
              </a>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
              <h3 className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight mb-2">
                Send a message
              </h3>
              <p className="text-xs text-[#a39d92] mb-6">
                Fill in your project requirements or message, or reach out directly at <span className="text-[#f08a5d]">{PERSONAL_INFO.email}</span>.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#131210] border border-[#f08a5d]/40 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#f08a5d]/10 text-[#f08a5d] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-[#f0ece4]">Message Prepared</h4>
                  <p className="text-xs text-[#a39d92] max-w-sm mx-auto">
                    Your email client has been opened with the inquiry details. You can also send directly to{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#f08a5d] underline font-mono">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Senior React Native Role', message: '' });
                    }}
                    className="text-xs text-[#a39d92] hover:text-[#f0ece4] underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#f0ece4]">
                      Your Name <span className="text-[#f08a5d]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-2.5 bg-[#131210] rounded-lg border text-xs text-[#f0ece4] placeholder-[#a39d92] focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-[#2e2b26] focus:border-[#f08a5d]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#f0ece4]">
                      Email Address <span className="text-[#f08a5d]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 bg-[#131210] rounded-lg border text-xs text-[#f0ece4] placeholder-[#a39d92] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#2e2b26] focus:border-[#f08a5d]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                  </div>

                  {/* Subject Selector */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#f0ece4]">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#131210] rounded-lg border border-[#2e2b26] text-xs text-[#f0ece4] focus:outline-none focus:border-[#f08a5d] transition-colors"
                    >
                      <option value="Senior React Native Role">Full-Time / Senior Mobile Developer Opportunity</option>
                      <option value="New Mobile App">New Mobile App Development (iOS & Android)</option>
                      <option value="Offline Architecture / SQLite">Offline-First Mobile Architecture / SQLite</option>
                      <option value="WebRTC / Real-Time Feature">Real-Time WebRTC / Chat Integration</option>
                      <option value="General Conversation">Consultation / General Inquiries</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#f0ece4]">
                      Project Details or Message <span className="text-[#f08a5d]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you're building or the role requirements..."
                      className={`w-full px-4 py-2.5 bg-[#131210] rounded-lg border text-xs text-[#f0ece4] placeholder-[#a39d92] focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-[#2e2b26] focus:border-[#f08a5d]'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-full text-xs font-medium text-[#131210] bg-[#f08a5d] hover:bg-[#fa9d73] transition-all flex items-center justify-center gap-2 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a5d]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
