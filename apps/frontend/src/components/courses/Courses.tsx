import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

// Services
import { getCourses } from "../../services/courses";

// Components
import { EnhancedTable } from "../ui";

// Icons
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

interface Course {
  id: any;
  name: any;
  category_id: any;
  modality_id: any;
  duration: any;
  couta: any;
  created_at: any;
  updated_at: any;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  
  useEffect(() => {
    getCourses().then((courses) => {
      const coursesArray: ((prevState: never[]) => never[]) | { id: any; name: any; category_id: any; modality_id: any; duration: any; couta: any; created_at: any; updated_at: any; }[] = [];
      
      courses.forEach((course: any) => {
        coursesArray.push({
          id: course.id,
          name: course.name,
          category_id: course.category.name,
          modality_id: course.modality.name,
          duration: course.duration,
          couta: course.couta,
          created_at: new Date(course.created_at).toLocaleString(),
          updated_at: new Date(course.updated_at).toLocaleString(),
        });
      });

      setCourses(coursesArray);
    } );
  }, []);

  return (
    <Box>
      <Link to={"/new-course"}>
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
          Agregar un nuevo curso
        </Button>
      </Link>
      <EnhancedTable rows={courses} actions={[]} dict={{
        id: "ID",
        name: "Curso",
        category_id: "Categoría",
        modality_id: "Modalidad",
        duration: "Duración",
        couta: "Cuota",
        created_at: "Creado",
        updated_at: "Actualizado"
      }} total={10} tableTitle="Cursos"/>
    </Box>
  );
};

export { Courses };
