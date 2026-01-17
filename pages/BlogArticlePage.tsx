
import React from 'react';

const BlogArticlePage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFD]">
      {/* Hero Article */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover" 
          alt="Article Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-20 left-0 right-0 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-[#00518B] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">IA & FUTUR</span>
            <span className="text-white/60 text-sm italic">18 Octobre 2024 • 8 min de lecture</span>
          </div>
          <h1 className="text-white text-4xl md:text-7xl font-bold tracking-tight max-w-4xl">IA Générative : Comment elle redéfinit l'industrie en Afrique Centrale.</h1>
        </div>
      </section>

      {/* Contenu */}
      <article className="py-24 max-w-3xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12 pb-12 border-b border-black/5">
          <img src="https://i.pravatar.cc/150?u=jean" className="w-12 h-12 rounded-full" alt="Author" />
          <div>
            <p className="font-bold text-black">Jean de Virtssoft</p>
            <p className="text-black/40 text-xs italic">Lead Research Engineer</p>
          </div>
        </div>

        <div className="prose prose-lg text-black/70 leading-relaxed italic space-y-8">
          <p className="text-2xl text-black font-light leading-snug">
            L'intelligence artificielle n'est plus un concept de science-fiction pour notre continent. Elle est devenue un levier opérationnel massif...
          </p>
          <p>
            Depuis nos laboratoires à Douala, nous observons une adoption sans précédent des modèles génératifs dans des secteurs inattendus comme l'agriculture de précision et la maintenance prédictive des infrastructures énergétiques.
          </p>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" className="rounded-[40px] my-12 shadow-2xl" alt="Global Tech" />
          <p>
            Le défi reste cependant la souveraineté des données. C'est pourquoi Virtssoft investit massivement dans des infrastructures locales capables d'héberger ces modèles tout en garantissant une latence minimale pour les utilisateurs finaux.
          </p>
        </div>

        {/* Similar Articles */}
        <div className="mt-32 pt-16 border-t border-black/5">
          <h4 className="text-2xl font-bold mb-10">Articles similaires</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <a href="#blog" key={i} className="group">
                <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100 mb-6">
                  <img src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&sig=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Similar" />
                </div>
                <h5 className="font-bold text-xl group-hover:text-[#00518B] transition-colors">Le Cloud Souverain en 2025</h5>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogArticlePage;
