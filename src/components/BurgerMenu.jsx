import { RxHamburgerMenu } from "react-icons/rx";

function BurgerMenu({onClick, expandMenu}) {
  return (
    <button onClick={onClick} className={`block 10sz:hidden ${expandMenu ? 'border-4 border-orange-950' : 'border'}  rounded-lg px-4 py-2`}>
        <RxHamburgerMenu className="text-4xl"/>
    </button>
  )
}

export default BurgerMenu