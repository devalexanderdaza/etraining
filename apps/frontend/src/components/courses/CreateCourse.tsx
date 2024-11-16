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
import AddIcon from "@mui/icons-material/Add";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Course } from "../../libs/interfaces/course";
import { createCourse } from "../../services/courses";

// Zustand
import { useState } from "react";
import { useUIStore } from "../../zustand/store";

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

    if (course && course.id) {
      newAlert({
        id: new Date().getTime().toString(),
        message: `Course created successfully`,
        severity: "success",
      });
      setLoading(false);
      // Redirection to the courses list page
      setTimeout(() => {
        history.go(-1);
      }, 3000);
    } else if (course && course.response.data.message) {
      newAlert({
        id: new Date().getTime().toString(),
        message: course.response.data.message,
        severity: "error",
      });
    } else {
      newAlert({
        id: new Date().getTime().toString(),
        message: "Error creating course",
        severity: "error",
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
        label="NOMBRE DEL CURSO"
        disabled={loading}
        placeholder="NestJS desde cero a experto"
        helperText={!!errors.name && errors.name.message}
        error={!!errors.name}
        {...register("name", {
          required: REQUIRED_MESSAGE,
        })}
        value={watch("name")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ContactEmergencyIcon color="secondary"/>
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
          label="CATEGORÍA"
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
                <Diversity3Icon color="secondary"/>
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
          label="MODALIDAD"
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
                <Diversity3Icon color="secondary"/>
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
          label="DURACIÓN"
          disabled={loading}
          placeholder="40 horas"
          helperText={!!errors.duration && errors.duration.message}
          error={!!errors.duration}
          {...register("duration", {
            required: REQUIRED_MESSAGE,
          })}
          value={watch("duration")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon color="secondary"/>
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
          label="CUOTA"
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
                <ContactEmergencyIcon color="secondary"/>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button type="submit" variant="contained" disabled={loading} startIcon={<AddIcon />} style={{ 
            color: "#1b0a1e",
            borderColor: "#1b0a1e",
          }}>
        {loading ? "Creando curso..." : "Crear curso"}
      </Button>
    </Box>
  );
};

export { CreateCourse };
