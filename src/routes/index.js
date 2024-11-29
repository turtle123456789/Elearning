import CoursePage from "../pages/CoursePage/CoursePage";
import DefaultPage from "../pages/DefaultPage/DefaultPage";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import CartPage from "../pages/CartPage/CartPage";


export const routes = [
  {
    path: "/",
    element: <DefaultPage/>,
    children: [
      {path: "", element: <HomePage/>},
      {path: "/login",element: <LoginPage/>},
      {path: "/register",element: <RegisterPage/>},
      {path: "/course",element: <CoursePage/>},
      {path: "/teacher",element: <TeacherPage/>},
      {path: "/cart",element: <CartPage/>},
    ]
  },
  {path: "/account",element: <AccountPage/>}
] 