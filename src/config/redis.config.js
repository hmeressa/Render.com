// const Redis = require('ioredis');

// const redisUrl = "redis://red-ck5f74mi9prc73aqa8ig:6379";
// const urlParts = redisUrl.match(/redis:\/\/(.*?):(\d+)/);

// let RedisInstance;

// try {
//     if (urlParts && urlParts.length === 3) {
//         const host = urlParts[1];
//         const port = parseInt(urlParts[2], 10);
//         RedisInstance = new Redis({
//             host: host,
//             port: port
//         });
//     } else {
//         throw new Error('Invalid Redis URL: ' + redisUrl);
//     }
// } catch (error) {
//     console.error('Error creating Redis instance:', error);
// }

// module.exports = { RedisInstance };
