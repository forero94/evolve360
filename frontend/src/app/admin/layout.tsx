import { LayoutDashboard, Beef, CalendarDays, Truck, UserCircle2 } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background text-foreground w-full">
      {/* Premium Glass Sidebar */}
      <aside className="w-64 bg-glass-bg border-r border-glass-border backdrop-blur-xl p-6 flex flex-col gap-8 shadow-2xl z-20">
        <div className="flex items-center justify-center p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-inner">
          <img src="/logo.png" alt="Evolvere 360 Logo" className="w-full max-w-[160px] object-contain drop-shadow-xl" />
        </div>

        <nav className="flex flex-col gap-2 flex-grow mt-2">
          <NavItem href="/admin" icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active />
          <NavItem href="/admin/products" icon={<Beef className="w-5 h-5" />} label="Catálogo" />
          <NavItem href="/admin/subscriptions" icon={<CalendarDays className="w-5 h-5" />} label="Suscripciones" />
          <NavItem href="/admin/orders" icon={<Truck className="w-5 h-5" />} label="Despachos" />
        </nav>

        <div className="pt-6 border-t border-glass-border/50 mt-auto">
          <div className="flex items-center gap-3 px-2 hover:bg-white/5 p-2 rounded-xl cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent ring-1 ring-accent/30">
              <UserCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-white/90">Don Juan</span>
              <span className="text-xs text-primary font-medium tracking-wide uppercase">Admin</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-grow flex flex-col relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <header className="h-20 border-b border-glass-border bg-glass-bg/50 backdrop-blur-md px-10 flex items-center justify-between sticky top-0 z-10 w-full">
          <h1 className="font-bold text-xl text-white/90">Resumen Operativo</h1>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70">
              Sábado, 21 de Febrero
            </div>
          </div>
        </header>

        <div className="p-10 w-full max-w-7xl mx-auto overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium relative group overflow-hidden ${active
        ? "text-white bg-white/10 ring-1 ring-white/10 shadow-lg"
        : "text-white/60 hover:bg-white/5 hover:text-white"
        }`}
    >
      {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />}
      <span className={`relative z-10 transition-colors ${active ? "text-primary" : "group-hover:text-primary/80"}`}>{icon}</span>
      <span className="relative z-10">{label}</span>
      {active && <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 pointer-events-none" />}
    </a>
  );
}
