logger
======================

a log wrappen for log4js

usage
--------------------- 

### require
```
var logger = require('logger');
```

### Init log config
```
logger.init({

	levels: {
				"[all]": "TRACE"
			}
});
```

### function
```
var log = logger();
log.fatal('fatal', 'SSS');
log.error('error%s', 'ddd');
log.info('info');
log.debug('debug');
log.trace('trace');
```

or

### function
```
logger.setName('log name');
var log = logger();
log.fatal('fatal', 'SSS');

```


config
----------------------

1. load config from file

	```
		var logger = require('logger');
		logger.init('/path/log/config.json');
	```
2. load config from env

	```
		set environment
		process.env.LOG4JS_CONFIG = '/path/log/config.json';
	```
