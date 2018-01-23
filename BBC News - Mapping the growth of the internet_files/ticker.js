gloader.load(["glow","1","glow.dom","glow.events","glow.anim"],{onLoad:function(a){bbc.fmtj.utils.createObject("bbc.fmtj.apps.ticker.renderers");bbc.fmtj.apps.ticker.renderers.DefaultRenderer=function(d){var m=d;var s;var g;var c;var t="DefaultRenderer";var v="ticker_title";var q="ticker_content";var b="ticker_content_anchor";var x="unravel_bar";var f="title_container";var i="media_type";var n=false;var h;var w;var u;function k(z,A,y){s=z;s.startCommand=A;s.stopCommand=y}function l(y){g=y}function p(){return t}function o(F,A){c=F;c.html("");var E=a.dom.create("<div>");E.addClass(f);var B=a.dom.create("<h4/>");B.addClass(v);B.html(A.title+":");var D=a.dom.create("<p/>");D.addClass(q);if(A.url!==undefined&&A.url!==""){var z=a.dom.create("<a/>");z.attr("href",A.url);z.html(A.content);z.addClass(b);D.append(z)}else{D.html(A.content)}E.append(B);if(A.mediaType!==undefined&&A.mediaType!==""){var C=a.dom.create("<a>");C.addClass(i);E.append(C);C.addClass(A.mediaType);if(A.url!==undefined&&A.url!==""){C.attr("href",A.url)}}F.append(E);F.append(D);var y=a.dom.create("<div/>");y.addClass("unravel_bar");y.html("&nbsp;");F.append(y);w=a.events.addListener(D,"mouseover",function(){if(g!==undefined&&g()===s.startCommand){s(s.stopCommand);n=false}else{n=true}});u=a.events.addListener(D,"mouseout",function(){if(n==false){s(s.startCommand)}})}function e(J){var E=c.get("."+f);E.css("opacity","0");var D=c.get("."+x);var F=c.get("."+q).width();var A=E.width();var y=m.unravelTime?m.unravelTime:3;var H=c.width();var B=H/y;var z=F/B;var G=a.anim.css(D,z,{left:{from:A+5,to:A+F+10}},{destroyOnComplete:true});var C=a.anim.css(E,0.6,{opacity:{from:0,to:1}},{destroyOnComplete:true});a.events.addListener(C,"complete",function(){if(a.env.ie<=7){a.dom.get(E)[0].style.removeAttribute("filter")}c.get("."+i).css("visibility","visible");D.text("_")});var I=new a.anim.Timeline([C,G],{destroyOnComplete:true});h=a.events.addListener(I,"complete",function(){D.text("");if(J!==undefined){J()}});I.start()}function r(y){a.events.removeListener(w);a.events.removeListener(u);w=undefined;u=undefined;var A=c.get("."+q," ."+f);var z=a.anim.css(A,0.3,{opacity:{from:1,to:0}},{destroyOnComplete:true});return z}function j(){if(h!==undefined){a.events.removeListener(h);h=undefined}var y=c.get("."+x);y.css("display","none");c.get("."+i).css("visibility","visible")}return{setStartStopHandler:k,setTickerStateListener:l,toString:p,initialise:o,start:e,transition:r,complete:j}};bbc.fmtj.apps.ticker.renderers.WarningRenderer=function(d){var p=d;var w;var c;var y;var e=false;var t=false;var j;var s="in_sequence";var x="WarningRenderer";var A="ticker_title";var u="ticker_content";var b="ticker_content_anchor";var C="unravel_bar";var g="title_container";var k="media_type";var h="bg_bar";var o=false;var i;var B;var z;function m(E,F,D){w=E;w.startCommand=F;w.stopCommand=D}function n(D){_tickerStateListener=D}function r(){return x}function q(K,M){c=K;e=false;if(M.isSingleton!==undefined&&M.isSingleton===true){t=true}else{t=false}if(K.get("."+s).length>0){e=true}K.html("");var H=a.dom.create("<span>");H.addClass(s);var J=a.dom.create("<div>");J.addClass(g);var L=a.dom.create("<h4/>");L.addClass(A);L.html(M.title+":");J.append(L);var E=a.dom.create("<p/>");E.addClass(u);if(M.url!==undefined&&M.url!==""){var F=a.dom.create("<a/>");F.addClass(b);F.attr("href",M.url);F.html(M.content);F.css("z-index",2);E.append(F)}else{E.html(M.content)}E.css("visibility","hidden");var D=a.dom.create("<a>");D.addClass(k);J.append(D);if(M.mediaType!==undefined&&M.mediaType!==""){D.addClass(M.mediaType);if(M.url!==undefined&&M.url!==""){D.attr("href",M.url)}}K.append(J);K.append(E);K.append(H);var G=a.dom.create("<div/>");G.addClass(h);G.html("&nbsp;");G.css("top",-c.height());K.append(G);var I=a.dom.create("<div/>");I.addClass(C);I.html("&nbsp;");K.append(I);I.css("display","none");if(e===true){G.css("top","0px")}B=a.events.addListener(E,"mouseover",function(){if(_tickerStateListener!==undefined&&_tickerStateListener()===w.startCommand){w(w.stopCommand);o=false}else{o=true}});z=a.events.addListener(E,"mouseout",function(){if(o==false){w(w.startCommand)}})}function f(P){var I=c.get("."+C);var J=c.get("."+g);J.css("opacity","0");var O=c.get("."+u);var K=O.width();var D=p.unravelTime?p.unravelTime:3;var M=c.width();var F=M/D;var E=K/F;var L=a.anim.css(I,E,{left:{from:J.width()+5,to:J.width()+K+15}},{destroyOnComplete:true});var H=a.anim.css(J,0.6,{opacity:{from:0,to:1}},{destroyOnComplete:true});a.events.addListener(H,"complete",function(){if(a.env.ie<=7){a.dom.get(J)[0].style.removeAttribute("filter")}I.text("_")});var N=new a.anim.Timeline([H,L],{destroyOnComplete:true});i=a.events.addListener(N,"complete",function(){I.text("");if(P!==undefined){P()}});if(t===true){a.events.addListener(N,"complete",function(){var U=c.get("."+A).width();I.text("");var T=a.anim.css(I,1,{width:{from:0,to:0}},{destroyOnComplete:true});var S=a.anim.css(I,1,{width:{from:U+10,to:0},left:{from:0,to:U+9}},{destroyOnComplete:true});var R=a.anim.css(I,1,{width:{from:U+10,to:0},left:{from:0,to:U+9}},{destroyOnComplete:true});var Q=a.anim.css(I,1,{width:{from:U+10,to:0},left:{from:0,to:U+9}},{destroyOnComplete:true});j=new a.anim.Timeline([T,2,S,2,R,2,Q],{destroyOnComplete:true});j.start()})}if(e===true){e=false;c.get("."+C).css("visibility","visible");c.get("."+C).css("display","inline");O.css("visibility","visible");N.start()}else{var G=c.get("."+h);y=a.anim.css(G,0.5,{top:{from:-c.height(),to:"0px"}},{destroyOnComplete:true});a.events.addListener(y,"complete",function(){I.css("display","inline");O.css("visibility","visible");N.start()});y.start()}}function v(E){a.events.removeListener(B);a.events.removeListener(z);B=undefined;z=undefined;var H;if(this.toString()!==E.toString()){c.get("."+C).css("visibility","hidden");if(j!=undefined&&j.isPlaying){j.stop()}var I=c.get("."+h);var D=a.anim.css(I,0.2,{top:{from:"0px",to:-c.height()}},{destroyOnComplete:true});var G=c.get("."+u," ."+g);var F=a.anim.css(G,0.3,{opacity:{from:1,to:0}},{destroyOnComplete:true});F.start();H=new a.anim.Timeline([F,D],{destroyOnComplete:true})}return H}function l(){if(i!==undefined){a.events.removeListener(i);i=undefined}var E=c.get("."+h);var D=c.get("."+C);c.get("."+g).css("opacity","1");E.css("top","0px");c.get("."+u).css("visibility","visible");D.css("display","none")}return{setStartStopHandler:m,setTickerStateListener:n,toString:r,initialise:q,start:f,transition:v,complete:l}}}});gloader.load(["glow","1","glow.dom","glow.events"],{onLoad:function(a){bbc.fmtj.utils.createObject("bbc.fmtj.apps.ticker.Controller");bbc.fmtj.apps.ticker.Controller=(function(s){var G="ticker_container";var z="stopped";var A="started";var t="start_stop";var x="prev";var p="next";var e="renderer_output";var i="ticker_controls";var C=s;var f=a.dom.get(C.containerElementId);var y;var l=A;var D=0;var E;var c;var B;var F=-1;var u=false;function o(K,J){if(K===undefined||J===undefined){return false}var H=0;var I=0;for(var L in K){H++;if(K[L]!==J[L]){return false}}for(var L in J){I++}if(H!=I){return false}return true}function q(){var H=a.dom.create("<div/>");H.addClass(G);var I=a.dom.create("<div/>");I.addClass(e);H.append(I);f.append(H)}function j(H){for(messageClass in H){if(H[messageClass].setStartStopHandler!==undefined){H[messageClass].setStartStopHandler(m,A,z)}if(H[messageClass].setTickerStateListener!==undefined){H[messageClass].setTickerStateListener(n)}}}function r(I,H,O){var K=f.get("."+G);var P=f.get("."+i);if(P.length===0){P=a.dom.create("<ul/>");P.addClass(i);K.append(P);var L=a.dom.create("<div/>");L.width(1);L.height(1);K.append(L)}var J=a.dom.create("<li/>");var M=a.dom.create("<a/>");J.attr("title",O);M.addClass(I+"_anchor").attr("href","#"+f.attr("id"));var N=a.dom.create("<span/>").text(O);P.append(J);J.append(M);J.addClass(I);M.append(N);J.css("display","inline");a.events.addListener(J,"click",H);a.events.addListener(J,"mouseover",function(){var R=f.get("."+i);var Q=R.get("."+I);if(I===t){Q.removeClass(A+"_over");Q.removeClass(z+"_over");Q.addClass(n()+"_over")}else{Q.addClass(I+"_over")}});a.events.addListener(J,"mouseout",function(){var R=f.get("."+i);var Q=R.get("."+I);if(I===t){Q.removeClass(A+"_over");Q.removeClass(z+"_over")}else{Q.removeClass(I+"_over")}})}function h(I){if(o(I,c)===false){c=I;if(B!==undefined){a.events.removeListener(B);B=null}var H=C.renderers[I.messageClass];var J;if(y!==undefined&&l!==z&&y.transition!==undefined){J=y.transition(H)}if(J!==undefined){B=a.events.addListener(J,"complete",function(){y=H;k(I)});J.start()}else{y=H;k(I)}if(I.isSingleton!==undefined&&I.isSingleton===true){f.get("."+i).css("visibility","hidden")}else{f.get("."+i).css("visibility","visible")}}else{v(C.refreshRateSecs)}}function k(J){if(y!==undefined){var I=f.get("."+e);y.initialise(I,J);f.attr("class",J.messageClass);if(l===A){var H=f.get("."+i);y.start(function(){v(C.refreshRateSecs)})}else{if(y.complete!==undefined){y.complete()}}}}function m(H){if(l!==H){var I=f.get("."+t);switch(H){case z:window.clearTimeout(E);E=null;y.complete();I.removeClass(A).addClass(z);I.get("a span").text("Start");I.attr("title","Play ticker");break;case A:v(1);I.removeClass(z).addClass(A);I.get("a span").text("Stop");I.attr("title","Pause ticker");break;default:break}l=H}}function n(){return l}function b(){r(t,function(){var H=f.get("."+t);if(l===A){m(z);H.removeClass(A+"_over")}else{m(A);H.removeClass(z+"_over")}H.addClass(n()+"_over")},"Pause ticker");r(x,function(){m(z);g()},"Previous item");r(p,function(){m(z);w()},"Next item");f.get("."+t).addClass(A)}j(C.renderers);var d=0;E=setInterval(function(){if(C.messageContainer.messages.length>0){window.clearInterval(E);w()}else{if(d<(C.refreshRateSecs*10)){d++}else{v(C.refreshRateSecs)}}},100);function v(H){window.clearTimeout(E);E=setTimeout(function(){w()},H*1000)}function g(){F=C.messageContainer.messages[F-1]?F-1:C.messageContainer.messages.length-1;h(C.messageContainer.messages[F])}function w(){if(C.messageContainer.messages.length>0){f.css("display","block");if(u===false){q();b();u=true}F=C.messageContainer.messages[F+1]?F+1:0;h(C.messageContainer.messages[F])}else{f.css("display","none");v(C.refreshRateSecs)}}return{TICKER_ELEMENT_CLASS:G,RENDERER_OUTPUT_ELEMENT_CLASS:e,START_STOP_CONTROL_ELEMENT_CLASS:t,PLAY_STATE_PLAYING:A,PLAY_STATE_STOPPED:z,setState:m,getState:n,addControl:r,setMessage:h}})}});