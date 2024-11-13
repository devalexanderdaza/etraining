import { Course } from "../libs/interfaces/course";
import { api } from "../utils";

const getCourses = async () => {
  try {
    const { data } = await api.get("/courses");
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createCourse = async (course: Course) => {
  try {
    const { data } = await api.post("/courses", course);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getCourses, createCourse };
