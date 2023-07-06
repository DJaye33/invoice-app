import avatar from "../../assets/image-avatar.jpg";

const AppBarGroup = () => {
  return (
    <div className="flex justify-between items-center min-h-[72px] w-[125px] md:w-[144px] lg:flex-col lg:h-36 lg:w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-indigo-400"
      >
        <path
          fillRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clipRule="evenodd"
        />
      </svg>
      <div className="w-[1px] min-h-[inherit] bg-gray-700 lg:min-h-[1px] lg:min-w-[inherit] lg:w-full"></div>
      <img
        className="inline-block h-8 w-8 rounded-full lg:h-10 lg:w-10"
        src={avatar}
        alt="avatar of man with red hoodie"
      />
    </div>
  );
};

export default AppBarGroup;
