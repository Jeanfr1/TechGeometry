
import { Navigation } from "@/components/ui/navigation";
import { ProductGrid } from "@/components/ui/product-grid";
import { Footer } from "@/components/ui/footer";

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1">
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
