import { FaChevronRight } from "react-icons/fa6";


function CategoryItem({title, text, img}) {
  return (
    <div className="bg-white rounded-xl p-4">
        <div>
            <img className="w-20" src={img} alt={title} />
        </div>
        <div className="flex items-center justify-between mt-10">
            <div>
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-gray-400">{text}</p>
            </div>
            <FaChevronRight/>
        </div>
    </div>
  )
}

export default CategoryItem