import CategoryItem from "./UI/CategoryItem";
import TitleSub from "./UI/TitleSub";

function CourseCategoriesMobile() {
  return (
    <section className="mt-16">
      <TitleSub title="Kategori Pilihan" text="Explore More Skills"/>


      <ul className="grid grid-cols-2 gap-4">
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
    </section>
  );
}

export default CourseCategoriesMobile;
