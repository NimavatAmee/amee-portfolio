import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    const subject = encodeURIComponent(`[Portfolio Inquiry] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Amee,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}\n\nLooking forward to speaking!`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Inverted Dark Contact Card matching Yash Kava's .contact */}
        <div className="bg-[#1b1a17] text-[#f7f5f0] rounded-[26px] p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Headline, Bio & Primary Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272521] border border-[#3a3833] text-xs font-mono text-[#a39d92]">
                <span className="w-2 h-2 rounded-full bg-[#1f6146] animate-pulse" />
                <span>Available for Full-Time & Contract Roles</span>
              </div>

              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[42px] leading-[1.1] tracking-[-0.03em] text-[#f7f5f0] max-w-lg">
                Let’s build something remarkable together.
              </h2>

              <p className="text-base text-[#b8b3a8] leading-relaxed max-w-xl">
                Open to full-time and contract mobile roles. Happy to talk about React Native architecture, offline-first SQLite synchronization, or the product you have in mind.
              </p>

              {/* Action Buttons: White Mail Button + Bordered Copy */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#1b1a17] bg-[#f7f5f0] hover:bg-white hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  <Mail className="w-4 h-4 text-[#1b1a17]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-medium text-[#d7d2c7] border border-[#3a3833] hover:border-[#5f8f77] hover:text-white hover:bg-[#1f6146]/25 transition-all duration-200"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#5f8f77]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied to clipboard' : 'Copy email'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Direct Quick Message Form */}
            <div className="lg:col-span-5 bg-[#24221e] border border-[#34322d] rounded-[22px] p-6 space-y-4">
              <h3 className="font-display font-medium text-lg text-[#f7f5f0]">
                Send a quick message
              </h3>
              
              <form onSubmit={handleSendMessage} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#a39d92] uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1b1a17] border border-[#3a3833] text-sm text-[#f7f5f0] placeholder-[#6d6a62] focus:outline-none focus:border-[#5f8f77] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#a39d92] uppercase mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1b1a17] border border-[#3a3833] text-sm text-[#f7f5f0] placeholder-[#6d6a62] focus:outline-none focus:border-[#5f8f77] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#a39d92] uppercase mb-1">Project or Role Details</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the app or role..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1b1a17] border border-[#3a3833] text-sm text-[#f7f5f0] placeholder-[#6d6a62] focus:outline-none focus:border-[#5f8f77] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1f6146] hover:bg-[#2e7d5a] text-[#f7f5f0] font-semibold text-xs flex items-center justify-center gap-2 transition-colors active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>

          {/* Bottom Meta Row matching Yash Kava */}
          <div className="mt-12 pt-6 border-t border-[#34322d] flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#b8b3a8]">
            <a 
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-[#fff] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#a39d92]" />
              <span>{PERSONAL_INFO.phoneFormatted}</span>
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#a39d92]" />
              <span>{PERSONAL_INFO.location}</span>
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#fff] transition-colors ml-auto"
            >
              <LinkedInIcon className="w-4 h-4 text-[#a39d92]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
