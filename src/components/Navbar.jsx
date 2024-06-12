import {
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Menu from "./Menu";
import { useContext, useRef, useState } from "react";
import { Context as BannerContext } from "../stores/Banner-context";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  const { scrollY } = useScroll();
  const control = useAnimationControls();
  const controlMenu = useAnimationControls();

  const [isHeadHalfAnimation, setIsHeadHalfAnimation] = useState(false);
  const [expandMenu, setExpandMenu] = useState(false)

  const y = useMotionValue(0);

  const timmer = useRef(null);

  const { isBannerInView } = useContext(BannerContext);


  useMotionValueEvent(y, "change", () => {
    if (!isHeadHalfAnimation) {
      setIsHeadHalfAnimation(true);
    }
  });

  useMotionValueEvent(scrollY, "change", () => {
    if (!isBannerInView) {
      if (scrollY.current > scrollY.prev) {
        // console.log(isHeadHalfAnimation);
        clearTimeout(timmer.current);

        if (!isHeadHalfAnimation) {
          control.start({ y: [0, -150] }).then(() => {});
        }

        timmer.current = setTimeout(() => {
          control.start({ y: [-150, 0] }).then(() => {
            setIsHeadHalfAnimation(false);
          });
        }, 250);
      }
    } else {
      clearTimeout(timmer.current);
      console.log("patah in view");
      control.start({ y: 0 }).then(() => {
        setIsHeadHalfAnimation(false);
      });
    }
  });

  function handleToggleMenu(){
    // if(expandMenu){
    //   controlMenu.start({height:0}).then(()=>{
    //     setExpandMenu(false)
    //   })
    // }else{
    //   setExpandMenu(true)
    //     controlMenu.start({height:'auto'}).then(()=>{
    //     })
    //   }

    setExpandMenu(!expandMenu)
    
  }

  return (
    <motion.nav
      style={{ y }}
      animate={control}
      transition={{ ease: "easeIn" }}
      className={`${
        !isBannerInView ? "fixed w-full" : "relative"
      } z-50 top-0  py-[20px] px-10 13sz:px-0 bg-white/50 backdrop-blur`}
    >
      <div className="max-w-[1280px] flex justify-between flex-wrap items-center mx-auto">
        <div>
          <img className="h-[50px]"
            src="https://buildwithangga.com/themes/front/images/logo_bwa_text.svg"
            height="50"
            alt="logo buildwithangga"
          ></img>
        </div>

        <BurgerMenu onClick={handleToggleMenu} expandMenu={expandMenu}/>
        
        <div className="10sz:flex flex-grow basis-full 10sz:basis-0 overflow-hidden">
          <motion.div className={`10sz:flex  ${expandMenu ? 'mt-0' : '-mt-100p'} 10sz:mt-0 transition-all justify-center flex-grow`}>
            <Menu />
            <div className="gap-2 flex flex-col 10sz:flex-row items-center">
              <button className="bg-slate-300 rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
                Sign In
              </button>
              <button className="bg-slate-300 rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
                Sign In
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;
