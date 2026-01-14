import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { DemoRequestForm } from './DemoRequestForm';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  status: string;
  note?: string;
  links: { label: string; url: string; isDemoRequest?: boolean }[];
  image?: string;
}

export function ProjectCard({ title, description, features, techStack, status, note, links, image }: ProjectCardProps) {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="bg-gradient-to-br from-white/80 via-indigo-50/40 to-purple-50/40 backdrop-blur-xl rounded-2xl border border-indigo-100/50 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 h-full group"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Project Screenshot */}
        {image ? (
          <div className="h-48 overflow-hidden border-b border-indigo-100/50 relative bg-slate-100">
            <img 
              src={image} 
              alt={`${title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 h-48 flex items-center justify-center border-b border-indigo-100/50 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            {/* Sparkle effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-slate-400 text-sm relative z-10 font-medium">Project Screenshot</span>
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
            {title}
          </h3>
          
          <p className="text-slate-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          <div className="mb-4">
            <p className="font-semibold text-slate-900 mb-2 text-sm">Key Features:</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-4">
            <p className="font-semibold text-slate-900 mb-2 text-sm">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4 pb-4 border-b border-slate-100">
            <p className="text-sm">
              <span className="font-semibold text-slate-900">Status:</span>{' '}
              <span className="text-slate-600">{status}</span>
            </p>
            {note && (
              <p className="text-sm mt-2 text-indigo-600 italic">
                {note}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {links.map((link, index) => (
              link.isDemoRequest ? (
                <button
                  key={index}
                  onClick={() => setIsDemoFormOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-sm shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transform"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </button>
              ) : (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-sm shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:scale-105 transform"
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )
            ))}
          </div>
        </div>
      </motion.div>

      <DemoRequestForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
        projectTitle={title}
      />
    </>
  );
}