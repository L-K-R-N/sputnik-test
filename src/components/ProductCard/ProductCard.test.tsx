import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import * as hookModule from "../../hooks/useFormatPrice";

vi.mock("../../hooks/useFormatPrice");

const mockedUseFormatPrice = hookModule.useFormatPrice as unknown as (
   price: number,
   currency: string
) => { formattedPrice: string; isLoading: boolean };

const baseProps = {
   title: "Ноутбук ASUS",
   origin: "Китай",
   currency: "RUB",
   imageUrl: "https://example.com/image.jpg",
};

describe("ProductCard", () => {
   it("renders skeleton when isLoading is true", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "99 999 ₽",
         isLoading: false,
      });

      render(<ProductCard {...baseProps} isLoading={true} />);

      expect(screen.queryByText("Ноутбук ASUS")).not.toBeInTheDocument();
   });

   it("renders skeleton when price formatting is loading", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "",
         isLoading: true,
      });

      render(<ProductCard {...baseProps} isLoading={false} />);

      expect(screen.queryByText("Ноутбук ASUS")).not.toBeInTheDocument();
   });

   it("displays formatted price from hook", () => {
      mockedUseFormatPrice.mockReturnValue({
         formattedPrice: "123 456 ₽",
         isLoading: false,
      });

      render(<ProductCard {...baseProps} isLoading={false} />);

      expect(screen.getByText("123 456 ₽")).toBeInTheDocument();
   });
});
