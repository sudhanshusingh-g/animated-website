import {  MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Landingpage = () => {
  const mainContent = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];
  const bottomContent = [
    "For public and private companies",
    "From the first pitch to IPO",
    "Start the project",
  ];
  return (
    <div className="w-full h-screen border-t-4">
      <div className="mt-52 px-20">
        {mainContent.map((content, index) => (
          <div key={index} className="masker">
            <div className="flex items-center w-fit">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.37, 0, 0.63, 1],duration:1 }}
                  className="w-[8vw] h-[5.5vw] rounded bg-rose-400 relative top-1"
                ></motion.div>
              )}
              <h1 className="text-[7.5vw] uppercase font-semibold leading-[7vw] tracking-tighter">
                {content}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-t-[1px] border-zinc-200 mt-20"></hr>
      <div className="flex items-center justify-between px-20 py-2">
        {bottomContent.map((content, index) => (
          <p
            className={`${
              index === 2 &&
              "hover:bg-black hover:text-white border rounded-full p-2 cursor-pointer transition duration-300"
            } text-sm flex items-center gap-2`}
          >
            {content}
            {index === 2 && <MoveUpRight size={16} />}
          </p>
        ))}
      </div>
    </div>
  );
};
