'use client';

import React, { useState } from 'react';
import { BRAND_INFO } from '@/data/siteData';
import { Calculator, Check, MessageCircle } from 'lucide-react';

interface FurnitureType {
  id: string;
  name: string;
  unit: 'meter lari' | 'meter persegi';
  baseHPL: number;
  baseDuco: number;
  description: string;
}

const FURNITURE_TYPES: FurnitureType[] = [
  {
    id: 'kitchen-set',
    name: 'Kitchen Set (Kabinet Atas/Bawah)',
    unit: 'meter lari',
    baseHPL: 2400000,
    baseDuco: 3200000,
    description: 'Termasuk engsel soft-close & rak piring standard'
  },
  {
    id: 'wardrobe',
    name: 'Wardrobe / Lemari Pakaian',
    unit: 'meter lari',
    baseHPL: 2300000,
    baseDuco: 3100000,
    description: 'Tinggi plafon normal (s/d 2.8m), rel gantung kokoh'
  },
  {
    id: 'backdrop-tv',
    name: 'Backdrop TV & Wall Panel',
    unit: 'meter persegi',
    baseHPL: 1950000,
    baseDuco: 2700000,
    description: 'Rangka multiplek solid + manajemen kabel rapi'
  },
  {
    id: 'bedroom-bed',
    name: 'Dipan Tempat Tidur Custom (Storage)',
    unit: 'meter lari',
    baseHPL: 2100000,
    baseDuco: 2900000,
    description: 'Rangka kuat bergaransi dengan laci penyimpanan bawah'
  }
];

export default function InteractiveEstimator() {
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureType>(FURNITURE_TYPES[0]);
  const [size, setSize] = useState<number>(3);
  const [finishing, setFinishing] = useState<'hpl' | 'duco'>('hpl');
  const [includeTopTable, setIncludeTopTable] = useState<boolean>(false);
  const [region, setRegion] = useState<string>('DKI Jakarta');

  const unitRate = finishing === 'hpl' ? selectedFurniture.baseHPL : selectedFurniture.baseDuco;
  let total = unitRate * size;

  if (selectedFurniture.id === 'kitchen-set' && includeTopTable) {
    total += 1500000 * size;
  }

  const formattedTotal = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(total);

  const waConsultMessage = `Halo Gibran Interior, saya menggunakan kalkulator estimasi di website:
- Produk: ${selectedFurniture.name}
- Estimasi Ukuran: ${size} ${selectedFurniture.unit}
- Finishing: ${finishing === 'hpl' ? 'HPL Taco / Aica' : 'Cat Duco Polyurethane'}
${selectedFurniture.id === 'kitchen-set' ? `- Top Table: ${includeTopTable ? 'Ya (Granit/Solid Surface)' : 'Tidak'}\n` : ''}- Wilayah Lokasi: ${region}
- Estimasi Budget: sekitar ${formattedTotal}

Apakah bisa dijadwalkan survei ke lokasi saya untuk pengukuran presisi dan RAB resmi?`;

  const waUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(waConsultMessage)}`;

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparansi Biaya
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0f172a]">
            Simulasi Estimasi Biaya Custom Furniture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Hitung perkiraan budget pengerjaan interior Anda secara transparan. Rincian final akan disesuaikan setelah survei ukuran lokasi nyata.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Input Controls */}
          <div className="p-6 sm:p-8 md:col-span-7 space-y-6">
            
            {/* 1. Pilih Jenis Furniture */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Pilih Kategori Furniture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FURNITURE_TYPES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedFurniture(item)}
                    className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      selectedFurniture.id === item.id
                        ? 'border-[#003f60] bg-[#003f60]/5 text-[#003f60] font-semibold ring-1 ring-[#003f60]'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name.split('(')[0]}</span>
                      {selectedFurniture.id === item.id && <Check className="w-4 h-4 text-[#003f60]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Ukuran Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Perkiraan Ukuran ({selectedFurniture.unit})
                </label>
                <span className="text-sm font-bold text-[#003f60] bg-[#003f60]/10 px-3 py-1 rounded-full">
                  {size} {selectedFurniture.unit}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={size}
                onChange={(e) => setSize(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#003f60]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 meter (Kecil/Apartemen)</span>
                <span>6 meter</span>
                <span>12 meter (Luas/Hunian Besar)</span>
              </div>
            </div>

            {/* 3. Finishing Material */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. Pilihan Finishing Luar
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFinishing('hpl')}
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    finishing === 'hpl'
                      ? 'border-[#003f60] bg-[#003f60]/5 text-[#003f60] font-semibold ring-1 ring-[#003f60]'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Finishing HPL</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Taco / Aica, tahan gores & panas</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFinishing('duco')}
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    finishing === 'duco'
                      ? 'border-[#003f60] bg-[#003f60]/5 text-[#003f60] font-semibold ring-1 ring-[#003f60]'
                      : 'border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Cat Duco PU</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mewah, seamless & elegan</p>
                </button>
              </div>
            </div>

            {/* Opsi Tambahan untuk Kitchen Set */}
            {selectedFurniture.id === 'kitchen-set' && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-medium text-slate-800">
                  <input
                    type="checkbox"
                    checked={includeTopTable}
                    onChange={(e) => setIncludeTopTable(e.target.checked)}
                    className="w-4 h-4 rounded text-[#003f60] focus:ring-[#003f60]"
                  />
                  <span>Tambahkan Top Table Meja (Solid Surface / Granit Alam)</span>
                </label>
              </div>
            )}

            {/* Lokasi Wilayah */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                4. Wilayah Anda
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-2.5 bg-white text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#003f60]"
              >
                <option value="DKI Jakarta (Jaksel/Jakbar/Pusat/Utara/Timur)">DKI Jakarta (Jaksel, Jakbar, Jakpus, Jakut, Jaktim)</option>
                <option value="Banten (Tangerang Selatan, BSD, Alam Sutera, Gading Serpong)">Banten (Tangerang Selatan, BSD, Serpong, Karawaci)</option>
                <option value="Jawa Barat (Bandung & Cimahi)">Jawa Barat (Bandung Raya & Cimahi)</option>
                <option value="Jawa Barat (Bekasi, Bogor, & Depok)">Jawa Barat (Bekasi, Bogor, & Depok)</option>
              </select>
            </div>

          </div>

          {/* Right: Real-time Calculation Summary in Deep Navy */}
          <div className="bg-[#002d45] text-white p-6 sm:p-8 md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                Estimasi Total RAB
              </div>

              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white block">
                  {formattedTotal}
                </span>
                <span className="text-xs text-slate-300 mt-1 block">
                  *Perkiraan awal (Material Multiplek 18mm Grade A)
                </span>
              </div>

              <div className="border-t border-white/15 pt-4 space-y-2 text-xs text-slate-200">
                <div className="flex justify-between">
                  <span>Spesifikasi Utama:</span>
                  <span className="font-semibold text-white">Full Plywood 18mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Hardware Pintu:</span>
                  <span className="font-semibold text-white">Slow-Motion Soft Close</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Survei & 3D:</span>
                  <span className="font-semibold text-emerald-300">GRATIS</span>
                </div>
                <div className="flex justify-between">
                  <span>Garansi Resmi:</span>
                  <span className="font-semibold text-[#c5a059]">1 Tahun</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 space-y-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#b58f48] text-slate-900 py-3.5 px-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Hasil Estimasi via WhatsApp</span>
              </a>
              <p className="text-[11px] text-center text-slate-300">
                Tim Gibran Interior akan menghubungi Anda untuk konfirmasi jadwal survei langsung ke rumah.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
