import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { gettingData } from "../Redux/features/DataSlice";
import { AppDispatch, RootState } from "../Redux/store/store";
import ProfilePic from "../assets/profile.jpg";
import { defaultThumbnail } from "./Home";

const Specific = () => {
  const dispatch = useDispatch<AppDispatch>();

  const defaultVideoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const allVideos = useSelector(
    (state: RootState) => state.videosDataSlice.allVideos
  );
  const id = useParams().id;

  const suggestions = allVideos.slice(0, 6).filter((each) => each.id !== id);
  const video = allVideos.filter((each) => each.id === id)[0];

  useEffect(() => {
    if (allVideos.length === 0) {
      dispatch(gettingData());
    }
  });
  if (allVideos.length !== 0)
    return (
      <Stack
        sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
        width={"100%"}
      >
        <Stack px={2} sx={{ width: { xs: "100%", lg: "70%" } }} mt={1}>
          <ReactPlayer
            height={"55%"}
            width={"100%"}
            url={defaultVideoUrl}
            autoPlay
            controls
          />
          <Stack mt={2} mb={2}>
            <Typography variant="h5">{video.title}</Typography>
            <Stack
              sx={{ direction: { xs: "column", md: "row" } }}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} mt={2} spacing={3}>
                <Typography variant="body2" color={"gray"} fontWeight={"bold"}>
                  {(video.views / 1000000).toFixed(2) + " "}M Views
                </Typography>
                <Typography variant="body2" color={"gray"} fontWeight={"bold"}>
                  {video.publishedAt}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ gap: 2, width: "100%", flexWrap: "wrap" }}
                mt={1}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <ThumbUpOffAltIcon />
                  <Typography fontWeight={"bolder"}>
                    {(video.likeCount / 1000).toFixed(2)}K
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <ThumbDownOffAltIcon />
                  <Typography fontWeight={"bolder"}>1.7K</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <ShareIcon />
                  <Typography fontWeight={"bolder"}>Share</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <SaveAltIcon />
                  <Typography fontWeight={"bolder"}>Save </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <MoreHorizIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction={"row"} mt={3} spacing={3}>
            <Box
              component={"img"}
              src={ProfilePic}
              width={"50px"}
              height={"50px"}
              borderRadius={"50%"}
            />
            <Stack width={"100%"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <Stack>
                  <Typography variant="h6" fontWeight={"bolder"}>
                    {video.channelTitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    color={"gray"}
                    fontWeight={"bolder"}
                  >
                    {video.likeCount}
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    background: "red",
                    color: "white",
                    fontWeight: "bolder",
                    height: "fit-content",
                  }}
                >
                  SUBSCRIBE
                </Button>
              </Stack>
              <Stack mt={2}>
                {video.description.split(" ").slice(0, 20).join(" ")}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={3} mt={2} overflow={"auto"} maxHeight={"90vh"}>
          {suggestions.map((item) => (
            <Link
              to={`/video/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Stack direction={"row"} spacing={2}>
                <Box
                  component="img"
                  src={defaultThumbnail}
                  width={"200px"}
                  alt={item.title}
                  sx={{ aspectRatio: "2/1" }}
                />
                <Stack>
                  <Typography variant="h6" fontWeight={"bold"}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color={"gray"}>
                    {item.channelTitle}
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography variant="body2" color="gray">
                      {(item.views / 1000000).toFixed(2) + " "}M Views.
                    </Typography>
                    <Typography>3 Years Ago</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    );
};

export default Specific;
