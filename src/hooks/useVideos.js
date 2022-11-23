import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

/*
Custom Hook
可用在不同的Component
並且每個hook都是獨立的
*/
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
    return () => {};
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
