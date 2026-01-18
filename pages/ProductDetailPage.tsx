
import React from 'react';

const PRODUCT_DATABASE: Record<string, any> = {
  'virtss-pro-max': {
    name: 'Virtss Pro Max',
    cat: 'Flagship',
    price: '999€',
    desc: 'La puissance réinventée pour l\'avenir de l\'IoT. Un processeur neural de dernière génération dans un boîtier en aluminium recyclé.',
    img: 'https://images.unsplash.com/photo-1546868889-4e0c68197877?auto=format&fit=crop&q=80&w=800',
    specs: ['CPU Neural X1', 'Autonomie 72h', 'IP68 Gold', 'Connectivité Satellite']
  },
  'veido-conlight': {
    name: 'Veido Conlight',
    cat: 'IoT',
    price: '89€',
    desc: 'Éclairage intelligent adaptatif et bioclimatique qui s\'ajuste à votre rythme circadien pour un confort optimal.',
    img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800',
    specs: ['LED RGB High CRI', 'Capteur de présence', 'Compatible Matter', 'Conso 2W']
  }
};

const ProductDetailPage: React.FC<{ id: string | null }> = ({ id }) => {
  const product = id ? PRODUCT_DATABASE[id] : PRODUCT_DATABASE['virtss-pro-max'];
  
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-black/40 italic">Produit non trouvé.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFD] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-neutral-50 rounded-[64px] p-12 lg:p-20 flex items-center justify-center border border-black/5">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
          
          <div className="space-y-10">
            <div>
              <span className="text-[#00518B] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">
                {product.cat}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#000200]">
                {product.name}
              </h1>
            </div>
            
            <p className="text-2xl text-black/40 font-light italic leading-relaxed">
              "{product.desc}"
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-4xl font-black text-[#00518B]">{product.price}</span>
              <div className="h-12 w-[1px] bg-black/10" />
              <span className="text-sm font-bold text-green-600">En stock</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec: string) => (
                <div key={spec} className="px-6 py-4 bg-white border border-black/5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-black/30">
                  {spec}
                </div>
              ))}
            </div>

            <div className="pt-10 flex flex-col sm:flex-row gap-4">
              <button className="flex-grow bg-[#00518B] text-white py-6 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-blue-900/10">
                Ajouter au panier
              </button>
              <button className="flex-grow border border-black/10 py-6 rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-black hover:text-white transition-all">
                Trouver en magasin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
