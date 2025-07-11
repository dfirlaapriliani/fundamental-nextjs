interface ProductProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductProps) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Detail Produk</h1>
      <p>Produk ID: {params.id}</p>
    </div>
  );
}
