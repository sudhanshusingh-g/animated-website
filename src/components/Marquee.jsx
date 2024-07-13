import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      className=" w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="border-t-2 border-b-2 border-zinc-400 flex gap-8 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[12vw] leading-none mb-4 2 font-bold text-white uppercase"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[12vw] leading-none mb-4 2 font-bold text-white uppercase"
        >
          We are Ochi
        </motion.h1>
        
        
      </div>
    </div>
  );
};

export default Marquee;
