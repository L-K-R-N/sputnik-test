import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CurrencyProvider } from "./context/CurrencyContext/CurrencyContext.tsx";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const persister = createSyncStoragePersister({
   storage: window.localStorage,
});

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 60 * 1000,
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <PersistQueryClientProvider
         client={queryClient}
         persistOptions={{ persister }}
         onSuccess={() => {
            queryClient.resumePausedMutations();
         }}
      >
         <CurrencyProvider>
            <App />
         </CurrencyProvider>
      </PersistQueryClientProvider>
   </StrictMode>
);
