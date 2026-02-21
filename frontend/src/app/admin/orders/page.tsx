"use client";

import { useState, useEffect } from "react";
import { Printer, RefreshCcw, Truck, MapPin, Package, MessageCircle, Clock, Scale } from "lucide-react";

export default function DailyOrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [weighingOrderId, setWeighingOrderId] = useState<string | null>(null);
    const [weighingData, setWeighingData] = useState<Record<string, number>>({});

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch('http://localhost:3001/orders');
            const data = await res.json();
            setOrders(data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleWeighingInput = (itemId: string, weight: string) => {
        setWeighingData(prev => ({
            ...prev,
            [itemId]: parseFloat(weight) || 0
        }));
    };

    const calculateFinalTotal = (order: any) => {
        let total = 0;
        order.items.forEach((item: any) => {
            const weight = weighingData[item.id] || item.quantity;
            total += weight * item.product.pricePerUnit;
        });
        return total;
    };

    const saveFinalWeight = async (order: any) => {
        const finalTotal = calculateFinalTotal(order);

        const updatePayload = {
            status: 'En camino',
            totalFinalPrice: finalTotal,
            items: order.items.map((item: any) => ({
                id: item.id,
                actualQuantity: weighingData[item.id] || item.quantity,
                actualPrice: (weighingData[item.id] || item.quantity) * item.product.pricePerUnit
            }))
        };

        try {
            const res = await fetch(`http://localhost:3001/orders/${order.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatePayload)
            });

            if (res.ok) {
                setWeighingOrderId(null);
                setWeighingData({});
                fetchOrders(); // Refresh list
            }
        } catch (error) {
            console.error("Error updating order:", error);
        }
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-glass-border">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-500">
                            <Truck className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Despachos de Hoy</h2>
                    </div>
                    <p className="text-white/50 max-w-xl">
                        Hoja de ruta y cronograma de entregas. Ingresa los pesajes finales para los pedidos en preparación.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white/5 text-white/80 border border-white/10 px-5 py-2.5 rounded-xl font-bold hover:bg-white/10 hover:text-white transition-all flex items-center gap-2">
                        <Printer className="w-4 h-4" /> Imprimir Hoja
                    </button>
                    <button onClick={fetchOrders} className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <RefreshCcw className="w-4 h-4" /> Actualizar
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-white/50 text-center py-10 font-bold">Cargando pedidos...</div>
            ) : orders.length === 0 ? (
                <div className="text-white/50 text-center py-10 font-bold">No hay pedidos generados. Generalos desde Suscripciones.</div>
            ) : (
                <div className="grid grid-cols-1 gap-5">
                    {orders.map((o) => {
                        const isEnCamino = o.status === 'En camino';
                        const isPreparando = o.status === 'pending' || o.status === 'Preparando';
                        const isWeighing = weighingOrderId === o.id;

                        return (
                            <div key={o.id} className={`bg-glass-bg border border-glass-border backdrop-blur-xl p-6 rounded-2xl shadow-xl transition-all group relative overflow-hidden flex flex-col gap-6 ${isWeighing ? 'ring-2 ring-primary border-primary/50' : 'hover:border-white/10 hover:shadow-2xl'}`}>
                                {/* Status glow border */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isEnCamino ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]' : isPreparando ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]' : 'bg-white/20'}`} />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex flex-col gap-2 pl-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-mono font-bold text-white/40 bg-white/5 px-2 py-1 rounded-md border border-white/5">#{o.id.substring(0, 6).toUpperCase()}</span>
                                            <h3 className="font-extrabold text-xl text-white">{o.subscription?.user?.fullName || "Cliente Desconocido"}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/70">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium">{o.subscription?.user?.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/50 mt-1">
                                            <Package className="w-4 h-4" />
                                            <span className="text-sm">Contenido: <span className="text-white/80 font-medium">{o.items?.length || 0} items</span></span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8 justify-between md:justify-end pl-4 md:pl-0">
                                        <div className="text-right">
                                            <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">{isEnCamino ? 'Total Final' : 'Total Estimado'}</p>
                                            <p className="text-2xl font-black text-white">${o.totalFinalPrice || o.totalEstimatedPrice}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-3 min-w-[140px]">
                                            <span className={`px-4 py-1.5 rounded-lg flex items-center gap-2 text-xs font-black uppercase tracking-widest border ${isEnCamino ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]' :
                                                isPreparando ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                                    'bg-white/5 text-white/50 border-white/10'
                                                }`}>
                                                {isEnCamino ? <Truck className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                                                {o.status === 'pending' ? 'Preparando' : o.status}
                                            </span>

                                            {isPreparando && !isWeighing && (
                                                <button onClick={() => setWeighingOrderId(o.id)} className="text-xs text-primary font-bold hover:text-white transition-colors flex items-center gap-1 group-hover:underline decoration-primary underline-offset-4">
                                                    <Scale className="w-3 h-3" /> Ingresar Pesaje Real
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Weighing Form Section */}
                                {isWeighing && (
                                    <div className="mt-4 pt-6 border-t border-white/10 bg-black/20 -mx-6 -mb-6 p-6">
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            <Scale className="w-5 h-5 text-primary" /> Pesaje en Balanza
                                        </h4>
                                        <div className="grid gap-4">
                                            {o.items?.map((item: any) => (
                                                <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <div>
                                                        <p className="text-white font-semibold">{item.product.name}</p>
                                                        <p className="text-white/50 text-sm">Estimado: <strong className="text-white">{item.quantity} {item.product.unit}</strong> a ${item.product.pricePerUnit}/{item.product.unit}</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="number"
                                                            step="0.01"
                                                            onChange={(e) => handleWeighingInput(item.id, e.target.value)}
                                                            placeholder={item.quantity.toString()}
                                                            className="w-24 bg-black/50 border border-white/20 rounded-lg px-3 py-2 text-white font-mono text-right focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                        />
                                                        <span className="text-white/50 font-medium w-8">{item.product.unit}</span>
                                                    </div>
                                                    <div className="text-right w-24">
                                                        <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Subtotal</p>
                                                        <p className="text-lg font-bold text-white">${(weighingData[item.id] || item.quantity) * item.product.pricePerUnit}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                                            <div className="text-right flex-grow pr-8">
                                                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-1">Nuevo Total Calculado</p>
                                                <p className="text-3xl font-black text-primary drop-shadow-[0_0_15px_rgba(255,100,0,0.3)]">${calculateFinalTotal(o)}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button onClick={() => setWeighingOrderId(null)} className="px-5 py-3 rounded-xl font-bold text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                                                    Cancelar
                                                </button>
                                                <button onClick={() => saveFinalWeight(o)} className="bg-primary text-white px-6 py-3 rounded-xl font-black shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-all flex items-center gap-2">
                                                    Guardar y Despachar <Truck className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}
