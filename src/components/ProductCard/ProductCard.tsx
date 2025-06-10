import React from "react";
import { Card, Typography, Image } from "antd";
import type { ProductCardProps } from "./ProductCard.types";

const { Title, Text } = Typography;

export const ProductCard: React.FC<ProductCardProps> = ({
   title,
   origin,
   price,
   currency,
   imageUrl,
}) => {
   const formattedPrice = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
   }).format(price / 100);

   return (
      <Card
         style={{
            maxWidth: 400,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
         }}
         styles={{
            body: {
               padding: 16,
               display: "flex",
               flexDirection: "column",
               gap: "0.5rem",
            },
         }}
      >
         <Image
            src={imageUrl}
            alt={title}
            width="100%"
            style={{ objectFit: "cover", height: 200 }}
         />
         <Title level={4}>{title}</Title>
         <Text type="secondary">Производитель: {origin}</Text>
         <Text strong style={{ fontSize: 18 }}>
            {formattedPrice}
         </Text>
      </Card>
   );
};
