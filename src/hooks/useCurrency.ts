import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext/CurrencyContext";
import type { ICurrencyContextValue } from "../context/CurrencyContext/CurrencyContext.types";

export const useCurrency = (): ICurrencyContextValue => {
   const ctx = useContext(CurrencyContext);
   if (!ctx)
      throw new Error("useCurrency must be used within CurrencyProvider");
   return ctx;
};
