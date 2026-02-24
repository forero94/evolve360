"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Beef, Package, LogOut, Loader2, CheckCircle2 } from 'lucide-react';

export default function MiCuenta() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const email = localStorage.getItem('subscriber_email');
        if (!email) {
            router.push('/suscripciones');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/email/${encodeURIComponent(email)}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data) {
                        setUser(data);
                    } else {
                        localStorage.removeItem('subscriber_email');
                        router.push('/suscripciones');
                    }
                }
            } catch (err) {
                console.error("Error fetching user data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('subscriber_email');
        router.push('/suscripciones');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white">
                <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
                <p className="text-white/60">Cargando tu perfil...</p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col relative bg-background">
            <header className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Volver al Inicio
                </Link>
                <div className="font-bold text-white tracking-tight text-xl">
                    Evolvere<span className="text-primary">360</span>
                </div>
            </header>

            <main className="flex-grow py-12 px-6 relative z-10 w-full max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">Mi Suscripción</h1>
                        <p className="text-white/60">Bienvenido, <span className="text-white font-bold">{user.fullName}</span></p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm"
                    >
                        <LogOut className="w-4 h-4" /> Cerrar Sesión
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* INFO PERSONAL */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-glass-bg border border-glass-border p-6 rounded-3xl backdrop-blur-md shadow-xl">
                            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" /> Datos Personales
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Email</label>
                                    <p className="text-white">{user.email}</p>
                                </div>
                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Dirección de Entrega</label>
                                    <p className="text-white">{user.address}</p>
                                </div>
                                <div>
                                    <label className="block text-xs text-white/40 uppercase tracking-wider font-bold mb-1">WhatsApp</label>
                                    <p className="text-white">{user.phoneWhatsApp}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/20 p-6 rounded-3xl backdrop-blur-md shadow-xl">
                            <h2 className="text-lg font-bold text-white mb-2">¿Necesitas ayuda?</h2>
                            <p className="text-white/60 text-sm mb-4">Escríbenos por WhatsApp para cambios en tu pedido o fechas de entrega.</p>
                            <a
                                href={`https://wa.me/5491111111111`}
                                target="_blank"
                                className="block w-full text-center bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/80 transition-all text-sm"
                            >
                                Contactar Soporte
                            </a>
                        </div>
                    </div>

                    {/* SUSCRIPCIONES ACTIVAS */}
                    <div className="lg:col-span-2 space-y-6">
                        {user.subscriptions && user.subscriptions.length > 0 ? (
                            user.subscriptions.map((sub: any) => (
                                <div key={sub.id} className="bg-glass-bg border border-glass-border rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 px-8 py-6 border-b border-glass-border flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary ring-1 ring-primary/30">
                                                <Calendar className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-white">Suscripción Activa</h3>
                                                <p className="text-white/50 text-sm uppercase tracking-widest font-bold">
                                                    {sub.frequency === 'monthly' ? 'Mensual' : 'Semanal'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                                            ACTIVA
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white/5 rounded-lg">
                                                        <Calendar className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/40 font-bold uppercase">Día de Entrega</p>
                                                        <p className="text-white">
                                                            {sub.frequency === 'monthly' ? `Día ${sub.dayOfMonth} de cada mes` : `Cada ${['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][sub.dayOfWeek!]}`}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-white/5 rounded-lg">
                                                        <Package className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-white/40 font-bold uppercase">Franja Horaria</p>
                                                        <p className="text-white">{sub.deliveryTimeSlot}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                                <p className="text-xs text-white/40 font-bold uppercase mb-2">Próxima Entrega Estimada</p>
                                                <p className="text-2xl font-black text-white">15 de Marzo</p>
                                                <p className="text-primary text-xs font-bold mt-1 inline-flex items-center gap-1">
                                                    <CheckCircle2 className="w-3 h-3" /> Confirmada
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-white/70 mb-4 flex items-center gap-2">
                                                <Beef className="w-4 h-4 text-primary" /> Detalle del Pedido
                                            </h4>
                                            <div className="space-y-3">
                                                {sub.items.map((item: any) => (
                                                    <div key={item.id} className="flex justify-between items-center p-4 bg-black/20 rounded-xl border border-white/5">
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-bold text-white">{item.product.name}</span>
                                                        </div>
                                                        <span className="text-primary font-black">{item.quantity} {item.product.unit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-glass-bg border border-glass-border p-12 rounded-3xl text-center">
                                <Package className="w-16 h-16 text-white/10 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">No tienes suscripciones activas</h3>
                                <p className="text-white/50 mb-8">Comienza ahora eligiendo el plan que mejor se adapte a ti.</p>
                                <Link href="/suscripciones/catalogo" className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/80 transition-all">
                                    Ver Planes
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
