import SearchItem from "./SearchItem";

function SearchResult({ courses = [], loading }) {
  return (
    <div>
      <h4 className="font-bold my-4">Results</h4>
      <div>
        <ul>
            {loading && courses ? <SearchItem loading={true}/> : courses.map(course => {
                return <SearchItem key={course.id} urlImg={`https://buildwithangga.com/${course.thumbnail_kelas}`} price={course.harga_kelas} title={course.nama_kelas} loading={false}/>
            }) }
            
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
