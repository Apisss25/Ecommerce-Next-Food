import Image from "next/image";
import Link from "next/link";
import { DataNavbar } from "../../../Data";
import TerraLogo from "../../../public/TerraLogo.png";
import Button from "@/components/ui/Button";
import { User,ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF] px-8 py-[10px] shadow-md">
      <div className="flex items-center justify-evenly gap-20">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={TerraLogo}
              alt="Terra Garage"
              width={45}
              height={45}
              className="rounded-full"
            />

            <div>
              <h1 className="text-[18px] font-bold text-gray-800">
                Terra Garage
              </h1>
              <p className="text-[12px] text-gray-500">Coffee Shop TB</p>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          {DataNavbar.map((e) => {
            return (
              <Link
                href={e.url}
                key={e.id}
                className="
          relative
          font-poppins
          text-[14px]
          text-[gray-700]
          hover:text-gray-900
          transition-colors
          duration-300
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-full
          after:origin-left
          after:scale-x-0
          after:bg-[#12B985]
          after:transition-transform
          after:duration-500
          hover:after:scale-x-100
        "
              >
                {e.title}
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex items-center gap-4">
          <Button
            title={<ShoppingCart size={20} />}
            rounded="20px"
            bg="#12B985"
            text="white"
            width="40px"
            height="40px"
            shadow="0_6px_14px_rgba(18,185,133,0.22)"
            hoverBg="#2ed2a0"
            hoverShadow="0_12px_28px_rgba(18,185,133,0.32)"
            hoverText="white"
            font="poppins"
            sizeText="14px"
          />

          <Button
            title={<User size={20} />}
            rounded="100%"
            bg="#12B985"
            text="white"
            width="40px"
            height="40px"
            shadow="0_6px_14px_rgba(18,185,133,0.22)"
            hoverBg="#2ed2a0"
            hoverShadow="0_12px_28px_rgba(18,185,133,0.32)"
            hoverText="white"
            font="poppins"
            sizeText="14px"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
