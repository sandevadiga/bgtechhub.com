"use client";

import { useEffect, useRef, useState } from "react";

interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: { step: string; desc: string }[];
  timeline: string;
  priceRange: string;
}

interface WhyDetail {
  id: string;
  num: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  highlights: { label: string; value: string }[];
  points: string[];
  caseStudy: { title: string; desc: string };
}

const whyDetails: WhyDetail[] = [
  {
    id: "fast-execution",
    num: "01",
    icon: "⚡",
    title: "Fast Execution",
    tagline: "Speed is our superpower — without compromising quality.",
    description:
      "In the startup world, timing is everything. We understand that getting to market fast can be the difference between success and failure. Our development process is built for speed — we use agile sprints, pre-built component libraries, and battle-tested architectures to ship your product in record time. But speed never means shortcuts — every line of code goes through rigorous review and testing.",
    highlights: [
      { label: "Average MVP Delivery", value: "4–6 weeks" },
      { label: "Sprint Cycle", value: "1–2 weeks" },
      { label: "Response Time", value: "< 24 hours" },
    ],
    points: [
      "Agile sprints with weekly demos and feedback loops",
      "Pre-built component libraries for rapid prototyping",
      "CI/CD pipelines for instant deployment",
      "Daily standups and transparent progress tracking",
      "Parallel design and development workflows",
      "Quick iteration based on user feedback",
    ],
    caseStudy: {
      title: "RideXe — MVP in 5 Weeks",
      desc: "We took RideXe from concept to a fully functional travel comparison app with AI-powered route suggestions in just 5 weeks, including Play Store deployment.",
    },
  },
  {
    id: "startup-mindset",
    num: "02",
    icon: "🚀",
    title: "Startup Mindset",
    tagline: "We think like founders, not just developers.",
    description:
      "We don't just write code — we think about your business. Having built and launched our own products (RideXe, PROtask), we understand the startup journey firsthand. We know what it takes to go from zero to one: validating ideas, finding product-market fit, prioritizing features, and scaling efficiently. When you work with BG THUB, you get a team that thinks like co-founders.",
    highlights: [
      { label: "Own Products Built", value: "2+" },
      { label: "Startup Projects", value: "50+" },
      { label: "Success Rate", value: "95%" },
    ],
    points: [
      "Product strategy & roadmap planning",
      "Feature prioritization using the MoSCoW method",
      "Lean MVP approach — build, measure, learn",
      "Market validation & competitor analysis support",
      "Scalable architecture from day one",
      "Growth-focused development decisions",
    ],
    caseStudy: {
      title: "PROtask — From Side Project to Product",
      desc: "PROtask started as an internal tool. Using our startup mindset, we turned it into a public productivity platform used by students and teams — proving our approach works.",
    },
  },
  {
    id: "affordable-solutions",
    num: "03",
    icon: "💰",
    title: "Affordable Solutions",
    tagline: "Premium quality at prices that make sense for startups.",
    description:
      "We believe great technology shouldn't be reserved for companies with massive budgets. BG THUB offers flexible, transparent pricing designed specifically for startups, small businesses, and students. Whether you're bootstrapping or funded, we tailor our engagement model to fit your budget without sacrificing quality. No hidden fees, no surprises — just honest, value-driven pricing.",
    highlights: [
      { label: "Starting From", value: "₹5,000" },
      { label: "Payment Plans", value: "Flexible" },
      { label: "Student Discount", value: "Up to 60%" },
    ],
    points: [
      "Transparent, milestone-based pricing",
      "Flexible payment plans — pay as you go",
      "Special discounted rates for students",
      "Free consultation & project scoping",
      "No hidden costs or surprise invoices",
      "Value-packed packages for every budget tier",
    ],
    caseStudy: {
      title: "Student Projects — Starting at ₹5,000",
      desc: "We've helped 20+ students build portfolio-ready projects at student-friendly prices, proving that quality development doesn't have to break the bank.",
    },
  },
  {
    id: "real-world-experience",
    num: "04",
    icon: "🏆",
    title: "Real-World Experience",
    tagline: "Built by makers who've shipped real products.",
    description:
      "Our team doesn't just know theory — we've been in the trenches. We've built, launched, and maintained real products used by real users. From handling production crashes at 2 AM to optimizing app store listings for maximum downloads, we've done it all. This hands-on experience means we can anticipate problems before they happen and build solutions that work in the real world, not just in demos.",
    highlights: [
      { label: "Products Launched", value: "2+" },
      { label: "Projects Delivered", value: "50+" },
      { label: "Technologies", value: "15+" },
    ],
    points: [
      "Production-grade code with proper error handling",
      "Performance optimization & scalability planning",
      "App Store & Play Store deployment expertise",
      "Real user feedback integration & analytics",
      "Security best practices built-in from the start",
      "Post-launch support, monitoring & maintenance",
    ],
    caseStudy: {
      title: "50+ Projects — Zero Failed Deliveries",
      desc: "Across 50+ projects spanning mobile apps, web platforms, and AI solutions, we maintain a 100% delivery rate with consistently positive client feedback.",
    },
  },
];

