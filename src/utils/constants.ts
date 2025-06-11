import type { DefaultOptionType } from "antd/es/select";
import type { IProduct } from "../shared/types";

export const products: IProduct[] = [
   {
      title: "Кофе",
      origin: "Беларусь",
      price: 25900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Молоко",
      origin: "Франция",
      price: 34900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Кофе",
      origin: "Беларусь",
      price: 25900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Молоко",
      origin: "Франция",
      price: 34900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Кофе",
      origin: "Беларусь",
      price: 25900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Молоко",
      origin: "Франция",
      price: 34900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Кофе",
      origin: "Беларусь",
      price: 25900,
      imageUrl: "https://placehold.co/300x200",
   },
   {
      title: "Молоко",
      origin: "Франция",
      price: 34900,
      imageUrl: "https://placehold.co/300x200",
   },
];

export interface IOptionType extends DefaultOptionType {
   value: string;
}
