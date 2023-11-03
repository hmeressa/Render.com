const { EntitySchema } = require('typeorm');
const { BaseModel } = require('./baseModel');
class Token extends BaseModel {
    constructor() {
        super();
        this.userId = { type: "varchar", nullable: true };
        this.token = { type: "varchar", nullable: true };
        this.isRevoked = { type: "boolean", default: false };
    }
}
module.exports = new EntitySchema({
    name: "Token",
    tableName: "tokens",
    columns: new Token()
})