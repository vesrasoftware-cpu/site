import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Palette,
  LineChart,
  ShoppingCart,
  Lock,
  Cpu,
  Globe,
  Blocks,
  Rocket
} from "lucide-react";

interface ServicesPageProps {
  setCurrentPage: (page: string) => void;
}

function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const services = [
    { icon: Code2, title: "Custom Software Development", img: "/cd.jpeg", description: "Tailored software solutions designed to meet your unique business requirements with scalable, maintainable code.", features: ["Full-stack Development", "Enterprise Solutions", "Legacy System Modernization"] },
    { icon: Smartphone, title: "Mobile App Development", img: "/md.jpeg", description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.", features: ["iOS & Android Apps", "React Native", "Flutter Development"] },
    { icon: Globe, title: "Web Development", img: "/wd.jpeg", description: "Modern, responsive web applications built with cutting-edge frameworks and best practices.", features: ["React & Vue.js", "Progressive Web Apps", "E-commerce Platforms"] },
    { icon: Cloud, title: "Cloud Solutions", img: "/cs.jpeg", description: "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.", features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD"] },
    { icon: Palette, title: "UI/UX Design", img: "/ui.jpeg", description: "Beautiful, intuitive interfaces that prioritize user experience and drive engagement.", features: ["User Research", "Wireframing & Prototyping", "Design Systems"] },
    { icon: Database, title: "Database Solutions", img: "/db.jpeg", description: "Robust database architecture and management for optimal data storage and retrieval.", features: ["SQL & NoSQL", "Database Optimization", "Data Migration"] },
    { icon: Cpu, title: "AI & Machine Learning", img: "/ai.jpeg", description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.", features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"] },
    { icon: Lock, title: "Cybersecurity", img: "/c.jpeg", description: "Comprehensive security solutions to protect your digital assets and ensure compliance.", features: ["Security Audits", "Penetration Testing", "Compliance Management"] },
    { icon: ShoppingCart, title: "E-commerce Solutions", img: "/e.jpeg", description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.", features: ["Custom Storefronts", "Payment Gateway Integration", "Order Management"] },
    { icon: LineChart, title: "Business Intelligence", img: "/bi.jpeg", description: "Data-driven insights and analytics to help you make informed business decisions.", features: ["Data Visualization", "Custom Dashboards", "Reporting Solutions"] },
    { icon: Blocks, title: "API Development", img: "/a.jpeg", description: "RESTful and GraphQL APIs that enable seamless integration and communication.", features: ["REST & GraphQL", "API Documentation", "Third-party Integrations"] },
    { icon: Rocket, title: "Digital Transformation", img: "/d.jpeg", description: "End-to-end digital transformation strategies to modernize your business operations.", features: ["Strategy Consulting", "Process Automation", "Change Management"] },
  ];

  return (
    <div className="pt-16 w-full overflow-x-hidden bg-black">
      {/* ---------------- HERO ---------------- */}
      <section
        className="min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/services.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Services Hero"
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute top-10 right-2 w-32 h-32 sm:w-60 sm:h-60 md:w-96 md:h-96 bg-neon-purple/10 blur-3xl rounded-full animate-float" aria-hidden="true"></div>
        <div className="absolute bottom-10 left-2 w-32 h-32 sm:w-60 sm:h-60 md:w-96 md:h-96 bg-neon-blue/10 blur-3xl rounded-full animate-float" aria-hidden="true"></div>

        <div className="max-w-2xl sm:max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-4 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full border border-neon-purple/30">
            <span className="text-xs sm:text-sm font-medium text-neon-purple">✦ What We Offer</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-8 text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-red-600">Services</span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-3xl mx-auto">
            High-quality software services powered by innovation and world-class execution.
          </p>
        </div>
      </section>

      {/* ---------------- GRID ---------------- */}
      <section className="py-8 xs:py-10 sm:py-16 md:py-28 px-2 xs:px-4 sm:px-6 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-neon-cyan/30 hover:-translate-y-2 transition-all duration-300 flex flex-col min-h-[340px] focus-within:ring-2 focus-within:ring-neon-cyan"
                tabIndex={0}
                aria-label={service.title}
              >
                <div className="w-full h-32 xs:h-36 sm:h-40 md:h-48 overflow-hidden bg-black/20 flex items-center justify-center">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover object-center opacity-90" draggable="false" />
                </div>
                <div className="p-4 xs:p-5 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mb-2 sm:mb-4">
                    <Icon className="text-neon-blue" size={24} aria-hidden="true" />
                    <h3 className="text-base xs:text-lg sm:text-2xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base mb-3 sm:mb-6 flex-1">{service.description}</p>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 text-xs xs:text-sm sm:text-base">
                        <div className="w-2 h-2 min-w-[8px] min-h-[8px] bg-neon-blue rounded-full mr-2 sm:mr-3" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-20 xs:py-24 sm:py-32 px-2 xs:px-6 bg-black relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 xs:w-80 xs:h-80 sm:w-96 sm:h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float animation-delay-2" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="rounded-[2.5rem] xs:rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 xs:p-12 sm:p-16 shadow-[0_0_60px_-10px_rgba(0,255,255,0.25)] hover:shadow-[0_0_80px_-10px_rgba(140,0,255,0.3)] transition-all duration-500">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight text-center mb-4">
              <span className="block">Ready to</span>
              <span className="block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
                Start Your Project?
              </span>
            </h2>
            <p className="text-gray-300 text-base xs:text-lg md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-center">
              Let’s collaborate and build something extraordinary together.
            </p>
            <button
              className="px-8 xs:px-10 sm:px-14 py-4 xs:py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold text-base xs:text-lg shadow-lg hover:scale-110 transition-all duration-300 text-white min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              onClick={() => setCurrentPage('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
