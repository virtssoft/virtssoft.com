
import React from 'react';

const BLOG_DATABASE: Record<string, any> = {
  '1': {
    title: 'IA en Afrique : Dépasser le simple effet de mode',
    author: 'John K. Biloto',
    cat: 'EXPERTISE',
    date: '18 Octobre 2024',
    content: "L'intelligence artificielle n'est plus un concept de science-fiction pour notre continent. Elle est devenue un levier opérationnel massif. Depuis nos laboratoires à Goma, nous observons une adoption sans précédent des modèles génératifs dans des secteurs inattendus comme l'agriculture de précision.",
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600'
  },
  '2': {
    title: 'Souveraineté des données en RDC : Les enjeux de 2025',
    author: 'Elie K. Kaseya',
    cat: 'CLOUD',
    date: '12 Octobre 2024',
    content: "Le cloud souverain est la clé de l'indépendance numérique. Virtssoft investit massivement dans des infrastructures locales capables de garantir que les données stratégiques de nos entreprises restent sur le sol national.",
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
  }
};

const BlogArticlePage: React.FC<{ id: string | null }> = ({ id }) => {
  const article = id ? BLOG_DATABASE[id] : BLOG_DATABASE['1'];

  if (!article) {
    return <div className="h-screen flex items-center justify-center">Article introuvable.</div>;
  }

  return (
    <div className="bg-[#FFFFFD]">
      <section className="relative h-[75vh] w-full overflow-hidden bg-black">
        <img 
          src={article.img} 
          className="w-full h-full object-cover opacity-60 scale-105 animate-slowZoom" 
          alt={article.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute bottom-24 left-0 right-0 px-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-6 mb-8">
            <span className="bg-[#00518B] text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
              {article.cat}
            </span>
            <span className="text-white/60 text-sm italic">{article.date} • 8 min de lecture</span>
          </div>
          <h1 className="text-white text-4xl md:text-8xl font-black tracking-tighter max-w-5xl leading-[0.9]">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="py-32 max-w-3xl mx-auto px-6">
        <div className="flex items-center space-x-6 mb-16 pb-12 border-b border-black/5">
          <div className="w-16 h-16 rounded-full bg-[#00518B] flex items-center justify-center text-white font-black text-xl">
            {article.author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-2xl text-[#000200]">{article.author}</p>
            <p className="text-black/40 text-sm italic">Lead Research Team • Virtssoft Technologies</p>
          </div>
        </div>

        <div className="prose prose-2xl text-black/70 leading-relaxed italic space-y-10">
          <p className="text-3xl text-black font-light leading-snug first-letter:text-7xl first-letter:font-black first-letter:text-[#00518B] first-letter:mr-3 first-letter:float-left">
            {article.content}
          </p>
          <p>
            Depuis nos laboratoires à Douala, nous observons une adoption sans précédent des modèles génératifs dans des secteurs inattendus comme l'agriculture de précision et la maintenance prédictive des infrastructures énergétiques.
          </p>
          <div className="my-20 p-12 bg-neutral-50 rounded-[48px] border-l-8 border-[#00518B] italic text-2xl text-black/80 font-light">
            "Le défi reste cependant la souveraineté des données. C'est pourquoi Virtssoft investit massivement dans des infrastructures locales."
          </div>
          <p>
            Le déploiement de solutions IoT à grande échelle nécessite une infrastructure cloud robuste. Chez Virtssoft, nous concevons des systèmes capables de traiter des millions de requêtes par seconde avec une latence quasi nulle.
          </p>
        </div>

        <div className="mt-32 pt-20 border-t border-black/5">
          <h4 className="text-sm font-black text-black/20 uppercase tracking-[0.5em] mb-12">AUTRES PERSPECTIVES</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(i => (
              <a href={`#blog-article/${i}`} key={i} className="group">
                <div className="aspect-[16/9] rounded-[40px] overflow-hidden bg-neutral-100 mb-8 border border-black/5">
                  <img src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&sig=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Similar" />
                </div>
                <h5 className="font-bold text-2xl group-hover:text-[#00518B] transition-colors leading-tight">Le Cloud Souverain en 2025 : Prêt pour le déploiement ?</h5>
              </a>
            ))}
          </div>
        </div>
      </article>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slowZoom {
          animation: slowZoom 30s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default BlogArticlePage;
