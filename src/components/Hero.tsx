import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, RefreshCw, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'expense' | 'webrtc' | 'deskly'>('deskly');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="pt-8 pb-16 md:pt-12 md:pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Main Hero Card (Editorial Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#fffdf9] border border-[#e6e1d6] rounded-[22px] p-6 sm:p-9 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Eyebrow */}
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d6a62] font-medium mb-4">
                Senior React Native Developer · {PERSONAL_INFO.location}
              </p>

              {/* Display Headline */}
              <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-[44px] leading-[1.1] tracking-[-0.03em] text-[#1b1a17] mb-5">
                I turn complex ideas into <span className="text-[#1f6146] font-semibold">seamless mobile experiences</span>.
              </h1>
              
              {/* Lede Text */}
              <p className="text-base sm:text-[17px] text-[#3f3c36] leading-relaxed mb-4 font-normal">
                Building high-performance iOS and Android apps with React Native, TypeScript, Expo, and SQLite — from offline-first architecture to production releases.
              </p>

              {/* Yash Kava-style Monospace Pipeline Tagline */}
              <div className="pt-2">
                <p className="font-mono text-xs sm:text-[13px] text-[#1f6146] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1f6146]" />
                  <span>Architecture → Offline SQLite → 60 FPS Reanimated → Store Release</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#f7f5f0] bg-[#1b1a17] hover:bg-[#2f2c26] transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Contact me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#3f3c36] bg-transparent border border-[#e6e1d6] hover:border-[#1f6146] hover:text-[#1f6146] hover:bg-[#1f6146]/5 transition-all duration-200 active:scale-95"
              >
                <span>See work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#6d6a62] hover:text-[#1f6146] transition-colors ml-auto"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Hero Side Column: Interactive Mobile Showcase + Balanced Stat Tiles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Interactive Mobile Engineering Showcase Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#fffdf9] border border-[#e6e1d6] rounded-[22px] p-5 sm:p-6 shadow-sm flex flex-col justify-between"
            >
              {/* Header & Tabs */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#e6e1d6]/70">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1f6146] animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1f6146] font-semibold">
                    Mobile Showcase
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#f7f5f0] p-1 rounded-full border border-[#e6e1d6]/80 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveDemo('expense')}
                    className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                      activeDemo === 'expense'
                        ? 'bg-[#1b1a17] text-[#f7f5f0] shadow-sm'
                        : 'text-[#6d6a62] hover:text-[#1b1a17]'
                    }`}
                  >
                    Expense
                  </button>
                  <button
                    onClick={() => setActiveDemo('webrtc')}
                    className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                      activeDemo === 'webrtc'
                        ? 'bg-[#1b1a17] text-[#f7f5f0] shadow-sm'
                        : 'text-[#6d6a62] hover:text-[#1b1a17]'
                    }`}
                  >
                    WebRTC
                  </button>
                  <button
                    onClick={() => setActiveDemo('deskly')}
                    className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                      activeDemo === 'deskly'
                        ? 'bg-[#1b1a17] text-[#f7f5f0] shadow-sm'
                        : 'text-[#6d6a62] hover:text-[#1b1a17]'
                    }`}
                  >
                    Deskly
                  </button>
                </div>
              </div>

              {/* Simulated Screen Body */}
              <div className="my-3.5 p-4 rounded-xl bg-[#f7f5f0] border border-[#e6e1d6] min-h-[148px] flex flex-col justify-between">
                {activeDemo === 'expense' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6d6a62] font-medium">Fintech Expense Engine</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e7eee8] text-[10px] font-mono text-[#1f6146] font-semibold">
                        ⚡ SQLite Local
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-2xl font-display font-semibold text-[#1b1a17]">$8,450.00</div>
                        <div className="text-[11px] text-[#1f6146] font-medium">+14.2% saved this month</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#fffdf9] border border-[#e6e1d6] text-xs font-mono text-[#3f3c36] text-right">
                        <div className="text-[10px] text-[#6d6a62]">Sync Latency</div>
                        <div className="font-semibold text-[#1f6146]">11ms (Zustand)</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#e6e1d6]/60 text-xs">
                      <span className="text-[#3f3c36] font-medium">🎙️ Conversational Voice Logging</span>
                      <span className="text-[10px] font-mono text-[#6d6a62]">Zero Latency</span>
                    </div>
                  </div>
                )}

                {activeDemo === 'webrtc' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6d6a62] font-medium">Dating Real-Time Media</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e7eee8] text-[10px] font-mono text-[#1f6146] font-semibold">
                        🟢 Peer Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <div className="text-sm font-semibold text-[#1b1a17]">WebRTC Audio/Video Call</div>
                        <div className="text-[11px] text-[#6d6a62]">48kHz Opus · 0% packet loss</div>
                      </div>
                      {/* Animated Sound Wave Equalizer */}
                      <div className="flex items-end gap-1 h-6">
                        <span className="w-1 bg-[#1f6146] rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3" />
                        <span className="w-1 bg-[#1f6146] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-5" />
                        <span className="w-1 bg-[#1f6146] rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-4" />
                        <span className="w-1 bg-[#1f6146] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-6" />
                        <span className="w-1 bg-[#1f6146] rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-3.5" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#e6e1d6]/60 text-xs">
                      <span className="text-[#3f3c36] font-medium">🐍 Python Backend Collaboration</span>
                      <span className="text-[10px] font-mono text-[#6d6a62]">FastAPI Signaling</span>
                    </div>
                  </div>
                )}

                {activeDemo === 'deskly' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#6d6a62] font-medium">Deskly Shipping Logistics</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e7eee8] text-[10px] font-mono text-[#1f6146] font-semibold border border-[#d5e0d8]">
                        <RefreshCw className="w-2.5 h-2.5 animate-spin text-[#1f6146]" />
                        <span>SQLite Syncing...</span>
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-baseline justify-between text-xs">
                        <div>
                          <div className="text-sm font-semibold text-[#1b1a17]">
                            Local SQLite → Cloud Server
                          </div>
                          <div className="text-[11px] text-[#6d6a62]">
                            Syncing 18 employee shift & attendance logs
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono font-semibold text-[#1f6146]">84% Done</span>
                          <div className="text-[10px] font-mono text-[#6d6a62]">15/18 queued</div>
                        </div>
                      </div>

                      {/* Animated Sync Progress Bar */}
                      <div className="w-full bg-[#e6e1d6] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#1f6146] h-full rounded-full transition-all duration-500 animate-pulse w-[84%]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#e6e1d6]/60 text-xs">
                      <span className="text-[#3f3c36] font-medium flex items-center gap-1.5">
                        <Database className="w-3 h-3 text-[#1f6146]" />
                        <span>Maritime Offline Queue (Dock/Sea)</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#1f6146] font-medium">Conflict-Free Merge</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Runtime Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6d6a62] pt-1">
                <span>React Native · Expo EAS</span>
                <span className="text-[#1f6146] font-medium">⚡ Hermes 60 FPS</span>
              </div>
            </motion.div>

            {/* Compact Side-by-Side Stat Tiles (No more awkward empty space) */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-[#f2ebdc] border border-[#e5dbc7] rounded-[20px] p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:border-[#d9cca8] transition-colors"
              >
                <div className="font-display font-semibold text-3xl sm:text-4xl text-[#4a3a1d] tracking-tight">
                  3.5+
                </div>
                <div className="text-xs text-[#6d6250] mt-2 font-medium leading-snug">
                  Years shipping production apps across iOS & Android
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#ece6e2] border border-[#ddd4ce] rounded-[20px] p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:border-[#cdc0b8] transition-colors"
              >
                <div className="font-display font-semibold text-3xl sm:text-4xl text-[#43352f] tracking-tight">
                  6
                </div>
                <div className="text-xs text-[#6a5c55] mt-2 font-medium leading-snug">
                  Industries: fintech, enterprise, AI, social, transport
                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* 3-Column Focus Bar Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 bg-[#fffdf9] border border-[#e6e1d6] rounded-[22px] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-1.5">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f6146]">
                Offline-First
              </h3>
              <p className="text-sm text-[#4a4740] leading-relaxed">
                SQLite local caching, Zustand state stores, and queued background synchronization for unreliable networks.
              </p>
            </div>

            <div className="space-y-1.5 md:border-l md:border-[#e6e1d6] md:pl-8">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f6146]">
                Cross-Platform
              </h3>
              <p className="text-sm text-[#4a4740] leading-relaxed">
                React Native & Expo with Hermes bytecode, Reanimated 3 fluid gestures.
              </p>
            </div>

            <div className="space-y-1.5 md:border-l md:border-[#e6e1d6] md:pl-8">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1f6146]">
                Real-Time & Media
              </h3>
              <p className="text-sm text-[#4a4740] leading-relaxed">
                WebRTC peer-to-peer voice and video protocols, camera capture pipelines, and push notifications with FCM.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
