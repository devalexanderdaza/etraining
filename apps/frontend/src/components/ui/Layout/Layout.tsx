import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component={"section"}
      id="app"
      sx={{
        padding: 2,
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export { Layout };
