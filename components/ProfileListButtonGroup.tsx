"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Briefcase, Settings, UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import { Form, FormControl } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const lists = [
  { label: "profile", icon: <UserPen size={16} /> },
  { label: "job", icon: <Briefcase size={16} /> },
  { label: "settings", icon: <Settings size={16} /> },
];

const ProfileListButtonGroup = () => {
  useEffect(() => {}, []);

  const [dialogContent, setDialogContent] = useState("");
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center uppercase">Profile</DialogTitle>

          <Form>
            <form>
              <FormControl>
                <Label>Name</Label>
                <Input placeholder="" name="" />
              </FormControl>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>

      <ul className="flex flex-col ">
        {lists.map((list) => (
          <DialogTrigger key={list.label}>
            <li
              onClick={() => setDialogContent(list.label)}
              className=" items-center flex gap-4 cursor-pointer hover:bg-purple-100/20 transition-all duration-150 px-2 rounded-md text-lg capitalize"
            >
              {list.icon} {list.label}
            </li>
          </DialogTrigger>
        ))}
      </ul>
    </Dialog>
  );
};

export default ProfileListButtonGroup;
