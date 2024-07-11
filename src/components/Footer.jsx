import logo from "../assets/logo.svg";

export const Footer = () => {
  const social = ["Instagram", "Behance", "Facebook", "Linkedin"];
  const menuItems = [
    "Services",
    "Our work",
    "About us",
    "Insights",
    "Contact us",
  ];
  return (
    <footer>
      <div className="grid grid-cols-2 w-full h-screen p-20">
        <div className="">
          <h1 className="text-[4vw] font-bold tracking-tighter">
            EYE- OPENING
          </h1>
        </div>
        <div className="">
          <h1 className="text-[4vw] font-bold tracking-tighter">
            PRESENTATIONS
          </h1>
          <div className="my-8">
            <p className="text-left">S:</p>
            {social.map((s, index) => (
              <li
                className="w-fit mt-2 underline underline-offset-1 hover:no-underline transition duration-300 cursor-pointer"
                key={index}
              >
                {s}
              </li>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <div>
              <p className="text-left">L:</p>
              <li className="underline">202-1965 W 4th Ave</li>
              <li className="underline">Vancouver, Canada</li>
              <li className="underline">30 Chukarina St</li>
              <li className="underline">Lviv, Ukraine</li>
            </div>
            <div className="flex flex-col items-end">
              <div>
                <p className="text-left">M:</p>
                {menuItems.map((menu, index) => (
                  <li
                    className="w-fit mt-2 underline underline-offset-1 hover:no-underline transition duration-300 cursor-pointer"
                    key={index}
                  >
                    {menu}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p>E:</p>
            <p className="underline">hello@ochi.design</p>
          </div>
        </div>
      </div>
      <div>
        <div className="cursor-pointer p-20">
          <img src={logo} alt="Company logo" />
        </div>
      </div>
    </footer>
  );
};
