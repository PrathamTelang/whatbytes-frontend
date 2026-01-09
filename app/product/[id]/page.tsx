import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
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
        <p className="text-sm text-gray-500">
          Invalid product ID: {id}
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold">
          ${product.price / 100}
        </p>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>
      </div>
    </div>
  );
}
