import { motion } from "framer-motion";
import SearchMobile from "./UI/SearchMobile";
import { IoClose } from "react-icons/io5";
import MenuCategoryMobile from "./UI/MenuCategoryMobile";

function MenuMobile({onCloseMenu}) {
  return (
    <div className="fixed bg-black/70 top-0 right-0 left-0 bottom-0 z-40">
      <motion.div initial={{y: '100%'}} animate={{y: 0, transition:{ease:"linear", duration:0.3}}} exit={{y:'100%', transition:{duration:0.3}}} className="bg-white p-6 py-8 rounded-t-[3rem] absolute bottom-0 left-0 right-0">
        <div className="flex justify-end mr-2 mb-6">
        <IoClose onClick={onCloseMenu} className="text-3xl"/>
        </div>
        <SearchMobile/>
        <MenuCategoryMobile/>
        <MenuCategoryMobile/>
        <MenuCategoryMobile/>
      </motion.div>
    </div>
  );
}

export default MenuMobile;
