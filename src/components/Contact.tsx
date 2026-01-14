import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Let's Build Something</h2>
          <p className="text-xl text-slate-600 font-medium">I'm available for:</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-white/80 via-indigo-50/60 to-purple-50/60 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-indigo-100/50 shadow-xl shadow-indigo-500/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="space-y-3 mb-8">
            <li className="flex gap-2 text-lg text-slate-700 font-medium">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">•</span>
              <span>Product development projects (MVPs, internal tools, web apps)</span>
            </li>
            <li className="flex gap-2 text-lg text-slate-700 font-medium">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">•</span>
              <span>Technical product management roles</span>
            </li>
            <li className="flex gap-2 text-lg text-slate-700 font-medium">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">•</span>
              <span>Freelance/contract work</span>
            </li>
          </ul>
          
          <div className="space-y-4">
            <motion.a 
              href="mailto:andreagonzahe@gmail.com"
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors group p-3 rounded-xl hover:bg-indigo-50/50"
              whileHover={{ x: 5 }}
            >
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl border border-indigo-200 shadow-lg group-hover:shadow-xl transition-all">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium">andreagonzahe@gmail.com</span>
            </motion.a>
            
            <motion.a 
              href="tel:424-434-8025"
              className="flex items-center gap-3 text-slate-700 hover:text-indigo-600 transition-colors group p-3 rounded-xl hover:bg-indigo-50/50"
              whileHover={{ x: 5 }}
            >
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl border border-indigo-200 shadow-lg group-hover:shadow-xl transition-all">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium">424-434-8025</span>
            </motion.a>
            
            <div className="flex items-center gap-3 text-slate-700 p-3 rounded-xl">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl border border-indigo-200 shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-medium">Remote - Los Angeles, CA</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://docs.google.com/document/d/1nNIbsHYPbDQgnJIsO9CEqboZv9SOtgot/export?format=pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transform"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="mailto:andreagonzahe@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-white/90 via-indigo-50/80 to-purple-50/80 backdrop-blur-sm text-slate-900 font-semibold border-2 border-indigo-200 hover:border-indigo-400 hover:from-white hover:to-white transition-all text-lg hover:scale-105 transform shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </motion.div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-indigo-100/50 text-center text-slate-600">
        <p className="font-medium">© {new Date().getFullYear()} Andrea. All rights reserved.</p>
      </footer>
    </section>
  );
}