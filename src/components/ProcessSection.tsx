import React from 'react';
import { WORK_PROCESS, BRAND_INFO } from '@/data/siteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Gibran Interior, saya ingin jadwalkan survei pengukuran lokasi untuk rumah saya.'
  )}`;

  return (
    <section id="alur-kerja" className="py-14 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            Alur Transparan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0f172a] tracking-tight">
            5 Langkah Mudah Wujudkan Interior Impian
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Dari ide kasar hingga furniture terpasang presisi di hunian Anda. Tanpa ribet dan didampingi tim desainer profesional kami.
          </p>
        </div>

        {/* Steps Grid: 2 Columns on Mobile, 3 on Tablet, 5 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 lg:gap-6 relative">
          {WORK_PROCESS.map((item, index) => {
            const isLast = index === WORK_PROCESS.length - 1;

            return (
              <div
                key={item.step}
                className={`bg-[#f8fafc] hover:bg-white p-3.5 sm:p-5 lg:p-6 rounded-2xl border border-slate-200/90 relative flex flex-col justify-between hover:border-[#003f60]/50 transition-all hover:-translate-y-1 shadow-xs hover:shadow-md ${
                  isLast ? 'col-span-2 md:col-span-1 bg-gradient-to-br from-[#f8fafc] to-[#003f60]/5 border-[#003f60]/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#003f60] text-white font-heading font-extrabold text-xs sm:text-base flex items-center justify-center shadow-md shadow-[#003f60]/20">
                      {item.step}
                    </div>
                    {isLast && (
                      <span className="text-[10px] sm:hidden font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Garansi 1 Thn
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-heading font-bold text-slate-900 mb-1.5 sm:mb-2 leading-snug line-clamp-2 sm:line-clamp-none">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < WORK_PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action note */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#003f60]/5 border border-[#003f60]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#003f60] shrink-0" />
            <p className="text-xs sm:text-sm text-slate-800">
              <strong>Siap memulai langkah pertama?</strong> Konsultasikan ukuran perkiraan ruangan Anda hari ini secara gratis.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center shrink-0 bg-[#003f60] hover:bg-[#002d45] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow"
          >
            Mulai Konsultasi & Survei
          </a>
        </div>

      </div>
    </section>
  );
}
