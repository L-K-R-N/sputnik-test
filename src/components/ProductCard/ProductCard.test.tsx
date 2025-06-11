import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import * as hookModule from "../../hooks/useFormatPrice";

vi.mock("../../hooks/useFormatPrice", () => ({
   useFormatPrice: vi.fn(),
}));

const mockedUseFormatPrice = hookModule.useFormatPrice as ReturnType<
   typeof vi.fn
>;

describe("ProductCard", () => {
   it("renders loading skeleton when isLoading is true", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "99 999 ₽",
         isLoading: false,
      });

      render(
         <ProductCard
            title="Тестовый продукт"
            origin="Россия"
            price={10000}
            currency="RUB"
            imageUrl="https://example.com/test.jpg"
            isLoading={true}
         />
      );

      expect(screen.queryByText("Тестовый продукт")).not.toBeInTheDocument();
   });

   it("renders skeleton when price formatting is loading", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "",
         isLoading: true,
      });

      render(
         <ProductCard
            title="Тестовый продукт"
            origin="Россия"
            price={10000}
            currency="RUB"
            imageUrl="https://example.com/test.jpg"
            isLoading={false}
         />
      );

      expect(screen.queryByText("Ноутбук ASUS")).not.toBeInTheDocument();
   });

   it("displays formatted price from hook", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "123 456 ₽",
         isLoading: false,
      });

      render(
         <ProductCard
            title="Тестовый продукт"
            origin="Россия"
            price={10000}
            currency="RUB"
            imageUrl="https://example.com/test.jpg"
            isLoading={false}
         />
      );

      expect(screen.getByText("123 456 ₽")).toBeInTheDocument();
   });
});
