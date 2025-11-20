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
    img: "/cd.jpeg",
    description:
      "Tailored software solutions designed to meet your unique business requirements with scalable, maintainable code.",
    features: ["Full-stack Development", "Enterprise Solutions", "Legacy System Modernization"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    img: "/md.jpeg",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["iOS & Android Apps", "React Native", "Flutter Development"],
  },
  {
    icon: Globe,
    title: "Web Development",
    img: "/wd.jpeg",
    description:
      "Modern, responsive web applications built with cutting-edge frameworks and best practices.",
    features: ["React & Vue.js", "Progressive Web Apps", "E-commerce Platforms"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    img: "/cs.jpeg",
    description:
      "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
    features: ["AWS & Azure", "Cloud Migration", "DevOps & CI/CD"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    img: "/ui.jpeg",
    description:
      "Beautiful, intuitive interfaces that prioritize user experience and drive engagement.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems"],
  },
  {
    icon: Database,
    title: "Database Solutions",
    img: "/db.jpeg",
    description:
      "Robust database architecture and management for optimal data storage and retrieval.",
    features: ["SQL & NoSQL", "Database Optimization", "Data Migration"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    img: "/ai.jpeg",
    description:
      "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    img: "/c.jpeg",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    img: "/e.jpeg",
    description:
      "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
    features: ["Custom Storefronts", "Payment Gateway Integration", "Order Management"],
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    img: "/bi.jpeg",
    description:
      "Data-driven insights and analytics to help you make informed business decisions.",
    features: ["Data Visualization", "Custom Dashboards", "Reporting Solutions"],
  },
  {
    icon: Blocks,
    title: "API Development",
    img: "/a.jpeg",
    description:
      "RESTful and GraphQL APIs that enable seamless integration and communication.",
    features: ["REST & GraphQL", "API Documentation", "Third-party Integrations"],
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    img: "/d.jpeg",
    description:
      "End-to-end digital transformation strategies to modernize your business operations.",
    features: ["Strategy Consulting", "Process Automation", "Change Management"],
  },
];

  return (
    <div className="pt-16">

      {/* ---------------- HERO ---------------- */}
      <section
        className="min-h-[70vh] flex items-center justify-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/services.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple/10 blur-3xl rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-blue/10 blur-3xl rounded-full animate-float"></div>

        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="inline-block mb-8 px-6 py-3 glass rounded-full border border-neon-purple/30">
            <span className="text-sm font-medium text-neon-purple">✦ What We Offer</span>
          </div>

          <h1 className="text-7xl font-extrabold mb-8 text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-red-600 ">
              Services
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-quality software services powered by innovation and world-class execution.
          </p>
        </div>
      </section>

      {/* ---------------- GRID ---------------- */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-neon-cyan/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-48 w-full overflow-hidden bg-black/20 flex items-center justify-center">
                  <img src={service.img} alt={service.title} className="h-40 object-contain opacity-90" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="text-neon-blue" size={26} />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
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

      {/* ---------------- PROCESS ---------------- */}
      <section className="py-28 px-6 bg-black relative">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="px-4 py-2 glass border border-white/20 rounded-full text-neon-blue">
            ⚡ Our Approach
          </span>
          <h2 className="text-5xl font-bold text-white mt-6">
            Development{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { step: "01", title: "Discovery", icon: "🔍", desc: "Understanding goals & scope" },
            { step: "02", title: "Design", icon: "🎨", desc: "User-focused experience design" },
            { step: "03", title: "Development", icon: "⚙️", desc: "Building reliable solutions" },
            { step: "04", title: "Delivery", icon: "🚀", desc: "Deployment & support" },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl hover:border-neon-cyan/40 hover:scale-105 transition-all duration-500"
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <div className="text-5xl font-black bg-gradient-to-br from-neon-cyan to-neon-purple bg-clip-text text-transparent opacity-20 mb-4">
                {p.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
<section className="py-32 px-6 bg-black relative overflow-hidden">
  {/* Floating gradient orbs */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float animation-delay-2"></div>

  <div className="max-w-4xl mx-auto relative z-10 text-center">
    <div className="rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-16 shadow-[0_0_60px_-10px_rgba(0,255,255,0.25)] hover:shadow-[0_0_80px_-10px_rgba(140,0,255,0.3)] transition-all duration-500">
      
      <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-center">
  <span className="block">Ready to</span>
  <span className="block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
    Start Your Project?
  </span>
</h2>


      <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed text-center">
        Let’s collaborate and build something extraordinary together.
      </p>

      <button className="px-14 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold text-lg shadow-lg hover:scale-110 transition-all duration-300 text-white">
        Get in Touch
      </button>
    </div>
  </div>
</section>


    </div>
  );
}

export default ServicesPage;
