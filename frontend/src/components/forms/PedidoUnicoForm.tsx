"use client";
// Force Vercel Sync v2

import { Box } from 'lucide-react';

export function PedidoUnicoForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("En desarrollo: creando orden");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

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

            <button
                type="submit"
                className="bg-gradient-to-r from-primary to-accent text-white font-black text-lg py-4 px-6 rounded-xl mt-6 hover:shadow-[0_0_20px_rgba(255,100,0,0.3)] transition-all flex justify-center items-center gap-2"
            >
                <Box className="w-5 h-5" /> Confirmar Pedido
            </button>
        </form>
    );
}
