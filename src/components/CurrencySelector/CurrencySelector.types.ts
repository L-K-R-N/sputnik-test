import type { IValute } from "../../shared/types";

export interface CurrencySelectorProps {
   isLoading?: boolean;
   currency: string;
   setCurrency: (c: string) => void;
   options: IValute[];
}
