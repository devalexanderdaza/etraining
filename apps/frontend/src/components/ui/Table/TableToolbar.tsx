import {
  Box,
  Typography
} from "@mui/material";

// Components
import { StyledToolbar } from "../../../components/styled/StyledTable/StyledToolbar";
import { TableAction } from "../../../libs/interfaces/ui/table/table-action";

interface Props {
  selected: readonly string[];
  numSelected: number;
  pathname: string;
  tableActions: TableAction[];
  readonly?: boolean;
  tableTitle?: string;
}

const EnhancedTableToolbar = ({
  numSelected,
  readonly,
  tableTitle,
}: Props) => {
  return (
    <StyledToolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        left: 0,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
        background: "#3a1535",
      }}
    >
      {numSelected > 0 ? (
        <Typography color="inherit" variant="body1">
          {numSelected > 1 ? `${numSelected} seleccionados` : "1 seleccionado"}
        </Typography>
      ) : (
        <Typography variant="h6" fontWeight={400}>
          {tableTitle}
        </Typography>
      )}
      {!readonly && (
        <Box>
        </Box>
      )}
    </StyledToolbar>
  );
};

export { EnhancedTableToolbar };
