import { motion, useAnimationControls } from "framer-motion";
import { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

function VideoCard({price, oldPrice, thumbnailImg, title, reviewCount, id, onSelectVideo, className}) {
    const control = useAnimationControls();

    const formatedPrice = useMemo(() => convertToIDRCurrency(price), [price])
    const formatedOldPrice = useMemo(() => convertToIDRCurrency(oldPrice), [oldPrice])
    

    function convertToIDRCurrency(number){
      if(!number){
        return 0
      }

      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });

      return formatter.format(number)
    }

    function handleFadeUpPlayBtn(){
        control.start({opacity: 1, x:"-50%", y: ["150%","-50%"]})
    }

    function handleFadeDownPlayBtn(){
        control.start({opacity: [0], y: "150%"})
        console.log('keluar')
    }

    function openVideoModal(){
      onSelectVideo(id)
    }

  return (
    <div className={`video-card bg-white rounded-xl overflow-hidden ${className}`}>
    <motion.div onClick={openVideoModal} onHoverStart={handleFadeUpPlayBtn} onHoverEnd={handleFadeDownPlayBtn} className="h-48 w-full relative overflow-hidden">
      <img
        className="object-cover w-full h-full"
        src={thumbnailImg}
      />
      <motion.img animate={control} style={{position: "absolute", top:"50%", left:"50%", x:"-50%", y:"-50%" ,opacity:1}}src="https://buildwithangga.com/themes/front/images/play_btn_blue.svg"/>
    </motion.div>
    <div className="p-4">
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="flex flex-wrap">
        {oldPrice && <motion.span animate={{opacity:[0,0.5,1]}} transition={{repeat:Infinity}} className="old-price mt-2 text-red-400 font-semibold"><span className="line-through mr-4">{formatedOldPrice}</span></motion.span>}
        <motion.span  className="discount-price block text-slate-600 mt-2">{formatedPrice}</motion.span>
      </div>
      <div className="mt-4 flex flex-wrap justify-between">
        <div className="flex items-center gap-x-2">
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <span>({reviewCount})</span>
        </div>

        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content="All Level"
          data-tooltip-place="bottom"
          src="https://buildwithangga.com/themes/front/images/ic_lv_hard.svg"
        />
        <Tooltip id="my-tooltip"/>
      </div>
    </div>
  </div>

  )
}

export default VideoCard