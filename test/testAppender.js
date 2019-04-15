var logger = require('../index');
logger.init(

    {
        "levels": {
            "[all]": "TRACE"
        },
        "appenders": [{
                "type": "log4js_cassandra",
                "category": "log"
            }]
            //,"replaceConsole": true
        ,appName: 'try me'
    });

var log = logger('test');
log.debug('hello debug');
// log.debug('hello debug');