import Navbar from "@/components/layouts/navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
