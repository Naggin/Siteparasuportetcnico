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
  ChevronDown,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { team } from "../site";

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
      answer:
        "Utilizamos softwares seguros (como TeamViewer ou AnyDesk) para acessar o seu computador temporariamente, com a sua autorização, e resolver o problema enquanto você acompanha tudo pela tela.",
    },
    {
      question: "Vocês atendem finais de semana e feriados?",
      answer:
        "Sim! Para emergências e chamados críticos, a nossa equipe está disponível 24 horas por dia, 7 dias por semana.",
    },
    {
      question: "Meu computador está muito lento. Conseguem resolver sem formatar?",
      answer:
        "Na grande maioria dos casos, sim. Fazemos uma varredura completa de malwares, limpeza de arquivos temporários, otimização do registro e desativação de processos em segundo plano para restaurar a velocidade sem perder dados.",
    },
    {
      question: "Atendem empresas ou apenas clientes finais?",
      answer:
        "Ambos. Temos planos mensais para a infraestrutura de pequenas e médias empresas e também realizamos atendimentos avulsos para clientes domésticos.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Plantão ativo" },
    { value: "2h", label: "Primeira resposta" },
    { value: "BR", label: "Atendimento remoto" },
  ];

  const ticketLines = [
    { label: "chamado", value: "CHM-1842" },
    { label: "técnico", value: "Rafael Lima" },
    { label: "canal", value: "acesso remoto" },
    { label: "status", value: "em atendimento" },
    { label: "eta", value: "12 min" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
  };

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-500">
      <section className="relative overflow-hidden border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] dark:opacity-30" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 font-mono text-sm text-emerald-700 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Plantão online
              </div>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 dark:text-white md:text-6xl lg:text-7xl">
                Suporte técnico
                <span className="mt-2 block text-emerald-600 dark:text-emerald-400">
                  que chega antes do problema.
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
                Chamados organizados, acesso remoto e um técnico responsável do diagnóstico ao relatório.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-600 dark:text-gray-950 dark:hover:bg-emerald-400"
                >
                  Abrir chamado
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#equipe"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                >
                  Ver a equipe
                </a>
              </div>

              <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-xs uppercase tracking-wide text-gray-500">{stat.label}</dt>
                    <dd className="mt-1 text-2xl font-semibold text-gray-950 dark:text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl shadow-emerald-950/20 dark:border-gray-800">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-xs text-gray-500">suporteti — sessão ativa</span>
                </div>
                <div className="space-y-4 p-6 font-mono text-sm">
                  {ticketLines.map((line) => (
                    <div key={line.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-gray-500">{line.label}</span>
                      <span className={line.label === "status" ? "text-emerald-400" : "text-gray-100"}>
                        {line.value}
                      </span>
                    </div>
                  ))}
                  <div className="mt-2 space-y-2 border-t border-white/10 pt-4 text-gray-400">
                    <p><span className="text-emerald-400">›</span> diagnóstico de lentidão</p>
                    <p><span className="text-emerald-400">›</span> limpeza de inicialização</p>
                    <p><span className="text-emerald-400">›</span> relatório enviado ao cliente</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <p className="mb-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">// Serviços</p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
              O que resolvemos
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  variants={itemVariants}
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-colors duration-300 hover:border-emerald-500/40 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-gray-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-gray-400">0{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-950 dark:text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">// Diferenciais</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
                Um chamado, um responsável.
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                A equipe acompanha o caso até o relatório. Sem fila anônima e sem perder o histórico do que já foi feito.
              </p>
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600 dark:text-gray-950 dark:hover:bg-emerald-400"
              >
                Solicitar suporte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-5 flex items-center gap-2 font-mono text-xs text-gray-500">
                <Terminal className="h-4 w-4 text-emerald-500" />
                histórico do chamado
              </div>
              <ol className="space-y-4">
                {[
                  ["09:14", "Chamado aberto", "lentidão no Windows"],
                  ["09:21", "Rafael Lima assumiu", "acesso remoto autorizado"],
                  ["09:38", "Diagnóstico", "inicialização e malware"],
                  ["09:51", "Concluído", "relatório enviado"],
                ].map(([time, title, detail]) => (
                  <li key={time} className="grid grid-cols-[4.5rem_1fr] gap-3">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">{time}</span>
                    <span>
                      <span className="block text-sm font-medium text-gray-950 dark:text-white">{title}</span>
                      <span className="text-sm text-gray-500">{detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="equipe" className="border-b border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="mb-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">// Equipe</p>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white md:text-4xl">
              Quem atende
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {team.map((person) => (
              <article
                key={person.name}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 font-semibold text-emerald-700 dark:text-emerald-300">
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">{person.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{person.role}</p>
                <p className="mt-4 font-mono text-sm text-gray-700 dark:text-gray-300">{person.phone}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-gray-950 dark:text-white">
              Perguntas frequentes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Tire a dúvida antes de abrir o chamado.</p>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={faq.question}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-5 text-left font-medium text-gray-950 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800/50">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gray-950 px-8 py-14 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%)]" />
            <div className="relative mx-auto max-w-2xl">
              <p className="mb-2 font-mono text-sm text-emerald-400">// Atendimento</p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Precisa de suporte agora?
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                Abra o chamado com o que está acontecendo. A equipe responde no canal que você escolher.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-gray-950 transition-colors hover:bg-emerald-400"
              >
                Abrir chamado
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
