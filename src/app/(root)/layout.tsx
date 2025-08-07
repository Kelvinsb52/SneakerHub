import Sidebar from "@/src/components/Sidebar";
import Footer from "@/src/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <main className="flex h-screen w-full flex-col font-inter bg-home-gradient">

      {/* Main Content */}
      <div className="flex flex-1 flex-col sm:flex-row overflow-hidden">
        <Sidebar/>
        
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
      {/* Footer */}
      <Footer />
  </main>

  );
}
