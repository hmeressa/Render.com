const { EntitySchema } = require('typeorm');
const { BaseModel } = require('./baseModel');
class Role extends BaseModel {
    constructor() {
        super();
        this.name = { type: "varchar", nullable: true };
    }
}
module.exports = new EntitySchema({
    name: "Role",
    tableName: "roles",
    columns: new Role(),
    relations: {
        user: {
            type: "one-to-many",
            target: "User",
            inverseSide: "role"
        }
    }
})