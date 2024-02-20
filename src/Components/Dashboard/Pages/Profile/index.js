import React,{ useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Checkbox ,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar, Select,
  Option,
} from "@material-tailwind/react";
import {CloudArrowUpIcon} from "@heroicons/react/24/outline"
 
function AccountSettings() {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setSelectedImage(imageUrl);
  };
  return (
  <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
            <div className="col-span-6 sm:col-span-3 flex items-center -space-x-4 pb-6">
                <Avatar
                    variant="circular"
                    alt="Old Avatar"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src="https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg"
                  />
                {selectedImage && (
                <Avatar
                    variant="circular"
                    alt="New Avatar"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={selectedImage}
                  />
                )}
                <Button
                  onClick={() => inputRef.current.click()}
          className="flex items-center gap-3"
          variant="text">
          {React.createElement(CloudArrowUpIcon, {
            className: "h-5 w-5",
            strokeWidth:2
                })}
          Upload avatar
        </Button>
                  <input
                    ref={inputRef}
                    type="file"
                    onChange={(e) => handleImageChange(e)}
                    className="hidden"
                  />
                  </div> 
              <div className="grid grid-cols-6 gap-6">              
              <div className="col-span-6 sm:col-span-3">
                <Input label="First name"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Input label="Last name"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <Input label="Email address"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Select label="Country / Region">
                  <Option>United States</Option>
                  <Option>Canada</Option>
                  <Option>Mexico</Option>
                </Select>
              </div>
              <div className="col-span-6">
                <Input label="Street address"/>
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <Input label="City"/>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Input label="State / Province"/>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <Input label="ZIP / Postal"/>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button>
              Save
            </Button>
          </div>
        </div>
    </div>
  </div>
</div>)
}

function Notification() {
  return (
  <div className="mt-10 sm:mt-0">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <Typography className="text-lg font-medium leading-6 text-gray-900">Notifications</Typography>
        <Typography className="mt-1 text-sm text-gray-600">
          Decide which communications you'd like to receive and how.
        </Typography>
      </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <Typography className="text-base font-medium text-gray-900">By Email</Typography>
              <div className="mt-4 space-y-4">

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Typography className="font-medium text-gray-700">Offers</Typography>
                    <Typography className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</Typography>
                  </div>
                </div>

              </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button>
              Save
            </Button>
          </div>
        </div>
    </div>
  </div>
</div>
  )
}
export function Profile() {
const DisplayTabs = [{
    title: "My Account",
    element: <AccountSettings/>,
 },{
  title: "Notifications",
    element: <Notification/>,
    }]
    const [type, setType] = React.useState(DisplayTabs[0].title);
  return (
    <div className="mb-12 mt-12 p-4">
    <Card>
      <CardHeader
        color="blue"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
      >
        <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
          <Avatar variant="circular" src="https://robohash.org/aliquamcumqueiure.png" className="h-10 w-10" />
        </div>
        <Typography variant="h4" color="white">
          Title test 'should first',
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0">
          {DisplayTabs.map(({title},index) => (
            <Tab key={index} value={title} onClick={() => setType({title})}>
              {title}
            </Tab>
          ))}
          </TabsHeader>
            <TabsBody
              className="p-6"
            animate={{
              initial: {
                x: -400,
              },
              mount: {
                y: 0,
              },
              unmount: {
                y: 200,
              },
            }}
          >
          {DisplayTabs.map(({ title, element },index) => (
            <TabPanel key={index} value={title} onClick={() => setType({title})} className="p-0">
              {element}
            </TabPanel>
          ))}
          </TabsBody>
        </Tabs>
      </CardBody>
      </Card>
      </div>
  );
}

export default Profile;
