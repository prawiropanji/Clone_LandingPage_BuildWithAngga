import SlideshowItem from "./UI/SlideshowItem";
import ToolsSlideshow from "./UI/ToolsSlideshow";

function MasteringToolPart() {
  return (
    <div className="my-28 p-4 overflow-x-hidden 05sz:overflow-x-visible 07sz:overflow-x-hidden">
        <div className="text-center space-y-11">
            <div>
                <p className="text-red-200 text-lg">Mastering Freelancer Tools</p>
                <h3 className="font-extrabold text-3xl leading-10">
                Kelas Online BuildWithAngga.<br/>Materi Paling Update.
                </h3>

            </div>


           
                <ToolsSlideshow>
                    <SlideshowItem title="React JS"/>
                    <SlideshowItem title="Python"/>
                    <SlideshowItem title=".NET"/>
                    <SlideshowItem title="Javasript"/>
                </ToolsSlideshow>


                <ToolsSlideshow startDirection="right">
                    <SlideshowItem title="React JS"/>
                    <SlideshowItem title="Python"/>
                    <SlideshowItem title=".NET"/>
                    <SlideshowItem title="Javasript"/>
                </ToolsSlideshow>
            


        </div>
    </div>
  );
}

export default MasteringToolPart;
