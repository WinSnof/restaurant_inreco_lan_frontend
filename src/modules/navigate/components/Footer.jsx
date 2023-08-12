import { Box, Divider, IconButton, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Box>
      <Divider />
      <Box py={3} display="flex" justifyContent="center" alignItems="center">
        <Typography>Created by Viktor Kulakov</Typography>
        <IconButton
          title="My GitHub"
          onClick={() => openInNewTab("https://github.com/WinSnof")}
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};
