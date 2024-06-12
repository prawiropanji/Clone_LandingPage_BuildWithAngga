import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function Modal({isOpen, videoUrl, cleanState}) {
  const modal = useRef();

  function openModal(){
    modal.current.showModal();
  }

  function closeModal(){
    modal.current.close()
  }

  useEffect(() => {
    if(isOpen){
      openModal()
    }else{
      closeModal()
    }
  }, [isOpen]);
  
  
  useEffect(()=>{
    modal.current.addEventListener('close', () =>{
      console.log('tutupModal')
      cleanState()
    })
  },[cleanState])


  return (
    <dialog
      className="backdrop:bg-black/50 w-fit rounded-lg top-1/2 -translate-y-1/2"
      ref={modal}
    >
      <div className="">
        <div className="modal-header flex justify-between items-center p-4">
          <h3 className="font-bold">Trailer</h3>
           <IoClose onClick={closeModal} className="cursor-pointer text-3xl text-gray-500 hover:text-black"/>
        </div>
        <div className="modal-body">
          <iframe
            width="760"
            height="415"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
