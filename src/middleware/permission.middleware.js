const { ErrorApi } = require("../handler/error.handler");

const permissions = (requiredPermission = []) => {
    return (req, res, next) => {
        try {
            const user = req.user;
            if (!user) {
                return next(new ErrorApi("User is Not Authorized. Please Login first", 401));
            }
            if (user?.role?.permission) {
                const hasRequiredPermission = user.role.permission.some(perm =>
                    requiredPermission.includes(perm.name)
                );

                if (!hasRequiredPermission) {
                    return next(new ErrorApi("You don't have the required permission", 401));
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
