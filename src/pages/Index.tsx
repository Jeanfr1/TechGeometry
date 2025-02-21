
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FeaturedProduct } from "@/components/ui/featured-product";
import { ProductShowcase } from "@/components/ui/product-showcase";

const Index = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroGeometric
        badge="Premium Electronics"
        title1="Next Generation"
        title2="Tech Essentials"
      />
      <FeaturedProduct />
      <ProductShowcase />
    </div>
  );
};

export default Index;
