import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowMore from "../../assets/arrowBottom.png";
import ExploreActive from "../../assets/explore-fill.png";
import ExploreDeactive from "../../assets/exploredeactive.png";
import FeeBackDeActive from "../../assets/feedbackdeactive.png";
import GamingActive from "../../assets/gaming-fill.png";
import GamingDeActive from "../../assets/gamingdeactive.png";
import HelpDeActive, {
  default as HelpActive,
} from "../../assets/helpdeactive.png";
import HistoryActive from "../../assets/history-fill.png";
import HistoryDeActive from "../../assets/historydeactive.png";
import HomeActive from "../../assets/home-fill.png";
import HomeDeActive from "../../assets/homedeactive.png";
import LibraryActive from "../../assets/library-fill.png";
import LibraryDeActive from "../../assets/librarydeactive.png";
import LikedVideosActive from "../../assets/liked-fill.png";
import LikedVideosDeActive from "../../assets/likeddeactive.png";
import LiveActive from "../../assets/live-fill.png";
import LiveDeActive from "../../assets/livedeactive.png";
import YoutTubePremiumActive from "../../assets/premium-fill.png";
import YouTubePremiumDeActive from "../../assets/premiumdeacive.png";
import ReportActive from "../../assets/report-fill.png";
import ReportDeActive from "../../assets/reporthistory.png";
import {
  default as SettingActive,
  default as SettingDeActive,
} from "../../assets/settingsdeactive.png";
import SportsActive from "../../assets/sports-fill.png";
import SportsDeActive from "../../assets/sportsdeactive.png";
import SubscriptionActive from "../../assets/subscriptions-fill.png";
import SubscriptionDeActive from "../../assets/subscriptionsdeactive.png";
import WatchLaterActive from "../../assets/watchLater-fill (2).png";
import WatchLaterDeActive from "../../assets/watchLaterdeactive.png";
import YourVideosDeActive from "../../assets/yourVideosdeactive.png";
import { SideBarStyles } from "./SideBarStyles";
interface EachOption {
  text: string;
  activeIcon: string;
  deActiveIcon: string;
}
const options: EachOption[] = [
  {
    text: "Home",
    activeIcon: HomeActive,
    deActiveIcon: HomeDeActive,
  },
  {
    text: "Explore",
    activeIcon: ExploreActive,
    deActiveIcon: ExploreDeactive,
  },
  {
    text: "Subscriptions",
    activeIcon: SubscriptionActive,
    deActiveIcon: SubscriptionDeActive,
  },
  {
    text: "Library",
    activeIcon: LibraryActive,
    deActiveIcon: LibraryDeActive,
  },
  {
    text: "History",
    activeIcon: HistoryActive,
    deActiveIcon: HistoryDeActive,
  },
  {
    text: "Your Videos",
    activeIcon: YourVideosDeActive,
    deActiveIcon: YourVideosDeActive,
  },
  {
    text: "Watch Later",
    activeIcon: WatchLaterActive,
    deActiveIcon: WatchLaterDeActive,
  },
  {
    text: "Liked Videos",
    activeIcon: LikedVideosActive,
    deActiveIcon: LikedVideosDeActive,
  },
  {
    text: "Show More",
    activeIcon: ShowMore,
    deActiveIcon: ShowMore,
  },
  {
    text: "Youtube Premium",
    activeIcon: YoutTubePremiumActive,
    deActiveIcon: YouTubePremiumDeActive,
  },
  {
    text: "Gaming",
    activeIcon: GamingActive,
    deActiveIcon: GamingDeActive,
  },
  {
    text: "Live",
    activeIcon: LiveActive,
    deActiveIcon: LiveDeActive,
  },
  {
    text: "Sports",
    activeIcon: SportsActive,
    deActiveIcon: SportsDeActive,
  },
  {
    text: "Settings",
    activeIcon: SettingActive,
    deActiveIcon: SettingDeActive,
  },
  {
    text: "Report History",
    activeIcon: ReportActive,
    deActiveIcon: ReportDeActive,
  },
  {
    text: "Help",
    activeIcon: HelpActive,
    deActiveIcon: HelpDeActive,
  },
  {
    text: "Send Feedback",
    activeIcon: FeeBackDeActive,
    deActiveIcon: FeeBackDeActive,
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();
  return (
    <Stack
      height={"90vh"}
      width={"250px"}
      overflow={"auto"}
      bgcolor={"#272727"}
      p={2}
      spacing={4}
      sx={SideBarStyles.scroller}
    >
      {options.slice(0, 3).map((each) => (
        <Stack
          direction={"row"}
          spacing={3}
          sx={{ cursor: "pointer" }}
          key={each.text}
          onClick={() => {
            setActiveTab(each.text);
            navigate(`/${each.text}`);
          }}
        >
          <Box
            component={"img"}
            src={activeTab === each.text ? each.activeIcon : each.deActiveIcon}
            sx={SideBarStyles.sizeThirty}
          />
          <Typography fontSize={"17px"}>{each.text}</Typography>
        </Stack>
      ))}
      <Divider />
      {options.slice(3, 9).map((each) => (
        <Stack
          direction={"row"}
          spacing={3}
          sx={{ cursor: "pointer" }}
          key={each.text}
          onClick={() => {
            setActiveTab(each.text);
            navigate(`/${each.text}`);
          }}
        >
          <Box
            component={"img"}
            src={each.text === activeTab ? each.activeIcon : each.deActiveIcon}
            sx={SideBarStyles.sizeThirty}
          />
          <Typography fontSize={"17px"}>{each.text}</Typography>
        </Stack>
      ))}
      <Divider />
      {options.slice(9, 13).map((each) => (
        <Stack
          direction={"row"}
          spacing={3}
          sx={{ cursor: "pointer" }}
          key={each.text}
          onClick={() => {
            setActiveTab(each.text);
            navigate(`/${each.text}`);
          }}
        >
          <Box
            component={"img"}
            src={each.text === activeTab ? each.activeIcon : each.deActiveIcon}
            sx={SideBarStyles.sizeThirty}
          />
          <Typography fontSize={"17px"}>{each.text}</Typography>
        </Stack>
      ))}
      <Divider />
    </Stack>
  );
};

export default SideBar;
