import React from 'react';
import Link from 'next/link';
import { BRAND_INFO } from '@/data/siteData';
import { Phone, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Gibran Interior, saya ingin jadwalkan survei gratis untuk interior rumah saya di area Jabar/Jakarta/Banten.'
  )}`;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#002d45] via-[#003f60] to-[#002d45] text-white relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#c5a059]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0a5c8a]/30 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#c5a059] text-xs font-semibold tracking-wider border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Wujudkan Interior Hunian Impian Anda</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
          Dapatkan Desain 3D & Konsultasi <span className="text-[#c5a059] italic font-normal">Gratis</span> Hari Ini.
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Jangan ragu untuk mengonsultasikan denah atau ukuran ruangan Anda. Tim Gibran Interior siap membantu mewujudkan furniture idaman Anda secara presisi dan bergaransi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-[#b58f48] text-slate-900 px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide transition-all shadow-[0_10px_25px_rgba(197,160,89,0.3)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.4)] hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5 text-slate-900" />
            <span>Chat WhatsApp: {BRAND_INFO.phone}</span>
          </a>

          <Link
            href="/galeri"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 rounded-xl text-sm sm:text-base font-medium transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span>Lihat Galeri Klien</span>
          </Link>
        </div>

        {/* Guarantees */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            Garansi Pengerjaan 1 Tahun
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            Bahan 100% Plywood Meranti 18mm
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            Tanpa Biaya Tersembunyi
          </span>
        </div>

      </div>
    </section>
  );
}
