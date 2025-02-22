
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Account = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        <div className="max-w-md mx-auto bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden md:max-w-2xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 opacity-50" />
            <div className="relative p-8">
              <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <img
                    className="relative h-48 w-48 object-cover rounded-xl shadow-xl"
                    src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&auto=format&fit=crop&q=80"
                    alt="User Avatar"
                  />
                </div>
                <div className="mt-6 md:mt-0 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white">Demo User</h2>
                  <p className="text-zinc-400">demo@example.com</p>
                  <p className="text-zinc-400 mt-1">Member since 2024</p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 text-blue-400 border border-blue-500/30 px-6 py-2 rounded-lg transition-all">
                      Edit Profile
                    </button>
                    <button className="bg-zinc-800/50 hover:bg-zinc-800/70 text-zinc-300 border border-zinc-700 px-6 py-2 rounded-lg transition-all">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
