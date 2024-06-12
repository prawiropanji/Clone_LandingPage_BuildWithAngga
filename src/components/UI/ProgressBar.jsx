import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useState } from "react";

function ProgressBar({ toPercentage, startAnimation }) {
  const [percentage, setPercentage] = useState(0);

  const scaleXInPercentage = useMotionValue(0);


  const targetProgress = useTransform(scaleXInPercentage, [0, 100], [0, 1]);

  if(startAnimation){
      animate(scaleXInPercentage, toPercentage, { duration: 1});
  }

  useMotionValueEvent(scaleXInPercentage, "change", (latest) => {
    if (
      Math.round(scaleXInPercentage.prev) !==
      Math.round(scaleXInPercentage.current)
    ) {
      setPercentage(Math.round(latest));
    }
  });

  return (
    <div className="status flex gap-2 items-center">
      <div className="progress-bar-contianer w-28 h-2 rounded-xl bg-blue-200 relative overflow-hidden">
        <motion.div
          style={{ scaleX: targetProgress }}
          className="progress-bar w-full h-full absolute left-0 bg-blue-600 rounded-xl origin-left"
        ></motion.div>
      </div>
      <span className="text-gray-400 text-xs">{percentage}%</span>
    </div>
  );
}

export default ProgressBar;
