import { forwardRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { MdOutlineArrowRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const ItemMenu = forwardRef(
  (
    { children, isOpen, onClickItemMenu, id, withDropdown, dropdownChildren },
    ref
  ) => {
    const [isOpenAfterAnimation, setIsOpenAfterAnimation] = useState(false);

    function handleAnimationComplete() {
      if (isOpen) {
        setIsOpenAfterAnimation(true);
      } else {
        setIsOpenAfterAnimation(false);
      }
    }

    return (
      <li className="cursor-pointer" ref={ref} onClick={() => onClickItemMenu(id)}>
        <a  className="flex items-center gap-1 ">
          <p className={`hover:text-blue-100 ${isOpen ? "text-blue-600" : ""}`}>
            {children}
          </p>
          <AnimatePresence>
            {withDropdown && (
              <motion.div
                onAnimationComplete={handleAnimationComplete}
                animate={{ rotate: isOpen ? [0, 100, 90] : [90, -10, 0] }}
                // exit={{rotate: }}
                transition={{ delay: 0, duration: 0.2, ease: "backInOut" }}
              >
                <MdOutlineArrowRight className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </a>
        {withDropdown && <DropdownMenu open={isOpenAfterAnimation}> 
          {dropdownChildren}
        </DropdownMenu>}
      </li>
    );
  }
);

export default ItemMenu;
