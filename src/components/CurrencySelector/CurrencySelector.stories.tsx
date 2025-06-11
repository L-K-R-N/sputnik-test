import type { Meta, StoryObj } from "@storybook/react-vite";
import { CurrencySelector } from "./CurrencySelector";

const meta: Meta<typeof CurrencySelector> = {
   title: "Components/CurrencySelector",
   component: CurrencySelector,
   tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CurrencySelector>;

export const Default: Story = {
   args: {
      currency: "RUB",
      isLoading: false,
      setCurrency: function (value) {
         this.currency = value;
      },
      options: [
         {
            Nominal: 10,
            Name: "Норвежских крон",
            Value: 77.8298,
            CharCode: "NOK",
         },
         {
            Nominal: 1,
            Name: "Злотый",
            Value: 21.0431,
            CharCode: "PLN",
         },
         {
            Nominal: 1,
            Name: "Румынский лей",
            Value: 17.8163,
            CharCode: "RON",
         },
         {
            Nominal: 1,
            Name: "СДР (специальные права заимствования)",
            Value: 106.9805,
            CharCode: "XDR",
         },
      ],
   },
};
