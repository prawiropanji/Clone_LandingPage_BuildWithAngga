import ThumbnailItem from "./UI/ThumbnailItem";

function ThumbnailSection() {
  return (
    <div className="flex flex-col 10sz:flex-row my-24 gap-8">
      <div className="max-w-3xl">
        <img src="https://buildwithangga.com/themes/front/images/landing-page/privilege/keuntungan utama belajar ui ux coding di BuildWithAngga.png" />
      </div>
      <div className="flex flex-col justify-center items-start gap-y-6">
        <p className="text-red-200 text-lg">You Deserve Better Career</p>
        <h3 className="font-extrabold text-3xl leading-10">Privileges Dari BuildWithAngga Karir Semakin Tumbuh</h3>
        <ul className="space-y-6">
            <ThumbnailItem text="Akses BuildWithAngga selamanya"/>
            <ThumbnailItem text="Free materi update kelas"/>
            <ThumbnailItem text="Forum UI/UX design & Web Development"/>
            <ThumbnailItem text="Privileges kelas online lainnya"/>
        </ul>
        <button className="bg-blue-600 text-white rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
            Join Now
          </button>
      </div>
    </div>
  );
}

export default ThumbnailSection;
