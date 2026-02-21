import Link from 'next/link';
import { ArrowRight, Beef, Truck, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Header / Nav */}
            <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-3">
                    <div className="bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-inner">
                        <img src="/logo.png" alt="Evolvere 360 Logo" className="h-20 md:h-28 w-auto drop-shadow-lg" />
                    </div>
                    <span className="font-extrabold text-2xl tracking-tight text-white hidden sm:block">
                        Evolvere<span className="text-primary">360</span>
                    </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link href="/suscripciones" className="text-sm font-bold text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 flex items-center gap-2">
                        Ingreso Suscriptores
                    </Link>
                    <Link href="/admin" className="text-sm font-bold text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 flex items-center gap-2">
                        Ingreso Equipo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <main className="z-10 flex flex-col items-center text-center px-6 mt-12 md:mt-20 max-w-5xl mx-auto flex-grow">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-4 md:mb-8 animate-pulse shadow-[0_0_15px_rgba(255,100,0,0.2)]">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Entregas activas en toda la zona norte
                </div>

                <div className="relative w-full max-w-2xl mx-auto mb-8 md:mb-12 group perspective-1000 mt-4 md:mt-8">
                    <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-700" />

                    <img
                        src="/premium-cow-cuts.png"
                        alt="Cortes de carne vacuna argentina"
                        className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,100,0,0.4)] relative z-10 rounded-3xl"
                    />
                </div>

                <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl font-medium leading-relaxed">
                    Suscríbete a nuestros packs de carne seleccionada y recíbelos en la puerta de tu casa. Calidad de exportación para tus comidas de todos los días y tus asados de fin de semana.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center mb-16 z-20">
                    <Link href="/suscripciones/catalogo" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(255,100,0,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3 group">
                        <Beef className="w-6 h-6 group-hover:scale-110 transition-transform" /> Ver Catálogo de Packs
                    </Link>
                    <Link href="/pedido-unico" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center flex items-center justify-center">
                        Realizar pedido único
                    </Link>
                    <Link href="/pedido-personalizado" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center flex items-center justify-center">
                        Hacer Pedido Personalizado
                    </Link>
                </div>




                {/* Features / Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pb-24 text-left relative z-20">
                    <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20 shadow-inner">
                            <Beef className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Cortes Seleccionados</h3>
                        <p className="text-white/50 leading-relaxed text-sm">Trabajamos con frigoríficos de primera línea garantizando terneza y sabor en cada corte que llega a tu mesa.</p>
                    </div>

                    <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 ring-1 ring-emerald-500/20 shadow-inner">
                            <Truck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Cadena de Frío Garantizada</h3>
                        <p className="text-white/50 leading-relaxed text-sm">Nuestros vehículos refrigerados aseguran que la carne mantenga su temperatura ideal desde el origen hasta tu casa.</p>
                    </div>

                    <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-colors shadow-2xl hover:-translate-y-1 duration-300">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 ring-1 ring-blue-500/20 shadow-inner">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">100% Satisfacción</h3>
                        <p className="text-white/50 leading-relaxed text-sm">Si el producto no cumple con tus expectativas, te lo reponemos sin preguntas. Así de seguros estamos de lo que vendemos.</p>
                    </div>
                </div>

            </main>

            <footer className="relative z-20 border-t border-white/5 bg-black/20 backdrop-blur-md py-8 text-center text-white/30 text-sm font-medium mt-auto">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Evolvere 360" className="h-6 w-auto opacity-50 grayscale" />
                        <span>© {new Date().getFullYear()} Evolvere 360. Todos los derechos reservados.</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white/80 transition-colors">Términos y Condiciones</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Privacidad</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
