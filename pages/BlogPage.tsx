
import React, { useState } from 'react';

const ARTICLES = [
  { id: 1, title: 'IA en Afrique : Dépasser le simple effet de mode', author: 'John K. Biloto', cat: 'Expertise', date: '18 Oct. 2024', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Souveraineté des données en RDC : Les enjeux de 2025', author: 'Elie K. Kaseya', cat: 'Cloud', date: '12 Oct. 2024', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'L’IoT au service de l’agriculture de précision', author: 'Equipe Virtssoft', cat: 'Innovation', date: '05 Oct. 2024', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800' }
];

const BlogPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const cats = ['Tous', 'Expertise', 'Cloud', 'Innovation'];

  const handleNavigate = (id: number) => {
    window.location.hash = `#blog-article/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = filter === 'Tous' ? ARTICLES : ARTICLES.filter(a => a.cat === filter);

  return (
    <div className="bg-[#FFFFFD] min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <span className="text-[#00518B] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">PERSPECTIVES & ANALYSES</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-[#000200]">Le Blog Tech.</h1>
        </header>

        <div className="flex space-x-10 mb-16 border-b border-black/5 pb-8 overflow-x-auto no-scrollbar">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`text-sm font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap ${filter === c ? 'text-[#00518B] border-b-2 border-[#00518B] pb-8 -mb-8' : 'text-black/30 hover:text-black'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {filtered.map(article => (
            <button key={article.id} onClick={() => handleNavigate(article.id)} className="group text-left">
              <div className="relative aspect-[16/10] rounded-[48px] overflow-hidden bg-neutral-100 mb-10 shadow-lg">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                <div className="absolute top-8 left-8 bg-[#00518B] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white">{article.cat}</div>
              </div>
              <h3 className="text-3xl font-black leading-tight group-hover:text-[#00518B] transition-colors mb-6 tracking-tight">{article.title}</h3>
              <p className="text-black/40 text-sm font-light italic">Par {article.author} • {article.date}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
