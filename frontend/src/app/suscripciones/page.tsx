import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SuscripcionesForm } from '@/components/forms/SuscripcionesForm';

export default function Suscripciones() {
    return (
        <div className="min-h-screen flex flex-col relative bg-background">
            {/* Header */}
            <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Volver al Inicio
                </Link>
                <div className="font-bold text-white tracking-tight">
                    Evolvere<span className="text-primary">360</span>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10 w-full max-w-md mx-auto">
                <SuscripcionesForm />
            </main>
        </div>
    );
}
