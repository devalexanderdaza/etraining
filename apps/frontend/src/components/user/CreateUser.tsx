import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";
import { CreateUser as ICreateUser, REQUIRED_MESSAGE } from "../../libs";

import AddIcon from "@mui/icons-material/Add";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useEffect, useState } from "react";
import { Course } from "../../libs/interfaces/course";
import { createUser } from "../../services";
import { getCourses } from "../../services/courses";

// Zustand
import { useUIStore } from "../../zustand/store";

const CreateUser = () => {
  const { newAlert } = useUIStore();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ICreateUser>();

  const onSubmit = async (data: ICreateUser) => {
    setLoading(true);
    const user = await createUser(data);
    if (user && user.id) {
      newAlert({
        id: new Date().getTime().toString(),
        message: `User created successfully`,
        severity: "success",
      });
      setLoading(false);
      // Redirection to the users list page
      setTimeout(() => {
        history.go(-1);
      } , 3000);
    } else if (user && user.response.data.message) {
      newAlert({
        id: new Date().getTime().toString(),
        message: user.response.data.message,
        severity: "error",
      });
    } else {
      newAlert({
        id: new Date().getTime().toString(),
        message: "Error creating user",
        severity: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getCourses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          required
          type="text"
          autoComplete="off"
          label="NOMBRES"
          disabled={loading}
          helperText={!!errors.first_name && errors.first_name.message}
          error={!!errors.first_name}
          {...register("first_name", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("first_name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          required
          sx={{ ml: 2 }}
          type="text"
          autoComplete="off"
          label="APELLIDOS"
          disabled={loading}
          helperText={!!errors.last_name && errors.last_name.message}
          error={!!errors.last_name}
          {...register("last_name", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("last_name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          required
          type="text"
          autoComplete="off"
          label="CORREO ELECTRÓNICO"
          disabled={loading}
          helperText={!!errors.email && errors.email.message}
          error={!!errors.email}
          {...register("email", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon color="secondary" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          sx={{ ml: 2 }}
          required
          type="text"
          autoComplete="off"
          label="TELÉFONO"
          disabled={loading}
          helperText={!!errors.phone && errors.phone.message}
          error={!!errors.phone}
          {...register("phone", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("phone")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon color="secondary"/>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TextField
        fullWidth
        required
        sx={{ mb: 2 }}
        select
        autoComplete="off"
        label="TIPO DE USUARIO"
        disabled={loading}
        helperText={!!errors.role && errors.role.message}
        error={!!errors.role}
        {...register("role", {
          required: REQUIRED_MESSAGE,
        })}
        value={watch("role")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Diversity3Icon color="secondary" />
            </InputAdornment>
          ),
        }}
      >
        <MenuItem value="Admin">Administrador</MenuItem>
        <MenuItem value="Coordinador">Coordinador</MenuItem>
        <MenuItem value="Docente">Docente</MenuItem>
        <MenuItem value="Estudiante">Estudiante</MenuItem>
      </TextField>

      {courses.length > 0 ? (
        <TextField
          fullWidth
          required
          sx={{ mb: 2 }}
          select
          autoComplete="off"
          label="CURSO"
          disabled={loading}
          helperText={!!errors.course_id && errors.course_id.message}
          error={!!errors.course_id}
          {...register("course_id", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("course_id")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Diversity3Icon color="secondary"/>
              </InputAdornment>
            ),
          }}
        >
          {courses.map((course: Course) => (
            <MenuItem key={course.id} value={course.id}>
              {course.name}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <Box> No hay cursos</Box>
      )}

      <Button type="submit" variant="contained" startIcon={<AddIcon />} style={{ 
            color: "#1b0a1e",
            borderColor: "#1b0a1e",
          }}>
        Crear usuario
      </Button>
    </Box>
  );
};

export default CreateUser;
