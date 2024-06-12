function MenuItemMobile({url, text}) {
  return (
    <div className="card-menu flex flex-col justify-center items-center border rounded-3xl px-4 py-4">
    <img src={url} className="w-12 object-cover"></img>
    <p>{text}</p>
</div>
  )
}

export default MenuItemMobile