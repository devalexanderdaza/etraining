// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CoPresentIcon from '@mui/icons-material/CoPresent';

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
    icon: <AccountCircleIcon fontSize="small" />,
  },
  {
    title: "Cursos",
    path: "/courses",
    icon: <CoPresentIcon fontSize="small" />,
  },
];

export { drawerData };
