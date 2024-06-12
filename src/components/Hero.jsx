import { useAnimate, stagger } from "framer-motion";
import ProgressIlustration from "./UI/ProgressIlustration";
import { useState } from "react";
import ChatIlustration from "./UI/ChatIlustration";

function Hero() {
  const [scope, animate] = useAnimate();

//   const sequence = [
//     [".img-center", { scale: [0.2, 1.2, 1], opacity: [0.5, 1] }, {duration: 0.5}],
//     [".leftIlustration", { scale: [0.2, 1.2, 1], opacity: [0, 1] }, {duration: 0.5, delay: 0.5}],
//   ];


const [startProgressBarAnimation, setStartProgressBarAnimation] = useState(false) 

  async function handleSequenceAnimation() {
    await animate(".img-center", { scale: [0.2, 1.2, 1], opacity: [0, 1] }, {duration: 0.8});
    await animate(".image-right-bottom", {scale: [0.2, 1.2, 1], opacity: [0, 1]}, {duration: 0.5})
    await animate(".chat-items img", {y: [50, 0], opacity: [0, 1]}, {delay: stagger(0.4, { startDelay: 0.1 })})
    await animate(".leftIlustration", { scale: [0.2, 1.2, 1], opacity: [0, 1] }, {duration: 0.5, delay: 0.2})
    setStartProgressBarAnimation(true)
}

  return (
    <section className="hidden 07sz:block 10sz:grid grid-cols-12 my-24 ">
      <div className="left flex flex-col gap-y-10 justify-center col-span-5">
        <p className="text-red-200 text-lg">#SpiritOfLearning</p>
        <h1 className="font-bold text-5xl leading-[69px]">
          Your Dream Career Starts With Us
        </h1>
        <p className="text-lg">
          BuildWithAngga menyediakan kelas UI/UX design, Web Development, dan
          Freelancer untuk pemula.
        </p>

        <div className=" space-x-2">
          <button className="bg-blue-600 text-white rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
            Alur Belajar
          </button>
          <button className="bg-slate-300 rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
            Panduan Karir
          </button>
        </div>
      </div>

      <div className="right col-span-7 mt-20 10sz:mt-0">
        <a ref={scope} className="relative">
          <ProgressIlustration startProgressbarAnimation={startProgressBarAnimation}/>
          <ChatIlustration/>
          <img
            onLoad={handleSequenceAnimation}
            className="img-center"
            src="https://buildwithangga.com/themes/front/images/landing-page/hero/belajar-design-code-untuk-bangun-karir-impian-buildwith-angga.webp"
          />

        </a>
      </div>
    </section>
  );
}

export default Hero;
