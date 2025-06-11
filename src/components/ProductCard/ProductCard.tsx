import { Card, Typography, Image, Skeleton } from "antd";
import type { ProductCardProps } from "./ProductCard.types";
import { useFormatPrice } from "../../hooks/useFormatPrice";

const { Title, Text } = Typography;

export const ProductCard = ({
   title,
   origin,
   price,
   currency,
   imageUrl,
   isLoading,
}: ProductCardProps) => {
   const { formattedPrice, isLoading: isPriceLoading } = useFormatPrice(
      price / 100,
      currency
   );

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
            style={{ objectFit: "cover", minHeight: 200 }}
         />
         <Skeleton
            active
            loading={isLoading || isPriceLoading || !formattedPrice}
         >
            <Title level={4}>{title}</Title>
            <Text type="secondary">Производитель: {origin}</Text>

            <Text strong style={{ fontSize: 18 }}>
               {formattedPrice}
            </Text>
         </Skeleton>
      </Card>
   );
};
