import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { StyledTableHead } from "../../../components/styled/StyledTable/StyledTableHead";

interface Props {
  columns: readonly string[];
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numSelected: number;
  rowCount: number;
  readonly?: boolean;
}

const EnhancedTableHead = ({
  columns,
  numSelected,
  onSelectAllClick,
  rowCount,
  readonly,
}: Props) => {
  return (
    <StyledTableHead
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
      style={{
        backgroundColor: "#1b0a1e",
      }}
    >
      <TableRow
        sx={{
          color: "inherit",
        }}
      >
        {!readonly && (
          <TableCell
            padding="checkbox"
            sx={{
              color: "inherit",
            }}
          >
            <Checkbox
              color="secondary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
              style={{
                color: "#fd7f00",
              }}
            />
          </TableCell>
        )}
        {columns.slice(1).map((column, i) => (
          <TableCell
            key={i}
            align="left"
            padding="normal"
            sx={{
              color: "inherit",
            }}
          >
            <Typography variant="body2" fontWeight={600} color="inherit">
              {column}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );
};

export { EnhancedTableHead };
