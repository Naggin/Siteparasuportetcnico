import {
  FileText,
  Download,
  Search,
  MonitorSmartphone,
  Network,
  HardDrive,
  Wifi,
  Shield,
  Printer,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Manuais() {
  const [searchTerm, setSearchTerm] = useState("");

  const manuais = [
    {
      id: 1,
      title: "Configuração de Rede Local",
      description: "Guia completo para configurar redes locais corporativas.",
      category: "Redes",
      pages: 24,
      date: "15/03/2026",
      icon: Network,
    },
    {
      id: 2,
      title: "Backup e Recuperação de Dados",
      description: "Procedimentos para backup seguro e recuperação de dados.",
      category: "Segurança",
      pages: 18,
      date: "12/03/2026",
      icon: HardDrive,
    },
    {
      id: 3,
      title: "Instalação Windows Server",
      description: "Manual completo de instalação e configuração do Windows Server.",
      category: "Sistemas",
      pages: 32,
      date: "10/03/2026",
      icon: MonitorSmartphone,
    },
    {
      id: 4,
      title: "Configuração de Firewall",
      description: "Guia de segurança e configuração de firewall corporativo.",
      category: "Segurança",
      pages: 28,
      date: "08/03/2026",
      icon: Shield,
    },
    {
      id: 5,
      title: "Troubleshooting Wi-Fi",
      description: "Resolução de problemas comuns em redes sem fio.",
      category: "Redes",
      pages: 16,
      date: "05/03/2026",
      icon: Wifi,
    },
    {
      id: 6,
      title: "Configuração de Impressoras",
      description: "Instalação e configuração de impressoras em rede.",
      category: "Hardware",
      pages: 12,
      date: "01/03/2026",
      icon: Printer,
    },
  ];

  const categories = ["Todos", "Redes", "Segurança", "Sistemas", "Hardware"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredManuais = manuais.filter((manual) => {
    const matchesSearch =
      manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manual.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || manual.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:opacity-20 transition-colors duration-500"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2 transition-colors">// Documentação</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Base de Conhecimento
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl transition-colors">
            Manuais técnicos e guias de procedimentos para suporte e manutenção de sistemas.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-40 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Buscar documentação..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300 font-mono text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded font-medium whitespace-nowrap transition-colors duration-300 text-sm ${
                    selectedCategory === category
                      ? "bg-emerald-500 text-white dark:text-gray-950"
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manuais Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredManuais.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded mb-6 transition-colors">
                <FileText className="h-8 w-8 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                Nenhum manual encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar sua busca ou selecione outra categoria.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-500 dark:text-gray-400 font-mono text-sm transition-colors">
                  <span className="text-emerald-600 dark:text-emerald-400">{filteredManuais.length}</span>{" "}
                  documento{filteredManuais.length !== 1 ? "s" : ""} encontrado{filteredManuais.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredManuais.map((manual) => {
                  const Icon = manual.icon;
                  return (
                    <div
                      key={manual.id}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-6 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-colors">
                          {manual.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {manual.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed transition-colors">
                        {manual.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 font-mono mb-4 pb-4 border-b border-gray-200 dark:border-gray-800 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <FileText className="h-3.5 w-3.5" />
                          <span>{manual.pages} pgs</span>
                        </div>
                        <span>{manual.date}</span>
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2.5 rounded font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 text-sm">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-8 transition-colors duration-500">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded flex-shrink-0 transition-colors">
                <Terminal className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                  Documentação Personalizada
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed transition-colors">
                  Não encontrou o manual que procurava? Entre em contato para solicitar documentação específica para seu ambiente.
                </p>
                <a
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-4 py-2 rounded font-medium hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors text-sm"
                >
                  Solicitar Manual
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
