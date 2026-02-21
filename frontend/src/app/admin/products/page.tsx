import { Plus, Edit2, Trash2, PackageSearch } from "lucide-react";

export default function ProductsPage() {
    const products = [
        // PACKS POR MAYOR
        { id: 101, name: "Pack 'Menú Familiar' (Milanesas)", category: "Cuarto Trasero", price: 13000, unit: "kg", description: "Aprox. 35 kgs. Incluye: Nalga, Tapa de Nalga, Bola de Lomo, Cuadrada, Peceto, Tortuguita, Osobuco, Colita de Cuadril, Tapa de Asado" },
        { id: 102, name: "Pack 'Domingo de Asado'", category: "Asado Completo", price: 16500, unit: "kg", description: "Aprox. 22 kgs. Incluye: Asado, Vacío, Matambre" },
        { id: 103, name: "Pack 'Chef en Casa'", category: "Ral / Barra de Bife", price: 15500, unit: "kg", description: "Aprox. 22 kgs. Incluye: Ojo de Bife, Bife de Chorizo, Lomo, Tapa de Cuadril" },
        { id: 104, name: "Pack 'Ahorro'", category: "Pecho", price: 10000, unit: "kg", description: "Aprox. 45 kgs. Incluye: Roast Beef / Aguja, Paleta, Palomita, Falda, Cogote" },

        // CORTES INDIVIDUALES - TRASERO / RUEDA
        { id: 1, name: "Nalga", category: "Trasero / Rueda", price: 8500, unit: "kg" },
        { id: 2, name: "Tapa de Nalga", category: "Trasero / Rueda", price: 7900, unit: "kg" },
        { id: 3, name: "Bola de Lomo", category: "Trasero / Rueda", price: 8200, unit: "kg" },
        { id: 4, name: "Cuadrada", category: "Trasero / Rueda", price: 8200, unit: "kg" },
        { id: 5, name: "Peceto", category: "Trasero / Rueda", price: 9500, unit: "kg" },
        { id: 6, name: "Tortuguita", category: "Trasero / Rueda", price: 7500, unit: "kg" },
        { id: 7, name: "Osobuco", category: "Trasero / Rueda", price: 5500, unit: "kg" },
        { id: 8, name: "Colita de Cuadril", category: "Trasero / Rueda", price: 9200, unit: "kg" },
        { id: 9, name: "Tapa de Asado", category: "Trasero / Rueda", price: 7800, unit: "kg" },

        // CORTES INDIVIDUALES - ASADO COMPLETO
        { id: 10, name: "Asado", category: "Asado Completo", price: 8000, unit: "kg" },
        { id: 11, name: "Vacío", category: "Asado Completo", price: 8900, unit: "kg" },
        { id: 12, name: "Matambre", category: "Asado Completo", price: 8500, unit: "kg" },

        // CORTES INDIVIDUALES - RAL / BARRA DE BIFE
        { id: 13, name: "Ojo de Bife", category: "Ral / Barra de Bife", price: 10500, unit: "kg" },
        { id: 14, name: "Bife de Chorizo", category: "Ral / Barra de Bife", price: 9800, unit: "kg" },
        { id: 15, name: "Lomo", category: "Ral / Barra de Bife", price: 11500, unit: "kg" },
        { id: 16, name: "Tapa de Cuadril", category: "Ral / Barra de Bife", price: 8900, unit: "kg" },

        // CORTES INDIVIDUALES - PECHO
        { id: 17, name: "Roast Beef / Aguja", category: "Pecho", price: 7200, unit: "kg" },
        { id: 18, name: "Paleta", category: "Pecho", price: 7500, unit: "kg" },
        { id: 19, name: "Palomita", category: "Pecho", price: 7600, unit: "kg" },
        { id: 20, name: "Falda", category: "Pecho", price: 5800, unit: "kg" },
        { id: 21, name: "Cogote", category: "Pecho", price: 5200, unit: "kg" },
    ];

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-glass-border">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-xl border border-primary/20 text-primary">
                            <PackageSearch className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Catálogo de Productos</h2>
                    </div>
                    <p className="text-white/50 max-w-xl">
                        Gestiona los packs al por mayor y cortes individuales de carne. Los precios y descripciones se sincronizan automáticamente con las suscripciones.
                    </p>
                </div>
                <button className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,100,0,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                    <Plus className="w-5 h-5" /> Nuevo Producto
                </button>
            </div>

            <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest w-1/3">Corte / Pack</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Sección</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest">Precio x Unidad</th>
                                <th className="px-8 py-5 text-xs font-bold text-white/40 uppercase tracking-widest text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {products.map((p) => {
                                const isPack = p.id > 100;
                                return (
                                    <tr key={p.id} className={`group transition-colors duration-200 hover:bg-white/[0.03] ${isPack ? 'bg-primary/5' : ''}`}>
                                        <td className="px-8 py-5">
                                            <div className="flex flex-col">
                                                <span className={`font-bold text-base transition-colors ${isPack ? 'text-primary drop-shadow-[0_0_8px_rgba(255,100,0,0.3)]' : 'text-white/90 group-hover:text-white'}`}>
                                                    {p.name}
                                                </span>
                                                {p.description && <span className="text-xs text-white/50 mt-1.5 leading-relaxed">{p.description}</span>}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest border ${isPack ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white/5 text-white/60 border-white/10'
                                                }`}>
                                                {p.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-mono text-lg font-bold text-white/90">${p.price.toLocaleString('es-AR')}</span>
                                                <span className="text-white/40 text-sm font-medium">/ {p.unit}</span>
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
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
