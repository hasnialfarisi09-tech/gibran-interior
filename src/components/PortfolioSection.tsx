'use client';

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, BRAND_INFO } from '@/data/siteData';
import { MapPin, Clock, MessageCircle, Layers, ChevronDown } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Semua Kategori' },
    { id: 'kitchenset', label: 'Kitchenset' },
    { id: 'livingroom', label: 'Livingroom' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'office', label: 'Office' },
    { id: 'lainnya', label: 'Lainnya' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  // Initial show count is 6 (which renders exactly 2 rows on 3-col desktop)
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setShowAll(false);
  };

  return (
    <section id="portofolio" className="py-14 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Galeri Proyek Nyata
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0f172a] tracking-tight">
            Portofolio Fabrikasi Interior Kami
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Jelajahi hasil pengerjaan custom furniture presisi kami berdasarkan kategori ruangan.
          </p>
        </div>

        {/* Filter Tabs by Category (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar sm:flex-wrap sm:justify-center">
          {categories.map((cat) => {
            const count = cat.id === 'all'
              ? PORTFOLIO_ITEMS.length
              : PORTFOLIO_ITEMS.filter((item) => item.category === cat.id).length;

            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#003f60] text-white shadow-md shadow-[#003f60]/25 scale-[1.02]'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-[#003f60]/40 hover:bg-slate-50'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid: 2 Columns on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {displayedItems.map((item) => {
            const waProjectMsg = `Halo Gibran Interior, saya melihat proyek portofolio ${item.categoryLabel} "${item.title}" di ${item.location}. Apakah bisa buat model serupa untuk ruangan saya?`;
            const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(waProjectMsg)}`;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#003f60]/40"
              >
                <div>
                  {/* Photo Container with Architectural 4:3 Proportion */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#002d45]/85 backdrop-blur-md text-white text-[9px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-xs">
                      {item.categoryLabel}
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-md text-[#003f60] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded shadow-xs">
                      {item.province}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-5 lg:p-6 space-y-2 sm:space-y-3">
                    <h3 className="font-heading font-bold text-xs sm:text-base lg:text-lg text-slate-900 group-hover:text-[#003f60] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Location & Duration Info */}
                    <div className="space-y-1 text-[11px] sm:text-xs text-slate-600 pt-0.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#003f60] shrink-0" />
                          <span className="font-medium text-slate-800 truncate">{item.location}</span>
                        </div>
                        {item.client && (
                          <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium shrink-0 ml-1">
                            {item.client}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1 sm:gap-1.5 text-slate-500">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{item.duration}</span>
                      </div>
                    </div>

                    {/* Material & Finishing Highlights (Hidden on compact mobile to keep card sleek) */}
                    <div className="pt-2 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-500 space-y-0.5 hidden sm:block">
                      <p className="truncate"><strong className="text-slate-700">Finishing:</strong> {item.finishing}</p>
                      <p className="truncate"><strong className="text-slate-700">Bahan:</strong> {item.materials}</p>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-3 sm:p-5 lg:p-6 pt-0 sm:pt-0">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#f8fafc] hover:bg-[#003f60] text-slate-800 hover:text-white border border-slate-200 hover:border-[#003f60] py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold transition-all shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#003f60] group-hover:text-white transition-colors" />
                    <span className="sm:hidden">Konsultasi</span>
                    <span className="hidden sm:inline">Konsultasi Model Serupa</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More / Show All Action Button */}
        {filteredItems.length > 6 && (
          <div className="mt-10 sm:mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-[#003f60] font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md"
            >
              <span>{showAll ? 'Tampilkan Lebih Sedikit' : `Lihat Semua Proyek (${filteredItems.length})`}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180 text-[#003f60]' : 'text-slate-500'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
