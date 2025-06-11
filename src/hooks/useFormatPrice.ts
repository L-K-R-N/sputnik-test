import { useEffect, useState } from "react";
import { useCurrency } from "./useCurrency";

export const useFormatPrice = (price: number, currencyTo: string) => {
   const { rates, defaultCurrency } = useCurrency();
   const [formattedPrice, setFormattedPrice] = useState<string>("");

   useEffect(() => {
      const rateHasBeenLoad =
         rates[currencyTo] && currencyTo !== defaultCurrency;
      console.log(rateHasBeenLoad);

      setFormattedPrice(
         new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: rateHasBeenLoad ? currencyTo : defaultCurrency,
         }).format(
            rateHasBeenLoad
               ? (price / rates[currencyTo].Value) * rates[currencyTo].Nominal
               : price
         )
      );
   }, [rates, price, currencyTo, defaultCurrency]);

   return { formattedPrice, isLoading: !rates[currencyTo] };
};
