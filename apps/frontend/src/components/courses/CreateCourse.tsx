import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Constants
import { REQUIRED_MESSAGE } from "../../libs";

// Icons
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Course } from "../../libs/interfaces/course";
import { createCourse } from "../../services/courses";

// Zustand
import { useUIStore } from "../../zustand/store";
import { useState } from "react";

const CreateCourse = () => {
  const [loading, setLoading] = useState(false);
  const { newAlert } = useUIStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Course>();

  const onSubmit = async (data: Course) => {
    setLoading(true);
    const course = await createCourse(data);

    if (course) {
      newAlert({
        id: new Date().getTime().toString(),
        message: "Curso creado correctamente",
        severity: "success",
      });
    }
    setLoading(false);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        fullWidth
        required
        sx={{ mb: 2 }}
        type="text"
        autoComplete="off"
        label="Nombre del curso"
        disabled={loading}
        placeholder="Ej: Curso de Programación"
        helperText={!!errors.name && errors.name.message}
        error={!!errors.name}
        {...register("name", {
          required: REQUIRED_MESSAGE,
        })}
        value={watch("name")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContactEmergencyIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          display: "flex",
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          required
          sx={{ mb: 2 }}
          select
          autoComplete="off"
          label="Categoría"
          placeholder="Seleccionar"
          disabled={loading}
          helperText={!!errors.category_id && errors.category_id.message}
          error={!!errors.category_id}
          {...register("category_id", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("category_id")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Diversity3Icon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="1">Programación</MenuItem>
          <MenuItem value="2">Big Data</MenuItem>
          <MenuItem value="3">Blockchain</MenuItem>
          <MenuItem value="4">Marketing</MenuItem>
        </TextField>

        <TextField
          fullWidth
          required
          sx={{ ml: 2 }}
          select
          autoComplete="off"
          label="Modalidad"
          placeholder="Seleccionar"
          disabled={loading}
          helperText={!!errors.modality_id && errors.modality_id.message}
          error={!!errors.modality_id}
          {...register("modality_id", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("modality_id")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Diversity3Icon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="1">Virtual</MenuItem>
          <MenuItem value="2">Remoto</MenuItem>
          <MenuItem value="3">Presencial</MenuItem>
        </TextField>
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
          type="number"
          autoComplete="off"
          label="Duración"
          disabled={loading}
          placeholder="Ej: 200 horas"
          helperText={!!errors.duration && errors.duration.message}
          error={!!errors.duration}
          {...register("duration", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("duration")}
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
          type="number"
          autoComplete="off"
          label="Cuota"
          disabled={loading}
          placeholder="Ej: 2000"
          helperText={!!errors.couta && errors.couta.message}
          error={!!errors.couta}
          {...register("couta", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("couta")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? "Creando curso..." : "Crear curso"}
      </Button>
    </Box>
  );
};

export { CreateCourse };
