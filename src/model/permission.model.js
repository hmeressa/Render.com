const { EntitySchema } = require('typeorm');
const { BaseModel } = require('./baseModel');
class Permission extends BaseModel {
    constructor() {
        super();
        this.name = { type: "varchar", nullable: true };
    }
}
module.exports = new EntitySchema({
    name: "Permission",
    tableName: "permissins",
    columns: new Permission(),
})