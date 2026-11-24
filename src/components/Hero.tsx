import React from 'react';
import Link from 'next/link';
import { BRAND_INFO } from '@/data/siteData';
import { Shield, Sparkles, MapPin, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Gibran Interior, saya ingin jadwalkan survei dan konsultasi custom furniture untuk rumah saya.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-[#f8fafc] via-[#eef4f8] to-[#f8fafc]">
      {/* Background Decorative Element with Brand Navy Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#003f60]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#c5a059]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Regional & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003f60]/10 border border-[#003f60]/20 text-[#003f60] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#003f60]" />
              <span>Spesialis Custom Furniture & Interior Rumah</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-heading font-extrabold text-[#0f172a] tracking-tight leading-[1.16]">
              Hadirkan Keindahan & Presisi <br className="hidden sm:inline" />
              di Setiap Sudut{' '}
              <span className="text-[#003f60]">
                Hunian Anda.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Jasa pembuatan <strong className="text-slate-800 font-semibold">Kitchen Set, Wardrobe, dan Backdrop TV</strong> custom berbahan Multiplek Grade A 18mm dengan pengerjaan presisi. Melayani survei langsung dan instalasi rapi untuk wilayah Jawa Barat, DKI Jakarta, dan Banten.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 pb-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 justify-start lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#003f60] shrink-0" />
                <span>Gratis Survei Lokasi</span>
              </div>
              <div className="flex items-center gap-2 justify-start lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#003f60] shrink-0" />
                <span>Desain 3D Realistis</span>
              </div>
              <div className="flex items-center gap-2 justify-start lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#003f60] shrink-0" />
                <span>Garansi Resmi 1 Tahun</span>
              </div>
              <div className="flex items-center gap-2 justify-start lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#003f60] shrink-0" />
                <span>Multiplek Meranti 18mm</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#003f60] hover:bg-[#002d45] text-white px-8 py-4 rounded-xl text-base font-semibold tracking-wide transition-all shadow-[0_10px_25px_rgba(0,63,96,0.3)] hover:shadow-[0_15px_30px_rgba(0,63,96,0.4)] transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Konsultasi & Survei Gratis</span>
              </a>

              <Link
                href="/galeri"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-4 rounded-xl text-base font-medium transition-colors shadow-sm"
              >
                <span>Lihat Galeri Klien</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Region Coverage Highlight */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 border-t border-slate-200">
              <MapPin className="w-4 h-4 text-[#003f60] shrink-0" />
              <span>Prioritas Layanan: <strong>Jakarta, Tangerang/BSD, Bekasi, Bandung, Bogor, & Depok</strong></span>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/custom-furniture/kitchen-set/kitchen-island-sage-01.webp"
                alt="Gibran Interior Kitchen Set Modern Custom"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 text-slate-800 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Kitchen Set & Island Minimalis</p>
                    <p className="text-slate-500">Proyek Cluster Navapark, BSD City</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#003f60]/10 text-[#003f60] font-bold">
                    Plywood 18mm
                  </span>
                </div>
              </div>

              {/* Top Floating Mini Card */}
              <div className="absolute top-4 left-4 bg-[#003f60]/90 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Hasil Produksi Workshop Sendiri</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
