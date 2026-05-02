import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
   ArrowRight,
   Search,
   Calendar,
   Clock,
   User,
   Tag,
   Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
   title: "BG THUB Blog — Tech, Startups & AI Insights",
   description: "Insights on web development, AI integration, startup growth, and industry trends from the engineering team at BG THUB.",
   keywords: ["web development blog", "AI for startups blog", "MVP development insights", "BG THUB blog"]
};

const blogPosts = [
   {
      id: 1,
      title: "How to Build an MVP in 6 Weeks",
      excerpt: "Learn the proven framework for rapid product development and market validation without over-engineering.",
      category: "Startups",
      date: "April 28, 2026",
      readTime: "8 min read",
      image: "/assets/images/blog1.jpg",
      slug: "build-mvp-in-6-weeks"
   },
   {
      id: 2,
      title: "The Real Cost of Web Development in India (2026)",
      excerpt: "A transparent breakdown of what it costs to build custom websites and web applications in India's tech landscape.",
      category: "Business",
      date: "April 25, 2026",
      readTime: "12 min read",
      image: "/assets/images/blog2.jpg",
      slug: "cost-of-web-development-india"
   },
   {
      id: 3,
      title: "Best Tech Stack for Startups: Why Next.js + AI Wins",
      excerpt: "Why the combination of Next.js and AI integration is the ultimate competitive advantage for modern startups.",
      category: "Technology",
      date: "April 21, 2026",
      readTime: "10 min read",
      image: "/assets/images/blog3.jpg",
      slug: "best-tech-stack-startups"
   },
   {
      id: 4,
      title: "AI in Modern Web Applications: Beyond Chatbots",
      excerpt: "Exploring practical ways to integrate AI into your web products for better UX and business automation.",
      category: "AI",
      date: "April 18, 2026",
      readTime: "15 min read",
      image: "/assets/images/blog4.jpg",
      slug: "ai-in-modern-web-apps"
   },
   {
      id: 5,
      title: "Why Industry-Level Projects are Crucial for Students",
      excerpt: "How working on real-world projects can transform your career path from student to professional engineer.",
      category: "Academy",
      date: "April 14, 2026",
      readTime: "7 min read",
      image: "/assets/images/blog5.jpg",
      slug: "industry-level-projects-students"
   }
];

export default function BlogPage() {
   return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100">
         <Navbar />

         <main className="pt-32 pb-24">
            {/* --- HEADER --- */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-20 text-center">
               <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">BG THUB Blog</span>
               </div>
               <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-6">
                  Tech, Startups &amp; <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">AI Insights</span>
               </h1>
               <p className="max-w-xl mx-auto text-slate-500 font-medium">We share our learnings from the front lines of product development and AI engineering.</p>
            </section>

            {/* --- BLOG GRID --- */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                     <article key={post.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500">
                        <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                           {/* Placeholder for blog image */}
                           <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                              {post.category}
                           </div>
                        </div>

                        <div className="p-8">
                           <div className="flex items-center gap-4 mb-4">
                              <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">{post.category}</span>
                              <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                 <Clock size={12} /> {post.readTime}
                              </div>
                           </div>

                           <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
                              <Link href={`/blog/${post.slug}`}>
                                 {post.title}
                              </Link>
                           </h3>

                           <p className="text-slate-500 text-sm font-medium mb-6 line-clamp-2 leading-relaxed">
                              {post.excerpt}
                           </p>

                           <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                              <div className="flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                    <User size={12} className="text-slate-400" />
                                 </div>
                                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">BG Team</span>
                              </div>
                              <Link
                                 href={`/blog/${post.slug}`}
                                 className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 uppercase tracking-widest hover:gap-2 transition-all"
                              >
                                 Read More <ArrowRight size={12} />
                              </Link>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
            </section>

            {/* --- NEWSLETTER --- */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 mt-24">
               <div className="rounded-[3rem] bg-slate-900 p-12 md:p-16 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                  <div className="relative z-10 max-w-xl mx-auto">
                     <h2 className="text-3xl font-black text-white mb-4">Stay Ahead of the Curve</h2>
                     <p className="text-slate-400 font-medium mb-8">Get our latest insights on AI and startup engineering delivered to your inbox.</p>
                     <form className="flex flex-col sm:flex-row gap-3">
                        <input
                           type="email"
                           placeholder="Enter your email"
                           className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
                        />
                        <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20">
                           Subscribe
                        </button>
                     </form>
                  </div>
               </div>
            </section>
         </main>

         <Footer />
      </div>
   );
}
