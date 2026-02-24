"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PedidoUnicoForm } from '@/components/forms/PedidoUnicoForm';

// UNIQUE_ID_CHECK_PEDIDO_UNICO_V1
export default function PedidoUnico() {
    return (
        <div className="min-h-screen flex flex-col relative bg-background">
            <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Volver al Inicio
                </Link>
                <div className="font-bold text-white tracking-tight">
                    Evolvere<span className="text-primary">360</span>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center py-12 px-6 relative z-10 w-full max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-4">Pedido Único</h1>
                <p className="text-white/60 text-center mb-10 text-lg">
                    Realiza tu pedido sin necesidad de suscribirte. Completa los datos a continuación.
                </p>

                <div className="bg-glass-bg border border-glass-border p-6 md:p-8 rounded-3xl backdrop-blur-md w-full shadow-2xl">
                    <PedidoUnicoForm />
                </div>
            </main>
        </div>
    );
}
