import {useState} from 'react'
import { MoveUpRight } from 'lucide-react';
import { projectsList } from '../utils/data';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';



export const Projects = () => {
  
     const [showIcon, setShowIcon] = useState(false);
     const [hoveredProjectTitle, setHoveredProjectTitle] = useState("");
     const onMouseEnter = () => {
       setShowIcon(true);
     };
     const onMouseleave = () => {
       setShowIcon(false);
     };
     
     const onCardHover = (title) => {
       setHoveredProjectTitle(title);
     };
     const onCardLeaveHover = () => {
       setHoveredProjectTitle("");
     };
 const letterAnimation = {
   initial: { y: "100%", opacity: 0 },
   animate: { y: "0%", opacity: 1 },
   transition: { duration: 0.5, ease: "easeOut" },
 };

 const containerAnimation = {
   animate: {
     transition: {
       staggerChildren: 0.05,
       delayChildren: 0.2,
     },
   },
 };

  return (
    <div className="w-full">
      <h1 className="px-20 py-4 text-[3vw] ">Featured Projects</h1>
      <div className="border-t-2"></div>
      <div className=" relative grid grid-cols-2 gap-4 p-20">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            onCardHover={() => onCardHover(project.title)}
            onCardLeaveHover={onCardLeaveHover}
            project={project}
          />
        ))}
        {hoveredProjectTitle && (
          <motion.div
            variants={containerAnimation}
            initial="initial"
            animate="animate"
            className="absolute z-30 text-green-400 font-semibold flex text-8xl items-center justify-center w-full h-full pointer-events-none"
          >
            {hoveredProjectTitle.split("").map((letter, index) => (
              <motion.span key={index} variants={letterAnimation}>
                {letter.toUpperCase()}
              </motion.span>
            ))}
          </motion.div>
        )}
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
