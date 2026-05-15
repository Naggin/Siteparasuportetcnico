# SuporteTI — Suporte Técnico Especializado

Site institucional para serviços de suporte técnico em TI, com foco em atendimento remoto, consultoria, segurança digital e manutenção preventiva.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 18 |
| Linguagem | TypeScript |
| Build | Vite 6 |
| Roteamento | React Router 7 |
| Estilização | Tailwind CSS 4 |
| Componentes primitivos | Radix UI |
| Ícones | Lucide React |
| Animações | Motion (Framer Motion) |
| Tema (dark mode) | next-themes |
| Formulários | React Hook Form |
| Notificações | Sonner |
| Componentes MUI | Material UI 7 |

## Páginas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Página principal com serviços e apresentação |
| `/contato` | `Contato` | Formulário e dados de contato |
| `*` | `NotFound` | Página 404 customizada |

## Como rodar

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build
```

O output é gerado na pasta `dist/` e pode ser servido por qualquer servidor estático.
