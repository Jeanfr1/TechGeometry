
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Wishlist = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Wishlist</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
                alt="iPhone 15 Pro"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">iPhone 15 Pro</h2>
              <p className="text-zinc-400 mt-2">Premium smartphone with ProMotion display and A17 Pro chip</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-semibold">$999.99</p>
                <button className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
                alt="AirPods Pro"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">AirPods Pro</h2>
              <p className="text-zinc-400 mt-2">Active noise cancellation with spatial audio</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-semibold">$249.99</p>
                <button className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80"
                alt="iPad Pro"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">iPad Pro</h2>
              <p className="text-zinc-400 mt-2">12.9-inch Liquid Retina XDR display with M2 chip</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-semibold">$1099.99</p>
                <button className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80"
                alt="Apple Watch Ultra"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">Apple Watch Ultra</h2>
              <p className="text-zinc-400 mt-2">Advanced fitness tracking with titanium case</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-white font-semibold">$799.99</p>
                <button className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-lg transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
