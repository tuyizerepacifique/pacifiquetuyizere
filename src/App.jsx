import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Shield, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Award,
  GraduationCap,
  Briefcase,
  BarChart3,
  MessageCircle
} from 'lucide-react';
import IMAGE from './assets/pacifiquetuyizere.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "IKIMINA+",
      description: "A comprehensive digital platform for AMATSINDA groups to record contributions (imisanzu), manage group savings, track loans, and monitor repayment schedules efficiently.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Mobile-First"],
      category: "Full-Stack",
      image: "https://placehold.co/400x250/6366f1/ffffff?text=IKIMINA%2B",
      status: "In Development"
    },
    {
      id: 2,
      title: "4Arms Savings System",
      description: "A comprehensive digital platform for group savings and fund management, designed to streamline financial collaboration and ensure secure transaction handling.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full-Stack",
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=4Arms+Savings"
    },
    {
      id: 3,
      title: "SmartIshuri",
      description: "An innovative school management system tailored for Rwandan educational institutions, featuring student management, attendance tracking, and academic performance monitoring.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      category: "Full-Stack",
      image: "https://placehold.co/400x250/10b981/ffffff?text=SmartIshuri",
      status: "In Progress"
    },
    {
      id: 4,
      title: "UMUZI Health Data Platform",
      description: "A secure healthcare data management platform designed to improve patient care through better data accessibility and management in Rwandan hospitals.",
      technologies: ["React", "Node.js", "MongoDB", "Encryption"],
      category: "Health Tech",
      image: "https://placehold.co/400x250/f59e0b/ffffff?text=UMUZI+Health",
      status: "In Development"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "Database Design"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Data Modeling", "Healthcare Data Management"] },
    { category: "DevOps", items: ["Git", "GitHub", "Testing", "Deployment", "System Administration", "CI/CD"] }
  ];

  const experiences = [
    {
      title: "Data Manager",
      company: "UMUZI TECH Ltd",
      period: "2025 - Present",
      description: "Leading data strategy for a health tech startup focused on hospital digital transformation. Designing secure, compliant data management systems for healthcare environments and bridging technical development with healthcare data requirements.",
      achievements: [
        "Developing secure health data management platform",
        "Implementing compliance-focused data architecture",
        "Contributing to solutions that improve patient care"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Saltel Ltd",
      period: "2025",
      description: "Gained hands-on experience in software development processes, contributing to building and testing applications in a collaborative environment.",
      achievements: [
        "Strengthened teamwork and communication skills",
        "Applied full-stack development knowledge in real projects",
        "Enhanced problem-solving capabilities"
      ]
    }
  ];

  const academicAchievements = [
    { subject: "Front-End Design and Development", grade: "A" },
    { subject: "Back-End Development and Database", grade: "A" },
    { subject: "DevOps and Software Testing", grade: "A" },
    { subject: "System Administration", grade: "A" },
    { subject: "Practical SOD", grade: "A" },
    { subject: "Applied Mathematics", grade: "A" }
  ];

  // Contact form handler (will work with EmailJS setup)
  const sendEmail = (e) => {
    e.preventDefault();
    alert('In your live portfolio, this form will send messages directly to tuyizerepoce111@gmail.com!');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-indigo-400">
              Tuyizere Pacifique
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-indigo-400 font-semibold' 
                      : 'text-gray-300 hover:text-indigo-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-300 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-indigo-400 hover:bg-gray-700"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-700">
                <Award className="w-4 h-4 mr-2" />
                88.01% Academic Excellence
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Full-Stack Developer & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"> Health Tech Data Manager</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Building secure, scalable web applications and healthcare data solutions that drive real impact in Rwanda's digital transformation.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View My Work
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors duration-200 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="text-center">
                  {/* Your Photo - Make sure the image is in src/assets/pacifiquetuyizere.png */}
                  <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-full border-2 border-indigo-500">
                    <img 
                      src={IMAGE} 
                      alt="Tuyizere Pacifique"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tuyizere Pacifique</h3>
                  <p className="text-gray-400 mb-4">Full-Stack Developer & Data Manager</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-indigo-900/30 rounded-lg border border-indigo-700">
                      <Database className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                      <span className="text-gray-300 font-medium">Health Tech</span>
                    </div>
                    <div className="text-center p-3 bg-violet-900/30 rounded-lg border border-violet-700">
                      <Server className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                      <span className="text-gray-300 font-medium">Full-Stack</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Shield className="w-4 h-4 inline mr-1" />
                Secure Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Academic excellence meets practical expertise in building innovative digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a highly motivated Full-Stack Web Developer with exceptional academic credentials (88.01% in Software Development) and hands-on experience in building complete software systems from concept to deployment.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently serving as Data Manager at UMUZI TECH Ltd, I'm at the forefront of healthcare digital transformation in Rwanda, designing secure data management systems that improve patient care through better data accessibility.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-600 h-1 rounded-full"></div>
                <span className="text-indigo-400 font-semibold">Academic Excellence + Real Impact</span>
                <div className="flex-1 bg-gradient-to-r from-indigo-500 to-violet-600 h-1 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Academic Excellence</h3>
              </div>
              
              <div className="space-y-3">
                {academicAchievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-800 rounded-lg border border-gray-600"
                  >
                    <span className="text-gray-300">{achievement.subject}</span>
                    <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full font-bold border border-green-700">
                      {achievement.grade}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-indigo-900/20 rounded-lg border border-indigo-700">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-indigo-400 mr-2" />
                  <span className="text-indigo-300 font-semibold">Overall Grade: 88.01%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full-stack development skills with healthcare data specialization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  {skillCategory.category === 'Frontend' && <Smartphone className="w-6 h-6 mr-3 text-indigo-400" />}
                  {skillCategory.category === 'Backend' && <Server className="w-6 h-6 mr-3 text-violet-400" />}
                  {skillCategory.category === 'Databases' && <Database className="w-6 h-6 mr-3 text-emerald-400" />}
                  {skillCategory.category === 'DevOps' && <Shield className="w-6 h-6 mr-3 text-amber-400" />}
                  {skillCategory.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition-colors duration-200 cursor-pointer border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete software solutions built from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {project.status && (
                      <span className="bg-amber-900/50 text-amber-300 text-xs px-2 py-1 rounded-full font-medium border border-amber-700">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded text-xs font-medium border border-indigo-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From academic excellence to real-world impact in healthcare technology
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-indigo-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on your next project or discuss healthcare technology solutions?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center border border-indigo-700">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+250 793 301 480</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center border border-indigo-700">
                  <Mail className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">tuyizerepoce111@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center border border-indigo-700">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Kigali, Rwanda</p>
                </div>
              </div>
              
              <div className="pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/250793301480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-200 border border-gray-600"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-200 border border-gray-600"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors duration-200 border border-gray-600"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <form onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Code className="w-8 h-8 text-indigo-400 mr-2" />
            <span className="text-2xl font-bold text-white">Tuyizere Pacifique</span>
          </div>
          <p className="text-gray-400 mb-4">
            Full-Stack Developer & Health Tech Data Manager
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Tuyizere Pacifique. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;