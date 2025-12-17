import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-brand-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Decoración de fondo cálida */}
             <div className="absolute inset-0 bg-orange-100/50 dark:bg-brand-purple/20 rounded-3xl rotate-3 scale-105 transition-colors duration-300"></div>
             
             <div className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] border-4 border-white dark:border-zinc-800 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
                  alt="Sistema de dashboard empresarial en oficina luminosa" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             
             {/* Tarjeta flotante ajustada al contexto del sistema */}
             <div className="absolute bottom-8 -left-4 md:-left-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border-l-4 border-brand-green z-20 max-w-[200px] transition-colors duration-300">
                <p className="text-sm font-bold text-brand-dark dark:text-white">Visibilidad Total</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Toma de decisiones basada en datos reales, no en suposiciones.</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark dark:text-white mb-8 tracking-tight">
              Ingeniería con <span className="text-brand-purple dark:text-brand-green">Propósito Humano</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                SendaLab no nació en una sala de juntas corporativa. Nació del cansancio de ver cómo la burocracia tecnológica asfixiaba a los emprendedores reales.
              </p>
              
              <div className="border-l-4 border-brand-green pl-6 py-2 my-8">
                <p className="font-medium text-brand-dark dark:text-gray-100 text-xl italic mb-4 leading-relaxed">
                  "Soy una ingeniera que se cansó de ver sistemas complejos e impagables. Mi misión es democratizar la tecnología para que sea asequible para esas PyMEs y medianas empresas que mueven al país."
                </p>
                <cite className="not-italic font-bold text-brand-purple dark:text-brand-green block mt-2">
                  — Ing. Daniela Laiton
                </cite>
              </div>

              <p>
                Entendemos que un sistema mal implementado se come tu productividad diaria. Por eso, no vendemos software; construimos puentes hacia la eficiencia operativa, permitiéndote recuperar el control de tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 text-brand-purple dark:text-brand-green" />
                <h4 className="font-bold text-brand-dark dark:text-white">Sin Burocracia</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Procesos ágiles y directos al grano.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="w-8 h-8 text-brand-purple dark:text-brand-green" />
                <h4 className="font-bold text-brand-dark dark:text-white">Pasión por PyMEs</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Soluciones diseñadas a la medida de tu negocio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};