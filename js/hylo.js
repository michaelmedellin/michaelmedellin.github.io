/*
 *  *  Hyphenator_Loader 5.0.1(devel) - client side hyphenation for webbrowsers
 *   *  Copyright (C) 2015  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *    *  https://github.com/mnater/Hyphenator
 *     * 
 *      *  Released under the MIT license
 *       *  http://mnater.github.io/Hyphenator/LICENSE.txt
 *        */

var Hyphenator_Loader=(function(window){'use strict';var languages,config,path,createElem=function(tagname){var r;if(window.document.createElementNS){r=window.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(window.document.createElement){r=window.document.createElement(tagname);}return r;},loadNrunHyphenator=function(config){var head,script,done=false;head=window.document.getElementsByTagName('head').item(0);script=createElem('script');script.src=path;script.type='text/javascript';script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;Hyphenator.config(config);Hyphenator.run();script.onload=script.onreadystatechange=null;if(head&&script.parentNode){head.removeChild(script);}}};head.appendChild(script);},checkLangSupport=function(){var shadowContainer,shadow,lang,fakeBdy=createElem('body');shadowContainer=createElem('div');shadowContainer.style.MozHyphens='auto';shadowContainer.style['-webkit-hyphens']='auto';shadowContainer.style['-ms-hyphens']='auto';shadowContainer.style.hyphens='auto';shadowContainer.style.fontSize='12px';shadowContainer.style.lineHeight='12px';shadowContainer.style.wordWrap='normal';shadowContainer.style.visibility='hidden';fakeBdy.appendChild(shadowContainer);window.document.documentElement.appendChild(fakeBdy);for(lang in languages){if(languages.hasOwnProperty(lang)){shadow=createElem('div');shadow.style.width='5em';shadow.lang=lang;shadow.style['-webkit-locale']="'"+lang+"'";shadow.appendChild(window.document.createTextNode(languages[lang]));shadowContainer.appendChild(shadow);if(shadow.offsetHeight===12){loadNrunHyphenator(config);break;}}}fakeBdy.parentNode.removeChild(fakeBdy);};return{init:function(langs,p,configs){languages=langs;path=p;config=configs||{};checkLangSupport();}};}(window));Hyphenator_Loader.init({"en":"hyphenationalgorithm","hy":"Հայերենն"},"./js/Hyphenator.js",{useCSS3hyphenation:true});
