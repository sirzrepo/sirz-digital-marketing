
import React, { useState, useMemo } from 'react';

const categories = [
  'All',
  'Products',
  'Fashion',
  'SaaS',
  'Testimonial Ads',
  'Lifestyle',
  'AI Avatar',
  'UGC',
  'Billboard',
  'Infographics',
  'Carousels'
];

const adCreatives = [
  // Products
  { id: 1, category: 'Products', title: 'Minimalist Watch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200' },
  { id: 11, category: 'Products', title: 'Premium Audio', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200' },
  // Fashion
  { id: 2, category: 'Fashion', title: 'Summer Collection', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200' },
  { id: 12, category: 'Fashion', title: 'Street Style', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200' },
  // SaaS
  { id: 3, category: 'SaaS', title: 'Cloud Platform', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  { id: 13, category: 'SaaS', title: 'Analytics UI', img: 'https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=1200' },
  // Testimonial Ads
  { id: 4, category: 'Testimonial Ads', title: 'Brand Interview', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200' },
  { id: 14, category: 'Testimonial Ads', title: 'Client Success', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1200' },
  // Lifestyle
  { id: 5, category: 'Lifestyle', title: 'Modern Workspace', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200' },
  { id: 15, category: 'Lifestyle', title: 'City Living', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200' },
  // AI Avatar
  { id: 6, category: 'AI Avatar', title: 'Digital Human', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200' },
  { id: 16, category: 'AI Avatar', title: 'Virtual Host', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200' },
  // UGC
  { id: 7, category: 'UGC', title: 'Organic Content', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200' },
  { id: 17, category: 'UGC', title: 'Social Proof', img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=1200' },
  // Billboard
  { id: 8, category: 'Billboard', title: 'Metropolitan Display', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200' },
  { id: 18, category: 'Billboard', title: 'Digital Signage', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200' },
  // Infographics
  { id: 9, category: 'Infographics', title: 'Data Visualization', img: 'https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=1200' },
  { id: 19, category: 'Infographics', title: 'Revenue Stats', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  // Carousels
  { id: 10, category: 'Carousels', title: 'Educational Deck', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200' },
  { id: 20, category: 'Carousels', title: 'Step-by-Step', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200' },
];

const AdSamples: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  const filteredCreatives = useMemo(() => {
    if (activeCategory === 'All') return adCreatives;
    return adCreatives.filter(ad => ad.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="ads" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Creative Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Creative that Commands Attention</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">We build the visual assets that drive the modern web.</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredCreatives.map((ad) => (
            <div 
              key={ad.id} 
              className="group relative aspect-[16/10] bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl animate-in fade-in"
            >
              <img 
                src={ad.img} 
                alt={ad.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[8px] font-black uppercase text-blue-400 mb-1 tracking-widest">{ad.category}</span>
                <p className="text-white text-xs font-bold leading-tight">{ad.title}</p>
              </div>

              <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/40 backdrop-blur-md text-[7px] font-black text-white rounded uppercase tracking-tighter border border-white/10">
                {ad.category}
              </div>
            </div>
          ))}

          {/* New CTA Card replacing the "Add Sample" card */}
          <a 
            href={ctaUrl} 
            className="aspect-[16/10] bg-blue-600 border-2 border-blue-600 rounded-xl flex flex-col items-center justify-center text-white group hover:bg-blue-700 transition-all cursor-pointer shadow-xl shadow-blue-100/50 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-[40px] rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform relative z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] relative z-10 text-center px-4">Create Yours Today</span>
          </a>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                 <img src={`https://i.pravatar.cc/150?u=${i+25}`} alt="user" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
          <p className="text-sm font-bold text-slate-600">Scaling <span className="text-blue-600">10,000+ creatives</span> daily across these categories.</p>
        </div>
      </div>
    </section>
  );
};

export default AdSamples;