const serviceDetails: ServiceDetail[] = [
  {
    id: "app-dev",
    icon: "📱",
    title: "App Development",
    tagline: "From concept to Play Store — we build apps that users love.",
    description:
      "We design and develop high-quality native and cross-platform mobile applications for Android and iOS. Whether you're a startup looking for an MVP or a business wanting a full-featured app, our team delivers polished, scalable, and performant mobile experiences.",
    features: [
      "Native Android (Kotlin) & iOS (Swift) Development",
      "Cross-platform with React Native & Flutter",
      "UI/UX Design with Figma prototypes",
      "Backend API integration & real-time features",
      "Push notifications, analytics & crash monitoring",
      "Play Store & App Store deployment support",
    ],
    process: [
      { step: "Discovery", desc: "We understand your vision, audience, and goals" },
      { step: "Design", desc: "Wireframes & high-fidelity UI/UX prototypes" },
      { step: "Development", desc: "Agile sprints with regular demos" },
      { step: "Testing", desc: "QA, performance, and device testing" },
      { step: "Launch", desc: "Store deployment & post-launch support" },
    ],
    timeline: "4 – 12 weeks",
    priceRange: "₹25,000 – ₹2,00,000+",
  },
  {
    id: "web-dev",
    icon: "🌐",
    title: "Web Design & Development",
    tagline: "Beautiful, fast, and responsive — websites that convert.",
    description:
      "We craft modern, high-performance websites and web applications using the latest frameworks and design systems. From landing pages and portfolios to complex dashboards and SaaS platforms, we build digital experiences tailored to your brand.",
    features: [
      "Custom website design & development",
      "React, Next.js, Vue & modern frameworks",
      "Responsive & mobile-first layouts",
      "SEO optimization & performance tuning",
      "CMS integration (WordPress, Sanity, etc.)",
      "E-commerce, dashboards & admin panels",
    ],
    process: [
      { step: "Briefing", desc: "Define scope, brand guidelines & requirements" },
      { step: "Wireframing", desc: "Layout structure & user flow mapping" },
      { step: "Design", desc: "Pixel-perfect mockups with your feedback" },
      { step: "Build", desc: "Development with clean, maintainable code" },
      { step: "Deploy", desc: "Hosting, domain setup & go-live" },
    ],
    timeline: "2 – 8 weeks",
    priceRange: "₹10,000 – ₹1,50,000+",
  },
  {
    id: "ai-solutions",
    icon: "🤖",
    title: "AI Solutions",
    tagline: "Smart features that give your product an unfair advantage.",
    description:
      "We integrate cutting-edge AI capabilities into your existing products or build AI-powered solutions from scratch. From conversational chatbots and recommendation engines to automation pipelines and intelligent search, we bring the power of AI to your business.",
    features: [
      "Custom AI chatbots & virtual assistants",
      "Recommendation engines & personalization",
      "Natural Language Processing (NLP) integration",
      "Computer vision & image recognition",
      "Workflow automation & smart pipelines",
      "OpenAI, Gemini & custom ML model integration",
    ],
    process: [
      { step: "Assessment", desc: "Identify AI opportunities in your workflow" },
      { step: "Data Strategy", desc: "Data collection, cleaning & preparation" },
      { step: "Prototyping", desc: "Rapid AI proof-of-concept" },
      { step: "Integration", desc: "Seamless embedding into your product" },
      { step: "Optimization", desc: "Fine-tuning, monitoring & iteration" },
    ],
    timeline: "3 – 10 weeks",
    priceRange: "₹30,000 – ₹3,00,000+",
  },
  {
    id: "student-support",
    icon: "🎓",
    title: "Student Project Support",
    tagline: "Turn your academic project into a real-world product.",
    description:
      "We provide end-to-end mentorship and development support for students building real-world projects. Whether it's a final year project, a hackathon idea, or a personal passion project, we help you go from idea to a polished, portfolio-ready product.",
    features: [
      "1-on-1 mentorship from industry builders",
      "Idea validation & feasibility analysis",
      "Architecture design & tech stack guidance",
      "Hands-on coding support & code reviews",
      "Deployment & hosting assistance",
      "Portfolio-ready documentation & presentation",
    ],
    process: [
      { step: "Ideation", desc: "Refine your concept into a viable product" },
      { step: "Planning", desc: "Define features, milestones & tech stack" },
      { step: "Build Together", desc: "Weekly mentorship + development sprints" },
      { step: "Polish", desc: "UI/UX refinement & testing" },
      { step: "Ship It", desc: "Deploy, document & present" },
    ],
    timeline: "4 – 16 weeks",
    priceRange: "₹5,000 – ₹50,000",
  },
];

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [submitLabel, setSubmitLabel] = useState("Send Message →");
  const [submitStyle, setSubmitStyle] = useState<React.CSSProperties>({});
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [bookingLabel, setBookingLabel] = useState("Submit Booking Request →");
  const [bookingStyle, setBookingStyle] = useState<React.CSSProperties>({});
  const [activeWhy, setActiveWhy] = useState<WhyDetail | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background =
          window.scrollY > 60
            ? "rgba(5,10,6,0.98)"
            : "rgba(5,10,6,0.85)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(
      ".service-card, .product-card, .why-card, .testi-card, .port-card, .student-feat, .pillar"
    );
    targets.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(24px)";
      (el as HTMLElement).style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitLabel("✓ Message Sent!");
    setSubmitStyle({ background: "#0f5c20" });
    setTimeout(() => {
      setSubmitLabel("Send Message →");
      setSubmitStyle({});
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBookingLabel("✓ Request Sent!");
    setBookingStyle({ background: "#0f5c20" });
    setTimeout(() => {
      setBookingLabel("Submit Booking Request →");
      setBookingStyle({});
      (e.target as HTMLFormElement).reset();
      setActiveService(null);
    }, 2500);
  }

  function openServiceModal(index: number) {
    setActiveService(serviceDetails[index]);
    setBookingLabel("Submit Booking Request →");
    setBookingStyle({});
    document.body.style.overflow = "hidden";
  }

  function closeServiceModal() {
    setActiveService(null);
    document.body.style.overflow = "";
  }

  function openWhyModal(index: number) {
    setActiveWhy(whyDetails[index]);
    document.body.style.overflow = "hidden";
  }

  function closeWhyModal() {
    setActiveWhy(null);
    document.body.style.overflow = "";
  }

  return (
    <>
      {/* NAV */}
      <nav ref={navRef}>
        <div className="nav-logo">
          <span>BG THUB</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#student">Students</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get Started</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-content">
          <div className="hero-badge">From Idea to Impact</div>
          <h1>
            Building <span>Ideas</span>
            <br />
            Into Reality
          </h1>
          <p>
            We design, develop, and launch apps, websites, and AI-powered
            solutions for startups, businesses, and students.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#portfolio" className="btn-outline">View Our Work</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">50<span>+</span></div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Own Products</div>
            </div>
            <div className="stat">
              <div className="stat-num">100<span>%</span></div>
              <div className="stat-label">Startup Focused</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">
              Turning <span>Ideas</span> Into Impactful Products
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              BG THUB is a technology company built to empower startups,
              businesses, and students. We don&apos;t just build software — we
              partner with you to bring your vision to life with speed,
              creativity, and real-world expertise.
            </p>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              From mobile apps and web platforms to AI integrations and student
              project support, we are the launchpad for your next big idea.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">💡</div>
                <h4>Innovation First</h4>
                <p>We build with cutting-edge tech that keeps you ahead of the curve.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🚀</div>
                <h4>Fast Execution</h4>
                <p>MVP to launch in record time without compromising quality.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🤝</div>
                <h4>Full Support</h4>
                <p>We stay with you from idea stage to post-launch growth.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon">🎯</div>
                <h4>Impact Driven</h4>
                <p>Every solution is designed to create real-world value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>What We Do</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Everything you need to build, launch, and scale your digital product — under one roof.
          </p>
        </div>
        <div className="services-grid">
          {serviceDetails.map((svc, i) => (
            <div
              key={svc.id}
              className="service-card"
              onClick={() => openServiceModal(i)}
              style={{ cursor: "pointer" }}
            >
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{serviceDetails[i].id === "app-dev"
                ? "Native and cross-platform mobile apps for Android and iOS. From concept to Play Store with polished UX and robust architecture."
                : serviceDetails[i].id === "web-dev"
                ? "Modern, fast, and responsive websites and web apps built with the latest frameworks — tailored to your brand and goals."
                : serviceDetails[i].id === "ai-solutions"
                ? "Integrate intelligent features — chatbots, recommendation engines, automation — into your products using the latest AI tools."
                : "End-to-end mentorship and development support for students building real-world projects, from idea validation to final product."
              }</p>
              <div className="service-card-cta">
                <span>Learn More & Book</span>
                <span className="service-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      {activeService && (
        <div className="modal-overlay" onClick={closeServiceModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeServiceModal}>✕</button>

            <div className="modal-scroll">
              {/* Header */}
              <div className="modal-header">
                <div className="modal-icon-big">{activeService.icon}</div>
                <div>
                  <h2 className="modal-title">{activeService.title}</h2>
                  <p className="modal-tagline">{activeService.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="modal-desc">{activeService.description}</p>

              {/* Quick Stats */}
              <div className="modal-stats-row">
                <div className="modal-stat">
                  <div className="modal-stat-label">Timeline</div>
                  <div className="modal-stat-value">{activeService.timeline}</div>
                </div>
                <div className="modal-stat">
                  <div className="modal-stat-label">Starting Price</div>
                  <div className="modal-stat-value">{activeService.priceRange}</div>
                </div>
              </div>

              {/* Features */}
              <div className="modal-section">
                <h3 className="modal-section-title">What&apos;s Included</h3>
                <div className="modal-features-grid">
                  {activeService.features.map((f, i) => (
                    <div key={i} className="modal-feature">
                      <span className="modal-check">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="modal-section">
                <h3 className="modal-section-title">Our Process</h3>
                <div className="modal-process">
                  {activeService.process.map((p, i) => (
                    <div key={i} className="modal-process-step">
                      <div className="process-step-num">{String(i + 1).padStart(2, "0")}</div>
                      <div>
                        <h4>{p.step}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Form */}
              <div className="modal-section modal-booking">
                <h3 className="modal-section-title">Book This Service</h3>
                <p className="modal-booking-sub">
                  Fill in your details and we&apos;ll get back to you within 24 hours with a custom proposal.
                </p>
                <form className="modal-form" onSubmit={handleBookingSubmit}>
                  <div className="modal-form-row">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="e.g. Ravi Kumar" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="modal-form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label>Budget Range</label>
                      <select required defaultValue="">
                        <option value="" disabled>Select your budget</option>
                        <option>Under ₹25,000</option>
                        <option>₹25,000 – ₹50,000</option>
                        <option>₹50,000 – ₹1,00,000</option>
                        <option>₹1,00,000 – ₹2,00,000</option>
                        <option>₹2,00,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Project Details</label>
                    <textarea
                      placeholder={`Tell us about your ${activeService.title.toLowerCase()} project — goals, features, timeline...`}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit modal-submit" style={bookingStyle}>
                    {bookingLabel}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Products</div>
          <h2 className="section-title">Built by <span>BG THUB</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We don&apos;t just build for clients — we build for the world. Here are our flagship products.
          </p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-badge">Travel · AI · Community</div>
            <img src="/ridexe-logo.png" alt="RideXe Logo" style={{ width: "160px", height: "60px", objectFit: "contain", marginBottom: "0.5rem", display: "block" }} />
            <h3>RideXe</h3>
            <p>
              A smart travel comparison and social travel platform. Compare
              rides, discover routes, share experiences, and connect with a
              community of travellers — all in one app.
            </p>
            <a href="https://ridexe.com/" className="product-link" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          <div className="product-card">
            <div className="product-badge">Productivity · Tasks · Focus</div>
            <img src="/protask-logo.png" alt="PROtask Logo" style={{ width: "70px", height: "70px", objectFit: "contain", marginBottom: "0.5rem", display: "block" }} />
            <h3>PROtask</h3>
            <p>
              A powerful yet minimal task management and productivity tool
              designed for individuals, teams, and students who want to get
              things done — without the clutter.
            </p>
            <a href="https://protask.in/" className="product-link" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Why BG THUB</div>
          <h2 className="section-title">Why Choose <span>Us</span></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            We&apos;re not a generic agency. We&apos;re a team of builders who care about your success.
          </p>
        </div>
        <div className="why-grid">
          {whyDetails.map((w, i) => (
            <div
              key={w.id}
              className="why-card"
              onClick={() => openWhyModal(i)}
              style={{ cursor: "pointer" }}
            >
              <div className="why-num">{w.num}</div>
              <h3>{w.title}</h3>
              <p>{i === 0
                ? "We ship MVPs and full products at startup speed — without cutting corners on quality."
                : i === 1
                ? "We understand the startup journey. Our approach is lean, agile, and results-focused."
                : i === 2
                ? "Premium quality doesn't have to be expensive. We offer flexible pricing for every stage."
                : "Our team has built and launched real products — we bring that experience to your project."
              }</p>
              <div className="why-card-cta">
                <span>Learn More</span>
                <span className="why-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DETAIL MODAL */}
      {activeWhy && (
        <div className="modal-overlay" onClick={closeWhyModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeWhyModal}>✕</button>

            <div className="modal-scroll">
              {/* Header */}
              <div className="modal-header">
                <div className="modal-icon-big">{activeWhy.icon}</div>
                <div>
                  <h2 className="modal-title">{activeWhy.title}</h2>
                  <p className="modal-tagline">{activeWhy.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="modal-desc">{activeWhy.description}</p>

              {/* Quick Highlights */}
              <div className="why-modal-highlights">
                {activeWhy.highlights.map((h, i) => (
                  <div key={i} className="why-modal-highlight">
                    <div className="modal-stat-label">{h.label}</div>
                    <div className="modal-stat-value">{h.value}</div>
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <div className="modal-section">
                <h3 className="modal-section-title">What This Means For You</h3>
                <div className="modal-features-grid">
                  {activeWhy.points.map((p, i) => (
                    <div key={i} className="modal-feature">
                      <span className="modal-check">✓</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="why-modal-case">
                <div className="why-case-badge">Real Example</div>
                <h4>{activeWhy.caseStudy.title}</h4>
                <p>{activeWhy.caseStudy.desc}</p>
              </div>

              {/* CTA */}
              <a href="#contact" className="btn-primary why-modal-cta" onClick={closeWhyModal}>
                Get Started With Us →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* STUDENT SUPPORT */}
      <section className="student" id="student">
        <div className="student-inner">
          <div>
            <div className="section-label">For Students</div>
            <h2 className="section-title">
              We Help Students <span>Build Real Projects</span>
            </h2>
            <div className="divider"></div>
            <p className="section-sub">
              Not just ideas on paper — real, working products that you can show
              to the world, add to your portfolio, and even launch as a startup.
            </p>
            <div className="student-features">
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>1-on-1 Mentorship</h4>
                  <p>Personal guidance from experienced builders who&apos;ve shipped real products.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Idea Validation</h4>
                  <p>We help you refine your concept into a viable, buildable product.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Full Development Support</h4>
                  <p>Technical help from architecture to deployment — we&apos;ve got your back.</p>
                </div>
              </div>
              <div className="student-feat">
                <div className="feat-dot"></div>
                <div>
                  <h4>Portfolio Ready</h4>
                  <p>Walk away with a live product you can proudly present to the world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="student-cta-box">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</div>
            <h3>Are you a student with a big idea?</h3>
            <p>
              Join the BG THUB student program and turn your academic project
              into a real-world product. We provide the tools, mentorship, and
              development support you need to succeed.
            </p>
            <a href="#contact" className="btn-primary">Apply Now</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Our Work</div>
          <h2 className="section-title">Portfolio <span>&amp;</span> Projects</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            A glimpse of what we&apos;ve built — apps, platforms, and digital
            experiences that make an impact.
          </p>
        </div>
        <div className="portfolio-grid">
          <a href="https://ridexe.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="port-card">
              <div className="port-bg port-bg-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/ridexe-logo.png" alt="RideXe Logo" style={{ width: "70%", maxWidth: "200px", objectFit: "contain" }} />
            </div>
              <div className="port-info">
                <div className="port-tag">Mobile App</div>
                <h4>RideXe — Travel Platform</h4>
              </div>
            </div>
          </a>
          <a href="https://protask.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div className="port-card">
              <div className="port-bg port-bg-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="/protask-logo.png" alt="PROtask Logo" style={{ width: "55%", maxWidth: "160px", objectFit: "contain" }} />
              </div>
              <div className="port-info">
                <div className="port-tag">Productivity Tool</div>
                <h4>PROtask — Task Manager</h4>
              </div>
            </div>
          </a>
          <div className="port-card">
            <div className="port-bg port-bg-3">🛒</div>
            <div className="port-info">
              <div className="port-tag">Web App</div>
              <h4>E-Commerce Platform</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-4">📊</div>
            <div className="port-info">
              <div className="port-tag">Dashboard</div>
              <h4>Analytics Dashboard</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-5">🤖</div>
            <div className="port-info">
              <div className="port-tag">AI Solution</div>
              <h4>AI Chatbot Integration</h4>
            </div>
          </div>
          <div className="port-card">
            <div className="port-bg port-bg-6">🎓</div>
            <div className="port-info">
              <div className="port-tag">Student Project</div>
              <h4>Campus Connect App</h4>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="max-center text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>Testimonials</div>
          <h2 className="section-title">What People <span>Say</span></h2>
        </div>
        <div className="testi-grid">
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              BG THUB took our rough idea and turned it into a polished product
              in just 6 weeks. Their team is incredibly fast, communicative, and
              genuinely invested in your success.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">AK</div>
              <div>
                <div className="testi-name">Arjun Kapoor</div>
                <div className="testi-role">Founder, LogiStart</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              As a final year student, I didn&apos;t know where to start. BG THUB
              mentored me through every step and helped me launch my first real
              app. Couldn&apos;t have done it without them.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">PS</div>
              <div>
                <div className="testi-name">Priya Sharma</div>
                <div className="testi-role">CS Student, NMIT Bangalore</div>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <blockquote>
              We needed an AI-powered solution on a tight budget. BG THUB
              delivered something beyond what we expected — clean, scalable, and
              exactly on time. Highly recommend.
            </blockquote>
            <div className="testi-author">
              <div className="testi-avatar">RN</div>
              <div>
                <div className="testi-name">Rohit Nair</div>
                <div className="testi-role">Co-founder, BuildWave</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="section-label" style={{ justifyContent: "center" }}>Contact Us</div>
          <h2 className="section-title text-center">
            Let&apos;s Build Something <span>Amazing</span> Together
          </h2>
          <p className="section-sub" style={{ margin: "0.5rem auto 0", textAlign: "center" }}>
            Have an idea? A project? A question? We&apos;d love to hear from you.
            Drop us a message and we&apos;ll get back within 24 hours.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="e.g. Ravi Kumar" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your idea or project..." required />
            </div>
            <button type="submit" className="form-submit" style={submitStyle}>
              {submitLabel}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-brand-name">BG THUB</span>
              <p>
                Building the next generation of digital products. From idea to
                impact — we make it happen.
              </p>
              <div className="footer-socials">
                <a className="social-btn" href="#" title="Twitter">𝕏</a>
                <a className="social-btn" href="#" title="LinkedIn">in</a>
                <a className="social-btn" href="#" title="Instagram">ig</a>
                <a className="social-btn" href="#" title="GitHub">gh</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">App Development</a>
              <a href="#services">Web Development</a>
              <a href="#services">AI Solutions</a>
              <a href="#student">Student Support</a>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="https://ridexe.com/" target="_blank" rel="noopener noreferrer">RideXe</a>
              <a href="https://protask.in/" target="_blank" rel="noopener noreferrer">PROtask</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#portfolio">Our Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 BG THUB. All rights reserved.</p>
            <div className="tagline-footer">From Idea to Impact</div>
          </div>
        </div>
      </footer>
    </>
  );
}
