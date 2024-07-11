import {useState} from 'react'
import { MoveUpRight } from 'lucide-react';
import project1 from "../assets/p1.png";
import project2 from "../assets/p2.png";
import project3 from "../assets/p3.png";
import project4 from "../assets/p4.png";

export const Projects = () => {
     const [showIcon, setShowIcon] = useState(false);
     const onMouseEnter = () => {
       setShowIcon(true);
     };
     const onMouseleave = () => {
       setShowIcon(false);
     };
  return (
    <div className="w-full">
      <h1 className="px-20 py-4 text-[3vw] ">Featured Projects</h1>
      <div className="border-t-2"></div>
      <div className="grid grid-cols-2 gap-4 p-20">
        <div
          className={`border h-[60vh] rounded-lg overflow-hidden hover:scale-[96%] cursor-pointer transition duration-300`}
        >
          <img src={project1} alt="Project" />
        </div>
        <div
          className={`border h-[60vh] rounded-lg overflow-hidden hover:scale-[96%] cursor-pointer transition duration-300`}
        >
          <img src={project2} alt="Project" />
        </div>
        <div
          className={`border h-[60vh] rounded-lg overflow-hidden hover:scale-[96%] cursor-pointer transition duration-300`}
        >
          <img src={project3} alt="Project" />
        </div>
        <div
          className={`border h-[60vh] rounded-lg overflow-hidden hover:scale-[96%] cursor-pointer transition duration-300`}
        >
          <img src={project4} alt="Project" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseleave}
          className="bg-zinc-900 text-white px-8 py-4 rounded-full flex items-center gap-8 transition duration-300 mt-2 uppercase"
        >
          View All Case Studies
          <div
            className={`bg-zinc-100 w-2 h-2 rounded-full flex items-center justify-center ${
              showIcon ? "w-7 h-7" : "w-2 h-2 "
            }`}
          >
            <MoveUpRight
              className={`text-black transform transition-transform duration-300 ${
                showIcon ? "scale-100" : "scale-0"
              }`}
              size={24}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
