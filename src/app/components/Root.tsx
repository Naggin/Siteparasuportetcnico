import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Monitor, Phone, BookOpen, Terminal, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  // Evita problemas de hidratação (SSR/SSG) garantindo que o tema carregou
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

const navigation = [
    { name: "Início", href: "/", icon: Monitor },
    { name: "Contato", href: "/contato", icon: Phone },
  ];
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // Adicionada a transição suave de cores (transition-colors duration-500)
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-500">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="inline-flex items-center justify-center w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded group-hover:bg-emerald-500/20 transition-colors">
                <Terminal className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                Suporte<span className="text-emerald-500 dark:text-emerald-400">TI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}

              {/* Theme Toggle Desktop */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="ml-2 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors overflow-hidden"
                  aria-label="Alternar tema"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 0 : 180 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </button>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Theme Toggle Mobile */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === "dark" ? 0 : 180 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </button>
              )}

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
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
          <motion.div 
            initial={false}
            animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
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
                          ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                © 2026 SuporteTI. Suporte técnico profissional.
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              Disponível 24/7
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
