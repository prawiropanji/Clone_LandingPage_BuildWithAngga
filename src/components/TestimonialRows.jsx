import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

function TestimonialRows({ fromTop = true , children }) {


  const [height, setHeight] = useState(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const heightTestiRow = scope.current.getClientRects()[0].height;
    setHeight(heightTestiRow);

    animate(
      scope.current,
      { 
        y: [ fromTop ? 150 : (-height + 450) , fromTop ? -height + 450 : (150)] 
      },
      {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 5,
        ease: "linear",
      }
    );


  }, [scope, height, animate, fromTop]);


  console.log("height:", height);

  return (
    <motion.div
      ref={scope}
      className="space-y-6 h-full"
    >
      {children}
    </motion.div>
  );
}

export default TestimonialRows;
