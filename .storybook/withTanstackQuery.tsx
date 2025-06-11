import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { CurrencyProvider } from "../src/context/CurrencyContext/CurrencyContext";

const queryClient = new QueryClient();

export const persister = createSyncStoragePersister({
   storage: window.localStorage,
});

export const withTanstackQuery = (Story: React.ComponentType) => (
   <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
   >
      <CurrencyProvider>
         <Story />
      </CurrencyProvider>
   </PersistQueryClientProvider>
);
