
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              className="pl-10" 
              placeholder="Search products..."
              type="search"
            />
          </div>
          <div className="text-muted-foreground text-center py-12">
            Start typing to search for products
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
