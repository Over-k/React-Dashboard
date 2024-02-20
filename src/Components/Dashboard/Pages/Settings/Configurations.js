import React from "react";
import { Button, Switch, Typography } from "@material-tailwind/react";

export function Configurations() {
  return (
    <div className="py-4 px-6">
      <div className="mb-12">
        <Typography variant="h6" color="blue-gray">
          Sidenav Colors
        </Typography>
        <div className="mt-3 flex items-center gap-2"></div>
      </div>
      <div className="mb-12">
        <Typography variant="h6" color="blue-gray">
          Sidenav Types
        </Typography>
        <Typography variant="small" color="gray">
          Choose between 3 different sidenav types.
        </Typography>
        <div className="mt-3 flex items-center gap-2">
          <Button variant="outlined" onClick="dark">
            Dark
          </Button>
          <Button variant="outlined" onClick="transparent">
            Transparent
          </Button>
          <Button variant="outlined" onClick="white">
            White
          </Button>
        </div>
      </div>
      <div className="mb-12">
        <hr />
        <div className="flex items-center justify-between py-5">
          <Typography variant="h6" color="blue-gray">
            Navbar Fixed
          </Typography>
          <Switch
            id="navbar-fixed"
            value="true"
            onChange="dispatch, !fixedNavbar"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between py-5">
          <Typography variant="h6" color="blue-gray">
            Dark Mode
          </Typography>
          <Switch
            id="dark-mode"
            onChange="dispatch, !darkMode"
            defaultChecked="darkMode"
          />
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Configurations;
