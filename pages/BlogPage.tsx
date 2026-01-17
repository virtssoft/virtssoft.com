
import React, { useState } from 'react';

const ARTICLES = [
  { id: 1, title: 'IA Générative : La révolution silencieuse du mobile', cat: 'IA', date: '18 Oct. 2024', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Optimiser sa consommation solaire domestique', cat: 'Énergie', date: '12 Oct. 2024', img: 'https://images.unsplash.com/photo-1508514171902-585b1276a93f?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Startups : Pourquoi Douala est le nouveau Hub', cat: 'Startups', date: '05 Oct. 2024', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'IoT et Sécurité des données critiques', cat: 'IoT', date: '28 Sept. 2024', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Cloud Souverain : Les enjeux pour 2025', cat: 'IA', date: '20 Sept. 2024', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
];

const BlogPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const cats = ['Tous', 'IA', 'IoT', 'Énergie', 'Startups'];

  const filtered = filter === 'Tous' ? ARTICLES : ARTICLES.filter(a => a.cat === filter);

  return (
    <div className="bg-[#FFFFFD] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">Blog Tech</h1>
          <p className="text-black/40 text-2xl font-light italic">Perspectives, analyses et prospectives.</p>
        </header>

        {/* Filters */}
        <div className="flex space-x-10 mb-16 border-b border-black/5 pb-8 overflow-x-auto no-scrollbar">
          {cats.map(c => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`text-sm font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap ${
                filter === c ? 'text-[#00518B] border-b-2 border-[#00518B] pb-8 -mb-8' : 'text-black/30 hover:text-black'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filtered.map(article => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-neutral-100 mb-8 shadow-lg">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute top-8 left-8 bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#00518B] shadow-sm">
                  {article.cat}
                </div>
              </div>
              <h3 className="text-3xl font-bold leading-tight group-hover:text-[#00518B] transition-colors">{article.title}</h3>
              <p className="text-black/40 mt-6 text-sm font-light italic">Publié le {article.date} • 5 min de lecture</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
