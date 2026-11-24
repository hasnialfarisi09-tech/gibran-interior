import React from 'react';
import { BRAND_INFO } from '@/data/siteData';
import { Award, Hammer, Star, Users } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-[#003f60]" />,
      value: BRAND_INFO.projectCompleted,
      label: "Proyek Interior Selesai",
      sub: "Rumah & Apartemen"
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#003f60]" />,
      value: BRAND_INFO.yearsExperience,
      label: "Tahun Pengalaman",
      sub: "Tukang Kayu Ahli"
    },
    {
      icon: <Star className="w-6 h-6 text-[#c5a059] fill-[#c5a059]" />,
      value: `${BRAND_INFO.rating} / 5.0`,
      label: "Kepuasan Klien",
      sub: `${BRAND_INFO.reviewCount} Ulasan Google`
    },
    {
      icon: <Users className="w-6 h-6 text-[#003f60]" />,
      value: "100% Custom",
      label: "Desain Personalisasi",
      sub: "Sesuai Budget & Ruang"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
              <div className="p-2.5 rounded-xl bg-[#003f60]/5 border border-[#003f60]/10 mb-2">
                {s.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0f172a]">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
