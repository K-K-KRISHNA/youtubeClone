export const SideBarStyles = {
  scroller: {
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(1,1,1,0.5)",
    },
    "&::-webkit-scrollbar": {
      width: "6px",
      backgroundColor: "#F5F5F5",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: "40px",
    },
    position: { xs: "absolute", md: "sticky" },
    zIndex: 30,
    top: "60px",
    // opacity:0.5
  },
  sizeThirty: {
    width: "30px",
  },
};
