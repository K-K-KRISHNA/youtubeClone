import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import Tabs from "../Components/Tabs/MyTabs";
import Explore from "../Pages/Explore";
import FeedBack from "../Pages/FeedBack";
import Gaming from "../Pages/Gaming";
import Help from "../Pages/Help";
import History from "../Pages/History";
import Home from "../Pages/Home";
import Library from "../Pages/Library";
import LikedVideos from "../Pages/LikedVideos";
import Live from "../Pages/Live";
import ReportHistory from "../Pages/ReportHistory";
import Settings from "../Pages/Settings";
import Specific from "../Pages/Specific";
import Sports from "../Pages/Sports";
import Subscriptions from "../Pages/Subscriptions";
import WatchLater from "../Pages/WatchLater";
import YouTubePremium from "../Pages/YouTubePremium";
import YourVideos from "../Pages/YourVideos";

const AppRoutes = () => {
  const [isSideEnabled, setIsSideEnabled] = useState(true);
  const toggleSideBar = () => setIsSideEnabled((prev) => !prev);
  const path = useLocation().pathname.split("/").pop();
  return (
    <Stack>
      <Header toggleSideBar={toggleSideBar} />
      <Stack direction={"row"}>
        {isSideEnabled && path === "Home" && (
          <Box top={0}>
            <SideBar />
          </Box>
        )}
        <Box overflow={"auto"}>
          {(path === "Home" || path === "/") && <Tabs />}
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Home" Component={Home} />
            <Route path="/video/:id" Component={Specific} />
            <Route path="/Explore" Component={Explore} />
            <Route path="/Subscriptions" Component={Subscriptions} />
            <Route path="/Library" Component={Library} />
            <Route path="/History" Component={History} />
            <Route path="/Your Videos" Component={YourVideos} />
            <Route path="/Watch Later" Component={WatchLater} />
            <Route path="/Liked Videos" Component={LikedVideos} />
            <Route path="/Youtube Premium" Component={YouTubePremium} />
            <Route path="/Gaming" Component={Gaming} />
            <Route path="/Live" Component={Live} />
            <Route path="/Sports" Component={Sports} />
            <Route path="/Settings" Component={Settings} />
            <Route path="/Report History" Component={ReportHistory} />
            <Route path="/Help" Component={Help} />
            <Route path="/Send Feedback" Component={FeedBack} />
          </Routes>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AppRoutes;
