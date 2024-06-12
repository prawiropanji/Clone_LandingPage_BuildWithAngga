import { useEffect, useRef, useState } from "react";
import ItemMenu from "./ItemMenu";

function Menu() {
  const [openedDropdownId, setOpenedDropdownId] = useState(null);
   const clickedItemMenuRef = useRef()

  function handleClickItemMenu(id) {
      console.log(id);
      
      setOpenedDropdownId((prevId) => {
          if (prevId == id) {
              return null;
            } else {
                return id;
            }
        });
    }
    
    
    
    useEffect(() => {
        
        
        function handleClick(event){
        if(!clickedItemMenuRef.current?.contains(event.target)){
            setOpenedDropdownId(null)
        }

    }

      document.addEventListener('mousedown', handleClick)

      return () => {
        document.removeEventListener('mousedown', handleClick)
      }
        

    },[])


    let kelasDropdownContent = <>
              <div className="flex flex-col justify-between h-full gap-1">
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
        </div>
        <div className="flex flex-col justify-between h-full">
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
        </div>
        <div className="flex flex-col justify-between h-full">
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
          <a href="/">
            <p>UI/UX Designer</p>
          </a>
        </div>
    </>


    let alurBelajaraDropdownContent = <ul className="text-left space-y-4">
      <li className="flex gap-4 items-center">
        <img className="w-12" src="https://buildwithangga.com/themes/front/images/ic_appcode.svg"/>

        <div>
          <h3 className="font-medium text-lg">Full-Stack Website Developer</h3>
          <p className="text-sm text-slate-300">Rekomendasi oleh mentor export</p>
        </div>
      </li>
      <li className="flex gap-4 items-center">
        <img className="w-12" src="https://buildwithangga.com/themes/front/images/ic_design.svg"/>

        <div>
          <h3 className="font-medium text-lg">UI/UX Designer</h3>
          <p className="text-sm text-slate-300">Rekomendasi oleh mentor export</p>
        </div>
      </li>
      <li className="flex gap-4 items-center">
        <img className="w-12" src="https://buildwithangga.com/themes/front/images/ic_flutter.svg"/>

        <div>
          <h3 className="font-medium text-lg">Mobile App Developer</h3>
          <p className="text-sm text-slate-300">Rekomendasi oleh mentor export</p>
        </div>
      </li>
      <li className="flex gap-4 items-center">
        <img className="w-12" src="https://buildwithangga.com/themes/front/images/ic_flag.svg"/>

        <div>
          <h3 className="font-medium text-lg">Product Manager</h3>
          <p className="text-sm text-slate-300">Rekomendasi oleh mentor export</p>
        </div>
      </li>
    </ul>

  return (
    <ul className="flex flex-col 10sz:flex-row justify-center 10sz:items-center items-start flex-grow gap-8 font-medium">
      <ItemMenu
        onClickItemMenu={handleClickItemMenu}
        isOpen={openedDropdownId == 1}
        id="1"
        ref={openedDropdownId == 1 ? clickedItemMenuRef : undefined}
      >
        Flash Sale
      </ItemMenu>
      <ItemMenu
        onClickItemMenu={handleClickItemMenu}
        isOpen={openedDropdownId == 2}
        id="2"
        withDropdown={true}
        dropdownChildren={kelasDropdownContent}
        ref={openedDropdownId == 2 ? clickedItemMenuRef : undefined}
      >
        Kelas
      </ItemMenu>
      <ItemMenu
        onClickItemMenu={handleClickItemMenu}
        isOpen={openedDropdownId == 3}
        id="3"
        withDropdown={true}
        dropdownChildren={alurBelajaraDropdownContent}
        ref={openedDropdownId == 3 ? clickedItemMenuRef : undefined}
      >
        Alur Belajar
      </ItemMenu>
      <ItemMenu
        onClickItemMenu={handleClickItemMenu}
        isOpen={openedDropdownId == 4}
        id="4"
        ref={openedDropdownId == 4 ? clickedItemMenuRef : undefined}
      >
        Challenge
      </ItemMenu>
    </ul>
  );
}

export default Menu;
