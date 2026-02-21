"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Beef } from 'lucide-react';

export default function SuscripcionesCatalogo() {
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

            <main className="flex-grow flex flex-col items-center py-12 px-6 relative z-10 w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Elige tu Suscripción Mensual</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Recibe la mejor selección de carne premium en la puerta de tu casa todos los meses. Diferentes opciones para ti o tu familia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                    {/* Plan Básico */}
                    <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Plan Pareja</h2>
                        <div className="text-primary font-black text-4xl mb-6">$35.000<span className="text-lg text-white/50 font-medium">/mes</span></div>

                        <p className="text-white/60 text-center mb-8 text-sm">Ideal para 2 personas, incluye los cortes básicos para la semana y el fin de semana.</p>

                        <ul className="w-full space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>3kg Asado / Vacío</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>1.5kg Milanesas</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>1kg Carne Picada</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Plan Pareja")} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all">
                            Suscribirme a este plan
                        </button>
                    </div>

                    {/* Plan Premium */}
                    <div className="bg-gradient-to-b from-primary/20 to-transparent border border-primary/50 p-8 rounded-3xl backdrop-blur-md shadow-[0_0_30px_rgba(255,100,0,0.15)] flex flex-col items-center relative transform lg:-translate-y-4">
                        <div className="absolute -top-4 bg-gradient-to-r from-primary to-accent text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full">
                            Más Elegido
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Plan Familia</h2>
                        <div className="text-primary font-black text-4xl mb-6">$55.000<span className="text-lg text-white/50 font-medium">/mes</span></div>

                        <p className="text-white/60 text-center mb-8 text-sm">Pensado para familias de 4 personas. Cortes variados y la mejor calidad.</p>

                        <ul className="w-full space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>5kg Asado / Vacío / Entraña</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2.5kg Milanesas (Nalga/Peceto)</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2kg Carne Picada Especial</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>1kg Chorizos</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Plan Familia")} className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all">
                            Suscribirme a este plan
                        </button>
                    </div>

                    {/* Plan Premium Extra */}
                    <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-white mb-2">Plan Asador</h2>
                        <div className="text-primary font-black text-4xl mb-6">$75.000<span className="text-lg text-white/50 font-medium">/mes</span></div>

                        <p className="text-white/60 text-center mb-8 text-sm">El plan exclusivo para los amantes de la parrilla que buscan cortes premium.</p>

                        <ul className="w-full space-y-4 mb-8 flex-grow">
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2kg Ojo de Bife</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2kg Bife de Chorizo</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>1kg Entraña Fina</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2kg Costillar</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Plan Asador")} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all">
                            Suscribirme a este plan
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
