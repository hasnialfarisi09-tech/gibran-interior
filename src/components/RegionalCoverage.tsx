import React from 'react';
import { REGIONS, BRAND_INFO } from '@/data/siteData';
import { MapPin, CheckCircle, Navigation, MessageCircle } from 'lucide-react';

export default function RegionalCoverage() {
  return (
    <section id="wilayah" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            Jangkauan Layanan Survei & Pengiriman
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">
            Melayani Jawa Barat, DKI Jakarta, & Banten
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tim teknis dan armada pengiriman kami siap datang langsung ke lokasi proyek hunian Anda dengan jaminan ketepatan waktu dan keamanan material.
          </p>
        </div>

        {/* 3 Province Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REGIONS.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Title */}
                <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-slate-100">
                  <div className="p-2.5 bg-[#003f60]/10 rounded-xl text-[#003f60]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#003f60]">
                      Provinsi
                    </span>
                    <h3 className="text-xl font-serif font-bold text-slate-900">
                      {region.province}
                    </h3>
                  </div>
                </div>

                {/* Cities list */}
                <div className="space-y-4">
                  {region.cities.map((city) => (
                    <div key={city.slug} className="text-xs space-y-1">
                      <p className="font-bold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#003f60]" />
                        <span>{city.name}</span>
                      </p>
                      <p className="text-slate-500 pl-5">
                        {city.description}
                      </p>
                      <div className="pl-5 flex flex-wrap gap-1 pt-1">
                        {city.highlightAreas.slice(0, 4).map((area, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-[10px] text-slate-600"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Halo Gibran Interior, saya ingin survei dan pengerjaan interior untuk area di provinsi ${region.province}. Bisa tolong info jadwal yang tersedia?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#003f60] text-slate-800 hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Jadwalkan Survei di {region.province}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Survey Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          💡 <strong>Info Penting:</strong> Tim kami secara rutin menjadwalkan survei ke klaster perumahan baru maupun apartemen di area Jabodetabek, Bandung, dan sekitarnya setiap minggu. Hubungi kami lebih awal untuk mengamankan slot survei gratis Anda.
        </div>

      </div>
    </section>
  );
}
