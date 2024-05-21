import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const ROUTES = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    isClicked: true,
    route: "/pages/dashboard",
  },
  {
    title: "About Me",
    icon: InfoIcon,
    isClicked: false,
    route: "/pages/aboutme",
  },
  {
    title: "Filings",
    icon: PendingActionsIcon,
    isClicked: false,
    route: "/pages/filings",
  },
  {
    title: "My Payroll Info",
    icon: LocalAtmIcon,
    isClicked: false,
    route: "/pages/mypayroll",
  },

  //last index shoud alwyas be logout
  {
    title: "Logout",
    icon: ExitToAppIcon,
    isClicked: false,
    route: "/",
  },
];
