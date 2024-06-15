import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const LikedVideos = () => {
  const [allVideos, setAllVideos] = useState<IState["allVideos"]>([]);
  useEffect(() => {
    const opts: youtubeSearch.YouTubeSearchOptions = {
      maxResults: 30,
      key: "AIzaSyDXnw3Ocvl5M4iXI3m75HWrU6SOwnttcr4",
    };
    youtubeSearch("vsaus", opts, (err, results) => {
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
    <Grid container p={1} gap={1}>
      {allVideos.map((each) => (
        <Grid xs={10} sm={3.9} item overflow={"hidden"} key={each.id} mb={3}>
          <Link
            to={`video/${each.id}`}
            key={each.id}
            style={{ textDecoration: "none" }}
          >
            <Box position={"relative"}>
              <Box
                component="img"
                src={each.thumbnail}
                sx={{ width: { xs: "400px", sm: "530px" } }}
              />
              <Typography
                position={"absolute"}
                right={5}
                bottom={20}
                bgcolor={"black"}
                px={1}
                borderRadius={2}
                color={"white"}
              >
                {each.id}
              </Typography>
            </Box>
            <Stack direction={"row"} spacing={2} px={2}>
              <Box
                component={"img"}
                sx={{ borderRadius: "50%", width: "50px", height: "50px" }}
                src={each.thumbnail}
              />
              <Stack>
                <Typography variant="body1" color={"white"}>
                  {each.description.slice(0, 90)}
                </Typography>
                <Typography variant="body2" color={"gray"}>
                  {each.channelTitle}
                </Typography>
                <Typography variant="body2" color={"gray"} fontWeight={"bold"}>
                  15K Views . 1 Week Ago
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LikedVideos;
