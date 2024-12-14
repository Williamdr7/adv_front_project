import Header from "@/components/molecules/Header";
import { useTheme } from "@/hooks/useTheme";
import { GlobalStyle } from "@/styles/global";
import { Outlet } from "@modern-js/runtime/router";
import { ThemeProvider } from "@modern-js/runtime/styled";
import "../styles/tailwind.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "rc-slider/assets/index.css";
import Navigation from "@/components/molecules/Navigation";

export const queryClient = new QueryClient();

export default function Layout() {
  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <div className="container">
          <Outlet />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
