import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { describe, expect, it } from "vitest";

describe("ProductCard", () => {
   it("Правильно рендерится", () => {
      render(
         <ProductCard
            title="Стиральная машинка"
            origin="Франция"
            price={99300}
            currency="EUR"
            imageUrl="https://placehold.co/300x200?text=Product"
            isLoading={false}
         />
      );

      expect(screen.getByText("Стиральная машинка")).toBeInTheDocument();
      expect(screen.getByText("Производитель: Франция")).toBeInTheDocument();
      expect(screen.getByText(/993\.00 €/)).toBeInTheDocument();
   });
});
