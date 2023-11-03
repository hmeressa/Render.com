const { ErrorApi } = require("../handler/error.handler");

const permissions = (requiredPermissions = []) => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            if (!user) {
                return next(new ErrorApi("User is Not Authorized. Please Login first", 401));
            }

            if (user?.role?.permission) {
                const hasRequiredPermission = requiredPermissions.every(requiredPermission =>
                    user.role.permission.map(permission => permission.name).includes(requiredPermission)
                );

                if (!hasRequiredPermission) {
                    return next(new ErrorApi("You don't have the required permission(s)", 401));
                }
                next();
            }
        } catch (error) {
            console.error(error);
            next(error);
        }
    };
};

module.exports = { permissions };
