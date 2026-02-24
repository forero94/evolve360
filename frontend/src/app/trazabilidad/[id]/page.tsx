"use client";

import { use } from 'react';
import Link from 'next/link';
import {
    ArrowLeft,
    MapPin,
    Calendar,
    BadgeCheck,
    ShieldCheck,
    Leaf,
    Beef,
    Truck,
    Info,
    ChevronRight,
    QrCode
} from 'lucide-react';

export default function TraceabilityPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    // Mock data for the demonstration
    const traceData = {
        id: id.toUpperCase(),
        product: "Ojo de Bife - Premium Selection",
        estancia: "Las Cortaderas",
        location: "Bolívar, Buenos Aires",
        batch: "BT-2026-042",
        cattleType: "Black Angus",
        feeding: "Pastura Natural & Terminación a Grano",
        faenaDate: "2026-02-15",
        packagingDate: "2026-02-16",
        certificates: ["Bienestar Animal Certificado", "Sin Hormonas Añadidas", "Huella de Carbono Neutral"]
    };

    return (
        <div className="min-h-screen flex flex-col relative bg-background text-foreground selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0" />

            <header className="relative z-30 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-3 text-white/60 hover:text-white transition-all group">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">Volver</span>
                </Link>
                <div className="flex flex-col items-end">
                    <span className="font-black text-xl tracking-tighter text-white uppercase italic leading-none">
                        Estancia <span className="text-primary">Evolvere</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white/30 mt-1">Transparency Engine</span>
                </div>
            </header>

            <main className="relative z-10 flex-grow max-w-5xl mx-auto w-full px-6 py-8">
                {/* Hero Traceability Header */}
                <div className="flex flex-col md:flex-row gap-8 items-end mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="flex-grow">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-black text-[10px] uppercase tracking-widest mb-4">
                            <QrCode className="w-3 h-3" /> Identificador Verificado
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-tight">
                            Lote <span className="text-primary">{traceData.id}</span>
                        </h1>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-sm mt-2">{traceData.product}</p>
                    </div>
                    <div className="bg-card border border-white/10 p-6 rounded-3xl backdrop-blur-xl flex items-center gap-4 shadow-2xl">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                            <BadgeCheck className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <div className="text-white font-black text-sm uppercase italic">Calidad Garantizada</div>
                            <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Protocolo Estancia 3.0</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Timeline */}
                    <div className="lg:col-span-7 space-y-8">
                        <section className="bg-card border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-2xl font-black text-white uppercase italic tracking-tight mb-10 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-primary" /> Ciclo de Vida del Producto
                            </h2>

                            <div className="space-y-12 relative">
                                <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-secondary to-blue-500/50 opacity-20" />

                                {/* Step 1: Origin */}
                                <div className="relative flex gap-8 group">
                                    <div className="z-10 w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,100,0,0.4)] group-hover:scale-110 transition-transform">
                                        <MapPin className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-grow pt-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-black text-white uppercase italic tracking-tight underline decoration-primary/30 underline-offset-4">Origen: {traceData.estancia}</h3>
                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Bolívar, BA</span>
                                        </div>
                                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                                            Crianza en libertad en pasturas naturales de la Prov. de Buenos Aires. El animal perteneció al lote de terminación premium #402.
                                        </p>
                                        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 overflow-hidden relative">
                                            <img src="/estancia_pasture_traceability.png" alt="Campo de origen" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                                            <div className="relative z-10 flex items-center justify-between">
                                                <span className="text-[10px] font-black uppercase text-white/60">Ver estado de pastura</span>
                                                <ChevronRight className="w-4 h-4 text-white/30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: Faena */}
                                <div className="relative flex gap-8 group">
                                    <div className="z-10 w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,200,100,0.2)] group-hover:scale-110 transition-transform">
                                        <Beef className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-grow pt-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Faena y Maduración</h3>
                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">{traceData.faenaDate}</span>
                                        </div>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            Proceso de faena bajo protocolos de máximo bienestar animal. Maduración en seco por 7 días para optimizar terneza y sabor.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3: Logistics */}
                                <div className="relative flex gap-8 group">
                                    <div className="z-10 w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,100,255,0.2)] group-hover:scale-110 transition-transform">
                                        <Truck className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-grow pt-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Despacho y Cadena de Frío</h3>
                                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">En Tránsito</span>
                                        </div>
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            Transporte en flota propia con monitoreo térmico en tiempo real. Temperatura constante mantenida a 0.5°C.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Specs & Certs */}
                    <div className="lg:col-span-5 space-y-8">
                        <section className="bg-card border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
                            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-3">
                                <Info className="w-5 h-5 text-accent" /> Especificaciones Técnicas
                            </h2>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Raza</span>
                                    <span className="text-white font-bold uppercase italic italic text-sm">{traceData.cattleType}</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Alimentación</span>
                                    <span className="text-white font-bold uppercase italic italic text-sm text-right">{traceData.feeding}</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Empaque</span>
                                    <span className="text-white font-bold uppercase italic italic text-sm">{traceData.packagingDate}</span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Lote Faena</span>
                                    <span className="text-white font-bold uppercase italic italic text-sm">{traceData.batch}</span>
                                </div>
                            </div>
                        </section>

                        <section className="bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute -bottom-10 -right-10 opacity-10">
                                <ShieldCheck className="w-48 h-48" />
                            </div>
                            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-3">
                                <Leaf className="w-5 h-5 text-secondary" /> Certificaciones de Lote
                            </h2>
                            <ul className="space-y-4">
                                {traceData.certificates.map((cert, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 font-bold uppercase italic text-[10px] tracking-wider">
                                        <BadgeCheck className="w-4 h-4 text-secondary" /> {cert}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="relative z-30 border-t border-white/5 bg-black/40 backdrop-blur-2xl py-12 text-center text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mt-auto">
                <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-4">
                    <img src="/logo.png" alt="Estancia Evolvere" className="h-8 w-auto opacity-20 grayscale brightness-200" />
                    <span>Protocolo de Transparencia Digital v1.2 - Desarrollado por el Equipo de Innovación Ganadera</span>
                </div>
            </footer>
        </div>
    );
}
