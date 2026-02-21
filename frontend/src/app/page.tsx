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

                    <svg viewBox="0 0 512 512" className="w-full max-w-lg md:max-w-2xl h-auto drop-shadow-[0_0_30px_rgba(255,100,0,0.4)] relative z-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        {/* Glow layer for outer silhouette */}
                        <path
                            d="M468.958 108.958c-27.507 2.08-48.997 7.94-71.375 22.572-5.333-2.214-12.62-17.738-16-16-11.82 6.08-14.892 19.555-4.916 32.817l-59.084 9.916c-24.776 3.341-49.567 4.838-74.187 5.334 -46 -0.8 -94 -1.6 -140.313 -2.434-10.213-.127-20.327-.142-30.316.035-12.564.366-22.902 5.645-29.408 14.239-8.676 11.458-11.652 26.658-13.254 42.925-1.78 18.057 6.147 53.007 5.517 70.282-.504 13.85-7.493 11.87-11.912 18.888-13.52 21.47 8.894 20.83 17.014 5.56 12.482-23.473 4.253-63.11 7.195-92.974 1.855-35.76 10.597-23.937 15.664-24.588-4.2 13.065-6.21 30.962-7 51.334 6.895-2.342 36.498-11.6 42.73-.174 6.872 12.598-27.802 22.016-23.878 35.819 2.464 8.666 22.95 2.378 24.582 11.238 3.322 18.035-32.13 38.713-42.236 44.209.812 23.329 1.564 45.567 1.238 65.086H88.91c-4.234-16.543-12.038-49.944-4.06-55.084 21.425-18.091 29.836-37.484 42.732-56.428 8.755 2.556 16.92 4.787 24.782 6.672 3.553.972 7.244 1.771 10.984 2.44 24.859 4.967 61.553 5.678 90.783-.172 3.76 34.12 7.263 68.452 4.602 102.572h28.957c-12.375-26.902-4.263-65.044 13.892-86.27l44.934-33.462c24.881-16.384 42.93-37.996 55.982-63.38 30.402 3.413 57.086 3.29 77.192-.786l12.84-19.55c-24.257-17.857-43.3-36.585-62.948-58.13 10.063-14.533 25.027-22.765 39.375-32.506zmM366.2 183.481c5.029 9.822-26.17 10.808-24.933 21.772.998 8.847 22.204 3.839 23.53 12.643 3.818 25.373-28.44 53.805-54.08 54.78-14.262.544-34.902-14.06-32.308-28.093 2.605-14.092 34.551-1.657 40.383-14.748 4.724-10.603-18.352-22.01-12.992-32.307 6.264-12.032 30.364-22.553 41.934-22.646s15.606 3.347 18.466 8.6zm-26.585 126.346-34.707 23.96 6.464 69.255h34.414c-11.783-22.454-15.58-55.506-6.171-93.215m-204.561 1.41c-6.047 12.184-14.147 21.97-22.174 31.242 5.97 3.235 11.648 5.414 17.154 6.614 11.218 2.443 21.636.333 29.948-4.408 10.056-5.737 17.521-14.452 24.115-23.368-14.615-.869-32.96-2.962-49.043-10.08m24.252 52c-8.737 2.585-17.452 3.7-25.566 2.96 5.167 12.624 10.45 24.152 15.824 36.845h28.306c-10.393-18.48-16.148-29.285-18.564-39.805"
                            className="text-white/20 stroke-white/20 blur-[6px]"
                            strokeWidth="8"
                        />
                        {/* Main Cow Silhouette */}
                        <path
                            d="M468.958 108.958c-27.507 2.08-48.997 7.94-71.375 22.572-5.333-2.214-12.62-17.738-16-16-11.82 6.08-14.892 19.555-4.916 32.817l-59.084 9.916c-24.776 3.341-49.567 4.838-74.187 5.334 -46 -0.8 -94 -1.6 -140.313 -2.434-10.213-.127-20.327-.142-30.316.035-12.564.366-22.902 5.645-29.408 14.239-8.676 11.458-11.652 26.658-13.254 42.925-1.78 18.057 6.147 53.007 5.517 70.282-.504 13.85-7.493 11.87-11.912 18.888-13.52 21.47 8.894 20.83 17.014 5.56 12.482-23.473 4.253-63.11 7.195-92.974 1.855-35.76 10.597-23.937 15.664-24.588-4.2 13.065-6.21 30.962-7 51.334 6.895-2.342 36.498-11.6 42.73-.174 6.872 12.598-27.802 22.016-23.878 35.819 2.464 8.666 22.95 2.378 24.582 11.238 3.322 18.035-32.13 38.713-42.236 44.209.812 23.329 1.564 45.567 1.238 65.086H88.91c-4.234-16.543-12.038-49.944-4.06-55.084 21.425-18.091 29.836-37.484 42.732-56.428 8.755 2.556 16.92 4.787 24.782 6.672 3.553.972 7.244 1.771 10.984 2.44 24.859 4.967 61.553 5.678 90.783-.172 3.76 34.12 7.263 68.452 4.602 102.572h28.957c-12.375-26.902-4.263-65.044 13.892-86.27l44.934-33.462c24.881-16.384 42.93-37.996 55.982-63.38 30.402 3.413 57.086 3.29 77.192-.786l12.84-19.55c-24.257-17.857-43.3-36.585-62.948-58.13 10.063-14.533 25.027-22.765 39.375-32.506zmM366.2 183.481c5.029 9.822-26.17 10.808-24.933 21.772.998 8.847 22.204 3.839 23.53 12.643 3.818 25.373-28.44 53.805-54.08 54.78-14.262.544-34.902-14.06-32.308-28.093 2.605-14.092 34.551-1.657 40.383-14.748 4.724-10.603-18.352-22.01-12.992-32.307 6.264-12.032 30.364-22.553 41.934-22.646s15.606 3.347 18.466 8.6zm-26.585 126.346-34.707 23.96 6.464 69.255h34.414c-11.783-22.454-15.58-55.506-6.171-93.215m-204.561 1.41c-6.047 12.184-14.147 21.97-22.174 31.242 5.97 3.235 11.648 5.414 17.154 6.614 11.218 2.443 21.636.333 29.948-4.408 10.056-5.737 17.521-14.452 24.115-23.368-14.615-.869-32.96-2.962-49.043-10.08m24.252 52c-8.737 2.585-17.452 3.7-25.566 2.96 5.167 12.624 10.45 24.152 15.824 36.845h28.306c-10.393-18.48-16.148-29.285-18.564-39.805"
                            className="text-white drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]"
                        />

                        {/* ORGANIC CUTS - Dashed Neon Dividers */}
                        <g className="text-primary/70 drop-shadow-[0_0_5px_rgba(255,100,0,0.9)]" strokeDasharray="6 6" strokeWidth="2.5">
                            {/* Chuck / Rib */}
                            <path d="M 310 145 L 310 260" />
                            {/* Rib / Short Loin */}
                            <path d="M 240 145 L 240 260" />
                            {/* Short Loin / Sirloin */}
                            <path d="M 185 145 L 185 265" />
                            {/* Sirloin / Rump */}
                            <path d="M 135 155 L 135 270" />

                            {/* Rump / Round (Cuadril / Nalga horizontal) */}
                            <path d="M 75 220 Q 110 230 135 230" />

                            {/* Horizontal separator (Belly line) */}
                            <path d="M 135 270 Q 250 260 375 260" />

                            {/* Pecho / Asado */}
                            <path d="M 310 260 Q 305 300 295 345" />
                            {/* Asado / Vacío */}
                            <path d="M 240 260 Q 235 300 220 340" />

                            {/* Front Shank */}
                            <path d="M 320 340 Q 330 360 345 390" />
                            {/* Back Shank */}
                            <path d="M 125 330 Q 135 360 140 395" />
                        </g>

                        {/* GLOWING LABELS */}
                        <g fill="currentColor" stroke="none" fontWeight="900" fontSize="13" letterSpacing="1" className="text-white drop-shadow-[0_0_8px_rgba(255,200,100,0.8)]" style={{ fontFamily: 'Inter, sans-serif' }} textAnchor="middle">
                            <text x="365" y="200">AGUJA</text>

                            <text x="275" y="195">BIFE</text>
                            <text x="275" y="210">ANCHO</text>

                            <text x="212" y="195">BIFE</text>
                            <text x="212" y="210">ANGOSTO</text>

                            <text x="160" y="200">LOMO</text>

                            <text x="105" y="185">CUADRIL</text>
                            <text x="95" y="290">NALGA</text>

                            <text x="335" y="300">PECHO</text>
                            <text x="275" y="300">ASADO</text>
                            <text x="195" y="300">VACÍO</text>

                            {/* Shanks */}
                            <text x="315" y="380" fontSize="11">OSOBUCO</text>
                            <text x="105" y="380" fontSize="11">OSOBUCO</text>
                        </g>
                    </svg>
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
