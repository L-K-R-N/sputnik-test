import { useEffect, useState } from "react";
import type { TCurrency } from "../shared/types";
import { useCurrency } from "./useCurrency";

export const useFormatPrice = (price: number, currencyTo: TCurrency) => {
   const { rates } = useCurrency();
   const [formattedPrice, setFormattedPrice] = useState<string>("");

   useEffect(() => {
      setFormattedPrice(
         new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency:
               rates && rates[currencyTo] && currencyTo !== "RUB"
                  ? currencyTo
                  : "RUB",
         }).format(
            rates && rates[currencyTo] && currencyTo !== "RUB"
               ? rates[currencyTo].Value
               : price
         )
      );
   }, [rates, price, currencyTo]);

   return { formattedPrice, isLoading: !(rates && rates[currencyTo]) };
};
