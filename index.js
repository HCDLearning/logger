var log4js = require('log4js');
var logName;

function Logger(name) {
	name = name || '';
	var log = log4js.getLogger(logName);

	return {
		fatal: function(){
			var args = Array.prototype.slice.call(arguments);
			args.push('logname: ' + name);
        	log.fatal.apply(log, args);
		},
		error: function(){
			var args = Array.prototype.slice.call(arguments);
			args.push('logname: ' + name);
        	log.error.apply(log, args);
		},
		info: function(){
			var args = Array.prototype.slice.call(arguments);
			args.push('logname: ' + name);
        	log.info.apply(log, args);
		},
		debug: function(){
			var args = Array.prototype.slice.call(arguments);
			args.push('logname: ' + name);
        	log.debug.apply(log, args);
		},
		trace: function(){
			var args = Array.prototype.slice.call(arguments);
			args.push('logname: ' + name);
        	log.trace.apply(log, args);
		}
	};
}

Logger.setName = function(name){
	logName = name;
}

Logger.init = function(options){
	if(options && options.logname){
		logName = options.logname;
	}
	
	log4js.configure(options);
}

Logger.express = function(level){
		return log4js.connectLogger(log4js.getLogger(logName),
			{ level: level });
}

// function addAppender(){
// 	log4js.loadAppender('cassandra', cassappender);
// 	log4js.addAppender(cassappender.appender());
// }

module.exports = Logger;