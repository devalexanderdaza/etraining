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
  interface User {
    id: number;
    name: string;
    email: string;
    verified_email_at: string;
    role_id: string;
    created_at: string;
    updated_at: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      const usersArray: any[] | ((prevState: never[]) => never[]) = [];
      
      users.forEach((user: any) => {
        usersArray.push({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone: user.phone,
          verified_email_at: user.verified_email_at ? "Verificado" : "No verificado",
          role_id: user.role.name.toUpperCase(),
          created_at: new Date(user.created_at).toLocaleString(),
          updated_at: new Date(user.updated_at).toLocaleString(),
        });
      });

      setUsers(usersArray);
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
          style={{ 
            color: "#1b0a1e",
            borderColor: "#1b0a1e",
          }}
        >
          Nuevo usuario
        </Button>
      </Link>
      <EnhancedTable rows={users} actions={[]} dict={{
        id: "ID",
        first_name: "Nombre",
        last_name: "Apellido",
        email: "Correo",
        phone: "Teléfono",
        verified_email_at: "Estado",
        role_id: "Rol",
        created_at: "Creado",
        updated_at: "Actualizado",
      }} total={10} tableTitle="Usuarios" />
    </Box>
  );
};

export { Users };
