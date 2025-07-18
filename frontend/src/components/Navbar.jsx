import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  LogOutIcon,
  ShieldCheckIcon,
  ShipWheelIcon,
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-300 border-b border-base-300 shadow-sm sticky top-0 z-30 h-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                  SpeakSphere
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to="/privacypolicies">
              <button
                className="btn btn-ghost btn-circle"
                title="Privacy Policy"
              >
                <ShieldCheckIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
            <Link to={"/notifications"}>
              <button
                className="btn btn-ghost btn-circle"
                title="notifications"
              >
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          <ThemeSelector />

          <div className="avatar">
            <div className="w-9 rounded-full">
              <img
                src={authUser?.profilePic}
                alt="User Avatar"
                title={authUser?.email}
                rel="noreferrer"
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Logout button */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={logoutMutation}
            title="Logout"
          >
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
