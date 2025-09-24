import { Code } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  const line1 = "Light Up".split("");
  const line2 = "Your Learning".split("");

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-gray-800 px-4 overflow-hidden">

      {/* Foreground content */}
      <h2 className="text-4xl md:text-6xl lg:text-[8rem] font-hero leading-tight font-bold tracking-tight text-center relative z-10">
        {line1.map((char, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.05, ease: "easeOut", delay: i * 0.05 }}
            key={`l1-${i}`}
          >
            {char}
          </motion.span>
        ))}
        <br />
        {line2.map((char, i) => (
          <motion.span
            key={`l2-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              ease: "easeOut",
              delay: line1.length * 0.05 + i * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      <motion.p initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, ease: "easeInOut", delay: (line1.length + line2.length)*0.05}} className="text-lg md:text-2xl mt-6 max-w-2xl text-center text-gray-600">
        Step into a world of knowledge designed for curious minds.
      </motion.p>

      {/* Background icons */}
      <motion.div
        className="w-[15%] h-[80%] overflow-hidden absolute z-0 top-5 left-[10%]"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Code className="text-blue-500 w-[200%] h-[100%] opacity-80 m-0 p-0 relative left-[-5%]" />
      </motion.div>
      <motion.div
        className="w-[15%] h-[80%] overflow-hidden absolute z-0 top-5 right-[10%]"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Code className="text-blue-500 w-[200%] h-[100%] opacity-80 m-0 p-0 relative left-[-95%]" />
      </motion.div>
    </section>
  );
}

export default Home;
