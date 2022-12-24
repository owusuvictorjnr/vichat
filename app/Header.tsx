import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';

const Header = () => {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm ">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://links.papareact.com/jne"
            alt="profile pic"
            width={50}
            height={10}
          />

          <p className="text-blue-400 ">Logged in as:</p>
          <p className="font-bold text-lg">Vitech Solutions</p>
        </div>

        <LogoutButton />
      </header>
    );
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm ">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            alt="logo"
            width={50}
            height={10}
          />

          <p className="text-blue-400">Welcome to Vichat Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="capitalize bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
