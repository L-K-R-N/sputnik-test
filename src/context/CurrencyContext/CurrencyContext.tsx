import React, { createContext, useEffect, useState } from "react";
import type { ICurrencyContextValue } from "./CurrencyContext.types";
import { useCurrencyRates } from "../../hooks/useCurrencyRates";

const currencyContextDefaultValues: ICurrencyContextValue = {
   defaultCurrency: "RUB",
   currency: "RUB",
   setCurrency: () => {},
   rates: {
      RUB: { Value: 1, Name: "Российский рубль", Nominal: 1, CharCode: "RUB" },
   },
   isLoading: false,
   error: null,
};

export const CurrencyContext = createContext<ICurrencyContextValue | null>(
   currencyContextDefaultValues
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [currency, setCurrency] = useState(() => {
      const saved = localStorage.getItem("selectedCurrency");
      return saved || currencyContextDefaultValues.defaultCurrency;
   });

   useEffect(() => {
      localStorage.setItem("selectedCurrency", currency);
   }, [currency]);

   const { data: fetchRatesResponse, isLoading, error } = useCurrencyRates();

   const rates = React.useMemo(
      () => ({
         ...currencyContextDefaultValues.rates,
         ...(fetchRatesResponse?.Valute || {}),
      }),
      [fetchRatesResponse]
   );

   return (
      <CurrencyContext.Provider
         value={{
            defaultCurrency: currencyContextDefaultValues.defaultCurrency,
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
