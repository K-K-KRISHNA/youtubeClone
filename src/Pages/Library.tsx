import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import * as youtubeSearch from "youtube-search";

interface EachVideo {
  channelId: string;
  channelTitle: string;
  description: string;
  id: string;
  thumbnail: string | undefined;
}

interface IState {
  allVideos: EachVideo[];
}

const Library = () => {
  const [allVideos, setAllVideos] = useState<IState["allVideos"]>([]);
  useEffect(() => {
    const opts: youtubeSearch.YouTubeSearchOptions = {
      maxResults: 30,
      key: "AIzaSyDXnw3Ocvl5M4iXI3m75HWrU6SOwnttcr4",
    };
    youtubeSearch("VSauce", opts, (err, results) => {
      if (err) return console.log(err);
      const finalResults = results?.map((each) => {
        return {
          id: each.id,
          channelTitle: each.channelTitle,
          channelId: each.channelId,
          description: each.description,
          thumbnail: each.thumbnails.default?.url,
        };
      });
      setAllVideos(finalResults!);
      console.log(results);
    });
  }, []);
  return (
    <Stack>
      {allVideos.map((each) => (
        <Typography>{each.description}</Typography>
      ))}
    </Stack>
  );
};

export default Library;
