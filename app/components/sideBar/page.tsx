import { HomeIcon, Music, BookOpen, Coins, UserRoundPen } from "lucide-react";
import Link from "next/link";
export default function SideBar() {
  return (
    <div className="bg-darkerGray h-full w-64 p-6 text-white fixed">
      <div className="flex items-center mb-6">
        <div className="text-2xl font-bold">SUNSOUND</div>
      </div>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center p-2  hover:bg-darkGray rounded-lg hover:text-neonPink transition-colors duration-300 cursor-pointer">
            <HomeIcon />
            <span className="ml-2">
              <Link href={"/home"}>Home</Link>
            </span>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-darkGray hover:text-neonPink transition-colors duration-300 cursor-pointer">
            <Music />
            <span className="ml-2">
              <Link href={"/collection"}>Music</Link>
            </span>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-darkGray hover:text-neonPink transition-colors duration-300 cursor-pointer">
            <BookOpen />
            <span className="ml-2">
              <Link href={"/courses"}>Courses</Link>
            </span>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-darkGray hover:text-neonPink transition-colors duration-300 cursor-pointer">
            <Coins />
            <span className="ml-2">
              {" "}
              <Link href={"/tokenomics"}>Tokenomics</Link>
            </span>
          </li>
          <li className="flex items-center p-2 rounded hover:bg-darkGray hover:text-neonPink transition-colors duration-300 cursor-pointer">
            <UserRoundPen />
            <span className="ml-2">
              {" "}
              <Link href={"/profile"}>Profile</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
