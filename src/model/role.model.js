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
            type: "One-to-Many",
            target: "User",
            inverseSide: "role"
        }
    }
})