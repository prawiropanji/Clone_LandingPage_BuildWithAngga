import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SearchItem({urlImg, title, price ,loading}) {
    console.log('loading:',loading)
  return (
    <li className="flex flex-1 items-center gap-2 border-b py-2">
      {loading && (
        <Skeleton height={70} width={90} style={{ borderRadius: "1rem" }} />
      )}
      {loading || (
        <img
          className="h-[70px] w-[90px] rounded-2xl"
          src={urlImg}
          alt=""
        />
      )}

      <div className="flex flex-col gap-2 flex-1">
        {loading && <Skeleton width={"70%"} count={2} />}
        {loading || (
          <>
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-300 text-sm">{price}</p>
          </>
        )}
      </div>
    </li>
  );
}

export default SearchItem;
