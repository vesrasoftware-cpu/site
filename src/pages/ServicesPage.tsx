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

function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business requirements with scalable, maintainable code.",
      features: [
        "Full-stack Development",
        "Enterprise Solutions",
        "Legacy System Modernization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android Apps", "React Native", "Flutter Development"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge frameworks and best practices.",
      features: ["React & Vue.js", "Progressive Web Apps", "E-commerce Platforms"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
      features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that prioritize user experience and drive engagement.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems"],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description:
        "Robust database architecture and management for optimal data storage and retrieval.",
      features: ["SQL & NoSQL", "Database Optimization", "Data Migration"],
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: [
        "Custom Storefronts",
        "Payment Gateway Integration",
        "Order Management",
      ],
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description:
        "Data-driven insights and analytics to help you make informed business decisions.",
      features: ["Data Visualization", "Custom Dashboards", "Reporting Solutions"],
    },
    {
      icon: Blocks,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs that enable seamless integration and communication.",
      features: ["REST & GraphQL", "API Documentation", "Third-party Integrations"],
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation strategies to modernize your business operations.",
      features: ["Strategy Consulting", "Process Automation", "Change Management"],
    },
  ];

  return (
    <div className="pt-16">

      {/* ------------------ HERO SECTION (unchanged) ------------------ */}
      <section
        className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/services.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-6 py-3 glass rounded-full border border-neon-purple/30">
            <span className="text-sm font-medium text-neon-purple">✦ What We Offer</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-red-600">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            Comprehensive software solutions tailored to drive your business forward with{" "}
            <span className="text-white font-semibold">cutting-edge technology</span> and expert execution.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </section>

      {/* ------------------ SERVICES GRID (New About-style) ------------------ */}
      <section className="py-20 sm:py-24 md:py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-neon-cyan/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-all duration-500">
                    <Icon size={40} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>

                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------ DEVELOPMENT PROCESS (Upgraded) ------------------ */}
      <section className="py-20 sm:py-24 md:py-32 px-6 relative overflow-hidden bg-black">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 glass rounded-full">
              <span className="text-sm font-medium text-neon-blue">⚡ Our Approach</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Development{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and defining project scope",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating intuitive designs and user experiences",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Development",
                description: "Building robust solutions with clean code",
                icon: "⚙️",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support",
                icon: "🚀",
              },
            ].map((phase, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-neon-cyan/40 hover:scale-105 transition-all duration-500">
                  <div className="text-6xl mb-4">{phase.icon}</div>
                  <div className="text-5xl font-black bg-gradient-to-br from-neon-cyan to-neon-purple bg-clip-text text-transparent opacity-20 group-hover:opacity-100 transition-all duration-500 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ CTA (Upgraded) ------------------ */}
      <section className="py-20 sm:py-24 md:py-32 px-6 relative bg-black">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-16 border border-white/20 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10 rounded-[3rem]"></div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Ready to Start <br />
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Your Project?
              </span>
            </h2>

            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>

            <button className="px-12 py-6 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
