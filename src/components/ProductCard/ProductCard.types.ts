import type { IProduct } from "../../shared/types";

export interface ProductCardProps extends IProduct {
   currency: string;
   isLoading?: boolean;
}
