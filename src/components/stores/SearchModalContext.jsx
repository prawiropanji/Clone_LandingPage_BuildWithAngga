import { createContext, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "../UI/SearchResult";
import { Courses as CoursesData } from "../../data/Courses";

export const SearchModalContext = createContext();

function SearchModalProvider({ children }) {
  const searchInput = useRef();
  const debouncingId = useRef();
  const mockFetchApiId = useRef();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("course state:", courses);

  function closeSearchModal() {
    setSearchModalOpen(false);
  }

  const contextValue = {
    searchModalOpen,
    setSearchModalOpen,
  };

  function handleSearch() {
    setIsLoading(true);
    clearTimeout(debouncingId.current);
    debouncingId.current = setTimeout(() => {
      const searchTerm = searchInput.current.value;
      if (searchTerm.trim()) {
        mockFetchApiId.current = setTimeout(() => {
          setCourses(CoursesData);
          setIsLoading(false);
        }, 2000);
      } else {
        clearTimeout(mockFetchApiId.current);
        setCourses([]);
        setIsLoading(false);
      }
    }, 250);
  }

  return (
    <SearchModalContext.Provider value={contextValue}>
      <AnimatePresence>
        {searchModalOpen && (
          <>
            <div className="fixed bg-black/70 top-0 right-0 left-0 bottom-0 z-40"></div>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%", transition: { ease: "linear" } }}
              transition={{ ease: "backIn" }}
              className="fixed p-4 z-50 bg-white left-0 right-0 top-0 bottom-0"
            >
              <div className="flex justify-end mr-2 mb-6">
                <IoClose onClick={closeSearchModal} className="text-3xl" />
              </div>
              <div className="flex items-center">
                <input
                  ref={searchInput}
                  onChange={handleSearch}
                  className="py-4 border-b border-dashed grow-1 basis-full outline-none"
                  type="text"
                  placeholder="Mau belajara apa hari ini?"
                />
                <IoIosSearch className="text-3xl" />
              </div>

              {(isLoading || courses.length > 1) && (
                <SearchResult courses={courses} loading={isLoading} />
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {children}
    </SearchModalContext.Provider>
  );
}

export default SearchModalProvider;
