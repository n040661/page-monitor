!function(n){var t=n.BDWMMonitor,r=window.location;t.define("exception",function(){return{run:function(){this.catchException()},catchException:function(){function n(n){var t=n.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,9).join("@").replace(/\?[^:]+/gi,""),r=n.toString();return t.indexOf(r)<0&&(t=r+"@"+t),t}window.onerror=function(i,o,e,c,a){var u=i;a&&a.stack&&(u=n(a)),t.report("exception",{tag:"js_error",err_txt:u,url:o,purl:r.href,ln:e,col:c,err_status:401})}}}})}(window);