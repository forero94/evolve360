import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';

export default function PedidoPersonalizado() {
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

            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10 w-full max-w-xl mx-auto text-center">
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-8 ring-1 ring-[#25D366]/20 shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                    <MessageSquare className="w-10 h-10" />
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Pedidos Personalizados</h1>

                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                    Si necesitas cortes especiales, cantidades particulares para un evento o atención personalizada,
                    escríbenos directo por WhatsApp y armamos tu pedido a medida.
                </p>

                <a
                    href="#"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xl py-5 px-10 rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
                >
                    Contactar por WhatsApp
                </a>
            </main>
        </div>
    );
}
