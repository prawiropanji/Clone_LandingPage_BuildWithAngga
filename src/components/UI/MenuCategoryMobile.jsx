import MenuItemMobile from "./MenuItemMobile"

function MenuCategoryMobile() {
  return (
    <div className="mt-4">
        <h4 className="font-bold mb-2">Daily</h4>
        <div className="flex gap-4">
            <MenuItemMobile url="https://buildwithangga.com/themes/front/images/ic_sekali_bayar.svg" text="Flash Sale"/>
            <MenuItemMobile url="https://buildwithangga.com/themes/front/images/ic_sekali_bayar.svg" text="Flash Sale"/>
            <MenuItemMobile url="https://buildwithangga.com/themes/front/images/ic_sekali_bayar.svg" text="Flash Sale"/>
        </div>
    </div>
  )
}

export default MenuCategoryMobile