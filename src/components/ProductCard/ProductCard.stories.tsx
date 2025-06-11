import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
   title: "Components/ProductCard",
   component: ProductCard,
   tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
   args: {
      title: "Ноутбук ASUS",
      origin: "Россия",
      price: 49900,
      currency: "USD",
      imageUrl: "https://placehold.co/300x200?text=Product",
   },
};
