import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-slate-900 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="bg-gradient-to-br from-white/80 via-indigo-50/60 to-purple-50/60 backdrop-blur-xl rounded-2xl p-8 border border-indigo-100/50 shadow-xl shadow-indigo-500/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I'm a full-stack product builder who combines product strategy with hands-on development.
            </p>
            
            <div>
              <p className="font-semibold text-slate-900 mb-3">My background:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>4 years as Engineering Product Manager at Microsoft Advertising</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Built products that generated $500K+ in revenue and saved $180K in operational costs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Now building web applications, internal tools, and SaaS products from concept to deployment</span>
                </li>
              </ul>
            </div>
            
            <p>
              I work fast by leveraging modern development tools and AI assistance. I can take a business idea 
              and ship a working product in weeks - handling everything from database design to UI/UX to deployment.
            </p>
            
            <p className="font-semibold text-slate-900">
              Currently: Building Sparken, a behavioral science-backed studio, and developing its entire tech stack.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}