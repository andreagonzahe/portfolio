import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import sparkenImg from 'figma:asset/b5cbae4738d180c32d0d26827591eede0d373689.png';
import sparkenLandingImg from 'figma:asset/115294fdc42bae9c2023d23823de97061181d1fc.png';
import auditToolImg from 'figma:asset/b5ba49ff7930394b41df5e895d2062e211b64be7.png';
import designAdvisorImg from 'figma:asset/49922dc8aa0c561c920c9210c95b179b465d991a.png';
import lunariaImg from 'figma:asset/468a0bccc763485ec358a5277f36edbb12283c9f.png';
import projectMgmtImg from 'figma:asset/5a2fb4aebcb1c3700d3bf491827a82b802d6e095.png';
import mowisPetCareImg from 'figma:asset/3afb07eae0fdbe8c3c50ffe88ba9270fc9ffe58b.png';

const projects = [
  {
    title: 'Sparken Business Platform',
    description: 'Full-stack web application for managing clients, projects, financials, and team collaboration',
    features: [
      'Multi-user authentication with role-based access control',
      'Client portal where clients can view their projects and communicate with team',
      'Financial tracking (revenue, expenses, profit forecasting)',
      'Project management with progress tracking and notifications',
      'Real-time dashboard with business metrics',
    ],
    techStack: ['React', 'Next.js', 'Supabase', 'PostgreSQL', 'Vercel', 'Tailwind CSS'],
    status: 'In production | 4 team members + 10 clients using it',
    note: 'Internal tool - Demo access available upon request for portfolio review',
    image: sparkenImg,
    links: [
      { label: 'Request Demo', url: '', isDemoRequest: true },
      { label: 'View Processes', url: 'https://sparken-process.vercel.app/' },
    ],
  },
  {
    title: 'Sparken Landing Page',
    description: 'Client-facing marketing website showcasing Sparken\'s behavioral science-backed approach and services',
    features: [
      'Modern, responsive design with smooth animations',
      'Clear value proposition and service offerings',
      'Contact forms and lead capture functionality',
      'SEO optimized for discoverability',
      'Fast loading performance and mobile-first design',
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    status: 'Live and actively driving client inquiries',
    image: sparkenLandingImg,
    links: [
      { label: 'View Live Site', url: 'https://sparkensolutions.com' },
    ],
  },
  {
    title: 'Behavioral Website Audit Tool',
    description: 'AI-powered tool that analyzes websites for behavioral science principles and provides actionable recommendations',
    features: [
      'Automated website analysis',
      'Behavioral science scoring',
      'Detailed recommendations for improving conversion and user experience',
      'PDF report generation',
    ],
    techStack: ['React', 'Next.js', 'Anthropic Claude API', 'Vercel'],
    status: 'Internal tool, planned for public release as freemium SaaS',
    image: auditToolImg,
    links: [
      { label: 'Try Demo', url: 'https://audit-tool-self.vercel.app/' },
    ],
  },
  {
    title: 'Behavioral Science Design Advisor',
    description: 'Interactive tool that provides real-time design guidance based on behavioral science principles',
    features: [
      'AI-powered design recommendations',
      'Evidence-based suggestions for UI/UX improvements',
      'Context-aware advice for specific use cases',
    ],
    techStack: ['React', 'Next.js', 'Claude API', 'Vercel'],
    status: 'Live and in use',
    image: designAdvisorImg,
    links: [
      { label: 'Try Demo', url: 'https://design-advisor.vercel.app/' },
    ],
  },
  {
    title: 'Lunaria - Hormone & Mood Tracking App',
    description: 'Mobile-first web app for tracking mood, hormones, and emotional patterns',
    features: [
      'Daily mood and symptom logging',
      'Data visualization and pattern recognition',
      'Mobile-optimized for on-the-go tracking',
      'Personal insights and trends',
    ],
    techStack: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'MVP complete, in user testing before App Store launch',
    note: 'Continue as guest for demo purposes',
    image: lunariaImg,
    links: [
      { label: 'Test MVP', url: 'https://lunaria-app-zeta.vercel.app/' },
      { label: 'View Landing Page', url: 'https://lunaria-app.lovable.app' },
      { label: 'View Figma Design', url: 'https://www.figma.com/make/adRvZx8SqnuIrcsmH3ZGRO/HormoneMood-App-Design' },
    ],
  },
  {
    title: 'Personal Project Management Tool',
    description: 'Lightweight project management system built for individual productivity',
    features: [
      'Task management with priorities',
      'Project organization',
      'Progress tracking',
      'Mobile-responsive design',
    ],
    techStack: ['React', 'Next.js', 'Supabase', 'Vercel'],
    status: 'Live and in personal use',
    note: 'Request password to view',
    image: projectMgmtImg,
    links: [
      { label: 'View Live', url: 'https://simple-project-manager-vert.vercel.app' },
    ],
  },
  {
    title: "Mowi's Pet Care - Client Website",
    description: 'Custom website built for pet care business client',
    features: [
      'Responsive design',
      'Service showcase',
      'Contact forms',
      'Professional branding',
    ],
    techStack: ['React', 'Next.js', 'Vercel'],
    status: 'Delivered to client',
    image: mowisPetCareImg,
    links: [
      { label: 'View Live Site', url: 'https://mowis-pet-care.vercel.app/' },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</h2>
          <p className="text-xl text-slate-600">
            Recent work spanning SaaS products, internal tools, and client websites
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}