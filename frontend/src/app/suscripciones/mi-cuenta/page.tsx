import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft,
    User,
    Calendar,
    Beef,
    Package,
    LogOut,
    Loader2,
    CheckCircle2,
    BadgeCheck,
    TrendingUp as TrendUp,
    QrCode,
    MapPin,
    Clock,
    ShieldCheck
} from 'lucide-react';

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
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
                const response = await fetch(`${apiUrl}/users/email/${encodeURIComponent(email)}`);
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
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                    <Loader2 className="w-12 h-12 animate-spin text-primary relative z-10" />
                </div>
                <p className="mt-8 font-black uppercase tracking-[0.3em] text-[10px] text-white/40">Sincronizando con Estancia...</p>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col relative bg-background text-foreground selection:bg-primary/30">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <header className="relative z-30 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center gap-3 text-white/60 hover:text-white transition-all group">
                    <div className="bg-white/5 p-2 rounded-xl border border-white/10 group-hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm uppercase tracking-widest">Inicio</span>
                </Link>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="font-black text-xl tracking-tighter text-white uppercase italic leading-none">
                            Estancia <span className="text-primary">Evolvere</span>
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white/30 mt-1">Portal Suscriptor</span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-all text-white/60 hover:text-white"
                        title="Cerrar Sesión"
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </header>

            <main className="relative z-10 flex-grow max-w-7xl mx-auto w-full px-6 py-8">
                {/* Welcome & Highlights */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
                    <div className="lg:col-span-8">
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-4">
                            Hola, <span className="text-primary">{user.fullName.split(' ')[0]}</span>
                        </h1>
                        <p className="text-white/40 font-bold uppercase tracking-widest text-xs">Gestiona tu abastecimiento directo desde nuestra ganadería.</p>
                    </div>

                    {/* Savings Scorecard */}
                    <div className="lg:col-span-4">
                        <div className="bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <TrendUp className="w-16 h-16" />
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-accent/60 mb-1">Ahorro Estancia Acumulado</div>
                            <div className="text-4xl font-black text-white italic">$14.200 <span className="text-[10px] text-white/30 not-italic ml-2 tracking-normal uppercase">Vs Retail</span></div>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-accent w-[65%]" />
                                </div>
                                <span className="text-[10px] font-bold text-accent">TOP 5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* LEFT: Active Subscriptions & Traceability */}
                    <div className="lg:col-span-8 space-y-8">
                        {user.subscriptions && user.subscriptions.length > 0 ? (
                            user.subscriptions.map((sub: any) => (
                                <section key={sub.id} className="bg-card border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all hover:border-white/10">
                                    <div className="bg-white/[0.02] border-b border-white/5 px-10 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary ring-1 ring-primary/20 shadow-inner">
                                                <Beef className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Pack Estancia Elite</h3>
                                                    <span className="bg-secondary/10 text-secondary text-[8px] font-black px-2 py-0.5 rounded-full border border-secondary/20 tracking-widest uppercase">Activo</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {sub.frequency === 'monthly' ? 'Mensual' : 'Semanal'}</span>
                                                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {user.address.split(',')[0]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            href="/suscripciones/catalogo"
                                            className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white border border-white/10 px-4 py-2 rounded-xl transition-all"
                                        >
                                            Modificar Plan
                                        </Link>
                                    </div>

                                    <div className="p-10">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                            <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-40">
                                                <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Próximo Despacho</span>
                                                <div>
                                                    <div className="text-2xl font-black text-white uppercase italic">15 Mar</div>
                                                    <div className="text-[10px] text-primary font-bold uppercase tracking-widest mt-1">En Maduración</div>
                                                </div>
                                            </div>
                                            <div className="bg-secondary/5 p-6 rounded-3xl border border-secondary/10 flex flex-col justify-between h-40">
                                                <span className="text-secondary/60 text-[10px] font-black uppercase tracking-widest">Trazabilidad Activa</span>
                                                <div>
                                                    <div className="text-2xl font-black text-white uppercase italic">LOTE-402</div>
                                                    <Link href="/trazabilidad/LOTE-402" className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5 hover:underline">
                                                        <QrCode className="w-3 h-3" /> Verificar Origen
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-40">
                                                <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Estado Logístico</span>
                                                <div>
                                                    <div className="text-2xl font-black text-white uppercase italic">Ruta #14</div>
                                                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
                                                        <Clock className="w-3 h-3" /> 08:00 - 12:00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-6 flex items-center gap-2">
                                                Composición del Pack Directo
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {sub.items.map((item: any) => (
                                                    <div key={item.id} className="flex justify-between items-center p-5 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                            <span className="font-bold text-sm text-white/80 uppercase italic tracking-tight">{item.product.name}</span>
                                                        </div>
                                                        <span className="text-primary font-black text-sm">{item.quantity} {item.product.unit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className="bg-card border border-white/5 p-20 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
                                <Package className="w-24 h-24 text-white/5 mx-auto mb-8" />
                                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Abastecimiento Inactivo</h3>
                                <p className="text-white/40 mb-10 max-w-sm mx-auto font-medium leading-relaxed">Aún no eres parte de nuestra cadena de distribución directa. Empieza a ahorrar hoy.</p>
                                <Link href="/suscripciones/catalogo" className="inline-flex items-center gap-3 bg-primary text-white font-black px-10 py-5 rounded-2xl hover:shadow-[0_0_50px_rgba(255,100,0,0.3)] hover:-translate-y-1 transition-all uppercase tracking-widest text-xs">
                                    <Beef className="w-4 h-4" /> Seleccionar Pack de Estancia
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Profile & Estancia Status */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Profile Card */}
                        <section className="bg-card border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
                            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-8 flex items-center gap-3">
                                <User className="w-5 h-5 text-primary" /> Perfil de Cliente
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-[8px] text-white/20 uppercase tracking-[0.3em] font-black mb-3">Identidad Digital</label>
                                    <div className="text-sm font-bold text-white/80 truncate">{user.email}</div>
                                </div>
                                <div>
                                    <label className="block text-[8px] text-white/20 uppercase tracking-[0.3em] font-black mb-3">Punto de Entrega</label>
                                    <div className="text-sm font-bold text-white/80 leading-relaxed">{user.address}</div>
                                </div>
                                <div className="pt-4 flex gap-4">
                                    <button className="flex-grow bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white/10 transition-all text-white/40 hover:text-white">
                                        Editar Perfil
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Estancia Direct Connect */}
                        <section className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                                <BadgeCheck className="w-48 h-48" />
                            </div>
                            <h2 className="text-xl font-black text-white uppercase italic tracking-tight mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-primary" /> Estancia Direct
                            </h2>
                            <p className="text-white/50 text-[10px] font-bold leading-relaxed mb-8 uppercase tracking-wider">
                                Soporte personalizado exclusivo para suscriptores. Sin bots, atención directa de nuestro equipo de operaciones.
                            </p>
                            <a
                                href={`https://wa.me/5491111111111`}
                                target="_blank"
                                className="block w-full text-center bg-white text-black font-black py-4 rounded-xl hover:shadow-xl transition-all uppercase tracking-widest text-[10px]"
                            >
                                WhatsApp Operaciones
                            </a>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="relative z-30 border-t border-white/5 bg-black/40 backdrop-blur-2xl py-12 text-center text-white/30 text-[8px] font-black uppercase tracking-[0.4em] mt-auto">
                <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-4">
                    <img src="/logo.png" alt="Estancia Evolvere" className="h-6 w-auto opacity-10 grayscale brightness-200" />
                    <span>Portal Tecnológico de Abastecimiento Ganadero v4.0</span>
                </div>
            </footer>
        </div>
    );
}
