(function() {
    const NODE_ENV = "dev"; //dev:开发环境 | test:测试环境 | prod:正式环境
    let ENV_VAR = null;

    if (process.env.NODE_ENV === "development") {
        ENV_VAR = require('.env.dev.js');
    } else if (process.env.NODE_ENV === "production") {
        ENV_VAR = require('.env.prod.js');
    }
    if (ENV_VAR) {
        process.uniEnv = {};
        for (let key in ENV_VAR) {
            process.uniEnv[key] = ENV_VAR[key];
        }
    }
})();
