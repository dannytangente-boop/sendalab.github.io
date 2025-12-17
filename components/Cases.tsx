import React, { useEffect, useRef, useState } from 'react';
import { Database, MapPin, Smartphone, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export const Cases: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconectamos para que la animación solo ocurra una vez
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Clases base para la animación
  const animBase = "transition-all duration-1000 ease-out transform";
  const animHidden = "opacity-0 translate-y-12";
  const animVisible = "opacity-100 translate-y-0";

  return (
    <section id="cases" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[96px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">
              Historias Reales
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Transformamos el caos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">Control Total</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              No vendemos software genérico. Diseñamos ecosistemas digitales que resuelven problemas específicos de flujo de caja, inventario y visibilidad.
            </p>
          </div>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Case 1: Sales los Cerezos */}
          <div className={`group relative bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 lg:p-10 hover:border-brand-purple/50 hover:shadow-2xl hover:shadow-brand-purple/10 ${animBase} ${isVisible ? animVisible : animHidden}`}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-indigo-900 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      SC
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Sales los Cerezos</h3>
                      <p className="text-zinc-400 text-sm">Gestión Empresarial</p>
                    </div>
                  </div>
                  <div className="bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
                     <span className="text-xs font-semibold text-brand-purple">Caso Éxito</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                   <div className="bg-black/40 rounded-xl p-4 border-l-2 border-red-500/50">
                      <p className="text-xs font-bold text-red-400 uppercase mb-2 flex items-center gap-2">
                        <FileSpreadsheet className="w-3 h-3" /> Antes
                      </p>
                      <p className="text-sm text-gray-400">
                        Inventarios en cuadernos, anotaciones manuales trayendo desconexión financiera.
                      </p>
                   </div>
                   <div className="bg-brand-purple/10 rounded-xl p-4 border-l-2 border-brand-purple">
                      <p className="text-xs font-bold text-brand-purple uppercase mb-2 flex items-center gap-2">
                        <Database className="w-3 h-3" /> Después
                      </p>
                      <p className="text-sm text-gray-300">
                        Sistema total: Base de datos centralizada, registro en tiempo real de entradas - salidas - Ventas.
                      </p>
                   </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Impacto Implementado:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">
                        Informe automatizado de ingresos vs. gastos (materia prima y mano de obra).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">
                        Dashboard ejecutivo para control total de la empresa.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2: Restaurant - Added delay-200 for staggered effect */}
          <div className={`group relative bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 lg:p-10 hover:border-brand-green/50 hover:shadow-2xl hover:shadow-brand-green/10 delay-200 ${animBase} ${isVisible ? animVisible : animHidden}`}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-emerald-800 flex items-center justify-center text-brand-dark font-bold text-xl shadow-lg">
                      RG
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Restaurante Gourmet</h3>
                      <p className="text-zinc-400 text-sm">Transformación Digital</p>
                    </div>
                  </div>
                  <div className="bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">
                     <span className="text-xs font-semibold text-brand-green">Caso Éxito</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Se implementó un paquete integral de posicionamiento para captar nuevos clientes y automatizar el servicio en mesa.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-zinc-800/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:bg-zinc-800 transition-colors">
                    <MapPin className="w-6 h-6 text-brand-green" />
                    <span className="text-sm font-bold text-white">Google Maps & SEO</span>
                  </div>
                  <div className="bg-zinc-800/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-2 hover:bg-zinc-800 transition-colors">
                    <Smartphone className="w-6 h-6 text-brand-green" />
                    <span className="text-sm font-bold text-white">Menú QR Automático</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Resultados:</h4>
                   <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-800 to-transparent border-l-4 border-brand-green">
                      <p className="text-sm italic text-gray-300">
                        "Logramos modernizar la experiencia del cliente y aumentar la visibilidad online en cuestión de semanas."
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};