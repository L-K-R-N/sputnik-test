import { Row, Col } from "antd";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { useCurrency } from "./hooks/useCurrency";
import { products } from "./utils/constants";
import { CurrencySelector } from "./components/CurrencySelector/CurrencySelector";

function App() {
   const { currency, setCurrency, isLoading, rates } = useCurrency();

   return (
      <div style={{ padding: 24 }}>
         <CurrencySelector
            isLoading={isLoading || !rates[currency]}
            currency={currency}
            options={Object.values(rates)}
            setCurrency={setCurrency}
         />
         <Row gutter={[16, 16]}>
            {products.map((product, index) => (
               <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard
                     {...product}
                     currency={currency}
                     isLoading={isLoading}
                  />
               </Col>
            ))}
         </Row>
      </div>
   );
}

export default App;
