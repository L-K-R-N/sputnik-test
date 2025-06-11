import axios from "axios";
import type { CurrencyRatesResponse } from "./currencies.types";

export const fetchRates = async (): Promise<CurrencyRatesResponse> => {
   const response = await axios.get<CurrencyRatesResponse>(
      "https://www.cbr-xml-daily.ru/daily_json.js"
   );
   return response.data;
};
