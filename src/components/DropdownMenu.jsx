import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import './DropdownMenu.css';

function DropdownMenu({ open = false, children }) {
  const controls = useAnimation();
 

  useEffect(() => {
    console.log('apakah open:',open)
    if (open) {
      controls.start({y:0, opacity:[0,1], display:'flex', transition: { duration: 0.5 } });
    } else {
      controls.start({y:-40, opacity:[1,0], display:"none", transition: { duration: 0.5 } });
    }
  }, [open, controls]);

  return (
    <motion.ul
    style={{x: 'var(--translate-x)', display:"none"}}
      animate={controls}
      onClick={(event) => event.stopPropagation()}
      className={`z-10 gap-4 rounded-lg top-full static 10sz:absolute 10sz:translate-x-[-20rem] text-center bg-white overflow-hidden w-max`}

    >
      <li className="flex flex-col items-center relative text-white bg-fuchsia-950 py-12 px-9 max-w-[300px] gap-y-1">
        <p className="text-yellow-100">Trusted by 900K+ Students</p>
        <h5 className="font-bold text-2xl">Build Your Future Career</h5>
        <p className="text-sm text-gray-300">
          Explore kelas gratis dan berbayar bersama mentor expert
        </p>
        <a
          href="https://buildwithangga.com/kelas"
          className="w-fit mt-10 z-10 bg-blue-700 rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg"
        >
          All Courses
        </a>
        <img
          className="absolute bottom-0 left-0"
          src="https://buildwithangga.com/themes/front/images/silhouette-project-bwa.png"
          alt="icon BuildWithAngga"
        />
      </li>
      <li className="bg-white py-12 px-9 flex gap-x-10 rounded-r-xl">
          {children}
      </li>
    </motion.ul>
  );
}

export default DropdownMenu;
