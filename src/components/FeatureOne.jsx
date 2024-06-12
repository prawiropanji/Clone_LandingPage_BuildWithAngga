import CategoryItem from "./UI/CategoryItem";

function FeatureOne() {
  return (
    <div className="mt-44 hidden 07sz:block">
      <p className="text-red-200 text-lg">Start Learning Today</p>
      <h1 className="font-bold text-3xl leading-[69px]">
        Kelas Online Design, Development, dan Freelancer
      </h1>
      <ul className="categories grid grid-cols-2 10sz:grid-cols-4 gap-6">
        <CategoryItem
          text="Alur Belajar Terbaik"
          title="Pilih Roadmap"
          img="https://buildwithangga.com/themes/front/images/ic_flag.svg"
        />
        <CategoryItem 
      text="Alur Belajar Terbaik"
      title="Kelas Design"
      img="https://buildwithangga.com/themes/front/images/ic_design.svg"
        />
        <CategoryItem 
          text="Bikin website"
          title="Kelas Koding"
          img="https://buildwithangga.com/themes/front/images/ic_appcode.svg"
        />
        <CategoryItem 
          text="Improve Your Business"
          title="Perdalam Soft Skill"
          img="https://buildwithangga.com/themes/front/images/ic_softskills.svg"
        />
      </ul>



    </div>
  );
}

export default FeatureOne;
