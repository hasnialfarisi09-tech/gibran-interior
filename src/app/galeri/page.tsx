'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CLIENT_PROJECTS, GALLERY_CATEGORIES, ClientProject } from '@/data/clientGalleryData';
import { BRAND_INFO } from '@/data/siteData';
import {
  Camera,
  MapPin,
  Search,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  ChevronDown
} from 'lucide-react';

function GalleryContent() {
  const searchParams = useSearchParams();
  const queryCat = searchParams.get('kategori');
  const [prevQueryCat, setPrevQueryCat] = useState<string | null>(queryCat);
  const [selectedCategory, setSelectedCategory] = useState<string>(queryCat || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayCount, setDisplayCount] = useState<number>(12);

  if (queryCat !== prevQueryCat) {
    setPrevQueryCat(queryCat);
    if (queryCat) {
      setSelectedCategory(queryCat);
    }
  }

  // Expanded client cards that show ALL photos instead of just 5
  const [expandedClientIds, setExpandedClientIds] = useState<Set<string>>(new Set());

  // Lightbox Modal State
  const [lightboxData, setLightboxData] = useState<{
    client: ClientProject;
    photoIndex: number;
  } | null>(null);

  // Filter logic
  const filteredClients = useMemo(() => {
    return CLIENT_PROJECTS.filter((client) => {
      const matchCategory =
        selectedCategory === 'all' || client.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === '' ||
        client.clientName.toLowerCase().includes(query) ||
        client.location.toLowerCase().includes(query) ||
        client.categoryLabel.toLowerCase().includes(query) ||
        client.rawFolder.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedClients = filteredClients.slice(0, displayCount);

  const toggleExpandClient = (clientId: string) => {
    setExpandedClientIds((prev) => {
      const next = new Set(prev);
      if (next.has(clientId)) {
        next.delete(clientId);
      } else {
        next.add(clientId);
      }
      return next;
    });
  };

  const openLightbox = (client: ClientProject, photoIndex: number) => {
    setLightboxData({ client, photoIndex });
  };

  const nextLightboxPhoto = () => {
    if (!lightboxData) return;
    const { client, photoIndex } = lightboxData;
    const nextIndex = (photoIndex + 1) % client.photos.length;
    setLightboxData({ client, photoIndex: nextIndex });
  };

  const prevLightboxPhoto = () => {
    if (!lightboxData) return;
    const { client, photoIndex } = lightboxData;
    const prevIndex = (photoIndex - 1 + client.photos.length) % client.photos.length;
    setLightboxData({ client, photoIndex: prevIndex });
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#003f60] transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Galeri Klien</span>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003f60]/10 border border-[#003f60]/20 text-[#003f60] text-xs font-semibold tracking-wide mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi Resmi Google Drive</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Galeri Dokumentasi Klien Kami
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kumpulan dokumentasi foto asli dari instalasi interior & custom furniture di rumah para klien kami. Setiap proyek menampilkan minimal 5 foto nyata.
          </p>

          {/* Quick Stats Pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-700">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              📁 <strong>{CLIENT_PROJECTS.length} Folder Klien</strong> Terdata
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              📸 <strong>1.000+ Foto Asli</strong> Pengerjaan
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              📍 <strong>Jabar, Jakarta, & Banten</strong>
            </span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 mb-10 shadow-sm space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berdasarkan nama klien, kota, atau perumahan (contoh: Soreang, Cimahi, Ibu Via, Jakarta)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#003f60] focus:ring-2 focus:ring-[#003f60]/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar sm:flex-wrap">
            {GALLERY_CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? CLIENT_PROJECTS.length
                : CLIENT_PROJECTS.filter((c) => c.category === cat.id).length;

              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setDisplayCount(12);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#003f60] text-white shadow-sm scale-[1.02]'
                      : 'bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#003f60]/40 hover:bg-slate-100'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
            <span>
              Menampilkan <strong>{displayedClients.length}</strong> dari <strong>{filteredClients.length}</strong> klien
              {searchQuery && ` untuk pencarian "${searchQuery}"`}
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#003f60] font-semibold hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredClients.length === 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-slate-800">
              Tidak Ada Klien Ditemukan
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Coba kata kunci lain atau pilih kategori Semua Kategori untuk melihat seluruh dokumentasi.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#003f60] text-white text-xs font-semibold hover:bg-[#002d45]"
            >
              Tampilkan Semua Proyek
            </button>
          </div>
        )}

        {/* Client Projects List */}
        <div className="space-y-8 sm:space-y-12">
          {displayedClients.map((client) => {
            const isExpanded = expandedClientIds.has(client.id);
            // Show at least 5 photos (or all if expanded)
            const visiblePhotos = isExpanded ? client.photos : client.photos.slice(0, 5);
            const remainingCount = client.photos.length - 5;

            const waMsg = `Halo Gibran Interior, saya melihat dokumentasi proyek ${client.clientName} di ${client.location} (${client.categoryLabel}). Bisa konsultasikan model serupa untuk ruangan saya?`;
            const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

            return (
              <div
                key={client.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 p-5 sm:p-7"
              >
                {/* Client Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-[#003f60] uppercase tracking-wider bg-[#003f60]/10 px-2.5 py-0.5 rounded-full">
                        {client.categoryLabel}
                      </span>
                      {client.subCategory && client.subCategory !== client.categoryLabel && (
                        <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {client.subCategory}
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                      {client.clientName}
                    </h2>
                    <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#003f60] shrink-0" />
                      <span>{client.location}</span>
                      <span className="text-slate-300">•</span>
                      <span>Folder: <em>{client.rawFolder}</em></span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold shrink-0">
                      📸 {client.photoCount} Foto
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#003f60] hover:bg-[#002d45] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Tanya Model Ini</span>
                    </a>
                  </div>
                </div>

                {/* Photos Grid: Minimal 5 Photos per Client */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3.5">
                  {visiblePhotos.map((photo, pIdx) => {
                    const isFifthAndHasMore = !isExpanded && pIdx === 4 && remainingCount > 0;

                    return (
                      <div
                        key={photo.id || pIdx}
                        onClick={() => openLightbox(client, pIdx)}
                        className="group/photo relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/80 shadow-2xs hover:shadow-md transition-all"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.url}
                          alt={`${client.clientName} - Foto ${pIdx + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-xs font-semibold bg-black/60 px-2.5 py-1 rounded-full">
                            Perbesar
                          </span>
                        </div>

                        {/* Top corner photo number */}
                        <div className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                          #{pIdx + 1}
                        </div>

                        {/* "+N More Photos" overlay on the 5th photo */}
                        {isFifthAndHasMore && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpandClient(client.id);
                            }}
                            className="absolute inset-0 bg-[#002d45]/85 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-2 text-center hover:bg-[#002d45]/95 transition-colors cursor-pointer"
                          >
                            <span className="text-lg sm:text-xl font-extrabold">+{remainingCount}</span>
                            <span className="text-[10px] sm:text-[11px] font-medium mt-0.5">Lihat Semua</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Expand / Collapse Button if client has more than 5 photos */}
                {client.photos.length > 5 && (
                  <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                    <span>
                      {isExpanded
                        ? `Menampilkan seluruh ${client.photos.length} foto dokumentasi`
                        : `Menampilkan 5 dari ${client.photos.length} foto dokumentasi`}
                    </span>
                    <button
                      onClick={() => toggleExpandClient(client.id)}
                      className="inline-flex items-center gap-1.5 text-[#003f60] font-semibold hover:underline"
                    >
                      <span>{isExpanded ? 'Tampilkan 5 Foto Saja' : `Buka Semua (${client.photos.length} Foto)`}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More Clients Button */}
        {displayedClients.length < filteredClients.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-[#003f60] px-8 py-4 rounded-full font-bold text-sm shadow-sm transition-all hover:shadow-md"
            >
              <span>Muat 12 Klien Berikutnya</span>
              <ChevronDown className="w-4 h-4 text-[#003f60]" />
            </button>
            <p className="text-xs text-slate-500 mt-2">
              Tersisa {filteredClients.length - displayedClients.length} folder klien lagi
            </p>
          </div>
        )}

      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxData(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxData(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxData.client.photos[lightboxData.photoIndex]?.fullUrl || lightboxData.client.photos[lightboxData.photoIndex]?.url}
              alt={`${lightboxData.client.clientName} Foto`}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Modal Info Footer */}
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="font-heading font-bold text-lg">
                {lightboxData.client.clientName} - {lightboxData.client.location}
              </h4>
              <p className="text-xs text-slate-400">
                Foto {lightboxData.photoIndex + 1} dari {lightboxData.client.photos.length} • {lightboxData.client.categoryLabel}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center pt-24 text-slate-500">
        Memuat Galeri Klien...
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
