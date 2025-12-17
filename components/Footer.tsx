import React, { useState } from 'react';
import { Hexagon, Instagram, Linkedin, Mail } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

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

  const privacyContent = (
    <>
      <p className="mb-4"><strong>Última actualización: Octubre 2024</strong></p>
      <p>En SendaLab, la transparencia es fundamental. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información, inspirándonos en las mejores prácticas de seguridad de la industria.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">1. Información que recopilamos</h4>
      <p>Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles de su empresa cuando completa nuestros formularios de contacto o solicita un diagnóstico.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">2. Uso de su información</h4>
      <p>Utilizamos la información recopilada para:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Proporcionar y mejorar nuestros servicios de consultoría tecnológica.</li>
        <li>Comunicarnos con usted sobre sus solicitudes y proyectos.</li>
        <li>Enviar información relevante sobre actualizaciones o nuevos servicios (siempre con opción de baja).</li>
      </ul>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">3. Protección de datos</h4>
      <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración. Tratamos sus datos con la misma confidencialidad con la que manejamos nuestros sistemas internos.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">4. Contacto</h4>
      <p>Si tiene preguntas sobre esta política o desea ejercer sus derechos de acceso, rectificación o eliminación, contáctenos en <span className="text-brand-purple dark:text-brand-green font-medium">daniela.laiton99@gmail.com</span>.</p>
    </>
  );

  const termsContent = (
    <>
      <p className="mb-4"><strong>Vigencia desde: 2024</strong></p>
      <p>Bienvenido a SendaLab. Al utilizar nuestros servicios y sitio web, usted acepta los siguientes términos diseñados para asegurar una relación clara y profesional.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">1. Naturaleza del Servicio</h4>
      <p>SendaLab ofrece servicios de consultoría, desarrollo de software e implementación de sistemas de gestión para empresas. Cada proyecto se rige por un contrato de servicios específico que detalla el alcance y los entregables.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">2. Propiedad Intelectual</h4>
      <p>Todo el contenido de este sitio web (textos, diseños, logotipos, código) es propiedad exclusiva de SendaLab. Los sistemas desarrollados para clientes específicos se rigen por las cláusulas de propiedad intelectual acordadas en sus respectivos contratos.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">3. Responsabilidad</h4>
      <p>Nos esforzamos por garantizar la precisión de la información en este sitio, pero no ofrecemos garantías absolutas sobre la disponibilidad ininterrumpida del servicio web. SendaLab no será responsable por daños indirectos derivados del uso de este sitio informativo.</p>
      
      <h4 className="font-bold text-brand-dark dark:text-white mt-6 mb-2 text-base">4. Ley Aplicable</h4>
      <p>Estos términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los tribunales competentes de Bogotá D.C.</p>
    </>
  );

  return (
    <>
      <footer className="bg-brand-light dark:bg-zinc-900 pt-16 pb-8 border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 text-brand-purple dark:text-brand-green mb-4">
                <Hexagon className="w-6 h-6 fill-current" />
                <span className="text-xl font-bold">SendaLab</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                Ingeniería versátil para empresas reales. Democratizando el acceso a sistemas de gestión de alto nivel.
              </p>
            </div>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-brand-dark dark:text-white">Compañía</h4>
                  <a 
                    href="#about" 
                    onClick={(e) => scrollToSection(e, '#about')}
                    className="text-gray-500 hover:text-brand-purple dark:text-gray-400 dark:hover:text-brand-green text-sm cursor-pointer"
                  >
                    Nosotros
                  </a>
                  <a 
                    href="#cases" 
                    onClick={(e) => scrollToSection(e, '#cases')}
                    className="text-gray-500 hover:text-brand-purple dark:text-gray-400 dark:hover:text-brand-green text-sm cursor-pointer"
                  >
                    Casos de éxito
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="text-gray-500 hover:text-brand-purple dark:text-gray-400 dark:hover:text-brand-green text-sm cursor-pointer"
                  >
                    Contacto
                  </a>
              </div>
              <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-brand-dark dark:text-white">Legal</h4>
                  <button 
                    onClick={() => setLegalOpen('privacy')}
                    className="text-gray-500 hover:text-brand-purple dark:text-gray-400 dark:hover:text-brand-green text-sm text-left transition-colors"
                  >
                    Privacidad
                  </button>
                  <button 
                    onClick={() => setLegalOpen('terms')}
                    className="text-gray-500 hover:text-brand-purple dark:text-gray-400 dark:hover:text-brand-green text-sm text-left transition-colors"
                  >
                    Términos
                  </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400 dark:text-gray-500">© 2025 SendaLab. Todos los derechos reservados.</p>
              <div className="flex gap-4">
                  <a href="#" className="group relative text-gray-400 hover:text-brand-purple dark:hover:text-brand-green transition-colors">
                      <Instagram className="w-5 h-5" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg whitespace-nowrap">Instagram</span>
                  </a>
                  <a href="#" className="group relative text-gray-400 hover:text-brand-purple dark:hover:text-brand-green transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg whitespace-nowrap">LinkedIn</span>
                  </a>
                  <a href="mailto:daniela.laiton99@gmail.com" className="group relative text-gray-400 hover:text-brand-purple dark:hover:text-brand-green transition-colors">
                      <Mail className="w-5 h-5" />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-zinc-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg whitespace-nowrap">Correo</span>
                  </a>
              </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={!!legalOpen} 
        onClose={() => setLegalOpen(null)} 
        title={legalOpen === 'privacy' ? 'Política de Privacidad' : 'Términos y Condiciones'}
        content={legalOpen === 'privacy' ? privacyContent : termsContent}
      />
    </>
  );
};