import AccordionItem from "./UI/AccordionItem";

const frequentAskQuestions = [
    {   id:1,
        title:'Apakah Seorang pemula bisa ikut belajar?',
        text: 'BuildWithAngga menyediakan mentor dan kelas online UI/UX Design, Web Development, Freelancer, Data Science yang bisa dipelajari secara gratis, sangat dianjurkan untuk pemula atau Anda yang ingin switch career. Setelah menyelesaikan kelas gratis, BuildWithAngga menyarankan Anda mengikuti kelas Premium dalam membangun portfolio yang digunakan sebagai modal bekerja.'
    }
]

const data = frequentAskQuestions[0]

function Faq() {
  return (
    <div className="max-w-[1280px] w-full mx-auto text-center mt-24 px-0 10sz:px-20">
      <p className="text-red-200 text-lg">Tanya BuildWithAngga</p>
      <h3 className="font-extrabold text-3xl leading-10">
      Frequently Asked
      <br/>
      Questions 😊
      </h3>

    <div className="flex flex-col 10sz:flex-row gap-6 justify-center mt-10">
        <div className="w-full space-y-6">
            <AccordionItem text={data.text} title={data.title}/>
            <AccordionItem text={data.text} title={data.title}/>
            <AccordionItem text={data.text} title={data.title}/>
        </div>
        <div className="w-full space-y-6">
            <AccordionItem text={data.text} title={data.title}/>
            <AccordionItem text={data.text} title={data.title}/>
            <AccordionItem text={data.text} title={data.title}/>
        </div>
    </div>

    </div>
  );
}

export default Faq;
