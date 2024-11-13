// Icons
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BookIcon from "@mui/icons-material/Book";

interface DrawerData {
  title: string;
  path: string;
  icon: JSX.Element;
  nested?: DrawerData[];
}

const drawerData: DrawerData[] = [
  {
    title: "Usuarios",
    path: "/",
    icon: <SupervisedUserCircleIcon fontSize="small" />,
  },
  {
    title: "Cursos",
    path: "/courses",
    icon: <BookIcon fontSize="small" />,
  },
];

export { drawerData };
