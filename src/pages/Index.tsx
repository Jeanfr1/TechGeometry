
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FeaturedProduct } from "@/components/ui/featured-product";

const Index = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroGeometric
        badge="Premium Electronics"
        title1="Next Generation"
        title2="Tech Essentials"
      />
      <div className="container mx-auto px-4">
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Index;
