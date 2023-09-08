const { EntitySchema } = require('typeorm');
const { BaseModel } = require('./baseModel');
class User extends BaseModel {
    constructor() {
        super();
        this.firstName = { type: "varchar", nullable: true };
        this.lastName = { type: "varchar", nullable: true };
        this.email = { type: "varchar", nullable: true };
        // this.password = { type: "varchar", nullable: true };
        this.roleId = { type: "varchar", nullable: true }
    }
}
module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: new User(),
    relations: {
        role: {
            type: "Many-to-One",
            target: "Role",
            inverseSide: "user"
        }
    }
})