import type { IValute } from "../../shared/types";

export interface CurrencyRatesResponse {
   Valute: Record<string, IValute>;
}
