import React,{ useState, useRef } from "react";
import {
    Typography,
    Avatar,
    Card,
    CardHeader,
    CardBody,
    Button,
    Input,
    Select,
    Option,
    Switch,
} from "@material-tailwind/react";
import {
    CloudArrowUpIcon,
    ArrowLongRightIcon,
    TableCellsIcon,
} from "@heroicons/react/24/outline"
export function Add() {
    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef(null);
  
    const handleImageChange = (e) => {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    };
    return (
      <Card color="transparent" shadow={false}>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                <div className="col-span-6 sm:col-span-3 flex items-center -space-x-4 pb-6">
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
            <Input label="Name" />
            <Input label="Email" />
            <Select label="Select Role">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
            </Select>
            <Switch id="auto-update" label="Active" />
           </div>
        </div>
      </Card>
    );
}
export function Update({ user }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef(null);
  
    const handleImageChange = (e) => {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    };
    return (
      <Card color="transparent" shadow={false}>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                <div className="col-span-6 sm:col-span-3 flex items-center -space-x-4 pb-6">
                <Avatar
                    variant="circular"
                    alt="Old Avatar"
                    className="border-2 border-white hover:z-10 focus:z-10"
                    src={user.image}
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
            <Input label="Name" value={user.name}/>
            <Input label="Email" value={user.email} />
            <Select label="Select Role">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
            </Select>
            <Switch label="Active" />
           </div>
        </div>
      </Card>
    );
}
export function Delete({user}) {
    return (
        <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={user.image}
          alt="candice wu"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {user.name}
            </Typography>
          </div>
                    <Typography color="blue-gray">{user.role}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
                    &quot;{user.title}&quot;
        </Typography>
      </CardBody>
    </Card>
    );
}
export function Upload() {
    return (
        <div className="flex items-center gap-4">
          <Button className="flex items-center gap-3">
            <TableCellsIcon strokeWidth={2} className="h-5 w-5" /> Excel File
          </Button>
          <Button variant="text" className="flex items-center gap-2">
            Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </div>
      );
}