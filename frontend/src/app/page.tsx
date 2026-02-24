import Link from 'next/link';
import { ArrowRight, Beef, Truck, ShieldCheck, MapPin, BadgeCheck, Zap } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background text-foreground selection:bg-primary/30">
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Header / Nav */}
            <header className="relative z-30 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-4">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
                        <img src="/logo.png" alt="Estancia Evolvere Logo" className="h-16 md:h-20 w-auto brightness-110 drop-shadow-2xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-2xl tracking-tighter text-white uppercase italic leading-none">
                            Estancia <span className="text-primary">Evolvere</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-1 ml-0.5">Productores Directos</span>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-8 mr-auto ml-12">
                    <Link href="#nuestra-historia" className="text-sm font-bold text-white/50 hover:text-white transition-colors">Nuestra Estancia</Link>
                    <Link href="#trazabilidad" className="text-sm font-bold text-white/50 hover:text-white transition-colors">Trazabilidad</Link>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/suscripciones" className="text-sm font-bold text-white/90 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/10 flex items-center gap-2 backdrop-blur-sm shadow-xl">
                        Mi Suscripción
                    </Link>
                    <Link href="/admin" className="text-sm font-bold text-black bg-accent hover:bg-white transition-all px-6 py-3 rounded-xl flex items-center gap-2 shadow-[0_4px_20px_rgba(255,180,0,0.3)]">
                        Admin <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main className="z-10 flex flex-col items-center text-center px-6 mt-16 md:mt-24 max-w-7xl mx-auto flex-grow">

                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-widest mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Directo del campo a tu mesa
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-7 text-left">
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase italic italic">
                            Carne de <br />
                            <span className="text-primary italic">Estancia</span><br />
                            Sin Secretos
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl font-medium leading-relaxed border-l-2 border-primary/30 pl-6">
                            Somos productores. Criamos, seleccionamos y entregamos lo mejor de nuestra ganadería directo a tu puerta. Sin intermediarios, sin vueltas, máxima calidad.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 items-center">
                            <Link href="/suscripciones/catalogo" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_0_50px_rgba(255,100,0,0.4)] hover:-translate-y-1.5 transition-all duration-500 w-full sm:w-auto flex items-center justify-center gap-3 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <Beef className="w-6 h-6" /> Ver Planes de Suscripción
                            </Link>
                            <Link href="/pedido-unico" className="bg-white/5 text-white border border-white/10 px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md w-full sm:w-auto text-center flex items-center justify-center gap-2 group">
                                Pedido Único <Zap className="w-4 h-4 text-accent" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group perspective-1000">
                        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-1000 opacity-50" />
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                            <img
                                src="/premium_estancia_hero.png"
                                alt="Nuestra Estancia"
                                className="w-full h-auto scale-110 group-hover:scale-100 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-sm uppercase tracking-wider">Estancia "Las Cortaderas"</div>
                                        <div className="text-white/50 text-[10px] font-bold">Lote #402 - Directo a Faena</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Producer-Direct Advantage Card */}
                <div className="w-full max-w-6xl mx-auto mb-32">
                    <div className="bg-card border border-white/5 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="text-left">
                                <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight italic">¿Por qué somos más accesibles?</h2>
                                <p className="text-white/50 mb-8 leading-relaxed">
                                    En un canal tradicional, tu carne pasa por acopiadores, frigoríficos externos, distribuidores y carnicerías. Cada uno agrega su margen y costo.
                                    Nosotros <strong>eliminamos la cadena</strong>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-white/80 font-bold uppercase text-xs italic">
                                        <BadgeCheck className="w-5 h-5 text-secondary" /> Dueños del Ganado
                                    </li>
                                    <li className="flex items-center gap-4 text-white/80 font-bold uppercase text-xs italic">
                                        <BadgeCheck className="w-5 h-5 text-secondary" /> Despacho Terciarizado Cero
                                    </li>
                                    <li className="flex items-center gap-4 text-white/80 font-bold uppercase text-xs italic">
                                        <BadgeCheck className="w-5 h-5 text-secondary" /> Trazabilidad Digital Propia
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-black/30 rounded-[2rem] p-8 border border-white/5 backdrop-blur-xl">
                                <div className="text-left mb-6">
                                    <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Ahorro Promedio Suscriptor</div>
                                    <div className="text-6xl font-black text-accent">-25%</div>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-full" />
                                    </div>
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                                        <span>Retail Tradicional</span>
                                        <span>Estancia Evolvere</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-accent w-[75%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features / Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto pb-32 text-left relative z-20">
                    <div className="bg-glass-bg border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/5 transition-all duration-500 shadow-2xl hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 ring-1 ring-primary/20 shadow-inner group-hover:scale-110 transition-transform">
                            <Beef className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Control Genético</h3>
                        <p className="text-white/40 leading-relaxed text-sm font-medium">No compramos lo que hay. Criamos lo que queremos. Calidad garantizada desde la pastura.</p>
                    </div>

                    <div className="bg-glass-bg border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/5 transition-all duration-500 shadow-2xl hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 ring-1 ring-secondary/20 shadow-inner group-hover:scale-110 transition-transform">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Fábrica de Frío</h3>
                        <p className="text-white/40 leading-relaxed text-sm font-medium">Nuestra logística propia respeta la cadena de frío sin interrupciones hasta tu domicilio.</p>
                    </div>

                    <div className="bg-glass-bg border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl hover:bg-white/5 transition-all duration-500 shadow-2xl hover:-translate-y-2 group">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 ring-1 ring-blue-500/20 shadow-inner group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Garantía Directa</h3>
                        <p className="text-white/40 leading-relaxed text-sm font-medium">Cualquier inconveniente se resuelve directo con el productor. Sin preguntas, respuesta inmediata.</p>
                    </div>
                </div>

            </main>

            <footer className="relative z-30 border-t border-white/5 bg-black/40 backdrop-blur-2xl py-12 text-center text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mt-auto">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="Estancia Evolvere" className="h-10 w-auto opacity-20 grayscale brightness-200" />
                        <span>© {new Date().getFullYear()} Estancia Evolvere. Operaciones Ganaderas Digitales.</span>
                    </div>
                    <div className="flex gap-10">
                        <a href="#" className="hover:text-primary transition-colors">Términos de Faena</a>
                        <a href="#" className="hover:text-primary transition-colors">Política de Estancia</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
