import axios from "axios";

export interface CurrencyRatesResponse {
   base: string;
   Valute: Record<string, { Name: string; Value: number; Nominal: number }>;
}

export const fetchRates = async (): Promise<CurrencyRatesResponse> => {
   const response = await axios.get<CurrencyRatesResponse>(
      `https://www.cbr-xml-daily.ru/daily_json.js`
   );
   console.log(response.data);
   return response.data;
};

export const SUPPORTED_CURRENCIES = ["USD", "EUR", "RUB", "BYN"] as const;
