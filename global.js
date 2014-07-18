define(['./zepto'], function __global(require, exports, module){
	var $ = require('./zepto'),
			n = function( t ){
				"no" != $(t.currentTarget).attr('data-event') && t.preventDefault(), t.stopPropagation();
				var n = $(t.currentTarget),
						i = n.attr('data-action') || '',
						a = /^([a-zA-Z0-9_]+):\/\/([a-zA-Z0-9_]+)$/,
						o = a.exec(i),
						r = null,
						s = null,
						l = {node: n, e_node: t, _node: t.currentTarget};
				o && (r = o[1], s = o[2], r in e && s in e[r] && e[r][s].call(null, l));
			},
			i = {

			};
	return i;
});