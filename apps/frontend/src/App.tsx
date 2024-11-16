import { Route, Routes } from "react-router-dom";

// Components
import { Courses, CreateCourse, GeneralLoader, Users } from "./components";
import UserCourses from "./components/user-courses/UserCourses";
import CreateUser from "./components/user/CreateUser";

// Zustand
import { useEffect } from "react";
import { useAuthStore } from "./zustand/store";

function App() {
  const { login, isAuthenticated } = useAuthStore((state) => state);

  useEffect(() => {
    login("dev.alexander.daza@gmail.com", "admin");
  }, [login]);

  if (!isAuthenticated) {
    return <GeneralLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/new-user" element={<CreateUser />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/new-course" element={<CreateCourse />} />
      <Route path="/enroll-me" element={<UserCourses />} />
    </Routes>
  );
}

export default App;
