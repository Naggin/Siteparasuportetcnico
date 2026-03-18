import { Link } from "react-router";
import {
  Monitor,
  Headphones,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Monitor,
      title: "Suporte Remoto",
      description:
        "Acesso remoto seguro para resolver problemas rapidamente sem sair de casa.",
    },
    {
      icon: Headphones,
      title: "Consultoria Técnica",
      description:
        "Orientação especializada para otimizar seus sistemas e infraestrutura.",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description:
        "Proteção completa contra vírus, malware e ameaças cibernéticas.",
    },
    {
      icon: Zap,
      title: "Manutenção Preventiva",
      description:
        "Mantenha seus equipamentos sempre em perfeito funcionamento.",
    },
  ];

  const benefits = [
    "Atendimento 24/7",
    "Resposta em até 2 horas",
    "Profissionais certificados",
    "Garantia de serviço",
    "Preços transparentes",
    "Relatório técnico detalhado",
  ];

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gray-950 text-white border-b border-gray-800">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded px-3 py-1.5 text-sm font-mono text-emerald-400">
                <Terminal className="h-3.5 w-3.5" />
                <span>24/7 Online</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Suporte Técnico
                <span className="block text-emerald-400 mt-2">
                  Especializado
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                Soluções rápidas e eficientes para infraestrutura de TI, sistemas e suporte técnico profissional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Solicitar Atendimento
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/manuais"
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  Documentação
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded border border-gray-800 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzczNjkwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Suporte Técnico"
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-emerald-400 font-mono text-sm mb-2">// Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Soluções Técnicas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 p-6 rounded hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded border border-gray-800 overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758882006111-3613bb4218f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjBhc3Npc3RhbmNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzY5MDMyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Suporte Remoto"
                  className="w-full h-auto opacity-80"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-emerald-400 font-mono text-sm mb-2">// Diferenciais</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Suporte Profissional
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Equipe técnica especializada com anos de experiência em infraestrutura de TI e suporte a sistemas corporativos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-emerald-500 text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-400 transition-colors"
              >
                Solicitar Suporte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-900 border border-gray-800 rounded p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <p className="text-emerald-400 font-mono text-sm mb-2">// Atendimento</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Precisa de Suporte Imediato?
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Nossa equipe está disponível 24/7 para atender suas necessidades técnicas.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-emerald-500 text-gray-950 px-8 py-4 rounded font-semibold hover:bg-emerald-400 transition-colors"
              >
                Abrir Chamado
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}