import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

// Services
import { getUsers } from "../../services";

// Components
import { EnhancedTable } from "../ui";

// Icons
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Box>
      <Link to={"/new-user"}>
        <Button
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
          startIcon={<AddIcon />}
        >
          Crear usuario
        </Button>
      </Link>
      <EnhancedTable rows={users} actions={[]} dict={{}} total={10} />
    </Box>
  );
};

export { Users };
