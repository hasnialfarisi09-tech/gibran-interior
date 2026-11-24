'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND_INFO } from '@/data/siteData';
import { Menu, X, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/#layanan' },
    { label: 'Galeri Klien', href: '/galeri' },
    { label: 'Material', href: '/#material' },
    { label: 'Alur Kerja', href: '/#alur-kerja' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Gibran Interior, saya ingin konsultasi pembuatan custom furniture untuk rumah saya.'
  )}`;

  return (
    <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-6xl pointer-events-auto">
        {/* Floating Liquid Glass Pill Header */}
        <div
          className={`relative rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-white/75 backdrop-blur-2xl shadow-[0_16px_35px_-8px_rgba(0,63,96,0.14),0_0_0_1px_rgba(255,255,255,0.9),inset_0_1px_2px_rgba(255,255,255,0.95)]'
              : 'bg-white/65 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,63,96,0.08),0_0_0_1px_rgba(255,255,255,0.8),inset_0_1px_2px_rgba(255,255,255,0.9)]'
          } border border-white/70 px-4 sm:px-6 py-2 sm:py-2.5`}
        >
          {/* Liquid Glass Top Reflection Sheen */}
          <div className="absolute inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-95 rounded-full pointer-events-none" />
          <div className="absolute inset-x-20 top-[1.5px] h-3 bg-gradient-to-b from-white/35 to-transparent rounded-full pointer-events-none blur-[1px]" />

          <div className="flex items-center justify-between">
            {/* Brand Logo with Official Graphic */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-blue.png"
                alt="Gibran Interior Logo"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-700 bg-slate-100/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-inner">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1 rounded-full hover:text-[#003f60] hover:bg-white/90 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}

              {/* Wilayah Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  onMouseEnter={() => setShowLocationDropdown(true)}
                  className="flex items-center gap-1 px-3 py-1 rounded-full hover:text-[#003f60] hover:bg-white/90 transition-all"
                >
                  <span>Wilayah</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {showLocationDropdown && (
                  <div
                    onMouseLeave={() => setShowLocationDropdown(false)}
                    className="absolute right-0 mt-3 w-60 bg-white/90 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_15px_35px_rgba(0,63,96,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] p-2.5 z-50 text-xs animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="font-bold text-slate-400 px-3 py-1.5 text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#003f60]" />
                      Jangkauan Layanan
                    </div>
                    <Link
                      href="/#wilayah"
                      className="block px-3 py-2 text-slate-700 hover:bg-[#003f60]/10 hover:text-[#003f60] rounded-xl font-medium transition-colors"
                      onClick={() => setShowLocationDropdown(false)}
                    >
                      📍 DKI Jakarta (Jaksel, Jakbar, dll)
                    </Link>
                    <Link
                      href="/#wilayah"
                      className="block px-3 py-2 text-slate-700 hover:bg-[#003f60]/10 hover:text-[#003f60] rounded-xl font-medium transition-colors"
                      onClick={() => setShowLocationDropdown(false)}
                    >
                      📍 Jawa Barat (Bandung, Bekasi, Bogor)
                    </Link>
                    <Link
                      href="/#wilayah"
                      className="block px-3 py-2 text-slate-700 hover:bg-[#003f60]/10 hover:text-[#003f60] rounded-xl font-medium transition-colors"
                      onClick={() => setShowLocationDropdown(false)}
                    >
                      📍 Banten (BSD, Tangerang, Serang)
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action: Pill Button */}
            <div className="flex items-center gap-2">
              {/* CTA Button in Brand Navy */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#003f60] to-[#002d45] hover:from-[#002d45] hover:to-[#001f30] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow-[0_4px_14px_rgba(0,63,96,0.35)] hover:shadow-[0_6px_18px_rgba(0,63,96,0.45)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Konsultasi</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full bg-white/70 backdrop-blur-md text-slate-800 hover:bg-white border border-white/50 focus:outline-none transition-colors shadow-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Popup Modal / Expanded Liquid Glass Island */}
        {isOpen && (
          <div className="lg:hidden mt-2 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 p-5 shadow-[0_20px_45px_rgba(0,63,96,0.18),inset_0_1px_2px_rgba(255,255,255,0.95)] animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-blue.png"
                alt="Gibran Interior Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Menu Navigasi
              </span>
            </div>
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl hover:bg-white/80 hover:text-[#003f60] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#wilayah"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-[#003f60]/10 text-[#003f60] flex items-center justify-between"
              >
                <span>📍 Area: Jabar, DKI Jakarta, Banten</span>
                <Sparkles className="w-4 h-4 text-[#003f60]" />
              </Link>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-200/60">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#003f60] hover:bg-[#002d45] text-white py-3 rounded-2xl text-sm font-semibold shadow-md active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Chat WhatsApp Langsung</span>
              </a>

              {/* Mobile Social Links */}
              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Media Sosial:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={BRAND_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#E4405F] text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href={BRAND_INFO.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.08a8.28 8.28 0 0 0 4.77 1.5V7.13a4.84 4.84 0 0 1-1-.44z"/>
                    </svg>
                  </a>
                  <a
                    href={BRAND_INFO.socialMedia.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12.186 24C5.466 24 0 18.67 0 12.115 0 5.56 5.466.23 12.186.23c6.643 0 11.954 5.163 12.029 11.697v.589c-.046 5.378-3.722 9.42-8.995 9.42-3.35 0-5.918-1.748-6.84-4.664l1.89-.966c.642 1.944 2.457 3.09 4.95 3.09 3.655 0 6.46-2.58 6.495-6.527-.925.545-2.062.868-3.327.868-4.484 0-7.397-2.613-7.397-6.262 0-3.69 2.97-6.39 7.185-6.39 4.318 0 7.218 2.83 7.218 7.07v.562C21.84 17.58 17.53 21.6 12.186 21.6c-5.28 0-9.61-4.225-9.61-9.485 0-5.26 4.33-9.485 9.61-9.485 4.35 0 8.01 2.84 9.17 6.945l-2.43.68c-.85-2.98-3.48-5.025-6.74-5.025-4.01 0-7.19 3.12-7.19 6.885 0 3.765 3.18 6.885 7.19 6.885 1.15 0 2.22-.27 3.14-.76.31-1.92.38-3.41.38-3.57 0-2.83-1.89-4.67-4.83-4.67-2.92 0-4.84 1.83-4.84 4.19 0 2.37 1.88 4.07 4.75 4.07.97 0 1.91-.21 2.76-.62.06-.5.14-1.12.22-1.83-1.02.4-2.05.6-2.98.6-1.58 0-2.56-.84-2.56-2.22 0-1.4.98-2.34 2.65-2.34 1.7 0 2.68.96 2.68 2.59 0 .39-.03.85-.08 1.38l.84-.25z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
