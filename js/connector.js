!function(){let e,t,n;var s=function e(t){let n="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-";for(var a=0;a<8;a++)n+=s.charAt(Math.floor(Math.random()*s.length));return n}(8);async function a(o){let i=await chrome.runtime.connect({name:"keepAlive"});return clearTimeout(n),n=setTimeout(async function(){await e?.postMessage({type:"reset_port",content_id:s}),await e?.disconnect(),e=await a(o)},18e4),i.onMessage.addListener(function(e,t){o?.contentWindow.postMessage(e,"*")}),i.onDisconnect.addListener(async function(){o&&(o.contentWindow.postMessage("destruct","*"),o.parentNode.removeChild(o),o=null),e=null,removeEventListener("message",t),t=null,clearTimeout(n)}),i}async function o(){let n=document.querySelector("#sbox");if(n)return!1;(n=document.createElement("iframe")).style="display: none;",n.id="sbox",n.src=chrome.runtime.getURL("/js/sandbox.html"),e=await a(n),document.body.appendChild(n),t=addEventListener("message",t=>{try{e?.postMessage({...t.data,content_id:s})}catch(n){t.ports[0].postMessage({error:n})}},!1)}window.flag_sb_unique_st||(window.flag_sb_unique_st=!0,o())}();