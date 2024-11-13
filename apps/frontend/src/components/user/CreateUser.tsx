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

import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useEffect, useState } from "react";
import { getCourses } from "../../services/courses";
import { Course } from "../../libs/interfaces/course";
import { createUser } from "../../services";

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
    if (user) {
      newAlert({
        id: new Date().getTime().toString(),
        message: "Usuario creado correctamente",
        severity: "success",
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
          label="Nombre"
          disabled={loading}
          placeholder="Ej: Pepe"
          helperText={!!errors.first_name && errors.first_name.message}
          error={!!errors.first_name}
          {...register("first_name", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("first_name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
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
          label="Apellido"
          disabled={loading}
          placeholder="Ej: Argento"
          helperText={!!errors.last_name && errors.last_name.message}
          error={!!errors.last_name}
          {...register("last_name", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("last_name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
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
          label="Email"
          disabled={loading}
          placeholder="Ej: some@some.es"
          helperText={!!errors.email && errors.email.message}
          error={!!errors.email}
          {...register("email", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("email")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
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
          label="Teléfono"
          disabled={loading}
          placeholder="Ej: 123456789"
          helperText={!!errors.phone && errors.phone.message}
          error={!!errors.phone}
          {...register("phone", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("phone")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
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
        label="Rol"
        placeholder="Seleccionar"
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
              <Diversity3Icon />
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
          label="Curso"
          placeholder="Seleccionar"
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
                <Diversity3Icon />
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

      <Button type="submit" variant="contained">
        Guardar
      </Button>
    </Box>
  );
};

export default CreateUser;
