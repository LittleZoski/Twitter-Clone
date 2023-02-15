import AuthGuard from "@/context/AuthGuard";
import { AuthProvider } from "@/context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";


const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>  
        </AuthProvider>
      

    </QueryClientProvider>
  )

}  
