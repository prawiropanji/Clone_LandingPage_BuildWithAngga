import { useContext, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchModalContext } from "./stores/SearchModalContext";
function SearchContainer() {
    const input = useRef()
    const {setSearchModalOpen} = useContext(SearchModalContext)

    function handleFocusInput(){
        input.current.focus()
    }
  return (
    <div className="px-4 mt-4">
         <h3 className="font-bold text-2xl"><span className="text-blue-600">Your Dream Career</span> <br />Starts With Us</h3>
        <p className="mb-4">BuildWithAngga menyediakan roadmap kelas <br />UI/UX design & Web development terbaik</p>
        <div className="relative">
            <input onFocus={()=>setSearchModalOpen(true)} ref={input} className="outline-none w-full p-4 rounded-full" placeholder="Mau belajar apa hari ini?" type="text" />
            <IoIosSearch onClick={handleFocusInput} className="text-2xl absolute top-1/2 right-4 -translate-y-1/2"/>
        </div>
    </div>
  )
}

export default SearchContainer