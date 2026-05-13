import { Link } from "react-router";
import { Terminal, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative text-center px-4"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded mb-6">
          <Terminal className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
        </div>
        <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm mb-2">// erro 404</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
          A rota que você tentou acessar não existe.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao início
        </Link>
      </motion.div>
    </div>
  );
}
