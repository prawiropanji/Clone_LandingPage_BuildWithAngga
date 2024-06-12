import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

function AccordionItem({title, text}) {
  const [collapse, setCollapse] = useState(true);
  const control = useAnimationControls();

  let controlImg
  if(collapse){
    controlImg = 'https://buildwithangga.com/build/assets/ic_plus-Dj3Y_TtU.svg'
  }else{
    controlImg = 'https://buildwithangga.com/build/assets/ic_minus-C-aaQoFl.svg'
  }

  function handleToggleAccordion() {
    setCollapse((prevIsCollapse) => {
      if (prevIsCollapse == true) {
        control.start({ rotate: -180}, {ease:"circOut", duration: 0.3});
        return false;
      } else {
        control.start({ rotate: 180}, {ease:"circOut",  duration: 0.3});
        return true;
      }
    });
  }

  console.log(collapse);
  return (
    <motion.div className="rounded-lg bg-white w-full">
      <button
        onClick={handleToggleAccordion}
        className="w-full font-bold flex justify-between px-4 py-4"
      >
        <span>{title}</span>
        <motion.img
          animate={control}
          src={controlImg}
        />
      </button>
      <AnimatePresence>
        {!collapse && (
          <motion.div
            className="text-start overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <p className="px-4 pb-4">
                {text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AccordionItem;
