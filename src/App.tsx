import { Row, Col } from "antd";
import { ProductCard } from "./components/ProductCard/ProductCard";
import type { ProductCardProps } from "./components/ProductCard/ProductCard.types";

function App() {
   const products: ProductCardProps[] = [
      {
         title: "Кофе",
         origin: "Беларусь",
         price: 25900,
         currency: "RUB",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Молоко",
         origin: "Франция",
         price: 34900,
         currency: "EUR",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Кофе",
         origin: "Беларусь",
         price: 25900,
         currency: "RUB",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Молоко",
         origin: "Франция",
         price: 34900,
         currency: "EUR",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Кофе",
         origin: "Беларусь",
         price: 25900,
         currency: "RUB",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Молоко",
         origin: "Франция",
         price: 34900,
         currency: "EUR",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Кофе",
         origin: "Беларусь",
         price: 25900,
         currency: "RUB",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
      {
         title: "Молоко",
         origin: "Франция",
         price: 34900,
         currency: "EUR",
         imageUrl: "https://placehold.co/300x200?text=Product",
      },
   ];

   return (
      <div style={{ padding: 24 }}>
         <Row gutter={[16, 16]}>
            {products.map((product, index) => (
               <Col
                  key={index}
                  xs={24} // на экранах <576px: 1 колонка (24/24)
                  sm={12} // от 576px и выше: 2 колонки (12/24)
                  md={8} // от 768px: 3 колонки
                  lg={6} // от 992px: 4 колонки
               >
                  <ProductCard {...product} />
               </Col>
            ))}
         </Row>
      </div>
   );
}

export default App;
