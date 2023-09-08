const { EntitySchema } = require("typeorm");
const { BaseModel } = require("./baseModel");

class RolePermission extends BaseModel {
    constructor() {
        super();
        this.roleId = { type: "varchar", nullable: true, primary: true };
        this.permissionId = { type: "varchar", nullable: true, primary: true };
    }
}
module.exports.RolePermission = new EntitySchema({
    name: "RolePermission",
    tableName: "rolePermission",
    columns: new RolePermission(),
    relations: {
        role: {
            type: 'many-to-one',
            target: 'Role',
        },
        permission: {
            type: 'many-to-one',
            target: 'Permission',
        },
        onDelete: "SET NULL",
        onUpdate: 'CASCADE'
    },
});

module.exports = RolePermission;
