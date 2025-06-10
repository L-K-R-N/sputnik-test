import { Select, Skeleton, Typography } from "antd";
import { useCurrency } from "../../hooks/useCurrency";

const { Text } = Typography;

export const CurrencySelector: React.FC = () => {
   const { currency, setCurrency } = useCurrency();
   const { rates } = useCurrency();

   if (!(rates && rates[currency])) {
      return (
         <div style={{ marginBottom: 16 }}>
            <Text style={{ marginRight: 8 }}>Валюта:</Text>
            <Skeleton.Input size="small" active />
         </div>
      );
   }

   return (
      <div style={{ marginBottom: 16 }}>
         <Text style={{ marginRight: 8 }}>Валюта:</Text>
         <Select
            value={currency}
            onChange={setCurrency}
            style={{ width: 150 }}
            showSearch
         >
            {rates &&
               Object.entries(rates).map(([key, value]) => (
                  <Select.Option key={key} value={key}>
                     {value.Name}
                  </Select.Option>
               ))}
         </Select>
      </div>
   );
};
