/*
 Licensed under the MIT license:
 http://www.opensource.org/licenses/mit-license.php
*/
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var b=[].slice.call(arguments);typeof console.log==="object"?log.apply.call(console.log,console,b):console.log.apply(console,b)}};
(function(b){function c(){}for(var a="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),d;d=a.pop();)b[d]=b[d]||c})(function(){try{return console.log(),window.console}catch(b){return window.console={}}}());
jQuery.cookie=function(b,c,a){if(arguments.length>1&&String(c)!=="[object Object]"){a=jQuery.extend({},a);if(c===null||c===void 0)a.expires=-1;if(typeof a.expires==="number"){var d=a.expires,e=a.expires=new Date;e.setDate(e.getDate()+d)}c=String(c);return document.cookie=[encodeURIComponent(b),"=",a.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=c||{};e=a.raw?function(a){return a}:
decodeURIComponent;return(d=RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)").exec(document.cookie))?e(d[1]):null};(function(b){b.fn.slideto=function(c){c=b.extend({slide_duration:"slow",highlight_duration:3E3,highlight:!0,highlight_color:"#FFFF99"},c);return this.each(function(){obj=b(this);b("html, body").animate({scrollTop:obj.offset().top,scrollLeft:obj.offset().left},c.slide_duration)})}})(jQuery);
$(document).ready(function(){var b=0,d=0,a=0,c="";$("td.text").each(function(){$(this).append("<pre style='text-align: center'>* * *</pre>")});$(document).keypress(function(a){if(a.which==106||a.keyCode==39)b<3&&(b+=1),c="#f"+b.toString(),$(c).slideto({highlight:!1,slide_duration:0});else if(a.which==107||a.keyCode==37)b>0&&(b-=1),c="#f"+b.toString(),$(c).slideto({highlight:!1,slide_duration:0})});$("p.content").mousedown(function(){d=parseInt(this.id.substr(1));b=parseInt($(this).parent().parent().get(0).id.substr(1));
d!=a?(a=d,$("#lesezeichen").remove(),$(this).prepend('<img id="lesezeichen" width="48px" src="img/margolin.png" />'),$.cookie("margolin",this.id,{expires:365}),$(this).mouseleave()):(a=0,$("#lesezeichen").remove(),$.cookie("margolin",0,{expires:365}))});$("p.content").hover(function(){this.id!=a&&$(this).prepend('<img id="bookmark-hover" width="48px" src="img/margolin-outline.png" />')},function(){$("#bookmark-hover").remove()});$("a.top").bind("click",function(){b=0});$("#"+$.cookie("margolin")).mousedown().slideto({highlight_duration:"short"})});