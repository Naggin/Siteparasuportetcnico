import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Smartphone,
  Video,
  Terminal,
} from "lucide-react";
import { useState } from "react";

export function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "antoniocfjr@icloud.com",
      link: "mailto:antoniocfjr@icloud.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (51) 98974-6959",
      link: "tel:+5551989746959",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Novo Hamburgo, RS",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24/7 Disponível",
      link: null,
    },
  ];

  const supportMethods = [
    {
      icon: MessageSquare,
      title: "Chat Online",
      description: "Atendimento em tempo real",
      color: "emerald",
    },
    {
      icon: Smartphone,
      title: "WhatsApp",
      description: "Suporte via mensagem",
      color: "emerald",
    },
    {
      icon: Video,
      title: "Acesso Remoto",
      description: "Assistência via TeamViewer/AnyDesk",
      color: "emerald",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:opacity-20 transition-colors duration-500"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2 transition-colors">// Contato</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Abrir Chamado
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl transition-colors">
            Entre em contato com nossa equipe técnica. Atendimento 24/7 para suporte emergencial.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-6 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded mb-3 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm transition-colors">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-mono"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-mono transition-colors">{info.content}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2 transition-colors">// Canais</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors">
              Métodos de Atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-6 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded mb-3 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-8 transition-colors duration-500">
            <div className="mb-8">
              <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2 transition-colors">// Formulário</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                Enviar Solicitação
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                Preencha os dados abaixo para abrir um chamado técnico
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                  >
                    Tipo de Suporte *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  >
                    <option value="">Selecione...</option>
                    <option value="suporte-remoto">Suporte Remoto</option>
                    <option value="consultoria">Consultoria Técnica</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="instalacao">Instalação</option>
                    <option value="emergencia">Emergência</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors"
                >
                  Descrição do Problema *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none transition-colors duration-300"
                  placeholder="Descreva detalhadamente o problema técnico..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="termos"
                  required
                  className="mt-1 w-4 h-4 bg-gray-50 dark:bg-gray-950 border-gray-300 dark:border-gray-800 rounded text-emerald-500 focus:ring-emerald-500"
                />
                <label htmlFor="termos" className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  Autorizo o compartilhamento das informações fornecidas para abertura de chamado técnico *
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
              >
                <Send className="h-4 w-4" />
                Abrir Chamado
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 rounded p-8 overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#fecaca_1px,transparent_1px),linear-gradient(to_bottom,#fecaca_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#7f1d1d_1px,transparent_1px),linear-gradient(to_bottom,#7f1d1d_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 dark:opacity-20"></div>
            
            <div className="relative flex items-start gap-6">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded flex-shrink-0 border border-red-200 dark:border-red-900/50 transition-colors">
                <Terminal className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-red-900 dark:text-white mb-2 transition-colors">
                  Suporte Emergencial 24/7
                </h3>
                <p className="text-red-700 dark:text-red-200 mb-4 text-sm leading-relaxed transition-colors">
                  Para problemas críticos que necessitam atenção imediata, entre em contato via telefone:
                </p>
                <a
                  href="tel:+5551989746959"
                  className="inline-flex items-center gap-2 bg-red-600 dark:bg-red-500 text-white px-5 py-2.5 rounded font-semibold hover:bg-red-700 dark:hover:bg-red-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +55 (51) 98974-6959
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
