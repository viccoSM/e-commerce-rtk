import React, {Fragment, memo} from 'react';
import {Link} from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import {User} from "react-feather";
import {useGetDetailUserQuery} from "../services/user";

const Header = () => {
  const {data:user} = useGetDetailUserQuery(null)
  return (
    <header className='bg-custom-red text-white'>
      <div className="container py-3 px-4 mx-auto flex items-center justify-between">
        <Link to='/' className='text-2xl font-semibold'>
          Logo
        </Link>
        <div className="flex items-center space-x-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <User/>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-2 py-1 text-gray-500">
                  <Menu.Item as='div' className='py-1'>
                    <p>{user?.name.firstname} {user?.name.lastname}</p>
                  </Menu.Item>
                  <Menu.Item as='div' className='py-1'>
                    <p>@{user?.username}</p>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);