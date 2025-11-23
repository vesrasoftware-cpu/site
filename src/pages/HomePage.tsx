import { ArrowRight, Code2, Sparkles, Zap, Globe, Shield, Cpu, Rocket, Brain, Database, Cloud, Lock, TrendingUp } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="pt-16 text-slate-900">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hh.jpeg')" }}
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="w-full max-w-6xl mx-auto text-center relative z-10 py-12 sm:py-16 md:py-20 glide-up">

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight text-white">
            Innovative Software <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              Solutions for Tomorrow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-10 max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
            Transform your business with <span className="font-bold">cutting-edge technology solutions</span>. 
            We deliver exceptional software services that drive growth and innovation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 sm:mb-16">
            <button
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold rounded-xl shadow-md hover:opacity-90 transition-all flex items-center gap-3"
              onClick={() => setCurrentPage('contact')}
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Projects' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="border border-blue-100 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-full h-40 overflow-hidden rounded-t-xl">
                  <img
                    src={
                      idx === 0
                        ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
                        : idx === 1
                        ? 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
                        : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'
                    }
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------ */}
      {/* FEATURES SECTION */}
      {/* ------------------------------ */}
      <section className="py-20 px-6 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 border border-blue-200 rounded-md">
              <span className="text-sm font-semibold text-blue-700">✦ Our Advantages</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Vesra</span>
            </h2>

            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
            </p>
          </div>

          {/* Lightning Fast */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Zap size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Lightning Fast Performance</h3>
                  <p className="text-slate-600 text-lg">
                    Speed is critical in today's digital world. Our optimized solutions deliver exceptional performance.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {[
                  { t: 'Sub-Second Response Times', d: 'Optimized code and infrastructure ensure your applications respond in milliseconds.' },
                  { t: 'Performance Monitoring', d: 'Real-time monitoring and alerts to identify bottlenecks instantly.' },
                  { t: 'Load Optimization', d: 'CDN integration, caching strategies, and code splitting for faster loads.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* SECURITY */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Shield size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Secure & Reliable</h3>
                  <p className="text-slate-600 text-lg">
                    Trust is the foundation of our services. We implement enterprise-grade security and maintain 99.9% uptime.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: '99.9% Uptime SLA', d: 'Guaranteed availability with redundant systems and automated failover.' },
                  { t: 'Data Encryption', d: 'End-to-end encryption for data at rest and in transit.' },
                  { t: 'Security Audits', d: 'Continuous assessments and penetration tests to detect vulnerabilities.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* INNOVATION */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Sparkles size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Innovation First Approach</h3>
                  <p className="text-slate-600 text-lg">
                    Stay ahead with cutting-edge technologies and forward-thinking strategies.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Emerging Technologies', d: 'AI, blockchain, and other modern tools.' },
                  { t: 'R&D Investment', d: 'Dedicated research teams exploring future solutions.' },
                  { t: 'Future-Proof Architecture', d: 'Systems designed to adapt and scale over time.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* CLEAN CODE */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Code2 size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Clean Code Standards</h3>
                  <p className="text-slate-600 text-lg">
                    We write clean, scalable, maintainable code following industry best practices.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Code Reviews', d: 'Peer reviews & automated checks for quality.' },
                  { t: 'Documentation', d: 'Clear and complete project documentation.' },
                  { t: 'Design Patterns', d: 'Robust, scalable architectural patterns.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* GLOBAL SUPPORT */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Globe size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Global Reach & Support</h3>
                  <p className="text-slate-600 text-lg">
                    Our global infrastructure ensures your business operates 24/7 without interruption.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: '24/7 Support', d: 'Guaranteed response times for critical issues.' },
                  { t: 'Multi-Region Deployment', d: 'Low latency with global infrastructure.' },
                  { t: 'Localization Support', d: 'Multi-language & multi-currency support.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* AI */}
          {/* ------------------------------ */}
          <div>
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Brain size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">AI-Powered Solutions</h3>
                  <p className="text-slate-600 text-lg">
                    Automate tasks, gain insights, and deliver intelligent digital experiences.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Intelligent Automation', d: 'Reduce manual work with AI-driven automation.' },
                  { t: 'Smart Recommendations', d: 'Personalized recommendations powered by ML.' },
                  { t: 'Anomaly Detection', d: 'Identify unusual patterns before issues arise.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------ */}
      {/* TECHNOLOGIES SECTION */}
      {/* ------------------------------ */}
      <section className="py-20 sm:py-24 md:py-32 px-6 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">⚡ Our Technology Stack</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Powered by <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Modern Technologies</span>
            </h2>

            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure solutions.
            </p>
          </div>

          {/* ------------------------------ */}
          {/* CLOUD NATIVE */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Cloud size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Cloud Native Development</h3>
                  <p className="text-slate-600 text-lg">
                    Build applications that embrace scalability and resilience through cloud technologies.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Microservices Architecture', d: 'Independent services that scale efficiently.' },
                  { t: 'Containerization', d: 'Docker & Kubernetes for consistent deployments.' },
                  { t: 'Auto-Scaling', d: 'Automatic resource allocation based on demand.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* BIG DATA */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Database size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Big Data & Analytics</h3>
                  <p className="text-slate-600 text-lg">Analyze massive datasets to extract meaningful insights.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Data Warehousing', d: 'Snowflake, Redshift, BigQuery & more.' },
                  { t: 'Real-Time Processing', d: 'Kafka & Spark for live data insights.' },
                  { t: 'Visualization', d: 'Dashboards using Tableau, Power BI, custom charts.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------ */}
          {/* SECURITY */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Lock size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
                  <p className="text-slate-600 text-lg">
                    Protect your infrastructure, applications, and data with industry-standard security.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Zero Trust Architecture', d: 'Identity-based security for every layer.' },
                  { t: 'Compliance', d: 'GDPR, HIPAA, SOC 2, encryption everywhere.' },
                  { t: 'Threat Detection', d: 'AI-powered monitoring and automated response.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* DEVOPS */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Rocket size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">DevOps & CI/CD</h3>
                  <p className="text-slate-600 text-lg">
                    Accelerate development cycles through automation and continuous deployment.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Automated Pipelines', d: 'GitHub Actions, GitLab CI, Jenkins.' },
                  { t: 'Infrastructure as Code', d: 'Terraform & Ansible for repeatable infra.' },
                  { t: 'Monitoring & Logging', d: 'Prometheus, Grafana, ELK, OpenTelemetry.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ------------------------------ */}
          {/* MACHINE LEARNING */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Brain size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">AI & Machine Learning</h3>
                  <p className="text-slate-600 text-lg">
                    Deploy models that predict, analyze, and automate at scale.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Predictive Analytics', d: 'Models that forecast trends & behaviors.' },
                  { t: 'Natural Language Processing', d: 'Chatbots, sentiment analysis, AI text tools.' },
                  { t: 'Computer Vision', d: 'Object detection, quality automation, OCR.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------ */}
          {/* EDGE COMPUTING */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Cpu size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Edge Computing</h3>
                  <p className="text-slate-600 text-lg">
                    Process data close to the source for faster, real-time insights.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'IoT Integration', d: 'Handle huge networks of sensors & devices.' },
                  { t: 'Low-Latency Apps', d: 'Deliver microsecond response times.' },
                  { t: 'Distributed Processing', d: 'Reduce cloud costs with edge workloads.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------ */}
          {/* MICROSERVICES */}
          {/* ------------------------------ */}
          <div className="mb-20">
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <Globe size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Microservices Architecture</h3>
                  <p className="text-slate-600 text-lg">
                    Build modular systems that scale independently and communicate seamlessly.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Service Mesh', d: 'Secure & observable service communication.' },
                  { t: 'API Gateway', d: 'Kong, AWS APIG, Azure APIM.' },
                  { t: 'Event Driven Systems', d: 'Asynchronous, scalable communication.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* ADVANCED ANALYTICS */}
          {/* --------------------------------------------- */}
          <div>
            <div className="border border-blue-100 p-10 bg-white rounded-xl shadow-sm">

              <div className="flex gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg">
                  <TrendingUp size={32} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Advanced Analytics</h3>
                  <p className="text-slate-600 text-lg">
                    Turn raw data into meaningful insights to drive powerful business decisions.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { t: 'Business Intelligence', d: 'Dashboards & automated reporting.' },
                  { t: 'Predictive Modeling', d: 'Statistical + ML models for forecasting.' },
                  { t: 'Customer Analytics', d: 'Understand behavior, trends, and retention.' }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------ */}
      {/* FAQ */}
      {/* ------------------------------ */}
      <section className="py-20 px-6 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">❓ Frequently Asked Questions</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Got <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Questions?</span>
            </h2>

            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our services, processes, and technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What technologies do you specialize in?",
                a: "We specialize in React, TypeScript, Node.js, Python, AWS, Azure, GCP, and modern frameworks."
              },
              {
                q: "How long does a typical project take?",
                a: "Timelines vary by scope. Small apps take 4–8 weeks. Large systems take 3–6 months."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes — 24/7 monitoring, updates, patches, and technical support plans are available."
              },
              {
                q: "Can you work with our existing systems?",
                a: "Absolutely. We integrate with legacy systems, APIs, and existing infrastructure."
              },
              {
                q: "What is your development process?",
                a: "Agile with iterative sprints, demos, reviews, and transparent communication."
              },
              {
                q: "How do you ensure project security?",
                a: "Security best practices, audits, encrypted channels, compliance, and NDAs for all team members."
              }
            ].map((item, i) => (
              <div key={i} className="border border-blue-100 p-8 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------ */}
      {/* FINAL CTA */}
      {/* ------------------------------ */}
      <section className="py-20 px-6 bg-blue-50/30">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">Start Now?</span>
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Every day you wait is an opportunity lost. Start achieving results today.
            </p>
          </div>

          {/* Why Start Now Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
                title: "Fast Time to Market",
                desc: "Our agile team delivers quickly so you gain competitive advantage immediately."
              },
              {
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
                title: "Scalable Growth",
                desc: "Grow confidently with infrastructure designed to scale effortlessly."
              },
              {
                img: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
                title: "Risk Mitigation",
                desc: "Proven methodologies reduce risk and ensure successful delivery."
              }
            ].map((c, i) => (
              <div key={i} className="border border-blue-100 bg-white rounded-xl shadow-sm">
                <img src={c.img} className="rounded-t-xl w-full h-60 object-cover" />
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h4>
                  <p className="text-slate-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Step Process */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">3-Step Process</span>
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Getting started is easy — our team makes onboarding simple and smooth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">

            {/* Step 1 */}
            <div className="relative">
              <div className="border border-blue-100 p-8 bg-white rounded-xl shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 mt-4">Discovery Call</h4>
                <p className="text-slate-600 mb-6">
                  Free 30-minute consultation to understand your goals and challenges.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Understand requirements</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Assess feasibility</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Answer your questions</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="border border-blue-100 p-8 bg-white rounded-xl shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 mt-4">Proposal & Planning</h4>
                <p className="text-slate-600 mb-6">
                  You get a detailed plan including timeline, cost, and roadmap.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Detailed scope</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Transparent pricing</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Clear deliverables</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="border border-blue-100 p-8 bg-white rounded-xl shadow-sm h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 mt-4">Kickoff & Delivery</h4>
                <p className="text-slate-600 mb-6">
                  Development begins with ongoing updates and review sessions.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Agile sprints</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Weekly reviews</li>
                  <li className="flex gap-2"><span className="text-blue-600 font-bold">✓</span>Continuous feedback</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-16 rounded-xl shadow-md">
              <h2 className="text-5xl font-bold mb-6 text-slate-900">
                Ready to Transform <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Your Business?</span>
              </h2>

              <p className="text-slate-600 text-xl mb-8 max-w-2xl mx-auto">
                Let’s discuss how our team can help you reach your goals.
              </p>

              <button
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-xl shadow-md hover:opacity-90 flex items-center gap-3 mx-auto"
                onClick={() => setCurrentPage('contact')}
              >
                <span>Contact Us Today</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomePage;
