import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

// Services
import { getCourses } from "../../services/courses";

// Components
import { EnhancedTable } from "../ui";

// Icons
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((courses) => {
      setCourses(courses);
    });
  }, []);

  return (
    <Box>
      <Link to={"/new-course"}>
        <Button
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
          startIcon={<AddIcon />}
        >
          Crear curso
        </Button>
      </Link>
      <EnhancedTable rows={courses} actions={[]} dict={{}} total={10} />
    </Box>
  );
};

export { Courses };
