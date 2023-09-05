class BaseModel {
    constructor() {
        this.id = { type: 'uuid', primary: true, generated: 'uuid' };
        this.createdAt = { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' };
        this.updatedAt = { type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' };
    }
}

module.exports = { BaseModel };