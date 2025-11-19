import { ArrowRight, Code2, Sparkles, Zap, Globe, Shield, Cpu, Rocket, Brain, Database, Cloud, Lock, TrendingUp } from 'lucide-react';

function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background layer: animated zoom-out */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 hero-bg"
            style={{ backgroundImage: "url('/home.jpeg')" }}
          />
        </div>

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content: glide-up animation */}
        <div className="max-w-6xl mx-auto text-center relative z-10 py-20 glide-up">

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-300">
            Innovative Software
            <br />
            <span className="text-gradient">
              Solutions for Tomorrow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Transform your business with <span className="font-bold white-900">cutting-edge technology solutions</span>. 
            We deliver exceptional software services that drive growth and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-10 py-4 wp-gradient-primary text-white text-lg font-bold hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg">
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '500+', label: 'Projects' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' }
            ].map((stat, idx) => (
              <div key={idx} className="wp-card wp-card-hover p-6 bg-white">
                <div className="text-4xl font-black text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Expanded */}
      <section className="py-20 sm:py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 border border-primary-200">
              <span className="text-sm font-semibold text-primary-700">✦ Our Advantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-gradient">Vesra</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations
            </p>
          </div>

          {/* Lightning Fast Performance */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <Zap size={32} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Lightning Fast Performance</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Speed is critical in today's digital world. Our optimized solutions deliver exceptional performance that keeps your users engaged and your business running smoothly.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Sub-Second Response Times</h4>
                  <p className="text-gray-600">Optimized code and infrastructure ensure your applications respond in milliseconds, not seconds.</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Performance Monitoring</h4>
                  <p className="text-gray-600">Real-time monitoring and alerts to identify and resolve performance bottlenecks instantly.</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Load Optimization</h4>
                  <p className="text-gray-600">CDN integration, caching strategies, and code splitting for blazing-fast page loads.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure & Reliable */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Shield size={32} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Trust is the foundation of our services. We implement enterprise-grade security measures and maintain 99.9% uptime to ensure your business never stops.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">99.9% Uptime SLA</h4>
                  <p className="text-gray-600">Guaranteed availability with redundant systems and automated failover mechanisms.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Data Encryption</h4>
                  <p className="text-gray-600">End-to-end encryption for data at rest and in transit using industry-standard protocols.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Regular Security Audits</h4>
                  <p className="text-gray-600">Continuous security assessments and penetration testing to identify vulnerabilities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation First */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={32} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Innovation First Approach</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Stay ahead of the competition with cutting-edge technologies and forward-thinking strategies that position your business for future success.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Emerging Technologies</h4>
                  <p className="text-gray-600">Early adoption of AI, blockchain, and other emerging tech to give you a competitive edge.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">R&D Investment</h4>
                  <p className="text-gray-600">Dedicated research team exploring new methodologies and tools for better solutions.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Future-Proof Architecture</h4>
                  <p className="text-gray-600">Build systems designed to adapt and scale with evolving business needs and technologies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Code */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Code2 size={32} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Clean Code Standards</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Quality code is maintainable code. We follow industry best practices to create scalable, well-documented codebases that stand the test of time.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Code Reviews</h4>
                  <p className="text-gray-600">Rigorous peer reviews and automated testing to ensure code quality and consistency.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Documentation</h4>
                  <p className="text-gray-600">Detailed documentation for easy onboarding and long-term maintainability.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Design Patterns</h4>
                  <p className="text-gray-600">Proven architectural patterns and SOLID principles for robust, scalable applications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Globe size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Global Reach & Support</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Serve customers worldwide with confidence. Our global infrastructure and 24/7 support ensure your business operates seamlessly across all time zones.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Support Team</h4>
                  <p className="text-gray-600">Round-the-clock technical support with guaranteed response times for critical issues.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Multi-Region Deployment</h4>
                  <p className="text-gray-600">Deploy applications across multiple regions for low latency and high availability.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Localization Support</h4>
                  <p className="text-gray-600">Multi-language and multi-currency support to reach global markets effectively.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Solutions */}
          <div>
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-pink-50 flex items-center justify-center flex-shrink-0">
                  <Brain size={32} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">AI-Powered Solutions</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Leverage artificial intelligence to automate tasks, gain insights, and deliver personalized experiences that delight your customers.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Intelligent Automation</h4>
                  <p className="text-gray-600">AI-driven automation to reduce manual tasks and improve operational efficiency.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Smart Recommendations</h4>
                  <p className="text-gray-600">Machine learning algorithms that provide personalized product and content recommendations.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Anomaly Detection</h4>
                  <p className="text-gray-600">AI-powered monitoring to detect unusual patterns and prevent potential issues proactively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Expanded */}
      <section className="py-20 sm:py-24 md:py-32 px-6 wp-section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 border border-primary-200">
              <span className="text-sm font-semibold text-primary-700">⚡ Our Technology Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Powered by <span className="text-gradient">Modern Technologies</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions
            </p>
          </div>

          {/* Cloud Native */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Cloud size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Cloud Native Development</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Build applications that leverage the full potential of cloud computing with scalability, resilience, and flexibility at their core.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Microservices Architecture</h4>
                  <p className="text-gray-600">Design and deploy independent, loosely-coupled services that scale efficiently and independently.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Containerization</h4>
                  <p className="text-gray-600">Docker and Kubernetes orchestration for consistent deployments across all environments.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Auto-Scaling</h4>
                  <p className="text-gray-600">Dynamic resource allocation that automatically adjusts to handle varying workloads efficiently.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Big Data */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Database size={32} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Big Data & Analytics</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Process and analyze massive datasets to extract valuable insights that drive informed business decisions.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Data Warehousing</h4>
                  <p className="text-gray-600">Build robust data warehouses using Snowflake, Redshift, or BigQuery for enterprise analytics.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Processing</h4>
                  <p className="text-gray-600">Stream processing with Apache Kafka and Spark for instant data insights and reactions.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Data Visualization</h4>
                  <p className="text-gray-600">Interactive dashboards and reports using Tableau, Power BI, and custom visualization tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Lock size={32} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Implement comprehensive security measures to protect your data, applications, and infrastructure from threats.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Zero Trust Architecture</h4>
                  <p className="text-gray-600">Never trust, always verify - implementing identity-based security at every layer.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Encryption & Compliance</h4>
                  <p className="text-gray-600">End-to-end encryption, GDPR, HIPAA, and SOC 2 compliance for data protection.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Threat Detection</h4>
                  <p className="text-gray-600">AI-powered security monitoring and automated threat response systems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DevOps */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Rocket size={32} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">DevOps & CI/CD</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Accelerate development cycles with automated workflows, continuous integration, and seamless deployment pipelines.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Automated Pipelines</h4>
                  <p className="text-gray-600">Jenkins, GitLab CI, and GitHub Actions for automated testing and deployment.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Infrastructure as Code</h4>
                  <p className="text-gray-600">Terraform and Ansible for reproducible and version-controlled infrastructure.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Monitoring & Logging</h4>
                  <p className="text-gray-600">Comprehensive observability with Prometheus, Grafana, and ELK stack.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-pink-50 flex items-center justify-center flex-shrink-0">
                  <Brain size={32} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Harness the power of artificial intelligence to automate processes, predict outcomes, and enhance user experiences.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Predictive Analytics</h4>
                  <p className="text-gray-600">Machine learning models that forecast trends and behaviors using historical data.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Natural Language Processing</h4>
                  <p className="text-gray-600">Build intelligent chatbots, sentiment analysis, and language understanding systems.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Computer Vision</h4>
                  <p className="text-gray-600">Image recognition, object detection, and visual AI for automated quality control.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Edge Computing */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Cpu size={32} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Edge Computing</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Process data closer to the source for reduced latency, improved performance, and enhanced real-time capabilities.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">IoT Integration</h4>
                  <p className="text-gray-600">Connect and manage billions of IoT devices with edge processing capabilities.</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Low-Latency Applications</h4>
                  <p className="text-gray-600">Deploy applications at the edge for millisecond response times and better UX.</p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Distributed Processing</h4>
                  <p className="text-gray-600">Optimize bandwidth and reduce cloud costs with intelligent edge data processing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Microservices */}
          <div className="mb-20">
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <Globe size={32} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Microservices Architecture</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Build applications as a collection of small, independent services that communicate through well-defined APIs.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-cyan-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Service Mesh</h4>
                  <p className="text-gray-600">Istio and Linkerd for managing service-to-service communication securely.</p>
                </div>
                <div className="border-l-4 border-cyan-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">API Gateway</h4>
                  <p className="text-gray-600">Centralized API management with Kong, AWS API Gateway, and Azure APIM.</p>
                </div>
                <div className="border-l-4 border-cyan-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Event-Driven Architecture</h4>
                  <p className="text-gray-600">Asynchronous communication patterns for loosely coupled, scalable systems.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div>
            <div className="wp-card p-10 bg-white">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={32} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Transform raw data into actionable insights with powerful analytics tools and business intelligence platforms.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Business Intelligence</h4>
                  <p className="text-gray-600">Comprehensive BI solutions with custom dashboards and automated reporting.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Predictive Modeling</h4>
                  <p className="text-gray-600">Statistical models and ML algorithms to forecast business outcomes accurately.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Analytics</h4>
                  <p className="text-gray-600">Deep insights into customer behavior, preferences, and lifetime value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 border border-primary-200">
              <span className="text-sm font-semibold text-primary-700">❓ Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Got <span className="text-gradient">Questions?</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our services, processes, and technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What technologies do you specialize in?</h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in modern web and mobile technologies including React, TypeScript, Node.js, Python, AWS, Azure, and Google Cloud. Our team stays current with the latest frameworks and tools to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600 leading-relaxed">
                Project timelines vary based on complexity and scope. A simple web application might take 4-8 weeks, while enterprise solutions can take 3-6 months. We provide detailed timelines during the planning phase and maintain transparent communication throughout the project.
              </p>
            </div>

            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you offer ongoing support and maintenance?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular updates, security patches, and technical support. We ensure your applications remain secure, performant, and up-to-date.
              </p>
            </div>

            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Can you work with our existing systems?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We have extensive experience integrating with legacy systems, third-party APIs, and existing infrastructure. Our team ensures seamless integration while modernizing your technology stack incrementally.
              </p>
            </div>

            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is your development process?</h3>
              <p className="text-gray-600 leading-relaxed">
                We follow agile methodologies with iterative development cycles. Our process includes discovery, design, development, testing, and deployment phases. You'll receive regular updates, demos, and have opportunities for feedback throughout the project.
              </p>
            </div>

            <div className="wp-card p-8 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you ensure project security and data privacy?</h3>
              <p className="text-gray-600 leading-relaxed">
                Security is our top priority. We implement industry-standard security practices, conduct regular code reviews and security audits, use encrypted communication channels, and comply with GDPR, HIPAA, and other relevant regulations. All team members sign NDAs, and we can work within your security frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Expanded */}
      <section className="py-20 sm:py-24 md:py-32 px-6 wp-section-light">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Card */}
          {/* Why Start Now Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="text-gradient">Start Now?</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Every day you wait is an opportunity lost. Here's what you gain by partnering with us today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="wp-card p-8 bg-white text-center">
                <div className="w-16 h-16 bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <Rocket size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Fast Time to Market</h4>
                <p className="text-gray-600">
                  Our agile approach and experienced team ensure your product reaches the market quickly, giving you a competitive advantage and faster ROI.
                </p>
              </div>

              <div className="wp-card p-8 bg-white text-center">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Scalable Growth</h4>
                <p className="text-gray-600">
                  Build on a foundation designed for growth. Our solutions scale seamlessly as your business expands, eliminating costly redesigns later.
                </p>
              </div>

              <div className="wp-card p-8 bg-white text-center">
                <div className="w-16 h-16 bg-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Risk Mitigation</h4>
                <p className="text-gray-600">
                  Proven methodologies, comprehensive testing, and ongoing support minimize project risks and ensure successful delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Process Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple <span className="text-gradient">3-Step Process</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Getting started is easy. We've streamlined our onboarding to get you up and running quickly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="wp-card p-8 bg-white h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Discovery Call</h4>
                  <p className="text-gray-600 mb-6">
                    Schedule a free 30-minute consultation where we'll discuss your goals, challenges, and vision. No commitment required.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Understand your requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Assess technical feasibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Answer your questions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="wp-card p-8 bg-white h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Proposal & Planning</h4>
                  <p className="text-gray-600 mb-6">
                    Receive a detailed proposal with timeline, costs, and project roadmap. We'll refine it together until it's perfect.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Detailed project scope</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Clear milestones & deliverables</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="wp-card p-8 bg-white h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Kickoff & Delivery</h4>
                  <p className="text-gray-600 mb-6">
                    Once approved, we hit the ground running. You'll have regular updates, demos, and direct access to the team.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Agile development sprints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Weekly progress reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span>Continuous feedback loop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
            <div className="text-center mb-12 mt-20">
          <div className="wp-card p-16 text-center bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Transform <br />
              <span className="text-gradient">Your Business?</span>
            </h2>
            <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our innovative solutions and expert team
            </p>
            <button className="px-12 py-5 wp-gradient-primary text-white font-bold text-lg hover:opacity-90 transition-all inline-flex items-center gap-3 shadow-lg">
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
