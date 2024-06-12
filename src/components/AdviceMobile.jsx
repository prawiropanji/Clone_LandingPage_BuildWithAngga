
function AdviceMobile() {
  return (
    <section className="border-y-2 border-dashed py-6">
      <div className="bg-white rounded-xl p-2">
        <div className="flex items-center justify-between ">
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-12"
              src="https://buildwithangga.com/themes/front/images/ic_konsultasi.svg"
              alt=""
            />
            <div>
              <h3 className="font-bold text-xl">Need Advice?</h3>
              <p className="text-gray-400 text-sm">Konsulatasi dulu yuk</p>
            </div>
          </div>

          <button className="bg-slate-300 font-bold rounded-3xl py-2 px-8 transition-shadow duration-300 hover:shadow-lg">
            Chat
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdviceMobile;
