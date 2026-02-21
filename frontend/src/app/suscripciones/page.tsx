import Link from 'next/link';
import { ArrowLeft, User, Package } from 'lucide-react';

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
                <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md w-full shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20 mx-auto">
                        <User className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl font-black text-white text-center mb-2">Ingreso Suscriptores</h1>
                    <p className="text-white/60 text-center mb-8 text-sm">
                        Ingresa con tu correo electrónico para gestionar tu suscripción (modo desarrollo sin clave).
                    </p>

                    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("En desarrollo: ingreso sin validación simulación"); }}>
                        <div>
                            <label className="block text-white/70 text-sm font-bold mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                required
                            />
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-primary to-accent text-white font-bold py-3.5 px-4 rounded-xl mt-4 hover:shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all flex justify-center">
                            Ingresar a mi panel
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm">
                        <span className="text-white/50">¿No tienes una suscripción? </span>
                        <Link href="/suscripciones/catalogo" className="text-primary hover:text-white transition-colors font-bold">
                            Ver Planes
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
