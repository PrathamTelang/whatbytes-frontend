import { products } from "@/data/products";
import ProductDetails from "./ProductDetails";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const product = products.find(
    (p) => String(p.id) === String(id)
  );

  if (!product) {
    return (
      <div className="p-10">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return <ProductDetails product={product} />;
}
