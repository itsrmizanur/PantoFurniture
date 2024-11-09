import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

const navItems = [
    {
        index: "1",
        path: "/",
        label: "Furniture",
    },
    {
        index: "2",
        path: "/shop",
        label: "Shop",
    },
    {
        index: "3",
        path: "/about",
        label: "About Us",
    },
    {
        index: "4",
        path: "/contact",
        label: "Contact",
    },
];

const NavItems = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
            {
                navItems.map( (item) => {
                    return (
                        <li key={item.index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary"
                                        : "hover:text-primary"
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    );
                }

                )
            }
        </ul>
    );
}

const Navbar = () => {
  return (
      <header>
          <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
              {/* logo  */}
              <div className="logo">
                  <Link to="/" className="font-bold">
                      LOGO
                  </Link>
              </div>

              {/* desktop menu items */}
              <div className="hidden md:flex">
                  <NavItems />
              </div>

              {/* cart icon  */}
              <div className="hidden md:flex cursor-pointer relative">
                  <MdOutlineShoppingBag className='text-2xl' />
                  <sup className='absolute top-0 -right-3 text-white text-xs bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center'>0</sup>
              </div>
          </nav>
      </header>
  );
}

export default Navbar