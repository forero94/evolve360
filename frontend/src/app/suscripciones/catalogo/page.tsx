"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Beef, BadgeCheck } from 'lucide-react';

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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-black text-[10px] uppercase tracking-widest mb-6">
                        <BadgeCheck className="w-3 h-3" /> Garantía de Origen "Las Cortaderas"
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">Suscripciones de Estancia</h1>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto font-medium">
                        Cortes seleccionados faenados bajo pedido. Frescura absoluta, sin intermediarios, directo de nuestra ganadería a tu congelador.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Plan Básico */}
                    <div className="bg-card border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/5 transition-all duration-500 shadow-2xl flex flex-col items-center group">
                        <div className="w-full h-40 rounded-2xl overflow-hidden mb-8 border border-white/5">
                            <img src="/premium_meat_cuts_dark.png" alt="Plan Pareja" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Pack Cotidiano</h2>
                        <div className="text-primary font-black text-5xl mb-6 tracking-tighter">$35.000<span className="text-sm text-white/30 font-bold uppercase ml-2 tracking-widest">/mes</span></div>

                        <p className="text-white/40 text-center mb-8 text-xs font-bold leading-relaxed">Indispensables para el día a día. Calidad de exportación para tus comidas diarias.</p>

                        <ul className="w-full space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span>3kg Selección de Res</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span>1.5kg Milanesas de Estancia</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span>1kg Picada Premium</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Pack Cotidiano")} className="w-full bg-white/5 hover:bg-white/10 text-white font-black py-5 rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-xs">
                            Seleccionar Pack
                        </button>
                    </div>

                    {/* Plan Premium */}
                    <div className="bg-gradient-to-b from-primary/10 to-transparent border border-primary/30 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-[0_20px_60px_rgba(255,100,0,0.15)] flex flex-col items-center relative transform lg:-translate-y-6 group">
                        <div className="absolute -top-4 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-xl">
                            Elite Producer Choice
                        </div>
                        <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 border border-white/10">
                            <img src="/premium_meat_cuts_dark.png" alt="Plan Familia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Pack Estancia</h2>
                        <div className="text-primary font-black text-5xl mb-6 tracking-tighter">$55.000<span className="text-sm text-white/30 font-bold uppercase ml-2 tracking-widest">/mes</span></div>

                        <p className="text-white/40 text-center mb-8 text-xs font-bold leading-relaxed">El equilibrio perfecto entre cortes de diario y selección parrillera.</p>

                        <ul className="w-full space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-4 text-white/90 text-sm font-black uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>5kg Mix Premium (Asado/Vacío)</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/90 text-sm font-black uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2.5kg Milanesas Terneza Total</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/90 text-sm font-black uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>2kg Picada Selección Especial</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/90 text-sm font-black uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span>1kg Chorizos Artesanales</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Pack Estancia")} className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:shadow-[0_0_40px_rgba(255,100,0,0.4)] transition-all uppercase tracking-widest text-xs">
                            Suscripción Prioritaria
                        </button>
                    </div>

                    {/* Plan Premium Extra */}
                    <div className="bg-card border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/5 transition-all duration-500 shadow-2xl flex flex-col items-center group">
                        <div className="w-full h-40 rounded-2xl overflow-hidden mb-8 border border-white/5">
                            <img src="/premium_meat_cuts_dark.png" alt="Plan Asador" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-2 uppercase italic">Pack Gran Asador</h2>
                        <div className="text-primary font-black text-5xl mb-6 tracking-tighter">$75.000<span className="text-sm text-white/30 font-bold uppercase ml-2 tracking-widest">/mes</span></div>

                        <p className="text-white/40 text-center mb-8 text-xs font-bold leading-relaxed">Cortes boutique de nuestra propia cría para el maestro parrillero.</p>

                        <ul className="w-full space-y-4 mb-10 flex-grow">
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                <span>2kg Ojo de Bife Grano Seleccionado</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                <span>2kg Bife de Chorizo Madurado</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                <span>1kg Entraña Fina Estancia</span>
                            </li>
                            <li className="flex items-start gap-4 text-white/70 text-sm font-bold uppercase italic tracking-tight">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                <span>2kg Costillar de Novillo</span>
                            </li>
                        </ul>

                        <button onClick={() => alert("En desarrollo: Crear suscripción Pack Gran Asador")} className="w-full bg-white/5 hover:bg-white/10 text-white font-black py-5 rounded-2xl transition-all border border-white/10 uppercase tracking-widest text-xs">
                            Seleccionar Pack
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
