import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Solicitud de Diagnóstico");
    const body = encodeURIComponent(`Hola equipo SendaLab,\n\nEstoy interesado en solicitar un diagnóstico para mi empresa.\n\nMi correo de contacto es: ${email}\n\nGracias.`);
    window.location.href = `mailto:daniela.laiton99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-darker relative transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-brand-purple rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green opacity-20 rounded-full translate-y-1/2 -translate-x-1/4"></div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                    ¿Tu empresa está lista para el siguiente nivel?
                </h2>
                <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto relative z-10">
                    Agenda una consulta de 30 minutos. Analizamos tu operación y te decimos honestamente si podemos ayudarte. Sin compromisos ni tecnicismos.
                </p>
                
                <form className="max-w-md mx-auto flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Tu correo electrónico empresarial" 
                        className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 outline-none focus:bg-white/20 focus:border-brand-green/50 focus:ring-2 focus:ring-brand-green/20 transition-all"
                    />
                    <button 
                        type="submit"
                        className="w-full bg-brand-green text-brand-dark font-bold text-lg py-4 rounded-xl hover:bg-white hover:text-brand-purple transition-all flex items-center justify-center gap-2 group"
                    >
                        Solicitar Diagnóstico
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
                
                <div className="mt-8 relative z-10 flex flex-col items-center gap-2">
                    <p className="text-sm text-purple-200 opacity-80">
                        Únete a Sales los Cerezos y otras empresas que ya optimizaron su gestión.
                    </p>
                    <a 
                        href="mailto:daniela.laiton99@gmail.com" 
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-brand-green transition-colors mt-2 border border-white/20 px-4 py-2 rounded-full hover:bg-white/10"
                    >
                        <Mail className="w-4 h-4" />
                        daniela.laiton99@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};