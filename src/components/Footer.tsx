import React from 'react';
import Link from 'next/link';
import { BRAND_INFO, SERVICES, REGIONS } from '@/data/siteData';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001f30] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info with White Logo & Social Badges */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-white.png"
                alt="Gibran Interior Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Jasa pembuatan interior rumah & custom furniture presisi tinggi. Mengutamakan bahan kayu solid multiplek 18mm tebal, finishing berkualitas, serta transparansi alur kerja.
            </p>
            
            <div className="pt-1 text-xs space-y-1.5 text-slate-400">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Bergaransi Resmi 1 Tahun</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Workshop Mandiri & Free Survei Lokasi</span>
              </p>
            </div>

            {/* Social Media Buttons */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                Media Sosial Kami:
              </p>
              <div className="flex items-center gap-2.5">
                {/* Instagram */}
                <a
                  href={BRAND_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Gibran Interior"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={BRAND_INFO.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Gibran Interior"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.28 8.28 0 0 0 4.77 1.5V7.13a4.84 4.84 0 0 1-1-.44z"/>
                  </svg>
                </a>

                {/* Threads */}
                <a
                  href={BRAND_INFO.socialMedia.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads Gibran Interior"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-black text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xs"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12.186 24C5.466 24 0 18.67 0 12.115 0 5.56 5.466.23 12.186.23c6.643 0 11.954 5.163 12.029 11.697v.589c-.046 5.378-3.722 9.42-8.995 9.42-3.35 0-5.918-1.748-6.84-4.664l1.89-.966c.642 1.944 2.457 3.09 4.95 3.09 3.655 0 6.46-2.58 6.495-6.527-.925.545-2.062.868-3.327.868-4.484 0-7.397-2.613-7.397-6.262 0-3.69 2.97-6.39 7.185-6.39 4.318 0 7.218 2.83 7.218 7.07v.562C21.84 17.58 17.53 21.6 12.186 21.6c-5.28 0-9.61-4.225-9.61-9.485 0-5.26 4.33-9.485 9.61-9.485 4.35 0 8.01 2.84 9.17 6.945l-2.43.68c-.85-2.98-3.48-5.025-6.74-5.025-4.01 0-7.19 3.12-7.19 6.885 0 3.765 3.18 6.885 7.19 6.885 1.15 0 2.22-.27 3.14-.76.31-1.92.38-3.41.38-3.57 0-2.83-1.89-4.67-4.83-4.67-2.92 0-4.84 1.83-4.84 4.19 0 2.37 1.88 4.07 4.75 4.07.97 0 1.91-.21 2.76-.62.06-.5.14-1.12.22-1.83-1.02.4-2.05.6-2.98.6-1.58 0-2.56-.84-2.56-2.22 0-1.4.98-2.34 2.65-2.34 1.7 0 2.68.96 2.68 2.59 0 .39-.03.85-.08 1.38l.84-.25z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Layanan Custom */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="/#layanan"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[11px] text-slate-500 group-hover:text-[#c5a059] transition-colors">
                      Custom &rarr;
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/galeri"
                  className="text-[#c5a059] hover:text-white font-semibold flex items-center justify-between transition-colors"
                >
                  <span>📸 Galeri Dokumentasi Klien</span>
                  <span className="text-[10px] bg-[#c5a059]/20 px-2 py-0.5 rounded">135+ Klien</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Area Layanan Survei */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Wilayah Prioritas
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {REGIONS.map((reg) => (
                <div key={reg.id} className="border-b border-white/5 pb-2">
                  <p className="font-semibold text-slate-200">{reg.province}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {reg.cities.slice(0, 3).map((c) => c.name).join(', ')}, dsk.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Kontak & Media Sosial Official */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-slate-200">Alamat Kantor:</strong><br />
                  {BRAND_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-slate-200"
                >
                  WhatsApp: {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>

              {/* Official Social Media Links */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Official Channels:
                </p>
                <div className="space-y-1.5 text-xs">
                  <a
                    href={BRAND_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-[#c5a059] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E4405F] shrink-0" />
                    <span>Instagram: <strong className="text-white font-medium">{BRAND_INFO.instagram}</strong></span>
                  </a>
                  <a
                    href={BRAND_INFO.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-[#c5a059] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>TikTok: <strong className="text-white font-medium">{BRAND_INFO.tiktok}</strong></span>
                  </a>
                  <a
                    href={BRAND_INFO.socialMedia.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-[#c5a059] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                    <span>Threads: <strong className="text-white font-medium">{BRAND_INFO.threads}</strong></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & local SEO keywords */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 <strong>{BRAND_INFO.name}</strong>. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="text-[11px] text-slate-400 text-center sm:text-right">
            Jasa Pembuatan Kitchen Set, Lemari Wardrobe, Backdrop TV Custom di Bandung, Jakarta, Tangerang BSD, Bekasi, Bogor, & Depok.
          </p>
        </div>

      </div>
    </footer>
  );
}
