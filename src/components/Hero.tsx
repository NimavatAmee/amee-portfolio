import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MobileDeviceMockup } from './MobileDeviceMockup';

export const Hero: React.FC = () => {
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
                I build the <span className="text-[#1f6146] font-semibold">mobile experiences</span> and architectures behind products.
              </h1>
              
              {/* Lede Text */}
              <p className="text-base sm:text-[17px] text-[#3f3c36] leading-relaxed mb-4 font-normal">
                {PERSONAL_INFO.experienceYears} engineering production cross-platform apps with React Native, TypeScript, Expo, and SQLite — from offline sync protocols to app store releases.
              </p>

              {/* Tagline */}
              <p className="font-mono text-xs text-[#1f6146] tracking-wide font-medium">
                TypeScript → Expo → SQLite → 60 FPS Native Screens.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-8">
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

          {/* Hero Side Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Availability Card (Sage / Green Tint) */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#e7eee8] border border-[#d5e0d8] rounded-[22px] p-6 flex flex-col gap-3"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1f6146]">
                <span className="w-2 h-2 rounded-full bg-[#1f6146] animate-pulse" />
                <span>Available for new roles</span>
              </div>

              <div className="text-xs font-mono text-[#5b6a60] flex items-center gap-1.5 flex-wrap">
                <span className="font-semibold text-[#173d2c]">Lately:</span>
                <span>Offline SQLite · WebRTC · Expo EAS · Zustand</span>
              </div>

              <p className="text-xs sm:text-[13px] text-[#3f4a43] leading-relaxed">
                Looking for high-impact mobile roles — full-time or contract. Most comfortable owning a feature from schema and local database through to smooth 60 FPS mobile screens. Usually replies the same day.
              </p>
            </motion.div>

            {/* Stat Tiles: Sand & Clay */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#f2ebdc] border border-[#e5dbc7] rounded-[20px] p-5 flex flex-col justify-between"
              >
                <div className="font-display font-semibold text-3xl sm:text-4xl text-[#4a3a1d] tracking-tight">
                  3.5+
                </div>
                <div className="text-xs text-[#6d6250] mt-1 font-medium leading-snug">
                  years shipping production mobile apps
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-[#ece6e2] border border-[#ddd4ce] rounded-[20px] p-5 flex flex-col justify-between"
              >
                <div className="font-display font-semibold text-3xl sm:text-4xl text-[#43352f] tracking-tight">
                  10+
                </div>
                <div className="text-xs text-[#6a5c55] mt-1 font-medium leading-snug">
                  apps shipped across iOS & Android
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
                React Native & Expo with Hermes bytecode, Reanimated 3 fluid gestures, and native bridges for iOS & Android.
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

        {/* Interactive React Native App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-[#fffdf9] border border-[#e6e1d6] rounded-[24px] p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7eee8] border border-[#d5e0d8] text-xs font-semibold text-[#1f6146]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive React Native Architecture</span>
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#1b1a17] tracking-tight">
                Inspect real app screens and underlying architecture.
              </h2>
              <p className="text-sm text-[#4a4740] leading-relaxed">
                Interact with the mobile preview on the right. Switch tabs between Expense Tracking, Employee Logistics, and Dating to see how offline caches, Zustand state, and responsive native screens run in production.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#6d6a62]">
                <span className="px-2.5 py-1 rounded-lg bg-[#f7f5f0] border border-[#e6e1d6]">Expo SDK 52</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#f7f5f0] border border-[#e6e1d6]">SQLite Caching</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#f7f5f0] border border-[#e6e1d6]">Zustand Store</span>
                <span className="px-2.5 py-1 rounded-lg bg-[#f7f5f0] border border-[#e6e1d6]">WebRTC Audio</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <MobileDeviceMockup initialScreen="expense" interactive={true} variant="hero" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
