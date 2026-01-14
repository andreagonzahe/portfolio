import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative py-12 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-xl sm:text-2xl text-slate-600 mb-3 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Andrea
          </motion.h2>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Product Builder
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I turn ideas into production-ready web applications in weeks, not months.
            <br />
            <span className="text-slate-600">Former Microsoft Product Manager. Now building end-to-end products myself.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all gap-2 text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 transform"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://docs.google.com/document/d/1nNIbsHYPbDQgnJIsO9CEqboZv9SOtgot/export?format=pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-br from-white/90 via-indigo-50/80 to-purple-50/80 backdrop-blur-sm text-slate-900 font-semibold border-2 border-indigo-200 hover:border-indigo-400 hover:from-white hover:to-white transition-all gap-2 text-lg hover:scale-105 transform shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </motion.div>

          {/* Credentials */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Former PM and Alumna</p>
            <div className="flex items-center gap-8 sm:gap-12">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-8 h-8" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h10.931v10.931H0V0zm12.069 0H23v10.931H12.069V0zM0 12.069h10.931V23H0V12.069zm12.069 0H23V23H12.069V12.069z" fill="#F25022"/>
                  <path d="M12.069 0H23v10.931H12.069V0z" fill="#7FBA00"/>
                  <path d="M0 12.069h10.931V23H0V12.069z" fill="#00A4EF"/>
                  <path d="M12.069 12.069H23V23H12.069V12.069z" fill="#FFB900"/>
                </svg>
                <span className="font-semibold text-slate-700">Microsoft</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-8 h-8" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M150 0C67.157 0 0 67.157 0 150s67.157 150 150 150 150-67.157 150-150S232.843 0 150 0z" fill="#2774AE"/>
                  <path d="M75 165.5h37.5v59.375c-6.25 3.125-18.75 9.375-37.5 9.375-37.5 0-62.5-25-62.5-68.75s28.125-71.875 68.75-71.875c31.25 0 50 18.75 50 18.75l-18.75 28.125s-15.625-15.625-31.25-15.625c-21.875 0-37.5 18.75-37.5 40.625s15.625 40.625 37.5 40.625c12.5 0 18.75-3.125 18.75-3.125v-37.5H75v-25zm112.5-40.625h31.25v100h-31.25v-100zm96.875 0h31.25v100h-31.25v-100z" fill="#FFD100"/>
                </svg>
                <span className="font-semibold text-slate-700">UCLA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}