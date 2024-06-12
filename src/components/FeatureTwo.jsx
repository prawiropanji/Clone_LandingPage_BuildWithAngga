import { useState } from "react";
import Modal from "./UI/Modal";
import VideoCard from "./UI/VideoCard";
import {videos} from '../data/Videos'


function FeatureTwo() {
  const [openedVideo, setOpenedVideo] = useState(null);

  function handleSelectVideo(id) {
    const video = videos.find((x) => x.id == id);
    if (video) {
      setOpenedVideo(video);
    }
  }

  console.log(openedVideo);

  return (
    <div className="hidden 07sz:block space-y-4 mb-10">
      <p className="text-red-200 text-lg">Become Freelancer</p>
      <h3 className="font-extrabold text-3xl leading-10">
        Kelas BuildWithAngga Unggulan
        <br />
        Belajar Design & Development
      </h3>
      <div className="grid grid-cols-2 10sz:grid-cols-4 gap-6">
          {videos.map(x => {
            return <VideoCard 
            key={x.id}
            id={x.id} 
            title={x.title}
            thumbnailImg={x.thumbnailImg}
            reviewCount={x.reviewCount}
            price={x.price}
            oldPrice={x.oldPrice}
            onSelectVideo={handleSelectVideo}
            />
          })}
      </div>
      <Modal
        isOpen={!!openedVideo}
        videoUrl={openedVideo?.videoUrl || ""}
        cleanState={() => setOpenedVideo(null)}
      />
    </div>
  );
}

export default FeatureTwo;
