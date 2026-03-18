import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Monitor, Phone, BookOpen, Terminal } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/", icon: Monitor },
    { name: "Manuais", href: "/manuais", icon: BookOpen },
    { name: "Contato", href: "/contato", icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="inline-flex items-center justify-center w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded">
                <Terminal className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-lg font-semibold text-white">
                Suporte<span className="text-emerald-400">TI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-colors ${
                      isActive(item.href)
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800 pt-4">
              <div className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                        isActive(item.href)
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <p className="text-sm text-gray-400 font-mono">
                © 2026 SuporteTI. Suporte técnico profissional.
              </p>
            </div>
            <p className="text-sm text-gray-500 font-mono">
              Disponível 24/7
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}