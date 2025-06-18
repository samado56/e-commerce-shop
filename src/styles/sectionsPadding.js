const sectionsPadding = ({ shrinkSideBar, isSmallScreen }) => {
  const padding = {
    paddingLeft: shrinkSideBar ? (isSmallScreen ? "70px" : "90px") : "220px",
  };
  return padding;
};

export default sectionsPadding;
