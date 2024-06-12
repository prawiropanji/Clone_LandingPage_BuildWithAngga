import ItemFooter from "./UI/ItemFooter";

function Footer() {
  return (
    <div className="10sz:grid grid-cols-12 mt-16 05sz:mt-40 pb-20">
      <div className="footer-header col-span-4 space-y-2 mb-10">
        <img
          className="w-12 mb-6"
          src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"
        />
        <p>PT. Angga Membangun Indonesia</p>
        <p>Jl. KH. Wahid Hasyim Kel No.10D</p>
        <p>Jakarta, Indonesia</p>
        <p>(021) 50858650</p>
        <p>team@buildwithangga.com</p>
        <p>© 2019-2024 BuildWithAngga</p>
      </div>
      <div className="footer-body col-span-8 ">
        <div className="flex flex-wrap justify-between">
          <ItemFooter className="flex-grow 10sz:flex-grow-0 basis-full 10sz:basis-auto" />
          <ItemFooter className="basis-1/2 10sz:basis-auto" />
          <ItemFooter className="basis-1/2 10sz:basis-auto"/>
        </div>
        <div className="flex flex-wrap justify-between">
          <ItemFooter className="basis-1/2 10sz:basis-auto"/>
          <ItemFooter className="basis-1/2 10sz:basis-auto"/>
          <ItemFooter className="basis-full 07sz:basis-1/2 10sz:basis-auto"/>
          <ItemFooter className="basis-full 07sz:basis-1/2 10sz:basis-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
