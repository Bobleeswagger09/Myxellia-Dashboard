import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";

export default function Navbar() {
  const userInitial = "D";

  return (
    <header>
      <nav className="bg-[#191919] w-full h-20 px-3 md:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/logo.svg"
            width={153}
            height={26}
            alt="Myxellia logo"
            priority
          />
        </div>

        {/* Icons */}
        <ul className="flex gap-5 md:gap-6 items-center text-white">
          <li
            className="cursor-pointer hover:text-gray-400"
            aria-label="Notifications"
          >
            <IoNotifications size={24} />
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            aria-label="Calculator"
          >
            <FaCalculator size={22} />
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            aria-label="Calendar"
          >
            <FaCalendarAlt size={22} />
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            aria-label="Messages"
          >
            <RiMessage2Fill size={23} />
          </li>

          {/* User Initial Avatar */}
          <li
            className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-gray-600 text-white font-bold hover:bg-gray-500"
            aria-label="User Profile"
          >
            {userInitial}
          </li>
        </ul>
      </nav>
    </header>
  );
}
