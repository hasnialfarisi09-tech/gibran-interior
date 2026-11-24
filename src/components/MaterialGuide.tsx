import React from 'react';
import { ShieldAlert, CheckCircle, Award, Droplets, Flame, Hammer } from 'lucide-react';

export default function MaterialGuide() {
  return (
    <section id="material" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003f60]/10 text-[#003f60] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Transparansi Material & Kualitas
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0f172a]">
            Mengapa Gibran Interior Lebih Awet & Kokoh?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Banyak furniture murah cepat rusak karena memakai serbuk kayu gergaji (MDF/Particle Board). Di Gibran Interior, kami memiliki standar baku bahan kayu solid plywood tebal.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card: Standar Kami (Plywood Meranti 18mm) */}
          <div className="rounded-3xl border-2 border-[#003f60] bg-white p-6 sm:p-8 shadow-md relative">
            <div className="absolute -top-3.5 right-6 bg-[#003f60] text-white text-xs font-bold px-3 py-1 rounded-full">
              STANDAR GIBRAN INTERIOR
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#003f60]/10 text-[#003f60] rounded-2xl">
                <Hammer className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Multiplek / Plywood Meranti 18mm
                </h3>
                <p className="text-xs text-slate-500">Lapisan lembaran kayu asli yang direkatkan silang</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Tahan Lembap & Cipratan Air:</strong> Sangat aman digunakan untuk kitchen set basah dan kabinet bawah wastafel.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Daya Cengkeram Sekrup Kuat:</strong> Engsel tidak gampang dol atau lepas meski dibuka-tutup ratusan kali sehari.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Anti-Melengkung:</strong> Mampu menahan beban berat tumpukan piring, microwave, atau oven tanam.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Usia Pakai Panjang (10-15+ Tahun):</strong> Investasi jangka panjang untuk kenyamanan rumah.</span>
              </li>
            </ul>
          </div>

          {/* Card: Perbandingan Bahan Murahan (MDF / Partikel) */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  MDF / Serbuk Partikel Board (Yang Kami Hindari)
                </h3>
                <p className="text-xs text-slate-500">Sering digunakan pada furniture pabrikan murah</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Cepat Menggembung:</strong> Terkena tetesan air atau lembap sedikit saja langsung hancur seperti bubur kertas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Sekrup Mudah Copot:</strong> Serbuk kayu mudah rontok sehingga engsel pintu lemari cepat anjlok.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span><strong>Mudah Melendut:</strong> Rak lemari bengkok jika diisi buku atau tumpukan pakaian tebal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold shrink-0">✕</span>
                <span>Hanya bertahan 1-2 tahun sebelum harus diganti total.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Keunggulan Komponen Hardware */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-[#003f60]">
              <Droplets className="w-5 h-5" />
              <h4 className="font-bold text-slate-900">Finishing HPL Taco & Aica</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tersedia ratusan pilihan motif: serat kayu alami (woodgrain), tekstur semen ekspos, kain linen, hingga marmer mewah. Tahan gores dan mudah dibersihkan dari noda minyak.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-[#003f60]">
              <Flame className="w-5 h-5" />
              <h4 className="font-bold text-slate-900">Engsel & Rel Soft-Close</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Semua pintu kabinet dan laci dilengkapi mekanisme peredam hidrolik. Menutup secara perlahan tanpa suara berisik (*slam-proof*) dan awet bertahun-tahun.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-[#003f60]">
              <Award className="w-5 h-5" />
              <h4 className="font-bold text-slate-900">Top Table Granit & Solid Surface</h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Untuk kitchen set, kami sediakan opsi meja atas menggunakan Granit Alam (Nero Marquina, Star White) atau Solid Surface tanpa sambungan (*seamless*) yang higienis.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
