function SlideshowItem({title}) {
  return (
    <div className="flex gap-2 bg-white rounded-xl p-4 tools-card w-72 hover:outline hover:outline-blue-600">
    <img
      src="https://buildwithangga.com/themes/front/images/logo/react.svg"
      className="w-16"
    />
    <div className="flex flex-col justify-center items-start gap-1 text-start">
      <h5 className="font-semibold text-lg">{title}</h5>
      <p className="text-gray-400 text-sm">Front-End Development</p>
    </div>
  </div>
  )
}

export default SlideshowItem