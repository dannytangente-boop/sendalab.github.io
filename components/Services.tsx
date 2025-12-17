import React from 'react';
import { LayoutDashboard, ShoppingBag, BarChart3, Globe } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Gestión Operativa",
      desc: "Sistemas a la medida para inventarios, personal y logística. Deja el papel, abraza los datos.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Presencia Digital",
      desc: "Sitios web, Google Maps y SEO local para que tus clientes te encuentren cuando te necesitan.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      desc: "Dashboards financieros y operativos. Transformamos datos brutos en decisiones estratégicas.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Automatización",
      desc: "Menús QR, catálogos digitales y sistemas de pedidos para retail y restaurantes.",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300"
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light dark:bg-brand-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark dark:text-white mb-4">
              Soluciones para todo tipo de empresa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Desde manufactura hasta hospitalidad. Adaptamos la tecnología a tu flujo de trabajo, no al revés.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};