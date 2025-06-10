import type { Meta, StoryObj } from "@storybook/react-vite";
import { CurrencySelector } from "./CurrencySelector";
import { CurrencyProvider } from "../../context/CurrencyContext/CurrencyContext";

const meta: Meta<typeof CurrencySelector> = {
   title: "Components/CurrencySelector",
   component: CurrencySelector,
   tags: ["autodocs"],
   decorators: [
      (Story) => (
         <CurrencyProvider>
            <Story />
         </CurrencyProvider>
      ),
   ],
};

export default meta;

type Story = StoryObj<typeof CurrencySelector>;

export const Default: Story = {};
