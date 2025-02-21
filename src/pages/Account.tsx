
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const Account = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        <div className="text-muted-foreground text-center py-12">
          Please sign in to view your account details
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
