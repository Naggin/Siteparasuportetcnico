import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Monitor,
  Headphones,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Terminal,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import * as Accordion from "@radix-ui/react-accordion";

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
        "Orientação especializada para otimizar os seus sistemas e infraestrutura.",
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
        "Mantenha os seus equipamentos sempre em perfeito funcionamento.",
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

  const faqs = [
    {
      question: "Como funciona o suporte remoto?",
      answer: "Utilizamos softwares seguros (como TeamViewer ou AnyDesk) para acessar o seu computador temporariamente, com a sua autorização, e resolver o problema enquanto você acompanha tudo pela tela."
    },
    {
      question: "Vocês atendem finais de semana e feriados?",
      answer: "Sim! Para emergências e chamados críticos, a nossa equipe está disponível 24 horas por dia, 7 dias por semana."
    },
    {
      question: "Meu computador está muito lento. Conseguem resolver sem formatar?",
      answer: "Na grande maioria dos casos, sim. Fazemos uma varredura completa de malwares, limpeza de arquivos temporários, otimização do registro e desativação de processos em segundo plano para restaurar a velocidade sem perder dados."
    },
    {
      question: "Atendem empresas ou apenas clientes finais?",
      answer: "Ambos. Temos planos mensais para a infraestrutura de pequenas e médias empresas e também realizamos atendimentos avulsos para clientes domésticos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 dark:opacity-20 transition-colors duration-500"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded px-3 py-1.5 text-sm font-mono text-emerald-600 dark:text-emerald-400">
                <Terminal className="h-3.5 w-3.5" />
                <span>24/7 Online</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white transition-colors duration-500">
                Suporte Técnico
                <span className="block text-emerald-500 dark:text-emerald-400 mt-2">
                  Especializado
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl transition-colors duration-500">
                Soluções rápidas e eficientes para infraestrutura de TI, sistemas e suporte técnico profissional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
                >
                  Solicitar Atendimento
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {/* Botão de Manuais Removido */}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzczNjkwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Suporte Técnico"
                  className="w-full h-auto opacity-90 dark:opacity-80 transition-opacity"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm mb-2">// Serviços</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-500">
              Soluções Técnicas
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors duration-300 group cursor-default"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative rounded border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758882006111-3613bb4218f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjBhc3Npc3RhbmNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzY5MDMyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Suporte Remoto"
                  className="w-full h-auto opacity-90 dark:opacity-80 transition-opacity"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm mb-2">// Diferenciais</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                Suporte Profissional
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-500">
                Equipe técnica especializada com anos de experiência em infraestrutura de TI e suporte a sistemas corporativos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-6 py-3 rounded font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
              >
                Solicitar Suporte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Animado Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded mb-4 transition-colors">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tire suas dúvidas rápidas antes de abrir um chamado.
            </p>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item 
                key={index} 
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 transition-colors">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-12 overflow-hidden transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 dark:opacity-10 transition-colors duration-500"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm mb-2">// Atendimento</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                Precisa de Suporte Imediato?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg transition-colors duration-500">
                A nossa equipe está disponível 24/7 para atender as suas necessidades técnicas.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white dark:text-gray-950 px-8 py-4 rounded font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
              >
                Abrir Chamado
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
