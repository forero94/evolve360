import { Plus, Edit2, Trash2, CalendarDays, CheckCircle2, PauseCircle } from "lucide-react";

export default function SubscriptionsPage() {
    const subscriptions = [
        { id: 1, user: "Juan Pérez", frequency: "Semanal", day: "Sábado", time: "10:00 - 12:00", active: true },
        { id: 2, user: "Ana García", frequency: "Mensual", day: "29", time: "11:00 - 13:00", active: true },
        { id: 3, user: "Roberto Gómez", frequency: "Semanal", day: "Viernes", time: "18:00 - 20:00", active: false },
    ];

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-glass-border">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-500">
                            <CalendarDays className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Gestión de Suscripciones</h2>
                    </div>
                    <p className="text-white/50 max-w-xl">
                        Controla los pedidos recurrentes de tus clientes fijos. Aquí puedes pausar, editar o crear nuevas recurrencias de entrega.
                    </p>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> Nueva Suscripción
                </button>
            </div>

            <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Cliente</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Frecuencia</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Día / Fecha</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Horario</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Estado</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {subscriptions.map((s) => (
                                <tr key={s.id} className="group transition-colors duration-200 hover:bg-white/[0.03]">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white border border-white/20">
                                                {s.user.charAt(0)}
                                            </div>
                                            <span className="font-bold text-base text-white/90 group-hover:text-white transition-colors">
                                                {s.user}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-white/70 font-medium">{s.frequency}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="font-bold text-white">{s.day}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="font-mono text-sm text-white/50 bg-white/5 px-2 py-1 rounded-md">{s.time}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            {s.active ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <PauseCircle className="w-4 h-4 text-white/40" />}
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${s.active ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-white/5 text-white/40 border-white/10"
                                                }`}>
                                                {s.active ? "Activa" : "Pausada"}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors" title="Editar">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-lg hover:bg-red-500/10 text-white/60 hover:text-red-400 transition-colors" title="Eliminar">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

