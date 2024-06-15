import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EachMyVideoType } from "./../../TypeScript/GlobalTypes";

interface InitialStateType {
  allVideos: EachMyVideoType[];
}

const initialState: InitialStateType = {
  allVideos: [],
};

export const gettingData = createAsyncThunk("Getting Data", async () => {
  const apiUrl =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&key=AIzaSyD5lk-Bisvtu1tIrV_FwlxIc_R2qgPMEaY";
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
});

const DataSlice = createSlice({
  name: "videosData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingData.fulfilled, (state, action) => {
      type youtubeVideo = (typeof action.payload.items)[0];
      const videos = action.payload.items.map((each: youtubeVideo) => {
        const { title, thumbnails, description, publishedAt, channelTitle } =
          each.snippet;
        const { commentCount, viewCount, likeCount } = each.statistics;
        return {
          id: each.id,
          title,
          description,
          likeCount: Number(likeCount),
          channelTitle,
          thumbnail: thumbnails.default,
          commentsCount: Number(commentCount),
          views: Number(viewCount),
          publishedAt,
        };
      });
      state.allVideos = videos;
    });
  },
});

export default DataSlice.reducer;
