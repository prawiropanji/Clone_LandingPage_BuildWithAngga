import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

function ProgressIlustration({startProgressbarAnimation}) {



  return (
    <motion.div
      style={{ opacity: 0 }}
      className="leftIlustration z-10 absolute top-[-10%] left-0 10sz:left-[-10%] image-left-top bg-white rounded-xl p-8 w-fit"
    >
      <p className="font-bold mb-4">My Progress</p>
      <ul>
        <li className="flex items-center">
          <div className="min-w-8">
            <img
              className="h-6"
              src="https://buildwithangga.com/themes/front/images/logo/flutter-logo 2.svg"
            />
          </div>
          <div className="">
            <p className="font-bold mb-1">App Developer</p>
            <ProgressBar startAnimation={startProgressbarAnimation} toPercentage={50} />
          </div>
        </li>

        <li className="flex items-center">
          <div className="min-w-8">
            <img
              className="h-6"
              src="https://buildwithangga.com/themes/front/images/logo/flutter-logo 2.svg"
            />
          </div>
          <div className="">
            <p className="font-bold mb-1">UI/UX Designer </p>
            <ProgressBar startAnimation={startProgressbarAnimation} toPercentage={90} />
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default ProgressIlustration;
