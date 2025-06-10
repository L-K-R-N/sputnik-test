import type { IProduct, TCurrency } from "../../shared/types";

export interface ProductCardProps extends IProduct {
   currency: TCurrency;
   isLoading?: boolean;
}
