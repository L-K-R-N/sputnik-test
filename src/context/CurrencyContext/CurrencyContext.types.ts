import type { IValute } from "../../shared/types";

export interface ICurrencyContextValue {
   defaultCurrency: string;
   currency: string;
   setCurrency: (currency: string) => void;
   rates: Record<string, IValute>;
   isLoading: boolean;
   error: Error | null;
}
