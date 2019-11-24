dbUtils = require('tedious-promises');
tediousTYPES = require('tedious').TYPES;
var dbConfig, poolConfig;
var ConnectionPool = require('tedious-connection-pool');
if(NODE_ENV && NODE_ENV != 'test') {
    dbConfig = require('./config');
    poolConfig = {
        min: 3,
        max: 20,
        log: true
    }; // see tedious-connection-pool documentation

    var _ = require('lodash');
    dbUtils.setDefaultColumnRenamer(_.camelCase);
}
else {
    dbConfig = require('./testConfig');
    poolConfig = {
        min: 1,
        max: 1,
        log: false
    };
}
var pool = new ConnectionPool(poolConfig, dbConfig);
dbUtils.setConnectionPool(pool);
















