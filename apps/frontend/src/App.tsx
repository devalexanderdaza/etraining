import { Route, Routes } from "react-router-dom";

// Components
import UserCourses from "./components/user-courses/UserCourses";
import { Courses, CreateCourse, GeneralLoader, Users } from "./components";
import CreateUser from "./components/user/CreateUser";

// Zustand
import { useAuthStore } from "./zustand/store";
import { useEffect } from "react";

function App() {
  const { login, isAuthenticated } = useAuthStore((state) => state);

  useEffect(() => {
    login("juancamilorr2012@hotmail.com", "xd");
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
