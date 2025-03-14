import HomePage from '../pages/home/home-page';
import {checkAuthenticatedRoute, checkUnauthenticatedRouteOnly} from "../utils/auth";
import LoginPage from "../pages/auth/login/login-page";

const routes = {
  '/login': () => checkUnauthenticatedRouteOnly(new LoginPage()),
  '/register': () => checkUnauthenticatedRouteOnly(new RegisterPage()),

  '/': () => checkAuthenticatedRoute(new HomePage()),
};

export default routes;
