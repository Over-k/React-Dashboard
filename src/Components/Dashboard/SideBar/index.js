import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Input,
  Card,
} from "@material-tailwind/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import routes from "../Router";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(
    !(window.innerWidth <= 940)
  );

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth <= 940 ? setIsDrawerOpen(false) : setIsDrawerOpen(true)
    );
  }, []);

  return (
    <>
      <Card
        color="white"
        shadow={false}
        className={`h-[calc(100vh-2rem)] p-4 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-80"
        } fixed inset-1 z-50 my-4 ml-2 h-[calc(100vh-32px)] w-60 rounded-xl transition-transform duration-300 max-w[200px]`}>
        <div className="mb-2 flex items-center gap-4 p-4">
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="brand"
            className="h-8 w-8"
          />
          <Typography variant="h5" color="blue-gray">
            Your name
          </Typography>
          <IconButton
            variant="text"
            color="black"
            size="sm"
            ripple={false}
            className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            onClick={() => setIsDrawerOpen(false)}>
            <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-black" />
          </IconButton>
        </div>
        <div className="p-2">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="Search"
          />
        </div>
        <List className="min-w-[100px]">
          <hr className="border-blue-gray-50" />
          {routes.map(({ icon, name, path }) => (
            <NavLink to={`/dashboard/${path}`} key={name}>
              {({ isActive }) => (
                <ListItem selected={isActive}>
                  <ListItemPrefix>{icon}</ListItemPrefix>
                  <Typography className="xl:">{name}</Typography>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
      </Card>
      {!isDrawerOpen ? (
        <IconButton
          size="lg"
          color={true === "dark" ? "blue-gray" : "white"}
          className={` fixed bottom-8 left-8 z-40 rounded-full shadow-blue-gray-900/10`}
          ripple={false}
          onClick={() => setIsDrawerOpen(true)}>
          <Bars3BottomLeftIcon className="h-5 w-5" />
        </IconButton>
      ) : null}
    </>
  );
}
