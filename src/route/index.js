const express = require('express');
const userRoute = require('./user.route');

const router = express.Router();

const routeList =
    [
        {
            path: "/user",
            route: userRoute
        }
    ];

routeList.forEach((route) => {
    router.use(route.path, route.route);
})

module.exports = router;