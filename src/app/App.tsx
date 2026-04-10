import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    // attribute="class" diz ao Tailwind para usar a classe .dark
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
