import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Trophy, GraduationCap, Calendar, MapPin, Phone, Mail, Menu, X, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { Button } from './components/Button';
import { ChatWidget } from './components/ChatWidget';
import { NavItem, Feature, Stat } from './types';

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'News', href: '#news' },
];

const STATS: Stat[] = [
  { label: 'Students Enrolled', value: '1,250+' },
  { label: 'Expert Faculty', value: '120+' },
  { label: 'University Placement', value: '100%' },
  { label: 'Years of Excellence', value: '50+' },
];

const FEATURES: Feature[] = [
  {
    title: 'Academic Excellence',
    description: 'Our rigorous IB and AP curriculum challenges students to reach their full intellectual potential.',
    icon: BookOpen,
  },
  {
    title: 'Holistic Development',
    description: 'We focus on character building, leadership skills, and emotional intelligence alongside grades.',
    icon: Users,
  },
  {
    title: 'World-Class Athletics',
    description: 'State-of-the-art facilities and championship-winning teams in swimming, soccer, and basketball.',
    icon: Trophy,
  },
];

const NEWS = [
  { id: 1, title: 'Gemini Academy Wins State Robotics Championship', date: 'Oct 15, 2023', image: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Fall Admissions Open House: Join Us', date: 'Nov 02, 2023', image: 'https://picsum.photos/800/600?random=2' },
  { id: 3, title: 'Annual Art Exhibition Highlights Student Creativity', date: 'Sep 28, 2023', image: 'https://picsum.photos/800/600?random=3' },
];

// --- Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-school-900 text-white' : 'bg-white text-school-900'}`}>
            <GraduationCap size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-school-900' : 'text-white'}`}>
            Gemini<span className="text-gold-500">Academy</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" variant={isScrolled ? 'primary' : 'secondary'}>Apply Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-800 font-medium py-2 border-b border-gray-100 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full">Portal Login</Button>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=10" 
          alt="Students learning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-school-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-school-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold-500 border border-white/20 backdrop-blur-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium tracking-wide uppercase">Accepting Applications for Fall 2024</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Empowering <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-yellow-200">Future Leaders</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Experience a world-class education where innovation meets tradition. 
          At Gemini Academy, we nurture curiosity, character, and intellect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button size="lg" variant="secondary">Virtual Tour</Button>
          <Button size="lg" variant="outline">Admissions Inquiry</Button>
        </div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <span className="text-school-600 font-bold tracking-wider uppercase text-sm">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">{title}</h2>
    <div className={`h-1 w-20 bg-gold-500 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-school-900 text-white py-16 -mt-20 relative z-20 mx-4 md:mx-10 rounded-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Features Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Why Choose Gemini Academy?" subtitle="Our Philosophy" />
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe every child possesses a unique potential waiting to be unlocked. 
              Our integrated approach combines rigorous academics with emotional and social development, 
              preparing students not just for exams, but for life in a complex global society.
            </p>
            <div className="space-y-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-school-50 rounded-xl flex items-center justify-center text-school-600 group-hover:bg-school-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500/20 rounded-3xl rotate-3"></div>
            <img 
              src="https://picsum.photos/800/1000?random=12" 
              alt="Students in library" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://picsum.photos/100/100?random=20" alt="Principal" />
                </div>
                <div>
                  <p className="text-sm font-serif italic text-gray-600">"Education is the kindling of a flame, not the filling of a vessel."</p>
                  <p className="text-xs font-bold text-school-900 mt-1 uppercase">— Dr. Sarah Jenkins, Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Academics */}
      <section id="academics" className="bg-school-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Academic Pathways" subtitle="Curriculum" centered />
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Primary Years', 'Middle School', 'High School (IB)'].map((level, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://picsum.photos/600/400?random=${30+idx}`} 
                    alt={level} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-school-900 mb-3">{level}</h3>
                  <p className="text-gray-600 mb-6">
                    Designed to inspire curiosity and build foundational skills through inquiry-based learning and hands-on projects.
                  </p>
                  <a href="#" className="inline-flex items-center text-school-600 font-semibold hover:text-gold-600 transition-colors">
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading title="Campus Happenings" subtitle="News & Events" />
          <Button variant="outline" className="border-school-200 text-school-900 hover:bg-school-50 mb-12">View All News</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-sm font-bold text-school-900 shadow-sm z-10">
                  {item.date}
                </div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-school-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-school-600 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Start Your Journey With Us</h2>
          <p className="text-xl text-school-100 mb-10">
            Admissions for the 2024-2025 academic year are now open. 
            Schedule a visit or apply online today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-school-900 hover:bg-gray-100">Apply Online</Button>
            <Button size="lg" variant="outline" className="border-school-200 text-white hover:bg-school-700 hover:text-white">Contact Admissions</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-school-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={32} className="text-gold-500" />
                <span className="text-2xl font-serif font-bold">Gemini Academy</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Fostering intellect, creativity, and character in the heart of Silicon Valley since 1974.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 text-gold-500">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {['Admissions', 'Academic Calendar', 'Tuition & Fees', 'Employment', 'Portal Login'].map(link => (
                  <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-gold-500">Contact Us</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin className="flex-shrink-0 mt-1 text-school-500" size={18} />
                  <span>123 Innovation Drive,<br/>Palo Alto, CA 94301</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="flex-shrink-0 text-school-500" size={18} />
                  <span>+1 (555) 012-3456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="flex-shrink-0 text-school-500" size={18} />
                  <span>admissions@geminiacademy.edu</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-gold-500">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">Subscribe for latest updates and event invites.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-school-800 border border-school-700 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-gold-500 transition-colors"
                />
                <button className="bg-gold-500 text-school-900 p-2 rounded-lg hover:bg-gold-600 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 Gemini Academy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;