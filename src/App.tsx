import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Computer, 
  Cpu, 
  Languages, 
  Palette, 
  GraduationCap, 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  CheckCircle2,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-brand-600 p-2 rounded-lg mr-2">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold font-display tracking-tight ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}>
              Computer Tuition Point
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/919883181928?text=Hello%20I%20want%20to%20enroll%20in%20Computer%20Tution%20Point"
  target="_blank"
>
  Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                 href="https://wa.me/919883181928?text=Hello%20I%20want%20to%20enroll%20in%20Computer%20Tution%20Point"
  target="_blank"
>
  Enroll Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">Admissions Open 2026</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Empowering Students with <span className="text-brand-600">Knowledge</span> & Skills
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Providing quality education for students from Nursery to Class 10, Class 11 Commerce, and skill-based learning for all ages in Garia.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://wa.me/919883181928?text=Hello%20I%20want%20to%20enroll%20in%20Computer%20Tution%20Point"
  target="_blank"
>
  Enroll Now
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-lg hover:border-brand-200 hover:bg-slate-50 transition-all">
                Contact Us
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/student${i}/100/100`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">500+ Students</p>
                <p className="text-xs text-slate-500 text-nowrap">Trusted by parents in Garia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/classroom/800/600" 
                alt="Learning Environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Cpu className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">AI Training</p>
                  <p className="text-sm font-bold text-slate-900">Future Ready</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <BookOpen className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Academic Excellence</p>
                  <p className="text-sm font-bold text-slate-900">Nursery to Class 10</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    "Academic Excellence",
    "Computer Education",
    "AI Training",
    "Personality Development",
    "Expert Faculty",
    "Modern Facilities"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/edu1/400/500" 
                alt="About Us 1" 
                className="rounded-2xl shadow-lg mt-8"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/edu2/400/500" 
                alt="About Us 2" 
                className="rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white p-8 rounded-3xl shadow-2xl text-center hidden sm:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium opacity-90">Years of Experience</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">About Our Institute</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A Trusted Coaching Center for Your Child's Future
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Computer Tuition Point is a premier educational institute in Garia. We are dedicated to providing a holistic learning experience that goes beyond textbooks. Our focus is on academic excellence, computer literacy, cutting-edge AI training, and overall personality development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-brand-600 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <Award className="text-brand-600 w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-slate-900 font-bold">Certified Training Center</p>
                <p className="text-sm text-slate-500">Recognized for quality education and skill development.</p>
          </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Nursery to Class 10",
      desc: "Comprehensive coaching for all subjects with personalized attention.",
      icon: BookOpen,
      color: "blue"
    },
    {
      title: "Class 11 (Commerce)",
      desc: "Specialized guidance for commerce stream students to excel in boards.",
      icon: GraduationCap,
      color: "indigo"
    },
    {
      title: "Computer Courses",
      desc: "Basic to advanced computer training for all age groups.",
      icon: Computer,
      color: "cyan"
    },
    {
      title: "AI Training",
      desc: "Learn the future of technology with our specialized AI modules.",
      icon: Cpu,
      color: "purple"
    },
    {
      title: "Spoken English",
      desc: "Enhance communication skills and build confidence in speaking.",
      icon: Languages,
      color: "emerald"
    },
    {
      title: "Drawing Classes",
      desc: "Nurture creativity with our professional drawing and art sessions.",
      icon: Palette,
      color: "rose"
    },
    {
      title: "School Computer Support",
      desc: "Dedicated support for school curriculum computer practicals.",
      icon: Clock,
      color: "amber"
    }
  ];

  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Courses</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Diverse Learning Paths for Every Student</h3>
          <p className="text-lg text-slate-600">
            We offer a wide range of academic and skill-based courses designed to prepare students for both school exams and the modern digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-brand-50`}>
                <course.icon className="text-brand-600 w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {course.desc}
              </p>
              <a href="#contact" className="text-brand-600 font-bold flex items-center hover:underline">
                Learn More <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Teachers = () => {
  const teachers = [
    {
      name: "Biswajit Saha",
      role: "AI Trainer",
      desc: "Expert in Artificial Intelligence and modern computer technologies with years of industry experience.",
      image: "https://picsum.photos/seed/biswajit/400/400"
    },
    {
      name: "Srinkha Saha",
      role: "Nursery to Class 5 Teacher",
      desc: "Specializes in early childhood education with a compassionate approach to foundation building.",
      image: "https://picsum.photos/seed/srinkha/400/400"
    },
    {
      name: "Srijita Saha",
      role: "Drawing Teacher",
      desc: "Award-winning artist dedicated to helping students express their creativity through various mediums.",
      image: "https://picsum.photos/seed/srijita/400/400"
    }
  ];

  return (
    <section id="teachers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Faculty</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Learn from the Best Educators</h3>
          <p className="text-lg text-slate-600">
            Our teachers are not just educators but mentors who are passionate about student success and holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{teacher.name}</h4>
                <p className="text-brand-600 font-bold text-sm uppercase tracking-wider mb-4">{teacher.role}</p>
                <p className="text-slate-600 leading-relaxed">
                  {teacher.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="lg:grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4">Get in Touch</h2>
              <h3 className="text-4xl font-bold text-white mb-8">Start Your Journey with Us Today</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-800 p-3 rounded-xl">
                    <Phone className="text-brand-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-brand-200 text-sm font-medium mb-1">Call Us</p>
                    <p className="text-white text-xl font-bold">9883181928</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-800 p-3 rounded-xl">
                    <MapPin className="text-brand-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-brand-200 text-sm font-medium mb-1">Visit Us</p>
                    <p className="text-white text-xl font-bold leading-relaxed">
                      Police Para, Garia,<br />
                      near Asharamji Ashram
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-800 p-3 rounded-xl">
                    <Mail className="text-brand-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-brand-200 text-sm font-medium mb-1">Email Us</p>
                    <p className="text-white text-xl font-bold">info@computertuitionpoint.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 lg:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>  
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="9883181928"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Our Location</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Find Us in Garia</h3>
          <p className="text-lg text-slate-600">
            We are conveniently located near Asharamji Ashram in Police Para, Garia. Search "Computer Tuition Point" on Google Maps for easy directions.
          </p>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.824847346743!2d88.3846663753198!3d22.4732170795627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713899999999%3A0x7d9f7d9f7d9f7d9f!2sGaria%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1712730000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
          
          <div className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-2xl max-w-xs border border-slate-100 hidden md:block">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-brand-100 p-2 rounded-lg">
                <MapPin className="text-brand-600 w-5 h-5" />
              </div>
              <p className="font-bold text-slate-900">Visit Our Center</p>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Police Para, Garia, near Asharamji Ashram. We're open Monday to Saturday.
            </p>
            <a 
              href="https://www.google.com/maps/search/Computer+Tuition+Point+Garia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-600 text-sm font-bold flex items-center hover:underline"
            >
              Get Directions <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-brand-600 p-2 rounded-lg mr-2">
              <GraduationCap className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold font-display tracking-tight text-brand-900">
              Computer Tuition Point
            </span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Computer Tuition Point. All rights reserved.
          </div>

          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
