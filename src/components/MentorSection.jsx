import ThumbnailItem from "./UI/ThumbnailItem";

function MentorSection() {
  return (
    <div className="flex flex-col 10sz:flex-row gap-y-4 items-center justify-evenly mt-20">
      <div className="w-fit">
        <img
          className="w-[257px] 05sz:w-[430px]"
          src="https://buildwithangga.com/themes\front\images\landing-page\join_mentor\gabung_sebagai_mentor.webp"
          alt=""
        />
      </div>
      <div className="  10sz:w-1/2 flex flex-col justify-center items-start gap-6">
        <p className="text-red-200 text-lg">Sharing is Caring.</p>
        <h3 className="font-extrabold text-3xl leading-10">
          Gabung Sebagai Mentor. Bagikan Skills & Pengalamanmu.
        </h3>

        <ul className="space-y-6">
          <ThumbnailItem text="Meningkatkan personal branding" />
          <ThumbnailItem text="Menambah sumber income" />
          <ThumbnailItem text="Menambah networking baru" />
          <ThumbnailItem text="Privileges menarik mentor lainya" />
        </ul>

        <button className="bg-blue-600 text-white rounded-3xl py-3 px-5 w-full 05sz:w-auto font-bold transition-shadow duration-300 hover:shadow-lg">
          Pelajari selengkapnya
        </button>
      </div>
    </div>
  );
}

export default MentorSection;
