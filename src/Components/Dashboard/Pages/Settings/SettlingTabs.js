import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Platform from './Platform';
import Configurations  from './Configurations';
const SettlingTabs = () => {
    const data = [
        {
            label: "Dashboard",
            value: "dashboard",
            icon: Square3Stack3DIcon,
            element: <Platform/>,
        },
        {
            label: "Profile",
            value: "profile",
            icon: UserCircleIcon,
            element: <> profile</>,
        },
        {
            label: "Settings",
            value: "settings",
            icon: Cog6ToothIcon,
            element: <Configurations/>,
        },
    ];
   
    return (
      <Tabs value={data[0].value}>
        <TabsHeader>
          {data.map(({ label, value ,icon}) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data.map(({ value, element }) => (
            <TabPanel key={value} value={value}>
              {element}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
}
export default SettlingTabs;