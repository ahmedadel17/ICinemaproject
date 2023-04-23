import { adminIcon, logo } from "../assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full py-10 overflow-y-auto bg-white dark:bg-dark">
          <div className="w-fit m-auto p-2 mb-8 flex justify-center items-baseline gap-2 border-b-2 border-gray">
            <img
              src={logo}
              alt="i cinema logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="font-light text-2xl text-yellow-400">
              <span className="text-dark dark:text-white">I</span>
              Cinema
            </h1>
          </div>

          <ul className="pl-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-lg lg:rounded-l-full lg:mb-5 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-xl text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-lg lg:rounded-l-full lg:mb-5 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-xl text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/boking"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-lg lg:rounded-l-full lg:mb-5 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-xl text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-lg lg:rounded-l-full lg:mb-5 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-xl text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `flex items-center relative py-2.5 px-4 text-center rounded-lg lg:rounded-l-full lg:mb-5 ${
                    isActive ? "bg-primary activeBtn group" : " "
                  }`
                }
              >
                <img
                  src={adminIcon}
                  alt="admin icon"
                  className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
                />

                <span className="font-light text-xl text-dark capitalize group-active:text-dark dark:text-white group-[]:dark:text-dark">
                  Admin
                </span>
              </NavLink>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 w-full mb-8">
            <a
              href="#"
              className="flex items-center relative py-2.5 px-4 text-center"
            >
              <img
                src={adminIcon}
                alt="admin icon"
                className="w-6 h-6 object-contain mr-3 filter dark:invert group-[]:dark:invert-0"
              />

              <span className="ml-3 whitespace-nowrap">Signout</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
