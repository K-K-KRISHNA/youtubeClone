import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

const withNavHoc = (OriginalComponent: React.FC) => {
  const NewComponent = () => {
    const [isSide, setIsSide] = useState(false);
    return (
      <Stack>
        <Header />
        <Stack direction={"row"} height={"90vh"}>
          <Box position={"sticky"} top={0}>
            <SideBar />
          </Box>
          <Box overflow={"auto"}>
            <OriginalComponent />
          </Box>
        </Stack>
      </Stack>
    );
  };
  return NewComponent;
};

export default withNavHoc;
