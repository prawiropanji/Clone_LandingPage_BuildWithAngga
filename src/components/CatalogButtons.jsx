import TitleSub from "./UI/TitleSub"

function CatalogButtons() {
  return (
    <div className="mt-16">
        <img className="w-12" src="https://buildwithangga.com/themes/front/images/ic_project.svg"/>
        <TitleSub text="Unlock Better Version" title="Mulai Membangun Karir Impianmu Bersama Kami"/>
        <div className="flex gap-2">
            <button className="btn w-full bg-blue-600 text-white font-semibold">Katalog Kelas</button>
            <button className="btn w-full bg-slate-300">Alur Belajar</button>
        </div>
    </div>
  )
}

export default CatalogButtons