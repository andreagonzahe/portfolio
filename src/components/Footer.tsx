import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">About</h3>
            <p className="text-slate-600 leading-relaxed">
              Full-stack developer passionate about creating impactful digital experiences 
              with a focus on behavioral science and user-centric design.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="https://www.sparkensolutions.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  Sparken Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="mailto:your.email@example.com"
                className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-600">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
