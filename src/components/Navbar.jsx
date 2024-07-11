import logo from "../assets/logo.svg";

export const Navbar = () => {
  const menuItems = [
    "Services",
    "Our work",
    "About us",
    "Insights",
    "Contact us",
  ];
  return (
    <nav className="px-20 py-8 flex justify-between items-center w-full fixed z-[999] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="cursor-pointer">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="flex items-center gap-8">
        {menuItems.map((menu, index) => (
          <span
            key={index}
            className={`text-md capitalize cursor-pointer ${
              index === 4 &&
              "ml-24 border p-2 rounded-full hover:bg-slate-950 transition duration-300 hover:text-white"
            }`}
          >
            {menu}
          </span>
        ))}
      </div>
    </nav>
  );
};
