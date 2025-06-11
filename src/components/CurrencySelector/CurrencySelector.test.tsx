import { render, screen } from "@testing-library/react";
import { CurrencySelector } from "./CurrencySelector";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

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
   it("renders loader when isLoading is true", () => {
      render(
         <CurrencySelector
            isLoading={true}
            currency="USD"
            setCurrency={() => {}}
            options={[]}
         />
      );

      expect(screen.getByText("Валюта:")).toBeInTheDocument();
      expect(screen.getByRole("progressbar")).toBeInTheDocument(); // Skeleton.Input has role progressbar
   });

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
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
   });

   it("displays options and handles selection", async () => {
      const setCurrencyMock = vi.fn();

      render(
         <CurrencySelector
            isLoading={false}
            currency="USD"
            setCurrency={setCurrencyMock}
            options={mockOptions}
         />
      );

      const user = userEvent.setup();
      const select = screen.getByRole("combobox");

      await user.click(select);

      expect(await screen.findByText(/Доллар США/)).toBeInTheDocument();
      expect(await screen.findByText(/Евро/)).toBeInTheDocument();

      await user.click(screen.getByText(/Евро/));

      expect(setCurrencyMock).toHaveBeenCalledWith("EUR");
   });

   it("formats currency values correctly", () => {
      render(
         <CurrencySelector
            isLoading={false}
            currency="USD"
            setCurrency={() => {}}
            options={mockOptions}
         />
      );

      expect(screen.getAllByRole("article")[0]).toHaveTextContent(
         "(100,000 ₽)"
      );
      expect(screen.getAllByRole("article")[1]).toHaveTextContent(
         "(120,000 ₽)"
      );
   });
});
