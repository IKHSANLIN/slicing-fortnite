import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavItem = ({
  children,
  to,
  isHaveChildren, // Add this line to destructure isHaveChildren
}: {
  children: React.ReactNode;
  to: string;
  isHaveChildren?: boolean;
}) => {
  const [isOpenChildren, setIsOpenChildren] = useState(false);
  return (
    <>
      {isHaveChildren ? (
        <div
          onMouseOver={() => setIsOpenChildren(true)}
          onMouseLeave={() => setIsOpenChildren(false)}
          className="relative"
        >
          <Link
            to={to}
            className="text-white text-md flex items-center gap-2 hover:text-white/50 font-thin transition-all"
          >
            {children}
            {isOpenChildren ? (
              <FaChevronUp className="text-white " size={10} />
            ) : (
              <FaChevronDown className="text-white " size={10} />
            )}
          </Link>
          {isOpenChildren && (
            <div className="h-fit p-2 text-sm w-52 bg-neutral-800 rounded-xl border border-neutral-700 absolute top-8 -left-4 bg-opacity-80 text-white items-center">
              <Link
                to={"/overview"}
                className="hover:bg-neutral-600 p-2 rounded-lg block"
              >
                Overview
              </Link>
              <Link
                to={"/overview"}
                className="hover:bg-neutral-600 p-2 rounded-lg block"
              >
                Overview
              </Link>
              <Link
                to={"/overview"}
                className="hover:bg-neutral-600 p-2 rounded-lg block"
              >
                Overview
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Link
          to={to}
          className="text-white text-md hover:text-white/50 font-thin transition-all"
        >
          {children}
        </Link>
      )}
    </>
  );
};
