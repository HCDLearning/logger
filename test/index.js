// process.env.LOG4CASS_PREFIX_KEYSPACE = "UAT_";
// process.env.LOG4CASS_SUFFIX_KEYSPACE = "_01";

var logger = require('../index');
logger.init(

{
	levels: {
		"[all]": "DEBUG"
	},
    appenders: [
        {
            type: "console"
        },
        {
            type: "log4js_cassandra",
            nodes: ["10.20.32.71"],
            username:'cassandra',
            password:'HCDhcd@123',
            keyspace:'logdb',
            table:'log',
            appName:'test'
        }
    ]
    //,"replaceConsole": true
}

	);


//logger.appName = "app";
//logger.setName('log');
var log = logger('service');

for(var i=0;i<1;i++){


log.fatal('fatal', 'SSS');
log.error('error%s', 'ddd');
log.info('info');
log.debug('debug');
log.trace('trace');
}
