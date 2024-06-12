import { useContext, useEffect, useRef } from "react"
import {Context as BannerContext} from "../stores/Banner-context"
import { useInView } from "framer-motion";

function Banner() {
    const {setIsBannerInView} = useContext(BannerContext)
    const ref = useRef()
    const isInView = useInView(ref);

    useEffect(() => {
        setIsBannerInView(isInView);
      }, [isInView, setIsBannerInView]);

  return (
    <div ref={ref} className='w-full h-28 bg-blue-950 z-[51] relative'/>
  )
}

export default Banner