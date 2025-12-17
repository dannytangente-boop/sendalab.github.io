import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light dark:bg-brand-darker transition-colors duration-300">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-white dark:bg-zinc-900 skew-x-12 translate-x-1/4 pointer-events-none transition-colors duration-300" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 dark:bg-brand-purple/20 text-brand-purple dark:text-brand-purple text-sm font-bold mb-6 tracking-wide uppercase">
              Democratizando la Tecnología
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-brand-dark dark:text-white leading-[1.1] mb-6">
              Sistemas que no se comen tu <span className="text-brand-purple dark:text-brand-green">productividad.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              Dejamos atrás la burocracia para ofrecer soluciones reales a PyMEs y medianas empresas. Transformamos el caos operativo en rentabilidad medible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#cases"
                onClick={(e) => scrollToSection(e, '#cases')}
                className="inline-flex justify-center items-center px-8 py-4 bg-brand-purple text-white rounded-2xl font-bold text-lg hover:bg-brand-dark dark:hover:bg-brand-green dark:hover:text-brand-dark transition-all group"
              >
                Ver casos reales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="inline-flex justify-center items-center px-8 py-4 bg-white dark:bg-transparent border-2 border-gray-200 dark:border-gray-700 text-brand-dark dark:text-white rounded-2xl font-bold text-lg hover:border-brand-purple dark:hover:border-brand-green hover:text-brand-purple dark:hover:text-brand-green transition-all"
              >
                Nuestra Historia
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800 bg-gray-900 aspect-[4/3] transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                  alt="Consultoría tecnológica estratégica" 
                  className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-lg max-w-xs transition-colors duration-300">
                    <p className="text-sm font-bold text-brand-purple dark:text-brand-green mb-1">Resultados Medibles</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">"Pasamos de hojas de papel a un control total de la empresa."</p>
                </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};