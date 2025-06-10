import type { TCurrency } from "../../shared/types";

export interface ICurrencyContextValue {
   currency: TCurrency;
   setCurrency: (currency: TCurrency) => void;
   rates: Record<
      string,
      { Value: number; Name: string; Nominal: number }
   > | null;
   isLoading: boolean;
   error: Error | null;
}
