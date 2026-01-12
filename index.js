import React, { useState } from 'react';
import { Terminal, Award, BookOpen, GraduationCap, ArrowRight, Activity, Cpu, ShieldCheck, FileText } from 'lucide-react';

const SchoolHomepage = () => {
  // Simulating the "Machine" state
  const [systemActive, setSystemActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#d0d4d9] font-sans text-slate-800 selection:bg-orange-500 selection:text-white pb-20">
      
      {/* GLOBAL STYLES & FONTS INJECTION */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        .font-industrial { font-family: 'Chakra Petch', sans-serif; }
        .font-mono-tech { font-family: 'JetBrains Mono', monospace; }
        
        /* Textures */
        .bg-carbon {
          background-color: #1a1c20;
          background-image: radial-gradient(black 15%, transparent 16%), radial-gradient(black 15%, transparent 16%);
          background-size: 4px 4px;
          background-position: 0 0, 2px 2px;
        }
        .bg-blueprint {
          background-color: #004a99;
          background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-scanlines {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 6px 100%;
        }
        
        /* 3D Skeuomorphic Utilities */
        .panel-raised {
          background: #e2e6eb;
          box-shadow: 
            8px 8px 16px #aeb2b8, 
            -8px -8px 16px #ffffff;
          border: 1px solid rgba(255,255,255,0.4);
        }
        .panel-inset {
          background: #d6dadd;
          box-shadow: 
            inset 6px 6px 12px #b8bcbf, 
            inset -6px -6px 12px #ffffff;
        }
        .screw-head {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(145deg, #d1d5d8, #f0f4f8);
          box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .screw-head::after {
          content: '+';
          color: #888;
          font-family: monospace;
          font-size: 14px;
          line-height: 10px;
        }
        
        /* Tactile Buttons */
        .btn-push {
          transition: all 0.1s;
          border-bottom: 6px solid rgba(0,0,0,0.2);
          transform: translateY(0);
        }
        .btn-push:active {
          border-bottom: 2px solid rgba(0,0,0,0.2);
          transform: translateY(4px);
        }
      `}</style>

      {/* 1. HERO SECTION: "The Command Center" */}
      <section className="relative w-full bg-carbon text-white pt-10 pb-16 overflow-hidden border-b-8 border-[#333]">
        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Control Panel */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#ff5e00] font-mono-tech text-sm tracking-widest uppercase border border-[#ff5e00]/30 px-3 py-1 bg-[#ff5e00]/10 rounded">
                <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse"></span>
                System Operational
              </div>
              <h1 className="text-5xl lg:text-7xl font-industrial font-bold uppercase leading-tight drop-shadow-xl tracking-tighter">
                SMK <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">Teknologi</span> <br/>
                Masa Depan
              </h1>
              <p className="text-gray-400 max-w-lg text-lg font-mono-tech border-l-2 border-[#ff5e00] pl-4">
                >> Initializing student potential...<br/>
                >> Loading advanced curriculum v2.0
              </p>
              
              <button 
                onClick={() => setSystemActive(!systemActive)}
                className={`
                  group mt-8 px-8 py-4 bg-[#ff5e00] text-black font-industrial font-bold text-xl uppercase tracking-widest
                  btn-push rounded-sm hover:bg-[#ff7b30] flex items-center gap-3
                `}
              >
                <Cpu size={24} className={systemActive ? 'animate-spin' : ''} />
                {systemActive ? 'System Engaged' : 'Start Engine'}
              </button>
            </div>

            {/* Right Visual: The "Device" Frame */}
            <div className="flex-1 w-full max-w-xl">
              <div className="bg-[#2a2d33] p-4 rounded-xl shadow-2xl border-2 border-[#444] relative">
                {/* Device Bolts */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-[#111] rounded-full border border-[#555]"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-[#111] rounded-full border border-[#555]"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#111] rounded-full border border-[#555]"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#111] rounded-full border border-[#555]"></div>
                
                {/* Screen Content */}
                <div className="relative bg-black aspect-video rounded-lg overflow-hidden border-4 border-[#111] shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
                   <div className="absolute inset-0 bg-scanlines z-20 pointer-events-none opacity-30"></div>
                   <div className="absolute top-4 left-4 z-20 text-[#00ff41] font-mono-tech text-xs">REC ● [LIVE FEED]</div>
                   {/* Placeholder Image */}
                   <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-500">
                      [SCHOOL VIDEO FEED SIGNAL]
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT: "System Specifications" */}
      <section className="py-20 px-4 container mx-auto">
        <div className="panel-raised rounded-lg p-1 relative">
          {/* Decorative Screws */}
          <div className="absolute top-3 left-3 screw-head"></div>
          <div className="absolute top-3 right-3 screw-head"></div>
          <div className="absolute bottom-3 left-3 screw-head"></div>
          <div className="absolute bottom-3 right-3 screw-head"></div>

          <div className="border border-slate-300 rounded p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-industrial font-bold text-slate-700 uppercase mb-4 flex items-center gap-3">
                <ShieldCheck className="text-[#ff5e00]" />
                System Specifications
              </h2>
              <div className="h-1 w-20 bg-[#ff5e00] mb-6"></div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                SMK Teknologi is engineered to produce high-grade human resources compatible with Industry 4.0 standards. Built on a chassis of discipline and powered by cutting-edge vocational training modules.
              </p>
              
              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#d6dadd] p-3 rounded border border-slate-300 font-mono-tech text-sm">
                  <span className="block text-slate-500 text-xs">ESTABLISHED</span>
                  <span className="text-slate-800 font-bold">1998_BUILD_01</span>
                </div>
                <div className="bg-[#d6dadd] p-3 rounded border border-slate-300 font-mono-tech text-sm">
                  <span className="block text-slate-500 text-xs">ACCREDITATION</span>
                  <span className="text-[#ff5e00] font-bold">GRADE_A (OC)</span>
                </div>
              </div>
            </div>

            {/* Vent Slots Design Element */}
            <div className="hidden lg:flex flex-col gap-2 opacity-30">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-32 h-4 rounded-full bg-black shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)]"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEWS: "Status Log" */}
      <section className="bg-[#222428] py-16 border-y-4 border-[#111]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-industrial text-2xl tracking-widest uppercase">
              // STATUS_LOG
            </h3>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black rounded-lg p-1 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="relative bg-[#0d0f12] h-full p-6 rounded border border-[#333] overflow-hidden group hover:border-[#ff5e00] transition-colors cursor-pointer">
                  <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>
                  
                  {/* CRT Header */}
                  <div className="flex justify-between items-center mb-4 border-b border-[#333] pb-2">
                    <span className="font-mono-tech text-xs text-[#00ff41]">
                      LOG_ID: 2024-10-{10+item}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#00ff41] shadow-[0_0_5px_#00ff41] animate-pulse"></div>
                  </div>
                  
                  <h4 className="text-gray-200 font-industrial text-xl mb-2 group-hover:text-[#ff5e00] transition-colors">
                    Mid-Semester Examination Protocols Initiated
                  </h4>
                  <p className="text-gray-500 font-mono-tech text-sm line-clamp-3">
                    All units are required to update their firmware (knowledge base) before the scheduled assessment cycle begins...
                  </p>
                  
                  <div className="mt-4 flex items-center text-xs text-gray-600 font-mono-tech">
                    READ_MORE &gt;_
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS: "Hall of Fame / Certified Hardware" */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex items-end gap-4 mb-10">
          <h2 className="text-4xl font-industrial font-bold text-slate-800 uppercase">
            Certified Hardware
          </h2>
          <span className="mb-2 h-1 flex-1 bg-gradient-to-r from-slate-400 to-transparent"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "LKS Web Tech", rank: "GOLD", color: "bg-yellow-400" },
            { title: "Robotics Nasional", rank: "SILVER", color: "bg-slate-300" },
            { title: "Network Admin", rank: "GOLD", color: "bg-yellow-400" },
            { title: "Graphic Design", rank: "BRONZE", color: "bg-orange-300" }
          ].map((award, idx) => (
            <div key={idx} className="group relative panel-raised rounded-xl p-6 transition-transform hover:-translate-y-2">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-[#e2e6eb] bg-slate-800 flex items-center justify-center shadow-lg z-10">
                <Award className="text-white w-6 h-6" />
              </div>
              
              <div className="w-full h-32 bg-slate-300 mb-4 rounded inner-shadow flex items-center justify-center text-slate-400 font-industrial">
                [IMG_MODULE_{idx}]
              </div>
              
              <div className={`inline-block px-2 py-0.5 text-xs font-bold text-black mb-2 rounded ${award.color}`}>
                {award.rank}_TIER
              </div>
              
              <h3 className="text-xl font-bold text-slate-700 font-industrial leading-tight">
                {award.title}
              </h3>
              <p className="text-sm text-slate-500 mt-2 font-mono-tech">
                Regional Sector 04
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. QUICK LINKS: "Control Deck" */}
      <section className="bg-[#2d3035] py-20 border-t-8 border-[#1a1c20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-white font-industrial text-3xl uppercase tracking-[0.2em] mb-2">Command Grid</h2>
            <p className="text-gray-500 font-mono-tech">Select operational module</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* PPDB Button - The "Start" Button */}
            <a href="#" className="group">
              <div className="bg-[#ff5e00] rounded-lg p-1 pb-2 shadow-[0_10px_0_#993900] active:shadow-none active:translate-y-[10px] transition-all duration-100 h-full">
                <div className="bg-[#ff6a14] border-2 border-[#ff8c42] rounded h-full p-8 flex flex-col items-center justify-center text-center gap-4">
                  <GraduationCap size={48} className="text-white drop-shadow-md" />
                  <h3 className="text-2xl font-black text-white font-industrial uppercase tracking-wider">
                    PPDB 2026
                  </h3>
                  <span className="font-mono-tech text-black/60 text-xs font-bold px-2 py-1 bg-white/20 rounded">
                    INTAKE_OPEN
                  </span>
                </div>
              </div>
            </a>

            {/* E-Learning */}
            <a href="#" className="group">
              <div className="bg-[#4a5568] rounded-lg p-1 pb-2 shadow-[0_10px_0_#2d3748] active:shadow-none active:translate-y-[10px] transition-all duration-100 h-full">
                <div className="bg-[#56637a] border-2 border-[#65738c] rounded h-full p-8 flex flex-col items-center justify-center text-center gap-4">
                  <BookOpen size={48} className="text-gray-200" />
                  <h3 className="text-2xl font-bold text-white font-industrial uppercase">
                    E-Learning
                  </h3>
                  <span className="w-full h-1 bg-green-500 rounded shadow-[0_0_5px_#00ff41]"></span>
                </div>
              </div>
            </a>

            {/* E-Rapor */}
            <a href="#" className="group">
              <div className="bg-[#4a5568] rounded-lg p-1 pb-2 shadow-[0_10px_0_#2d3748] active:shadow-none active:translate-y-[10px] transition-all duration-100 h-full">
                <div className="bg-[#56637a] border-2 border-[#65738c] rounded h-full p-8 flex flex-col items-center justify-center text-center gap-4">
                  <FileText size={48} className="text-gray-200" />
                  <h3 className="text-2xl font-bold text-white font-industrial uppercase">
                    E-Rapor
                  </h3>
                   <span className="font-mono-tech text-gray-400 text-xs">AUTHORIZED_ONLY</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 6. PROFILE: "The Blueprint" */}
      <section className="bg-blueprint py-20 border-t-4 border-white text-white relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 border-l border-white/20 left-1/4"></div>
        <div className="absolute inset-0 border-l border-white/20 left-3/4"></div>
        <div className="absolute inset-0 border-t border-white/20 top-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#005bb5]/90 border-2 border-white p-8 backdrop-blur-sm shadow-2xl transform rotate-1">
            {/* Masking Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#fdf6e3] opacity-90 shadow-sm rotate-1"></div>
            
            <h2 className="text-center font-mono-tech text-xl mb-8 border-b border-white/30 pb-4">
              FIG. 1.0: INSTITUTIONAL BLUEPRINT
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-industrial text-2xl font-bold mb-2 text-[#ffca00]">VISION</h3>
                <p className="font-mono-tech text-sm leading-relaxed text-blue-100">
                  To become a center of excellence in technology and engineering, forging components of society that are durable, adaptable, and highly efficient.
                </p>
              </div>
              <div>
                <h3 className="font-industrial text-2xl font-bold mb-2 text-[#ffca00]">MISSION</h3>
                <ul className="font-mono-tech text-sm text-blue-100 space-y-2 list-decimal pl-4">
                   <li>Implement industry-standard calibration.</li>
                   <li>Integrate moral software with technical hardware.</li>
                   <li>Execute sustainable development protocols.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30 flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full"></div>
              <div>
                <p className="font-industrial font-bold text-lg">Dr. Engineer Headmaster</p>
                <p className="font-mono-tech text-xs opacity-70">Chief Operator</p>
              </div>
              <div className="ml-auto border-2 border-red-500 text-red-500 font-black text-4xl p-2 opacity-50 rotate-[-15deg] font-stencil">
                APPROVED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Lower Chassis */}
      <footer className="bg-[#15171a] text-gray-500 py-8 border-t border-[#333] font-mono-tech text-xs text-center">
        <p>SYSTEM_COPYRIGHT &copy; 2024 // SMK TEKNOLOGI</p>
        <p className="mt-2">RUNNING ON REACT_CORE_V18</p>
      </footer>
    </div>
  );
};

export default SchoolHomepage;