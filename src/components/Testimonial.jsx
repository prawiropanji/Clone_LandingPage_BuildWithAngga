import TestimonialRows from "./TestimonialRows";
import TestiCard from "./UI/TestiCard";

function Testimonial() {
  return (
    <div className="bg-[#181230] overflow-y-hidden 07sz:px-10 13sz:px-0">
      <div className="max-w-[1280px] w-full 10sz:h-[600px] h-auto mx-auto flex flex-col 10sz:flex-row gap-x-4 items-center px-12 10sz:px-0">
        <div className="space-y-8 py-32">
          <p className="text-red-200 text-lg">Trusted By 900K+ Students</p>
          <h3 className="font-extrabold text-white text-3xl leading-10">
            Join Our Supportive Community 😊
          </h3>
          <p className="text-fuchsia-200">
            BuildWithAngga menyediakan komunitas belajar UI/UX design & Web
            Development untuk pemula ke mahir
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
              Katalog Kelas
            </button>
            <button className="bg-white rounded-3xl py-3 px-5 font-bold transition-shadow duration-300 hover:shadow-lg">
              Karya Students
            </button>
          </div>
        </div>
        <div className="10sz:overflow-hidden overflow-visible mt-[10rem] 10sz:mt-0 flex gap-x-6 self-start">
          <TestimonialRows>
            <TestiCard title="pertamaaaa" />
            <TestiCard />
            <TestiCard title="terakhir" />
          </TestimonialRows>
          <TestimonialRows fromTop={false}>
            <TestiCard title="pertamaaaa" />
            <TestiCard />
            <TestiCard title="terakhir" />
          </TestimonialRows>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
