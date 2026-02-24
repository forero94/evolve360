"use client";

import { User, Loader2, TrendingUp as TrendUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SuscripcionesForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setError("");

        try {
            // Bypass for Demo Mode
            if (email.toLowerCase() === 'demo@evolvere.com') {
                localStorage.setItem('subscriber_email', email.toLowerCase());
                router.push('/suscripciones/mi-cuenta');
                return;
            }

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
            const response = await fetch(`${apiUrl}/users/email/${encodeURIComponent(email)}`);
            if (response.ok) {
                const user = await response.json();
                if (user) {
                    // Store user info in localStorage for development
                    localStorage.setItem('subscriber_email', email);
                    router.push('/suscripciones/mi-cuenta');
                } else {
                    setError("El correo no tiene una suscripción activa.");
                }
            } else {
                setError("Ocurrió un error al verificar tu cuenta.");
            }
        } catch (err) {
            // Fallback for Demo Mode in case of connection error
            if (email.toLowerCase() === 'demo@evolvere.com') {
                localStorage.setItem('subscriber_email', email.toLowerCase());
                router.push('/suscripciones/mi-cuenta');
            } else {
                setError("No se pudo conectar con el servidor.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-card border border-white/5 p-12 rounded-[2.5rem] backdrop-blur-xl w-full shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50" />

            <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mb-10 ring-1 ring-primary/10 mx-auto group-hover:scale-110 transition-transform duration-700 shadow-inner">
                <User className="w-10 h-10" />
            </div>

            <h1 className="text-4xl font-black text-white text-center mb-3 uppercase italic tracking-tighter">Acceso Directo</h1>
            <p className="text-white/40 text-center mb-10 text-xs font-bold uppercase tracking-widest leading-relaxed">
                Gestiona tu abastecimiento premium sin intermediarios.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] font-black mb-3 ml-1">Credencial Digital (Email)</label>
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="usuario@estancia.com"
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/10 focus:outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                            required
                        />
                    </div>
                </div>

                {error && (
                    <div className="bg-red-500/5 border border-red-500/10 text-red-400 text-[10px] font-black uppercase tracking-widest p-4 rounded-xl text-center animate-in fade-in slide-in-from-top-2">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white font-black py-6 rounded-2xl shadow-[0_20px_40px_rgba(255,100,0,0.2)] hover:shadow-[0_20px_60px_rgba(255,100,0,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all mt-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0 uppercase tracking-[0.2em] text-xs"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                        <>Sincronizar <TrendUp className="w-4 h-4" /></>
                    )}
                </button>
            </form>

            <div className="mt-12 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-black mb-4">¿Aún no eres suscriptor?</p>
                <Link href="/suscripciones/catalogo" className="inline-block bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 px-8 py-3 rounded-xl transition-all font-black uppercase tracking-widest text-[10px]">
                    Ver Planes de Estancia
                </Link>
            </div>
        </div>
    );
}
