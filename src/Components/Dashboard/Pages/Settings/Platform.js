import React from 'react'
import {
    Card,
    CardBody,
    Typography,
    Switch,
  } from "@material-tailwind/react";
const Platform = () => {
    const platformSettingsData = [
        {
          title: "account",
          options: [
            {
              checked: true,
              label: "Email me when someone follows me",
            },
            {
              checked: false,
              label: "Email me when someone answers on my post",
            },
            {
              checked: true,
              label: "Email me when someone mentions me",
            },
          ],
        },
        {
          title: "application",
          options: [
            {
              checked: false,
              label: "New launches and projects",
            },
            {
              checked: true,
              label: "Monthly product updates",
            },
            {
              checked: false,
              label: "Subscribe to newsletter",
            },
          ],
        },
      ];
  return (
          <Card className="mt-12 mb-8 flex flex-col gap-12">
              <CardBody className="p-4">
                <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Platform Settings
                  </Typography>
                  <div className="flex flex-col gap-12">
                    {platformSettingsData.map(({ title, options }) => (
                      <div key={title}>
                        <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                          {title}
                        </Typography>
                        <div className="flex flex-col gap-6">
                          {options.map(({ checked, label }) => (
                            <Switch
                              key={label}
                              id={label}
                              label={label}
                              defaultChecked={checked}
                              labelProps={{
                                className: "text-sm font-normal text-blue-gray-500",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </CardBody>
          </Card>
      )
}
export default Platform