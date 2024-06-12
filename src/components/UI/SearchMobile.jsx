import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
function SearchMobile() {
    const input = useRef()

    function handleFocusInput(){
        input.current.focus()
    }
  return (
    <div className="relative">
    <input ref={input} className="w-full p-4 rounded-full border" placeholder="Mau belajar apa hari ini?" type="text" />
    <IoIosSearch onClick={handleFocusInput} className="text-2xl absolute top-1/2 right-4 -translate-y-1/2"/>
</div>
  )
}

export default SearchMobile