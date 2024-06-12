import { FaCheck } from "react-icons/fa6";

function ThumbnailItem({text}) {
  return (
    <li className="flex items-center gap-2">
      <div className="bg-emerald-100 w-fit rounded-full p-1">
        <FaCheck className="text-red-400 text-base" />
      </div>
      <p className="font-semibold">{text}</p>
    </li>
  );
}

export default ThumbnailItem;
