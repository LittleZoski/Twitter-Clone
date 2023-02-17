import AuthGuard from "@/context/AuthGuard";
import "@/styles/globals.scss";
import { AuthProvider } from "@/context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import AppShellPage from "@/components/Appshell";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthGuard>
          <AppShellPage>
            <Component {...pageProps} />
          </AppShellPage>
        </AuthGuard>
      </AuthProvider>
    </QueryClientProvider>
  );
}
