const { EntitySchema } = require('typeorm');
const { BaseModel } = require('./baseModel');
class User extends BaseModel {
    constructor() {
        super();
        this.firstName = { type: "varchar", nullable: true };
        this.lastName = { type: "varchar", nullable: true };
        this.email = { type: "varchar", nullable: true };
        this.password = { type: "varchar", nullable: true };
        this.roleId = { type: "varchar", nullable: true };
        this.produceruserId = { type: "uuid", nullable: true }

    }
}
module.exports = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: new User(),
    relations: {
        role: {
            type: "many-to-one",
            target: "Role",
            inverseSide: "user"

        }
    }
})