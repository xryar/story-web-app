import CONFIG from "../config";
import {getActiveRoute} from "../routes/url-parser";

let token = CONFIG.ACCESS_TOKEN_KEY;

export function getAccessToken() {
    try {
        const accessToken = localStorage.getItem(token);

        if (accessToken === 'null' || accessToken === 'undefined') {
            return null;
        }

        return accessToken;
    } catch (error) {
        console.error('getAccessToken: error:', error);
        return null;
    }
}

export function removeAccessToken() {
    try {
        localStorage.removeItem(token);
        return true;
    } catch (error) {
        console.error('removeAccessToken: error:', error);
        return false;
    }
}

const unauthenticatedRoutesOnly = ['/login', '/register'];

export function checkUnauthenticatedRouteOnly(page) {
    const url = getActiveRoute();
    const isLogin = !!getAccessToken();

    if (unauthenticatedRoutesOnly.includes(url) && isLogin) {
        location.hash = '/';
        return null;
    }

    return page;
}

export function checkAuthenticatedRoute(page) {
    const isLogin = !!getAccessToken();

    if (!isLogin) {
        location.hash = '/login';
        return null;
    }

    return page;
}

export function getLogout() {
    removeAccessToken();
}