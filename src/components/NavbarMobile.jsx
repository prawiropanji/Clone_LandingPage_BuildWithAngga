import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useContext, useState } from "react";
import MenuMobile from "./MenuMobile";
import { AnimatePresence } from "framer-motion";
import { SearchModalContext } from "./stores/SearchModalContext";

function NavbarMobile() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const {setSearchModalOpen} = useContext(SearchModalContext)
  function handleToggleMenu(){
    console.log('open menu!')
    setMenuOpen(!isMenuOpen)
  }
  return (
    <nav className=" py-8 px-4 h-24 flex items-start justify-start relative">
      <div className="pointer-events-none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <a href="">
          <img
            className="w-16"
            src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"
          />
        </a>
      </div>

      <div className="flex justify-between items-center w-full h-full">
        <div className="flex gap-4">
            <button
            onClick={handleToggleMenu}
            className={`block 10sz:hidden bg-slate-300 rounded-xl px-2 py-2`}
            >
            <RxHamburgerMenu className="text-2xl" />
            </button>

            <button className={`10sz:hidden bg-slate-300 rounded-full px-2 py-2`}>
            <IoIosSearch onClick={()=>{setSearchModalOpen(true)}} className="text-2xl" />
            </button>
        </div>

        <button className="bg-slate-300 font-bold rounded-3xl py-2 px-5 transition-shadow duration-300 hover:shadow-lg">
          Masuk
        </button>
      </div>
        <AnimatePresence>
          {isMenuOpen && <MenuMobile onCloseMenu={() => setMenuOpen(false)}/>}
        </AnimatePresence>
        

    </nav>
  );
}

export default NavbarMobile;
