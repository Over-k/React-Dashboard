import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { usersData } from "./data";
import TableBuild, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../../Table";

import { Add, Update, Delete, Upload } from "./User";

export const Users = () => {
  const [UserDialog, setUserDialog] = useState({ open: false, index: 0 });
  const isOpenDialog = UserDialog.open || false;
  const indexDialog = UserDialog.index || 0;
  const handleDialogOpen = (index, user) => {
    setUserDialog({ open: true, index: index, user: user });
  };
  const Dialogs = [
    { header: "Add New User", body: <Add /> },
    { header: "Update User", body: <Update user={UserDialog.user} /> },
    { header: "Delete User", body: <Delete user={UserDialog.user} /> },
    { header: "Upload File", body: <Upload /> },
  ];
  const { header, body } = Dialogs[indexDialog];

  const MenuButtons = [
    {
      title: "New",
      icon: PlusIcon,
      variant: "gradient",
      click: () => {
        handleDialogOpen(0);
      },
    },
    {
      title: "Upload File",
      icon: CloudArrowUpIcon,
      variant: "gradient",
      click: () => {
        handleDialogOpen(3);
      },
    },
  ];
  function ActionCell({ value, row }) {
    const actionMenuItems = [
      {
        label: "Edit",
        icon: PencilSquareIcon,
        click: () => {
          handleDialogOpen(1, row.original);
        },
      },
      {
        label: "Delete",
        icon: TrashIcon,
        click: () => {
          handleDialogOpen(2, row.original);
        },
      },
    ];
    return (
      <div className="flex gap-3">
        <Menu placement="left">
          <MenuHandler>
            <IconButton variant="text">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            {actionMenuItems.map(({ label, icon, click }, key) => {
              const isLastItem = key === actionMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={click}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}>
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}>
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    );
  }
  const title = "Users Data.";
  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: AvatarCell,
      imgAccessor: "image",
      emailAccessor: "email",
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: StatusPill,
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Role",
      accessor: "role",
      Filter: SelectColumnFilter, // new
      filter: "includes",
    },
    {
      Header: "Action",
      accessor: "id",
      Cell: ActionCell,
    },
  ];

  return (
    <React.Fragment>
      <div className="my-20 flex flex-col gap-12">
        <TableBuild
          title={title}
          Menu={MenuButtons}
          columns={columns}
          data={usersData}
        />
      </div>
      <Dialog
        open={isOpenDialog}
        handler={() => setUserDialog({ open: false })}
        size="sm">
        <DialogHeader>{header}</DialogHeader>
        <DialogBody divider>{body}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setUserDialog({ open: false })}
            className="mr-1">
            Cancel
          </Button>
          <Button
            variant="gradient"
            onClick={() => setUserDialog({ open: false })}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
};

export default Users;
