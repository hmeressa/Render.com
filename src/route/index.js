const express = require('express');
const userRoute = require('./user.route');
const roleRoute = require('./role.route');
const permissionRoute = require('./permission.route')

const router = express.Router();

const routeList =
    [
        {
            path: "/user",
            route: userRoute
        },
        {
            path: "/role",
            route: roleRoute
        },
        {
            path: "/permission",
            route: permissionRoute
        }
    ];

routeList.forEach((route) => {
    router.use(route.path, route.route);
})

module.exports = router;