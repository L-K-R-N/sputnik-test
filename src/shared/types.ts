import type { SUPPORTED_CURRENCIES } from "../api/currencies";

export interface IProduct {
   title: string;
   origin: string;
   price: number;
   imageUrl: string;
}

export type TCurrency = (typeof SUPPORTED_CURRENCIES)[number];
