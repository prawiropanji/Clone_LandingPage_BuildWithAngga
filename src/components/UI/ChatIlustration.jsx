import { motion} from "framer-motion"

function ChatIlustration() {

    


  return (
    <motion.div
     style={{opacity:0}}
    className="z-10 absolute right-0 10sz:right-[-5%] bottom-[30%] image-right-bottom bg-white rounded-xl p-8 w-[240px]"
  >

    
    
    <img
    className=" absolute left-0 top-0" 
    src="https://buildwithangga.com/themes/front/images/landing-page/hero/group-chat-illustration-buildwith-angga.webp"/>

    <div  className="chat-items absolute left-0 top-11 space-y-2 p-4">
        <motion.img style={{opacity:0}} src="https://buildwithangga.com/themes/front/images/landing-page/hero/chat-1.webp"/>
        <motion.img style={{opacity:0}} src="https://buildwithangga.com/themes/front/images/landing-page/hero/chat-2.webp"/>
        <motion.img style={{opacity:0}} src="https://buildwithangga.com/themes/front/images/landing-page/hero/chat-3.webp"/>
    </div>
    
  </motion.div>
  )
}

export default ChatIlustration