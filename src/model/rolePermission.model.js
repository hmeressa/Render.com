const { EntitySchema } = require("typeorm");

const RolePermission = new EntitySchema({
    name: "RolePermission",
    tableName: "rolePermissions",
    columns: {
        roleId: {
            type: 'uuid',
            primary: true
        },
        permissionId: {
            type: 'uuid',
            primary: true
        }
    },
    relations: {
        role: {
            type: 'many-to-one',
            target: 'Role',
            onDelete: "CASCADE",
            onUpdate: 'CASCADE'
        },
        permission: {
            type: 'many-to-one',
            target: 'Permission',
            onDelete: "CASCADE",
            onUpdate: 'CASCADE'
        },

    },
}
);

module.exports = RolePermission;

