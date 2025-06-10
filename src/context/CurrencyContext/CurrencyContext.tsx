import React, { createContext, useEffect, useState } from "react";
import type { TCurrency } from "../../shared/types";
import type { ICurrencyContextValue } from "./CurrencyContext.types";
import { useCurrencyRates } from "../../hooks/useCurrencyRates";

const currencyContextDefaultValues: ICurrencyContextValue = {
   currency: "RUB",
   setCurrency: () => {},
   rates: null,
   isLoading: false,
   error: null,
};

export const CurrencyContext = createContext<ICurrencyContextValue | null>(
   currencyContextDefaultValues
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [currency, setCurrency] = useState<TCurrency>(() => {
      const saved = localStorage.getItem("selectedCurrency");
      return (saved as TCurrency) || "RUB";
   });

   useEffect(() => {
      localStorage.setItem("selectedCurrency", currency);
   }, [currency]);

   const { data: fetchRatesResponse, isLoading, error } = useCurrencyRates();

   const rates = React.useMemo(
      () => ({
         RUB: { Value: 1, Name: "Российский рубль", Nominal: 1 },
         ...(fetchRatesResponse?.Valute || {}),
      }),
      [fetchRatesResponse]
   );

   return (
      <CurrencyContext.Provider
         value={{
            currency,
            setCurrency,
            rates,
            isLoading,
            error,
         }}
      >
         {children}
      </CurrencyContext.Provider>
   );
};
