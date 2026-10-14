import Navbar from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/Footer";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
