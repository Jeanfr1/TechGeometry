
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Wishlist = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>
        <div className="text-muted-foreground text-center py-12">
          Your wishlist is currently empty. Browse our products and add some items!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
