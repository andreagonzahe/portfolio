import { TrendingUp, DollarSign, Users, FileText, Sparkles, Download } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  {
    icon: DollarSign,
    text: 'Generated $500K in revenue in under 3 months by enabling new currency support',
  },
  {
    icon: TrendingUp,
    text: 'Saved $180K in operational costs by building internal tools',
  },
  {
    icon: Users,
    text: 'Reduced customer escalations by 32% through documentation improvements',
  },
  {
    icon: Sparkles,
    text: 'Led multi-phase roadmap for Copilot Chat integration',
  },
  {
    icon: FileText,
    text: 'Increased clicks and impressions by 10% through strategic campaigns',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Career Highlights</h2>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-white/80 via-indigo-50/60 to-purple-50/60 backdrop-blur-xl rounded-2xl border border-indigo-100/50 p-8 mb-8 shadow-xl shadow-indigo-500/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-indigo-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Microsoft Advertising</h3>
              <p className="text-lg text-slate-600 font-medium">Engineering Product Manager</p>
            </div>
            <div className="text-slate-600 mt-2 md:mt-0">
              <p className="text-lg font-semibold">2021-2025</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div 
                  key={index} 
                  className="flex gap-4 items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1 font-medium">{highlight.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://docs.google.com/document/d/1nNIbsHYPbDQgnJIsO9CEqboZv9SOtgot/export?format=pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transform"
          >
            <Download className="w-5 h-5" />
            Download Full Resume for Details
          </a>
        </motion.div>
      </div>
    </section>
  );
}