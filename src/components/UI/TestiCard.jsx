
const TestiCard = ({ title = "Always Up to Date" }) => {
    return (
      <div
        className={`testimonial-card  bg-white w-full rounded-lg p-6 space-y-4`}
      >
        <h3 className="font-bold text-lg">{title}</h3>
        <p>BuildWithAngga memberikan materi kelas dengan tools terbaru</p>
        <div className="flex gap-x-4">
          <img
            className="w-12"
            src="https://buildwithangga.com/themes/front/images/landing-page/testimonials_v3/user_pic-1.webp"
            alt=""
          />
          <div>
            <p className="font-semibold">name</p>
            <p>Postion</p>
          </div>
        </div>
      </div>
    );
  }


export default TestiCard;
