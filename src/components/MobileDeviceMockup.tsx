import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Mic, 
  Layers, 
  Radio, 
  Database, 
  Sparkles, 
  Smartphone,
  Flame,
  PhoneCall,
  Volume2,
  Code2,
  CheckCircle2,
  Ship,
  TrendingUp,
  MapPin,
  QrCode,
  ShieldCheck,
  Users
} from 'lucide-react';

interface MobileDeviceMockupProps {
  initialScreen?: 'expense' | 'employee' | 'dating' | 'social' | 'transport';
  interactive?: boolean;
  variant?: 'hero' | 'modal' | 'compact';
}

export const MobileDeviceMockup: React.FC<MobileDeviceMockupProps> = ({ 
  initialScreen = 'expense',
  interactive = true,
  variant = 'hero'
}) => {
  const [activeScreen, setActiveScreen] = useState<'expense' | 'employee' | 'dating' | 'social' | 'transport'>(initialScreen);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const isModal = variant === 'modal';

  return (
    <div className={`relative mx-auto w-full transition-all duration-300 ${isModal ? 'max-w-[310px]' : 'max-w-[340px] sm:max-w-[360px]'}`}>
      
      {/* Decorative ambient background blur in warm apricot */}
      <div className="absolute -inset-3 bg-[#f08a5d]/15 rounded-[48px] blur-2xl -z-10 pointer-events-none" />

      {/* Titanium Device Frame in warm charcoal */}
      <div className="relative rounded-[42px] p-[2.5px] bg-gradient-to-b from-[#3d3a34] via-[#2e2b26] to-[#1c1a17] shadow-2xl shadow-black/80 ring-1 ring-white/10">
        
        {/* Antenna / Button Accents */}
        <div className="absolute -left-[3px] top-20 w-[3px] h-7 bg-[#3d3a34] rounded-l" />
        <div className="absolute -left-[3px] top-30 w-[3px] h-10 bg-[#3d3a34] rounded-l" />
        <div className="absolute -left-[3px] top-44 w-[3px] h-10 bg-[#3d3a34] rounded-l" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#3d3a34] rounded-r" />

        {/* Inner Screen Bezel */}
        <div className={`relative overflow-hidden rounded-[39px] bg-[#131210] text-[#f0ece4] flex flex-col ${isModal ? 'h-[500px]' : 'h-[550px]'} shadow-inner select-none`}>
          
          {/* Glass reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-30" />

          {/* Dynamic Island Header */}
          <div className="h-8 w-full flex items-center justify-between px-5 pt-2 z-20 bg-[#131210]/95 backdrop-blur-md border-b border-[#2e2b26]/60">
            <span className="text-[11px] font-medium tracking-tight text-[#a39d92]">9:41</span>
            
            {/* Dynamic Island Pill */}
            <div className="w-22 h-4 bg-black rounded-full flex items-center justify-center space-x-1 px-2 border border-[#2e2b26] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d3a34]" />
              <span className="w-2 h-2 rounded-full bg-black border border-[#3d3a34] flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#f08a5d] animate-ping" />
              </span>
            </div>

            <div className="flex items-center space-x-1.5 text-[#a39d92]">
              <Wifi className="w-3 h-3 text-[#f08a5d]" />
              <Battery className="w-3.5 h-3.5 text-[#a39d92]" />
            </div>
          </div>

          {/* Subheader: Conceptual UI badge & Code toggle */}
          <div className="bg-[#1c1a17] border-b border-[#2e2b26] px-3.5 py-1.5 flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1.5 font-medium text-[#f08a5d]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f08a5d] animate-pulse" />
              <span>React Native App</span>
            </span>
            <button 
              onClick={() => setShowCode(!showCode)} 
              className="px-2 py-0.5 rounded-full bg-[#131210] border border-[#2e2b26] hover:border-[#f08a5d] text-[#a39d92] hover:text-[#f0ece4] transition-colors flex items-center gap-1 font-mono text-[9px]"
              title="Toggle React Native Architecture Code"
            >
              <Code2 className="w-2.5 h-2.5 text-[#f08a5d]" />
              <span>{showCode ? 'View UI' : 'View Code'}</span>
            </button>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 font-sans text-xs">
            {showCode ? (
              /* Code Inspector Mode */
              <div className="space-y-2 animate-fadeIn font-mono text-[10px] text-[#f0ece4]">
                <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26]">
                  <div className="text-[#f08a5d] font-semibold mb-1">// React Native Architecture</div>
                  <div className="text-[#a39d92]">
                    <span className="text-[#f08a5d]">import</span> &#123; create &#125; <span className="text-[#f08a5d]">from</span> <span className="text-[#f0ece4]">'zustand'</span>;
                  </div>
                  <div className="text-[#a39d92]">
                    <span className="text-[#f08a5d]">import</span> * <span className="text-[#f08a5d]">as</span> SQLite <span className="text-[#f08a5d]">from</span> <span className="text-[#f0ece4]">'expo-sqlite'</span>;
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] space-y-1">
                  <div className="text-[#f08a5d] font-semibold">// Offline Sync Worker</div>
                  <div className="text-[#a39d92]">const useSyncStore = create((set, get) =&gt; (&#123;</div>
                  <div className="pl-2 text-[#f0ece4]">isOnline: <span className="text-[#f08a5d]">true</span>,</div>
                  <div className="pl-2 text-[#f0ece4]">pendingMutations: 0,</div>
                  <div className="pl-2 text-[#a39d92]">syncNow: async () =&gt; &#123;</div>
                  <div className="pl-4 text-[#a39d92]">await flushQueue(get().queue);</div>
                  <div className="pl-2 text-[#a39d92]">&#125;,</div>
                  <div className="text-[#a39d92]">&#125;));</div>
                </div>

                <div className="p-2 rounded-xl bg-[#1c1a17] border border-[#2e2b26] text-[10px] text-[#f08a5d]">
                  Hermes Bytecode Engine · Native SQLite Driver · 60 FPS Lists
                </div>
              </div>
            ) : (
              /* High-Fidelity UI Screens */
              <>
                {/* 1. EXPENSE TRACKING APP */}
                {activeScreen === 'expense' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    
                    {/* Balance Card */}
                    <div className="p-3.5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-medium text-[#a39d92]">Total Balance</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] font-medium border border-[#2e2b26] flex items-center gap-1">
                          <TrendingUp className="w-2.5 h-2.5" /> +14.2%
                        </span>
                      </div>
                      <div className="font-serif text-2xl font-normal text-[#f0ece4] tracking-tight">
                        $4,280.50
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-[#a39d92] mt-2 pt-2 border-t border-[#2e2b26]">
                        <span className="flex items-center gap-1 text-[#a39d92]">
                          <Database className="w-2.5 h-2.5 text-[#f08a5d]" /> Zustand Cache
                        </span>
                        <span className="text-[#f08a5d]">● Offline Ready</span>
                      </div>
                    </div>

                    {/* AI Voice Input Card */}
                    <div className={`p-3 rounded-2xl border transition-all ${isVoiceActive ? 'bg-[#24221e] border-[#f08a5d]' : 'bg-[#1c1a17] border-[#2e2b26]'}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-medium text-[#f0ece4] flex items-center gap-1.5 text-[11px]">
                          <Sparkles className="w-3 h-3 text-[#f08a5d]" />
                          <span>AI Voice Entry</span>
                        </span>
                        <button 
                          onClick={() => setIsVoiceActive(!isVoiceActive)}
                          className={`p-1.5 rounded-full transition-all ${isVoiceActive ? 'bg-[#f08a5d] text-[#131210] animate-pulse' : 'bg-[#131210] text-[#a39d92] hover:text-[#f0ece4]'}`}
                        >
                          <Mic className="w-3 h-3" />
                        </button>
                      </div>

                      {isVoiceActive ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 h-3.5">
                            <span className="w-1 bg-[#f08a5d] rounded-full h-2 animate-bounce" />
                            <span className="w-1 bg-[#f08a5d] rounded-full h-3.5 animate-bounce delay-75" />
                            <span className="w-1 bg-[#f08a5d] rounded-full h-2.5 animate-bounce delay-150" />
                            <span className="w-1 bg-[#f08a5d] rounded-full h-2 animate-bounce" />
                            <span className="text-[10px] text-[#f08a5d] ml-1 font-medium">"Coffee at Blue Bottle $6.50"</span>
                          </div>
                          <p className="text-[9px] text-[#a39d92]">Categorized: [Dining] · Saved to SQLite</p>
                        </div>
                      ) : (
                        <p className="text-[10px] text-[#a39d92]">Tap mic to log expense by voice or scan receipt.</p>
                      )}
                    </div>

                    {/* Android 1-Tap Widget Preview */}
                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between text-[10px] font-medium text-[#f0ece4] mb-1.5">
                        <span>Android Home Widget</span>
                        <span className="text-[9px] text-[#f08a5d]">1-Tap Fast Add</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        <div className="p-1.5 rounded-lg bg-[#131210] border border-[#2e2b26] text-[10px] text-[#f0ece4]">
                          <div>☕ Coffee</div>
                          <div className="text-[9px] text-[#a39d92]">+$6.50</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-[#131210] border border-[#2e2b26] text-[10px] text-[#f0ece4]">
                          <div>⛽ Fuel</div>
                          <div className="text-[9px] text-[#a39d92]">+$35.00</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-[#131210] border border-[#2e2b26] text-[10px] text-[#f0ece4]">
                          <div>🛒 Mart</div>
                          <div className="text-[9px] text-[#a39d92]">+$62.40</div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-medium text-[#a39d92]">Recent Activity</div>
                      <div className="p-2 rounded-xl bg-[#1c1a17] border border-[#2e2b26] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-[#131210] text-[#f08a5d] flex items-center justify-center text-[10px] font-bold border border-[#2e2b26]">✈</div>
                          <div>
                            <div className="text-[#f0ece4] font-medium text-[11px]">Flight Tickets</div>
                            <div className="text-[9px] text-[#a39d92]">Offline Synced</div>
                          </div>
                        </div>
                        <span className="text-[#f0ece4] font-medium text-[11px]">-$320.00</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* 2. SHIPPING EMPLOYEE MANAGEMENT APP */}
                {activeScreen === 'employee' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    
                    {/* Vessel Operational Header */}
                    <div className="p-3.5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-[#a39d92] uppercase flex items-center gap-1">
                          <Ship className="w-3 h-3 text-[#f08a5d]" /> Vessel Alpha
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] font-medium border border-[#2e2b26]">
                          En Route
                        </span>
                      </div>
                      <div className="font-serif text-xl font-normal text-[#f0ece4]">
                        Shipping Workforce Ops
                      </div>
                      <div className="flex items-center gap-2 text-[9px] text-[#a39d92] mt-2 pt-2 border-t border-[#2e2b26]">
                        <span className="flex items-center gap-1 text-[#f08a5d]">
                          <Database className="w-2.5 h-2.5" /> SQLite Offline Layer
                        </span>
                      </div>
                    </div>

                    {/* Automatic Background Sync Status */}
                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#f08a5d] animate-pulse" />
                        <div>
                          <div className="text-[10px] font-medium text-[#f0ece4]">Auto Background Sync</div>
                          <div className="text-[9px] text-[#a39d92]">Queue active · All mutations synced</div>
                        </div>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] border border-[#2e2b26] font-mono">
                        Synced
                      </span>
                    </div>

                    {/* Project Intelligence Radar */}
                    <div className="p-3 rounded-2xl bg-[#1c1a17] border border-[#2e2b26] space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="font-medium text-[#f0ece4]">Project Readiness</span>
                        <span className="font-serif text-base text-[#f08a5d]">94.8%</span>
                      </div>
                      <div className="w-full bg-[#131210] rounded-full h-1.5 overflow-hidden border border-[#2e2b26]">
                        <div className="bg-[#f08a5d] h-full rounded-full w-[95%]" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 text-[9px]">
                        <div className="p-1.5 rounded-lg bg-[#131210] border border-[#2e2b26]">
                          <div className="text-[#a39d92]">Bottlenecks Flagged</div>
                          <div className="text-[#f08a5d] font-semibold text-[10px]">0 Blockers</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-[#131210] border border-[#2e2b26]">
                          <div className="text-[#a39d92]">Rework Rate</div>
                          <div className="text-[#f0ece4] font-semibold text-[10px]">1.2% Low</div>
                        </div>
                      </div>
                    </div>

                    {/* RBAC Permission Pill */}
                    <div className="p-2 rounded-xl bg-[#1c1a17] border border-[#2e2b26] flex items-center justify-between text-[10px]">
                      <span className="text-[#a39d92] flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#f08a5d]" /> Role-Based Access
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] border border-[#2e2b26]">
                        Admin / Lead RBAC
                      </span>
                    </div>

                  </div>
                )}

                {/* 3. DATING APP */}
                {activeScreen === 'dating' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    
                    <div className="p-3.5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium text-[#f08a5d] uppercase flex items-center gap-1">
                          <Flame className="w-3 h-3 text-[#f08a5d]" /> New Match
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] font-medium border border-[#2e2b26]">
                          98% Match
                        </span>
                      </div>
                      <div className="font-serif text-xl font-normal text-[#f0ece4]">
                        Dating App Voice & Chat
                      </div>
                    </div>

                    {/* WebRTC Live Calling Card */}
                    <div className="p-3 rounded-2xl bg-[#1c1a17] border border-[#2e2b26] text-center space-y-2">
                      <div className="w-10 h-10 mx-auto rounded-full p-[1.5px] bg-[#f08a5d]">
                        <div className="w-full h-full rounded-full bg-[#131210] flex items-center justify-center font-serif text-[#f0ece4] text-xs">
                          Elena
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-[#f0ece4]">WebRTC Voice Call</div>
                        <div className="text-[9px] text-[#f08a5d] flex items-center justify-center gap-1 font-mono">
                          <Radio className="w-2.5 h-2.5 animate-pulse" /> Connected · 03:42
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 pt-1">
                        <span className="p-1.5 rounded-full bg-[#131210] text-[#a39d92] border border-[#2e2b26]">
                          <Volume2 className="w-3 h-3" />
                        </span>
                        <span className="p-1.5 rounded-full bg-[#b4441f] text-[#f0ece4] shadow">
                          <PhoneCall className="w-3 h-3 rotate-[135deg]" />
                        </span>
                        <span className="p-1.5 rounded-full bg-[#131210] text-[#a39d92] border border-[#2e2b26]">
                          <Mic className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    {/* Real-time message bubble */}
                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] text-[10px] space-y-1.5">
                      <div className="flex items-center justify-between text-[#a39d92]">
                        <span>FCM Notification</span>
                        <span className="text-[#f08a5d]">Delivered</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#131210] border border-[#2e2b26] text-[#f0ece4]">
                        "Hey! Are you free for a quick call?"
                      </div>
                    </div>

                  </div>
                )}

                {/* 4. FEUDR SOCIAL PLATFORM */}
                {activeScreen === 'social' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    
                    <div className="p-3.5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-medium text-[#a39d92]">
                          Tournament Finals
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] font-medium border border-[#2e2b26]">
                          Live Stream
                        </span>
                      </div>
                      <div className="font-serif text-xl font-normal text-[#f0ece4]">
                        Feudr League #14
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-medium text-[#f08a5d]">
                        <span>Team Showdown</span>
                        <span className="text-[9px] font-mono text-[#a39d92]">Deep Link Schemas</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#131210] border border-[#2e2b26] text-[10px]">
                          <span className="text-[#f0ece4]">⚔ Team Apex</span>
                          <span className="text-[#f08a5d] font-bold">3 WINS</span>
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded bg-[#131210] border border-[#2e2b26] text-[10px]">
                          <span className="text-[#a39d92]">⚔ Team Nova</span>
                          <span className="text-[#a39d92] font-mono">1 WIN</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-[#1c1a17] border border-[#2e2b26] text-[10px] text-[#f0ece4] flex items-center justify-between">
                      <span className="flex items-center gap-1 text-[#a39d92]">
                        <Users className="w-3 h-3 text-[#f08a5d]" /> Social Graph: 1.4k
                      </span>
                      <span className="text-[#f08a5d]">WebRTC Voice Room</span>
                    </div>

                  </div>
                )}

                {/* 5. SMARTHAUL TRANSPORT */}
                {activeScreen === 'transport' && (
                  <div className="space-y-2.5 animate-fadeIn">
                    
                    <div className="p-3.5 rounded-2xl bg-[#1c1a17] border border-[#2e2b26]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] uppercase font-medium text-[#a39d92]">
                          SmartHaul Fleet
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] font-medium border border-[#2e2b26]">
                          Route Active
                        </span>
                      </div>
                      <div className="font-serif text-xl font-normal text-[#f0ece4]">
                        Route SH-904 Express
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] space-y-1.5">
                      <div className="text-[10px] font-medium text-[#f08a5d] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Stop Checkpoints
                      </div>
                      <div className="text-[10px] text-[#f0ece4]">Depot A ➔ Terminal B (On Schedule)</div>
                      <div className="text-[9px] text-[#a39d92]">REST API Sync · Firebase Auth</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#1c1a17] border border-[#2e2b26] flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-[#f08a5d]" />
                        <div>
                          <div className="font-medium text-[#f0ece4]">Ticket #TX-8842</div>
                          <div className="text-[9px] text-[#a39d92]">Validated Pass</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#131210] text-[#f08a5d] border border-[#2e2b26]">
                        VERIFIED
                      </span>
                    </div>

                  </div>
                )}
              </>
            )}
          </div>

          {/* Screen Switcher Pills */}
          {interactive && (
            <div className="p-2 bg-[#131210] border-t border-[#2e2b26] flex items-center justify-around gap-1 z-20">
              {[
                { id: 'expense', label: 'Expense', icon: Database },
                { id: 'employee', label: 'Shipping', icon: Layers },
                { id: 'dating', label: 'Dating', icon: Radio },
                { id: 'social', label: 'Feudr', icon: Flame },
                { id: 'transport', label: 'Transport', icon: CheckCircle2 },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeScreen === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveScreen(tab.id as any);
                      setShowCode(false);
                    }}
                    className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all text-[9px] ${
                      isActive 
                        ? 'bg-[#1c1a17] text-[#f08a5d] font-medium border border-[#2e2b26]' 
                        : 'text-[#a39d92] hover:text-[#f0ece4]'
                    }`}
                  >
                    <Icon className="w-3 h-3 mb-0.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Home Indicator */}
          <div className="h-3.5 bg-[#131210] flex items-center justify-center pb-0.5">
            <div className="w-20 h-1 bg-[#3d3a34] rounded-full" />
          </div>

        </div>

      </div>

      {/* Caption Tag */}
      <div className="mt-2 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1c1a17] border border-[#2e2b26] text-[10px] text-[#a39d92]">
          <Smartphone className="w-3 h-3 text-[#f08a5d]" />
          <span>React Native Interactive Conceptual Mockup</span>
        </span>
      </div>

    </div>
  );
};
