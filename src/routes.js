
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import ListAlt from "@material-ui/icons/ListAlt";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import CommissionPage from "views/Commission/Commission.js";
import FinancePage from "views/Finance/Finance.js";
import LogisticsPage from "views/Logistics/Logistics.js";
import DashboardPage from "views/Dashboard/Dashboard.js";
import CatalogPage from "views/Catalog/Catalog.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Ваша статистика",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/catalog",
    name: "Торговая площадка",
    icon: ListAlt,
    component: CatalogPage,
    layout: "/admin"
  },
  {
    path: "/finance",
    name: "Финансовая платформа",
    icon: ListAlt,
    component: FinancePage,
    layout: "/admin"
  },
  {
    path: "/commission",
    name: "Комиссионная площадка",
    icon: ListAlt,
    component: CommissionPage,
    layout: "/admin"
  },
  {
    path: "/logistics",
    name: "Логистическая площадка",
    icon: ListAlt,
    component: LogisticsPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Отчеты",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Карта",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Уведомления",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Профиль пользователя",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
