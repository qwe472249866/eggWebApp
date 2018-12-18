'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1545114607525_5587';
    // add your config here
    config.middleware = [];

    //mysql ds
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '127.0.0.1',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'qwe8244156',
            // 数据库名
            database: 'guns',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    //orm
    config.sequelize = {
        dialect: 'mysql',
        username: "root",
        password: "qwe8244156",
        host: '127.0.0.1',
        port: 3306,
        database: 'guns',
        //全局禁用时间戳和复数表名
        define: {
            timestamps: false,
            freezeTableName: true
        }
    };

    return config;
};
