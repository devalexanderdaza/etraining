import { Typography, useTheme } from "@mui/material";

// Components

// Icons

// Zustand
import { useUIStore } from "../../../zustand/store";

// Components
import { StyledDrawerHeader } from "../../../components/styled/StyledDrawer/StyledDrawerHeader";

const DrawerHead = () => {
  const theme = useTheme();

  const { drawer } = useUIStore((state) => state);
  const { open } = drawer;

  return (
    <StyledDrawerHeader
      sx={{
        p: 2,
        display: open ? "flex" : "block",
        flexDirection: open ? "row" : "column",
        backgroundColor: theme.palette.background.default,
      }}
    >

      <Typography
        variant="h6"
        sx={{ flexGrow: 1, ml: open ? 1 : 0 }}
        fontSize={open ? "1.2rem" : "1.5rem"}
        fontWeight={600}
        textAlign={open ? "left" : "center"}
        color={"secondary.main"}
      >
        {open ? "ETraining" : "ET"}
      </Typography>
    </StyledDrawerHeader>
  );
};

export { DrawerHead };
