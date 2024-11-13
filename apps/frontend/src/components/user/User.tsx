import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EditIcon from "@mui/icons-material/Edit";

const User = () => {
  const handleUpdate = () => {};

  return (
    <Box
      component={"section"}
      id="user"
      aria-label="user"
      aria-labelledby="user"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <PersonPinIcon fontSize="medium" />
        <Typography variant="h6" sx={{ ml: 1 }} fontWeight={600}>
          Usuario final
        </Typography>
      </Box>
      <Divider sx={{ mb: 2, mt: 1 }} />
      <CircularProgress />
      <Card>
        <CardHeader title={"ame"} subheader="Usuario final" />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2">Saldo actual: </Typography>
            <Typography variant="body2" fontWeight={600}></Typography>
          </Box>

          <Box>
            <Typography variant="body2">Medio de notificación: </Typography>
            <Typography variant="body2" fontWeight={600}></Typography>
          </Box>
        </CardContent>

        <CardActions>
          <Tooltip title="Actualizar medio de notificación">
            <IconButton onClick={handleUpdate}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Box>
  );
};

export { User };
