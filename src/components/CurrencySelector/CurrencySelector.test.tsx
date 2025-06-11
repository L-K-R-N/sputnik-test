import { render, screen } from "@testing-library/react";
import { CurrencySelector } from "./CurrencySelector";
import { describe, it, expect } from "vitest";

const mockOptions = [
   {
      CharCode: "USD",
      Name: "Доллар США",
      Value: 100,
      Nominal: 1,
   },
   {
      CharCode: "EUR",
      Name: "Евро",
      Value: 120,
      Nominal: 1,
   },
];

describe("CurrencySelector", () => {
   it("renders select with options when not loading", () => {
      render(
         <CurrencySelector
            isLoading={false}
            currency="USD"
            setCurrency={() => {}}
            options={mockOptions}
         />
      );

      expect(screen.getByText("Валюта:")).toBeInTheDocument();
      expect(screen.getByRole("combobox")).toBeInTheDocument();
   });
});
