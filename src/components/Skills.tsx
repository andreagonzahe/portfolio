import { Code2, Lightbulb, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Development',
    icon: Code2,
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-100/80 via-purple-50/60 to-indigo-50/60',
    skills: [
      'Frontend: React, Next.js, JavaScript, HTML/CSS, Tailwind CSS',
      'Backend: Supabase, PostgreSQL, REST APIs',
      'Tools: Vercel, Git/GitHub, Cursor, Figma',
    ],
  },
  {
    title: 'Product & Strategy',
    icon: Lightbulb,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-100/80 via-pink-50/60 to-purple-50/60',
    skills: [
      'Product Management & Roadmapping',
      'User Research & Data Analysis',
      'Cross-functional Team Leadership',
      'Stakeholder Management',
    ],
  },
  {
    title: 'From Microsoft',
    icon: Briefcase,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-100/80 via-indigo-50/60 to-blue-50/60',
    skills: [
      'Azure DevOps (ADO)',
      'Data Analytics',
      'Business Strategy',
      'Go-to-market Planning',
    ],
  },
  {
    title: 'Education',
    icon: GraduationCap,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-100/80 via-teal-50/60 to-emerald-50/60',
    skills: [
      'B.S. Cognitive Science (Computing Specialization) - UCLA',
      'GPA: 3.75/4.0, Dean\'s List',
      'Coursework: C++, Java, SQL, R, HTML, AI/ML, Statistics',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-xl text-slate-600">
            A combination of product strategy, development, and business expertise
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-2xl p-6 border border-indigo-100/50 hover:border-indigo-300/50 transition-all shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                
                <ul className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex gap-2 text-slate-700">
                      <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-bold`}>•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}