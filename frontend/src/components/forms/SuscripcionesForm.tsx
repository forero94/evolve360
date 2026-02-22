"use client";

import { User } from 'lucide-react';
import Link from 'next/link';

export function SuscripcionesForm() {
    return (
        <div className="bg-glass-bg border border-glass-border p-8 rounded-3xl backdrop-blur-md w-full shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20 mx-auto">
                <User className="w-8 h-8" />
            </div>

            <h1 className="text-3xl font-black text-white text-center mb-2">Ingreso Suscriptores</h1>
            <p className="text-white/60 text-center mb-8 text-sm">
                Ingresa con tu correo electrónico para gestionar tu suscripción (modo desarrollo sin clave).
            </p>

            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-white/70 text-sm font-bold mb-2">Correo Electrónico</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        required
                    />
                </div>

                <button
                    type="button"
                    onClick={() => alert("En desarrollo: ingreso sin validación simulación")}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-black py-4 rounded-xl shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:-translate-y-0.5 transition-all mt-4"
                >
                    Ingresar
                </button>
            </form>

            <div className="mt-8 text-center text-sm">
                <span className="text-white/50">¿No tienes una suscripción? </span>
                <Link href="/suscripciones/catalogo" className="text-primary hover:text-white transition-colors font-bold">
                    Ver Planes
                </Link>
            </div>
        </div>
    );
}
