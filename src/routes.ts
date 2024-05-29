/**
 * An array of routes that are accesbile to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/admin",   // provisional
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /test(change later)
 * @type {string[]}
 */
export const authRoutes = [
    "/login",
    "/register",

]

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API auth purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
