
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FeaturedProduct } from "@/components/ui/featured-product";
import { ProductShowcase } from "@/components/ui/product-showcase";
import { ProductGrid } from "@/components/ui/product-grid";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="flex flex-col gap-8">
          <HeroGeometric
            badge="Premium Electronics"
            title1="Next Generation"
            title2="Tech Essentials"
          />
          <FeaturedProduct />
          <ProductShowcase />
          <ProductGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
