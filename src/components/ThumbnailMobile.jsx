import { useState } from "react";
import Modal from "./UI/Modal";
import TitleSub from "./UI/TitleSub";
import VideoCard from "./UI/VideoCard";

function ThumbnailMobile() {
    const [openedVideo, setOpenedVideo] = useState(null)

    function handleSelectVideo(){
        setOpenedVideo('https://www.youtube.com/embed/Sklc_fQBmcs?si=D2I9TmK1_wNioj5O')
    }

  return (
    <div className="mt-12">
      <TitleSub title="Terbaru Dirilis & Trending" text="Most Up to Date" />
      <div className="flex gap-4 overflow-auto scrollbar-none">
        <VideoCard
          className="basis-80 shrink-0 grow-0"
          key={1}
          id={1}
          title="Upwork Freelancer Mastery Strategi Terbukti 100 Juta Pertama"
          thumbnailImg="https://buildwithangga.com/storage/assets/thumbnails/pmd4q87u-Thumbnail Upwork 2.png"
          reviewCount={376}
          price={550_000}
          oldPrice={2_650_000}
          onSelectVideo={handleSelectVideo}
        />
        <VideoCard
          className="basis-80 shrink-0 grow-0"
          key={2}
          id={1}
          title="Upwork Freelancer Mastery Strategi Terbukti 100 Juta Pertama"
          thumbnailImg="https://buildwithangga.com/storage/assets/thumbnails/pmd4q87u-Thumbnail Upwork 2.png"
          reviewCount={376}
          price={550_000}
          oldPrice={2_650_000}
          onSelectVideo={handleSelectVideo}
        />
        <VideoCard
          className="basis-80 shrink-0 grow-0"
          key={3}
          id={1}
          title="Upwork Freelancer Mastery Strategi Terbukti 100 Juta Pertama"
          thumbnailImg="https://buildwithangga.com/storage/assets/thumbnails/pmd4q87u-Thumbnail Upwork 2.png"
          reviewCount={376}
          price={550_000}
          oldPrice={2_650_000}
          onSelectVideo={handleSelectVideo}
        />
        <VideoCard
          className="basis-80 shrink-0 grow-0"
          key={4}
          id={1}
          title="Upwork Freelancer Mastery Strategi Terbukti 100 Juta Pertama"
          thumbnailImg="https://buildwithangga.com/storage/assets/thumbnails/pmd4q87u-Thumbnail Upwork 2.png"
          reviewCount={376}
          price={550_000}
          oldPrice={2_650_000}
          onSelectVideo={handleSelectVideo}
        />

        <Modal
          isOpen={!!openedVideo}
          videoUrl={openedVideo || ""}
          cleanState={() => setOpenedVideo(null)}
        />
      </div>
    </div>
  );
}

export default ThumbnailMobile;
