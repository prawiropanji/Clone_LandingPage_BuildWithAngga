function ItemFooter({title = 'Start Popular Career', className}) {
  return (
    <div className={`${className} mb-16`}>
        <p className="font-bold mb-2">{title}</p>
        <ul className="space-y-2">
            <li>
                <a href="" className="hover:text-blue-600">Web Developer</a>
            </li>
            <li>
                <a href="" className="hover:text-blue-600">Web Developer</a>
            </li>
            <li>
                <a href="" className="hover:text-blue-600">Web Developer</a>
            </li>
            <li>
                <a href="" className="hover:text-blue-600">Web Developer</a>
            </li>
        </ul>
    </div>
  )
}

export default ItemFooter