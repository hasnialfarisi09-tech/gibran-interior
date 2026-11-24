'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CLIENT_PROJECTS, GALLERY_CATEGORIES, ClientProject } from '@/data/clientGalleryData';
import { BRAND_INFO } from '@/data/siteData';
import { Camera, MapPin, ArrowRight, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';

export default function ClientGalleryHighlight() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter clients with at least 5 photos
  const eligibleClients = CLIENT_PROJECTS.filter((c) => c.photos.length >= 5);

  const filteredClients = activeCategory === 'all'
    ? eligibleClients
    : eligibleClients.filter((c) => c.category === activeCategory);

  // Take top 6 diverse clients for highlight display
  const highlightClients = filteredClients.slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003f60]/10 border border-[#003f60]/20 text-[#003f60] text-xs font-semibold tracking-wide mb-3">
              <Camera className="w-3.5 h-3.5 text-[#003f60]" />
              <span>Dokumentasi Nyata Klien Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0f172a] tracking-tight">
              Galeri Proyek & Instalasi Klien
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Dokumentasi asli langsung dari workshop dan instalasi di rumah para klien kami. Setiap proyek menampilkan minimal 5 foto hasil pengerjaan nyata.
            </p>
          </div>

          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#003f60] hover:bg-[#002d45] text-white px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0"
          >
            <span>Buka Halaman Galeri Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar sm:flex-wrap">
          {GALLERY_CATEGORIES.slice(0, 7).map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#003f60] text-white shadow-sm scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-[#003f60]/40 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Highlight Clients Grid: 2 Columns on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlightClients.map((client) => {
            const fivePhotos = client.photos.slice(0, 5);
            const waMsg = `Halo Gibran Interior, saya melihat dokumentasi proyek ${client.clientName} di ${client.location} (${client.categoryLabel}). Apakah bisa buat custom furniture dengan model serupa untuk hunian saya?`;
            const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

            return (
              <div
                key={client.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#003f60]/40"
              >
                <div className="p-4 sm:p-5">
                  {/* Client Info Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block text-[10px] font-bold text-[#003f60] uppercase tracking-wider mb-1">
                        {client.categoryLabel}
                      </span>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#003f60] transition-colors">
                        {client.clientName}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#003f60] shrink-0" />
                        <span className="truncate">{client.location}</span>
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#003f60] text-[11px] font-bold shrink-0">
                      {client.photoCount} Foto
                    </span>
                  </div>

                  {/* 5 Photos Showcase Layout */}
                  <div className="grid grid-cols-4 gap-1.5 rounded-xl overflow-hidden bg-slate-100 p-1 border border-slate-100">
                    {/* Large Featured Photo (Spans 4 columns or top hero) */}
                    <div className="col-span-4 relative aspect-[16/10] overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={fivePhotos[0]?.url || client.photos[0]?.url}
                        alt={`${client.clientName} Foto 1`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded">
                        Foto 1 dari {client.photoCount}
                      </div>
                    </div>

                    {/* 4 Thumbnails (Photos 2 to 5) */}
                    {fivePhotos.slice(1, 5).map((photo, pIdx) => {
                      const isLastThumbnail = pIdx === 3 && client.photoCount > 5;
                      const remainingCount = client.photoCount - 5;

                      return (
                        <div key={photo.id || pIdx} className="relative aspect-square overflow-hidden rounded-md bg-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={photo.url}
                            alt={`${client.clientName} Foto ${pIdx + 2}`}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                          {isLastThumbnail && (
                            <Link
                              href={`/galeri?kategori=${client.category}`}
                              className="absolute inset-0 bg-[#002d45]/80 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-bold hover:bg-[#002d45]/90 transition-colors"
                            >
                              +{remainingCount}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 sm:p-5 pt-0 sm:pt-0 flex items-center gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#003f60] hover:bg-[#002d45] text-white py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tanya Proyek Ini</span>
                  </a>

                  <Link
                    href={`/galeri?kategori=${client.category}`}
                    className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-[#003f60] hover:border-[#003f60] hover:bg-slate-50 transition-colors"
                    title="Buka di Halaman Galeri"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to Full Gallery */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#003f60] via-[#002d45] to-[#0a5c8a] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#c5a059] text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Arsip Lengkap Google Drive Terhubung</span>
            </div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Eksplorasi Seluruh Dokumentasi 135+ Klien Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Lihat foto lengkap per ruangan: Kitchen Set, Lemari Bawah Tangga, Wardrobe, Living Room, hingga Full Interior Rumah.
            </p>
          </div>

          <Link
            href="/galeri"
            className="shrink-0 inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-[#003f60] px-7 py-4 rounded-xl text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <span>Buka Galeri Klien Lengkap</span>
            <ArrowRight className="w-4 h-4 text-[#003f60]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
