const checkPermission = (userPermission, requiredPermission) => {
    return requiredPermission.every(requiredPermission => {
        return userPermission?.role?.permission?.some(permission => permission.name === requiredPermission);
    });
};

module.exports = { checkPermission };