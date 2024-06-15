import { Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gettingData } from "../Redux/features/DataSlice";
import { AppDispatch, RootState } from "../Redux/store/store";

export const defaultThumbnail: string =
  "data:image/jpeg;base64,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";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allVideos = useSelector(
    (state: RootState) => state.videosDataSlice.allVideos
  );
  useEffect(() => {
    dispatch(gettingData());
  }, []);
  // console.log(allVideos);

  return (
    <Grid container p={1} gap={1}>
      {allVideos.map((each) => (
        <Grid
          xs={11}
          md={5}
          xl={3.9}
          item
          overflow={"hidden"}
          key={each.id}
          mb={3}
        >
          <Link
            to={`/video/${each.id}`}
            key={each.id}
            style={{ textDecoration: "none" }}
          >
            <Box position={"relative"}>
              <Box
                component="img"
                src={defaultThumbnail}
                sx={{
                  width: { xs: "400px", sm: "530px" },
                  aspectRatio: "2/1",
                }}
              />
            </Box>
            <Stack direction={"row"} spacing={2} px={2}>
              <Box
                component={"img"}
                sx={{ borderRadius: "50%", width: "50px", height: "50px" }}
                src={
                  "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"
                }
              />
              <Stack>
                <Typography variant="body1" color={"white"}>
                  {each.description.slice(0, 90)}
                </Typography>
                <Typography variant="body2" color={"gray"}>
                  {each.channelTitle}
                </Typography>
                <Typography variant="body2" color={"gray"} fontWeight={"bold"}>
                  {(each.commentsCount / 1000).toFixed(2) + " "}K Views . 1 Week
                  Ago
                </Typography>
              </Stack>
            </Stack>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
