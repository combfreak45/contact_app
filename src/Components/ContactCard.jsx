import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
const ContactCard = ({contact}) => {
  return (
    <div>
      <div
        key={contact.id}
        className="bg-yellow p-2 flex rounded-lg items-center justify-between "
      >
        <div className="flex gap-3 items-center">
          <HiOutlineUserCircle className=" text-4xl text-orange" />
          <div className="">
            <h1 className="font-medium">{contact.name}</h1>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange" />
        </div>
      </div>
    </div>
  );
}

export default ContactCard
