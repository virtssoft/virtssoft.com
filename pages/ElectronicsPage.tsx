
import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Veido Conlight', cat: 'IoT', price: '89€', stock: 120, img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Soundbox Pro', cat: 'Son & Vidéo', price: '449€', stock: 45, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'NGL Eolis Home', cat: 'Énergie', price: '2490€', stock: 12, img: 'https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Veido IO', cat: 'IoT', price: '129€', stock: 80, img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'K.ai Vision', cat: 'Sécurité', price: '299€', stock: 30, img: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Mini Audio', cat: 'Son & Vidéo', price: '149€', stock: 200, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600' },
];

const ElectronicsPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [page, setPage] = useState(1);
  const categories = ['Tous', 'IoT', 'Son & Vidéo', 'Sécurité', 'Énergie'];

  const filtered = filter === 'Tous' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <div className="bg-[#FFFFFD] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#000200] mb-8">Produits Électroniques</h1>
          <p className="text-[#000200]/40 text-xl max-w-2xl mx-auto italic font-light">
            La technologie de pointe au service de votre quotidien.
          </p>
        </header>

        {/* Filters */}
        <div className="flex justify-center space-x-6 mb-16 overflow-x-auto pb-6 no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => { setFilter(cat); setPage(1); }}
              className={`px-10 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${
                filter === cat ? 'bg-[#00518B] text-white shadow-2xl' : 'bg-black/5 text-black/40 hover:bg-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {filtered.map(product => (
            <div key={product.id} className="group bg-white rounded-[40px] border border-black/5 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-700">
              <div className="aspect-square bg-neutral-50 p-12 overflow-hidden relative">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-[1500ms]" 
                />
              </div>
              <div className="p-10 text-center flex-grow flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#00518B] font-black mb-4 block">{product.cat}</span>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-[#00518B] font-black text-xl mb-10">{product.price}</p>
                
                <div className="mt-auto">
                  <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    product.stock > 50 
                    ? 'bg-[#00518B] text-white hover:brightness-110' 
                    : 'bg-black text-white hover:bg-black/80'
                  }`}>
                    {product.stock > 50 ? 'Acheter' : 'Précommander'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Simple */}
        <div className="flex justify-center items-center space-x-4">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-black/5 transition-all">
            &larr;
          </button>
          <span className="font-bold text-lg px-4">Page {page}</span>
          <button onClick={() => setPage(p => p + 1)} className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-black/5 transition-all">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
