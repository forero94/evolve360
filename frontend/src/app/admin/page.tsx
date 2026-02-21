import { TrendingUp, Users, Package, DollarSign, Activity, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10">
      {/* Premium Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Entregas de Hoy" value="12" icon={<Package className="w-6 h-6" />} color="text-emerald-500" bgColor="from-emerald-500/20 to-emerald-500/5" />
        <StatCard title="Suscripciones Activas" value="48" icon={<Activity className="w-6 h-6" />} color="text-blue-500" bgColor="from-blue-500/20 to-blue-500/5" />
        <StatCard title="Clientes Registrados" value="156" icon={<Users className="w-6 h-6" />} color="text-purple-500" bgColor="from-purple-500/20 to-purple-500/5" />
        <StatCard title="Ingresos Semanales" value="$1.45M" icon={<DollarSign className="w-6 h-6" />} color="text-primary" bgColor="from-primary/20 to-primary/5" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Orders Glass Table */}
        <div className="xl:col-span-2 bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <div>
              <h2 className="font-bold text-xl text-white">Cronograma de Hoy</h2>
              <p className="text-sm text-white/50 mt-1">Próximas entregas programadas</p>
            </div>
            <a href="/orders" className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors px-4 py-2 bg-primary/10 rounded-lg hover:bg-primary/20">
              Ver hoja de ruta completa
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <OrderRow client="Juan Pérez" items="Pack 'Menú Familiar'" time="10:30" status="En camino" />
            <OrderRow client="Ana García" items="2kg Milanesa Pollo" time="11:15" status="Preparando" />
            <OrderRow client="Carlos Sosa" items="Pack 'Domingo de Asado'" time="12:00" status="Pendiente" />
            <OrderRow client="Familia Giménez" items="Pack 'Ahorro'" time="13:30" status="Pendiente" />
          </div>
        </div>

        {/* Popular Products Mini Analytics */}
        <div className="bg-glass-bg border border-glass-border backdrop-blur-xl rounded-2xl p-8 shadow-2xl flex flex-col relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          <div className="w-full text-left mb-8 z-10">
            <h2 className="font-bold text-xl text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Tendencias
            </h2>
            <p className="text-sm text-white/50 mt-1">Cortes más solicitados</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center z-10 my-4">
            {/* Custom Modern Donut Chart representation */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" stroke="rgba(255,255,255,0.05)" strokeWidth="16" fill="none" />
                <circle cx="96" cy="96" r="80" stroke="var(--primary)" strokeWidth="16" fill="none" strokeDasharray="502" strokeDashoffset="125" className="drop-shadow-[0_0_10px_rgba(255,100,0,0.5)]" />
                <circle cx="96" cy="96" r="80" stroke="#8b5cf6" strokeWidth="16" fill="none" strokeDasharray="502" strokeDashoffset="420" className="drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white">75%</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mt-1">Packs</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-auto z-10">
            <div className="flex items-center justify-between text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]"></div> <span className="text-white/80 font-medium">Packs por Mayor</span></div>
              <span className="font-bold text-white">75%</span>
            </div>
            <div className="flex items-center justify-between text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div> <span className="text-white/80 font-medium">Cortes Cuarto Trasero</span></div>
              <span className="font-bold text-white">15%</span>
            </div>
            <div className="flex items-center justify-between text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div> <span className="text-white/80 font-medium">Otros Cortes</span></div>
              <span className="font-bold text-white">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color, bgColor }: { title: string, value: string, icon: React.ReactNode, color: string, bgColor: string }) {
  return (
    <div className="bg-glass-bg p-6 rounded-2xl border border-glass-border backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-default relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${bgColor} rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/60 mb-1">{title}</p>
          <p className="text-3xl font-black text-white tracking-tight">{value}</p>
        </div>
        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${color} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function OrderRow({ client, items, time, status }: { client: string, items: string, time: string, status: string }) {
  const isEnCamino = status === 'En camino';
  const isPreparando = status === 'Preparando';

  return (
    <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10 group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 ${isEnCamino ? 'bg-emerald-500/10 text-emerald-400' : isPreparando ? 'bg-amber-500/10 text-amber-400' : 'bg-white/5 text-white/40'}`}>
          <Clock className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-md text-white/90 group-hover:text-white transition-colors">{client}</span>
          <span className="text-sm text-white/50">{items}</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="font-mono text-lg font-bold text-white/80">{time}</span>
        <span className={`text-[11px] px-3 py-1 rounded-md font-bold uppercase tracking-widest border ${isEnCamino ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
            isPreparando ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
              'bg-white/5 text-white/50 border-white/10'
          }`}>
          {status}
        </span>
      </div>
    </div>
  );
}

