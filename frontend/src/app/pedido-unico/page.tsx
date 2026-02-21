import Link from 'next/link';
import { ArrowLeft, Box } from 'lucide-react';

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
                    <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("En desarrollo: creando orden"); }}>

                        {/* Datos del Cliente */}
                        <div>
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">Tus Datos</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white/70 text-sm font-bold mb-2">Nombre completo</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-white/70 text-sm font-bold mb-2">Teléfono</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" required />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-white/70 text-sm font-bold mb-2">Correo Electrónico</label>
                                    <input type="email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" required />
                                </div>
                            </div>
                        </div>

                        {/* Datos de Envío */}
                        <div>
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">Envío</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-white/70 text-sm font-bold mb-2">Dirección de entrega</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-white/70 text-sm font-bold mb-2">Localidad</label>
                                    <input type="text" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" required />
                                </div>
                            </div>
                        </div>

                        {/* Selección Básica */}
                        <div>
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 mb-4">¿Qué deseas pedir?</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <label className="flex items-center gap-3 p-4 bg-black/30 border border-white/10 rounded-xl cursor-pointer hover:border-primary/30 transition-colors">
                                    <input type="checkbox" className="w-5 h-5 accent-primary rounded bg-black/50 border-white/20" />
                                    <div>
                                        <div className="font-bold text-white">Pack Asado Familiar</div>
                                        <div className="text-sm text-white/50">Incluye Asado, Vacío, Chorizos (Aprox 3kg)</div>
                                    </div>
                                </label>
                                <label className="flex items-center gap-3 p-4 bg-black/30 border border-white/10 rounded-xl cursor-pointer hover:border-primary/30 transition-colors">
                                    <input type="checkbox" className="w-5 h-5 accent-primary rounded bg-black/50 border-white/20" />
                                    <div>
                                        <div className="font-bold text-white">Pack Cortes Premium</div>
                                        <div className="text-sm text-white/50">Ojo de Bife, Bife de Chorizo, Entraña (Aprox 2.5kg)</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-primary to-accent text-white font-black text-lg py-4 px-6 rounded-xl mt-6 hover:shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all flex justify-center items-center gap-2">
                            <Box className="w-5 h-5" /> Confirmar Pedido
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
