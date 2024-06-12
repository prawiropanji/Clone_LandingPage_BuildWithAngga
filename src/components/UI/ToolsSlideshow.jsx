import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";



function ToolsSlideshow({children, startDirection}) {
    const [scope, animate] = useAnimate()
    const control = useRef()

    useEffect(() => {
        control.current = animate(".tools-slideshow",{x:[ startDirection == "right" ? '0%':'-100%' , startDirection == "right" ? '-100%':'10%']}, {repeat:Infinity, repeatDelay:0, duration: 25 , ease:"linear"})
    },[animate, startDirection])

    function handlePauseAnimation(){
        control.current.pause()
    }

    function handleResumeAnimation(){
        control.current.play()
    }

  return (
    <div ref={scope} className="flex gap-8">
        <motion.div  onHoverStart={handlePauseAnimation}  onHoverEnd={handleResumeAnimation} className="tools-slideshow flex gap-8">
            {children}
        </motion.div>
        <motion.div onHoverStart={handlePauseAnimation}  onHoverEnd={handleResumeAnimation} className="tools-slideshow flex gap-8">
            {children}
        </motion.div>

    </div>
    
    
  );
}

export default ToolsSlideshow;
