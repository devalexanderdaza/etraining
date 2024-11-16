import { TableRow } from "@mui/material";
import { styled } from "@mui/system";

const StyledTableRow = styled(TableRow)(({ theme }) => {
  return {
    "&.Mui-selected": {
      backgroundColor: '#ffefe0'
        // theme.palette.mode === "dark"
        //   ? theme.palette.secondary.main
        //   : theme.palette.secondary.light,
    },
    "&.Mui-selected:hover": {
      backgroundColor: '#FFD2A7FF'
    },
  };
});

export { StyledTableRow };
