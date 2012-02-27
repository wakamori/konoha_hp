var _si_nativeSetInterval = window.setInterval;
var _si_nativeClearInterval = window.clearInterval;
var _si_intervalTime = 10;
var _si_counter = 1;
var _si_length = 0;
var _si_functions = {};
var _si_counters = {};
var _si_numbers = {};
var _si_intervalId = undefined;
var _si_loop = function() {
    var f = _si_functions, c = _si_counters, n = _si_numbers;
    for(var i in f) {
        if(!--c[i]) {
            f[i]();
            c[i] = n[i];
        }
    } 
};
window.setInterval = function(handler, time) {
    if(typeof handler == 'string')
        handler = new Function(handler);
    _si_functions[_si_counter] = handler;
    _si_counters[_si_counter] = _si_numbers[_si_counter] = Math.ceil(time / _si_intervalTime);
    if (++_si_length && !_si_intervalId) {
       _si_intervalId = _si_nativeSetInterval(_si_loop, _si_intervalTime);
    }
    return _si_counter++;
};
window.clearInterval = function(id) {
    if(_si_functions[id]) {
        delete _si_functions[id];
        delete _si_numbers[id];
        delete _si_counters[id];
        if (!--_si_length && _si_intervalId) {
            _si_nativeClearInterval(_si_intervalId);
            _si_intervalId = undefined;
        }
    }
};

