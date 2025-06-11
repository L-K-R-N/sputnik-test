import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "../api/currencies/currencies";

export const useCurrencyRates = () => {
   return useQuery({
      queryKey: ["exchangeRates"],
      queryFn: () => fetchRates(),
      staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
   });
};
