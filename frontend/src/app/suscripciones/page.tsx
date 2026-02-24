"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SuscripcionesForm } from '@/components/forms/SuscripcionesForm';

export default function Suscripciones() {
    return (
        <div className="min-h-screen flex flex-col relative bg-background">
            {/* Header */}
            <header className="relative z-30 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-all group">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">Inicio</span>
                </Link>
                <div className="flex flex-col items-end">
                    <span className="font-black text-xl tracking-tighter text-white uppercase italic leading-none">
                        Estancia <span className="text-primary">Evolvere</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mt-1">Acceso Clientes</span>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10 w-full max-w-md mx-auto">
                <SuscripcionesForm />
            </main>
        </div>
    );
}
