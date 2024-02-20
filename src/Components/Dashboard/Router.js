import {
  HomeIcon,
  UserCircleIcon,
  UsersIcon,
  InboxIcon,
  PhotoIcon,
  BellIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { Home, Profile, Users, Inbox, Notifications, Settings } from "./Pages";
import { LogOut } from "../Auth";
import { Gallery } from "../Utils";
const icon = {
  className: "h-5 w-5",
};

export const routes = [
  {
    icon: <HomeIcon {...icon} />,
    name: "Dashboard",
    path: "",
    element: <Home />,
  },
  {
    icon: <UserCircleIcon {...icon} />,
    name: "Profile",
    path: "profile",
    element: <Profile />,
  },
  {
    icon: <UsersIcon {...icon} />,
    name: "Users",
    path: "users",
    element: <Users />,
  },
  {
    icon: <InboxIcon {...icon} />,
    name: "Inbox",
    path: "inbox",
    element: <Inbox />,
  },
  {
    icon: <PhotoIcon {...icon} />,
    name: "Gallery",
    path: "gallery",
    element: <Gallery />,
  },
  {
    icon: <BellIcon {...icon} />,
    name: "Notifications",
    path: "notifications",
    element: <Notifications />,
  },
  {
    icon: <Cog6ToothIcon {...icon} />,
    name: "Settings",
    path: "settings",
    element: <Settings />,
  },
  {
    icon: <PowerIcon {...icon} />,
    name: "Log out",
    path: "../logout",
    element: <LogOut />,
  },
];

export default routes;
