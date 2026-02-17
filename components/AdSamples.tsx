
import React, { useState, useMemo, useEffect } from 'react';

interface Ad {
  id: string;
  title: string;
  img: string;
  category: string;
}

const _dummy = {
  Products: [
    { title: 'Minimalist Watch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
    { title: 'Premium Headphones', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Premium Headphones', img: 'https://images.unsplash.com/photo-1652352530375-d197d63b7311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2R1Y3RzfGVufDB8fDB8fHww' },
    { title: 'Premium Headphones', img: 'https://images.unsplash.com/photo-1566814534947-46a09bcbb88c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2R1Y3RzfGVufDB8fDB8fHww' },
    { title: 'Premium Headphones', img: 'https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3RzfGVufDB8fDB8fHww' },
    { title: 'Premium Headphones', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fHww' },
  ],
  Fashion: [
    { title: 'Summer Collection', img: 'https://images.unsplash.com/photo-1559697242-a465f2578a95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D' },
    { title: 'Street Style', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Street Style', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D' },
    { title: 'Summer Collection', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D' },
    { title: 'Summer Collection', img: 'https://images.unsplash.com/photo-1608748010899-18f300247112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D' },
    { title: 'Summer Collection', img: 'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D' },
    
  ],
  SaaS: [
    { title: 'Growth Dashboard', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Workflow UI', img: 'https://images.unsplash.com/photo-1642132652803-01f9738d0446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNhYXN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Workflow UI', img: 'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Fhc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Workflow UI', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Fhc3xlbnwwfHwwfHx8MA%3D%3D' },
    { title: 'Workflow UI', img: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhYXN8ZW58MHx8MHx8fDA%3D' },
    { title: 'Workflow UI', img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhYXN8ZW58MHx8MHx8fDA%3D' },
  ],
  'Testimonial Ads': [
    { title: 'Client Spotlight', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800' },
    { title: 'Success Story', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Success Story', img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjByZXZpZXdzfGVufDB8fDB8fHww' },
    { title: 'Success Story', img: 'https://images.unsplash.com/photo-1723482287117-456bc4bdcca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjByZXZpZXdzfGVufDB8fDB8fHwy' },
    { title: 'Success Story', img: 'https://images.unsplash.com/photo-1766853297154-3dcb4d3b38f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VzdG9tZXIlMjByZXZpZXdzfGVufDB8fDB8fHwy' },
  ],
  Lifestyle: [
    { title: 'Morning Brew', img: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800' },
    { title: 'Urban Living', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=800' },
    { title: 'Urban Living', img: 'https://images.unsplash.com/photo-1536008046477-01746710ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D' },
    { title: 'Urban Living', img: 'https://images.unsplash.com/photo-1585945103669-c592664059f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D' },
    { title: 'Urban Living', img: 'https://images.unsplash.com/photo-1543652437-15ae836b33e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D' },
    { title: 'Urban Living', img: 'https://images.unsplash.com/photo-1523538290088-51e3e7d1c00d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGxpZmVzdHlsZXxlbnwwfHwwfHx8Mg%3D%3D' },
  ],
  'AI Avatar': [
    { title: 'Generated Persona', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800' },
    { title: 'Virtual Host', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800' },
    { title: 'Generated Persona', img: 'https://images.unsplash.com/photo-1732020858816-93c130ab8f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBhdmF0YXJ8ZW58MHx8MHx8fDI%3D' },
  ],
  UGC: [
    { title: 'Authentic Review', img: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=800' },
    { title: 'Community Post', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
  ],
  Billboard: [
    { title: 'City Center', img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800' },
    { title: 'Highway Display', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' },
  ],
  Infographics: [
    { title: 'Trend Map', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Performance Stats', img: 'https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=800' },
  ],
  Carousels: [
    { title: 'How-to Guide', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Education Pack', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800' },
  ],
};

const AdSamples: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // Dynamic data from backend
  const [categories, setCategories] = useState<string[]>(['All']);
  const [images, setImages] = useState<Ad[]>([]);
  // const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? '';
  const API_BASE_URL = 'https://api.sirz.co.uk';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const endpoint =
          activeCategory === 'All'
            ? `${API_BASE_URL}/api/digital-images/published`
            : `${API_BASE_URL}/api/digital-images/category/${encodeURIComponent(activeCategory)}`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Failed fetching images: ${res.statusText}`);
        const data = await res.json();

        const mapped: Ad[] = data.map((item: any) => ({
          id: item._id ?? item.id ?? `${item.title}-${item.image}`,
          title: item.title,
          img: item.image ?? item.img,
          category: item.category,
        }));

        setImages(mapped);

        if (activeCategory === 'All') {
          const unique = Array.from(new Set(mapped.map((d) => d.category))).sort();
          setCategories(['All', ...unique]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, [activeCategory, API_BASE_URL]);

  const filteredCreatives = useMemo(() => images, [images]);

  return (
    <section id="ads" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Creative Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Our Creative Categories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Explore high-performance ad formats tailored to every major business vertical.</p>
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
          {filteredCreatives.map((ad, index) => (
           <div 
              key={index} 
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
