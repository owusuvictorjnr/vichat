'use client';

const LogoutButton = () => {
  return (
    <button
      className="capitalize bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => console.log('Hello')}
    >
      sign out
    </button>
  );
};

export default LogoutButton;
