import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function MyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            height: 0,
          },
          "& .Mui-selected": {
            color: "white",
            background: "#474747",
            my: 2,
            borderRadius: "20px",
          },
        }}
      >
        <Tab disableRipple label="Item One" sx={{}} />
        <Tab disableRipple label="Item Three" />
        <Tab disableRipple label="Item Four" />
        <Tab disableRipple label="Item Five" />
        <Tab disableRipple label="Item Six" />
        <Tab disableRipple label="Item Seven" />
        <Tab disableRipple label="Item One" />
        <Tab disableRipple label="Item Two" />
        <Tab disableRipple label="Item Three" />
        <Tab disableRipple label="Item Four" />
        <Tab disableRipple label="Item Five" />
        <Tab disableRipple label="Item Six" />
        <Tab disableRipple label="Item Seven" />
        <Tab disableRipple label="Item One" />
        <Tab disableRipple label="Item Two" />
        <Tab disableRipple label="Item Three" />
        <Tab disableRipple label="Item Four" />
        <Tab disableRipple label="Item Five" />
        <Tab disableRipple label="Item Six" />
        <Tab disableRipple label="Item Seven" />
      </Tabs>
    </Box>
  );
}

//maxWidth: { xs: 320, sm: 480 },
