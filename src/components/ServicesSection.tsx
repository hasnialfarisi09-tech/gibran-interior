import React from 'react';
import { SERVICES, BRAND_INFO } from '@/data/siteData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Spesialisasi Custom Furniture
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">
            Layanan Fabrikasi Interior Rumah
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Setiap produk dirancang secara ergonomis dan diproduksi khusus (*tailor-made*) mengikuti bentuk dinding serta selera estetika Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => {
            const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Halo Gibran Interior, saya tertarik konsultasi layanan ${service.title} untuk rumah saya.`
            )}`;

            return (
              <div
                key={service.id}
                className="group rounded-3xl border border-slate-200 bg-[#f8fafc] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#003f60]/40"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.popular && (
                      <div className="absolute top-4 left-4 bg-[#c5a059] text-slate-900 text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                        Paling Favorit
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-[#0f172a] group-hover:text-[#003f60] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Fitur & Kelengkapan:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#003f60] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Materials Tag */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {service.materials.map((mat, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-slate-200 px-2.5 py-1 rounded-md text-[11px] text-slate-600"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#003f60] hover:bg-[#002d45] text-white py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors"
                  >
                    <span>Konsultasikan {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
