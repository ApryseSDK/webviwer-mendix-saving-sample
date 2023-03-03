/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{470:function(Aa,xa,r){function oa(ea){ea.Ha();ea.advance();var ja=ea.current.textContent;ea.$a();return ja}function na(ea){var ja=[];for(ea.Ha();ea.advance();){var ka=ea.Na();"field"===ka?ja.push(String(ea.ga("name"))):Object(e.j)("unrecognised field list element: "+ka)}ea.$a();return ja}function ma(ea,ja){return ja?"false"!==ea:"true"===ea}function fa(ea,ja){var ka=ea.Na();switch(ka){case "javascript":return{name:"JavaScript",
javascript:ea.current.textContent};case "uri":return{name:"URI",uri:ea.ga("uri")};case "goto":ka=null;ea.Ha();if(ea.advance()){var ha=ea.ga("fit");ka={page:ea.ga("page"),fit:ha};if("0"===ka.page)Object(e.j)("null page encountered in dest");else switch(ja=ja(Number(ka.page)),ha){case "Fit":case "FitB":break;case "FitH":case "FitBH":ka.top=ja.ra({x:0,y:ea.ga("top")||0}).y;break;case "FitV":case "FitBV":ka.left=ja.ra({x:ea.ga("left")||0,y:0}).x;break;case "FitR":ha=ja.ra({x:ea.ga("left")||0,y:ea.ga("top")||
0});ja=ja.ra({x:ea.ga("right")||0,y:ea.ga("bottom")||0});ja=new z.d(ha.x,ha.y,ja.x,ja.y);ka.top=ja.y1;ka.left=ja.x1;ka.bottom=ja.y2;ka.right=ja.x2;break;case "XYZ":ha=ja.ra({x:ea.ga("left")||0,y:ea.ga("top")||0});ka.top=ha.y;ka.left=ha.x;ka.zoom=ea.ga("zoom")||0;break;default:Object(e.j)("unknown dest fit: "+ha)}ka={name:"GoTo",dest:ka}}else Object(e.j)("missing dest in GoTo action");ea.$a();return ka;case "submit-form":ka={name:"SubmitForm",url:ea.ga("url"),format:ea.ga("format"),method:ea.ga("method")||
"POST",exclude:ma(ea.ga("exclude"),!1)};ja=ea.ga("flags");ka.flags=ja?ja.split(" "):[];for(ea.Ha();ea.advance();)switch(ja=ea.Na(),ja){case "fields":ka.fields=na(ea);break;default:Object(e.j)("unrecognised submit-form child: "+ja)}ea.$a();return ka;case "reset-form":ka={name:"ResetForm",exclude:ma(ea.ga("exclude"),!1)};for(ea.Ha();ea.advance();)switch(ja=ea.Na(),ja){case "fields":ka.fields=na(ea);break;default:Object(e.j)("unrecognised reset-form child: "+ja)}ea.$a();return ka;case "hide":ka={name:"Hide",
hide:ma(ea.ga("hide"),!0)};for(ea.Ha();ea.advance();)switch(ja=ea.Na(),ja){case "fields":ka.fields=na(ea);break;default:Object(e.j)("unrecognised hide child: "+ja)}ea.$a();return ka;case "named":return{name:"Named",action:ea.ga("name")};default:Object(e.j)("Encountered unexpected action type: "+ka)}return null}function da(ea,ja,ka){var ha={};for(ea.Ha();ea.advance();){var la=ea.Na();switch(la){case "action":la=ea.ga("trigger");if(ja?-1!==ja.indexOf(la):1){ha[la]=[];for(ea.Ha();ea.advance();){var pa=
fa(ea,ka);Object(h.isNull)(pa)||ha[la].push(pa)}ea.$a()}else Object(e.j)("encountered unexpected trigger on field: "+la);break;default:Object(e.j)("encountered unknown action child: "+la)}}ea.$a();return ha}function aa(ea){return new x.a(ea.ga("r")||0,ea.ga("g")||0,ea.ga("b")||0,ea.ga("a")||1)}function y(ea,ja){var ka=ea.ga("name"),ha=ea.ga("type")||"Type1",la=ea.ga("size"),pa=ja.ra({x:0,y:0});la=ja.ra({x:Number(la),y:0});ja=pa.x-la.x;pa=pa.y-la.y;ka={name:ka,type:ha,size:Math.sqrt(ja*ja+pa*pa)||
0,strokeColor:[0,0,0],fillColor:[0,0,0]};for(ea.Ha();ea.advance();)switch(ha=ea.Na(),ha){case "stroke-color":ka.strokeColor=aa(ea);break;case "fill-color":ka.fillColor=aa(ea);break;default:Object(e.j)("unrecognised font child: "+ha)}ea.$a();return ka}function w(ea){var ja=[];for(ea.Ha();ea.advance();){var ka=ea.Na();switch(ka){case "option":ka=ja;var ha=ka.push;var la=ea;la={value:la.ga("value"),displayValue:la.ga("display-value")||void 0};ha.call(ka,la);break;default:Object(e.j)("unrecognised options child: "+
ka)}}ea.$a();return ja}function f(ea,ja){var ka=ea.ga("name"),ha={type:ea.ga("type"),quadding:ea.ga("quadding")||"Left-justified",maxLen:ea.ga("max-len")||-1},la=ea.ga("flags");Object(h.isString)(la)&&(ha.flags=la.split(" "));for(ea.Ha();ea.advance();)switch(la=ea.Na(),la){case "actions":ha.actions=da(ea,["C","F","K","V"],function(){return ja});break;case "default-value":ha.defaultValue=oa(ea);break;case "font":ha.font=y(ea,ja);break;case "options":ha.options=w(ea);break;default:Object(e.j)("unknown field child: "+
la)}ea.$a();return new window.Annotations.ha.pa(ka,ha)}function a(ea,ja){switch(ea.type){case "Tx":try{if(Object(ia.c)(ea.actions))return new n.a.DatePickerWidgetAnnotation(ea,ja)}catch(ka){Object(e.j)(ka)}return new n.a.TextWidgetAnnotation(ea,ja);case "Ch":return ea.flags.get(ca.WidgetFlags.COMBO)?new n.a.ChoiceWidgetAnnotation(ea,ja):new n.a.ListWidgetAnnotation(ea,ja);case "Btn":return ea.flags.get(ca.WidgetFlags.PUSH_BUTTON)?new n.a.PushButtonWidgetAnnotation(ea,ja):ea.flags.get(ca.WidgetFlags.RADIO)?
new n.a.RadioButtonWidgetAnnotation(ea,ja):new n.a.CheckButtonWidgetAnnotation(ea,ja);case "Sig":return new n.a.SignatureWidgetAnnotation(ea,ja);default:Object(e.j)("Unrecognised field type: "+ea.type)}return null}function b(ea,ja,ka,ha){var la=[],pa={};ea.Ha();var qa=[],ra={},ua=[];Object(ba.a)(function(){if(ea.advance()){var va=ea.Na();switch(va){case "calculation-order":qa="calculation-order"===ea.Na()?na(ea):[];break;case "document-actions":ra=da(ea,["Init","Open"],ja);break;case "pages":va=[];
for(ea.Ha();ea.advance();){var Da=ea.Na();switch(Da){case "page":Da=va;var sa=Da.push,Ca=ea,Ha=ja,za={number:Ca.ga("number")};for(Ca.Ha();Ca.advance();){var Ja=Ca.Na();switch(Ja){case "actions":za.actions=da(Ca,["O","C"],Ha);break;default:Object(e.j)("unrecognised page child: "+Ja)}}Ca.$a();sa.call(Da,za);break;default:Object(e.j)("unrecognised page child: "+Da)}}ea.$a();ua=va;break;case "field":Da=f(ea,ja(1));pa[Da.name]=Da;break;case "widget":va={border:{style:"Solid",width:1},backgroundColor:[],
fieldName:ea.ga("field"),page:ea.ga("page"),index:ea.ga("index")||0,rotation:ea.ga("rotation")||0,flags:[],isImporting:!0};(Da=ea.ga("appearance"))&&(va.appearance=Da);(Da=ea.ga("flags"))&&(va.flags=Da.split(" "));for(ea.Ha();ea.advance();)switch(Da=ea.Na(),Da){case "rect":sa=ea;Ca=ja(Number(va.page));Da=Ca.ra({x:sa.ga("x1")||0,y:sa.ga("y1")||0});sa=Ca.ra({x:sa.ga("x2")||0,y:sa.ga("y2")||0});Da=new z.d(Da.x,Da.y,sa.x,sa.y);Da.normalize();va.rect={x1:Da.x1,y1:Da.y1,x2:Da.x2,y2:Da.y2};break;case "border":Da=
ea;sa={style:Da.ga("style")||"Solid",width:Da.ga("width")||1,color:[0,0,0]};for(Da.Ha();Da.advance();)switch(Ca=Da.Na(),Ca){case "color":sa.color=aa(Da);break;default:Object(e.j)("unrecognised border child: "+Ca)}Da.$a();va.border=sa;break;case "background-color":va.backgroundColor=aa(ea);break;case "actions":va.actions=da(ea,"E X D U Fo Bl PO PC PV PI".split(" "),ja);break;case "appearances":Da=ea;sa=Object(ia.b)(va,"appearances");for(Da.Ha();Da.advance();)if(Ca=Da.Na(),"appearance"===Ca){Ca=Da.ga("name");
Ha=Object(ia.b)(sa,Ca);Ca=Da;for(Ca.Ha();Ca.advance();)switch(za=Ca.Na(),za){case "Normal":Object(ia.b)(Ha,"Normal").data=Ca.current.textContent;break;default:Object(e.j)("unexpected appearance state: ",za)}Ca.$a()}else Object(e.j)("unexpected appearances child: "+Ca);Da.$a();break;case "extra":Da=ea;sa=ja;Ca={};for(Da.Ha();Da.advance();)switch(Ha=Da.Na(),Ha){case "font":Ca.font=y(Da,sa(1));break;default:Object(e.j)("unrecognised extra child: "+Ha)}Da.$a();Da=Ca;Da.font&&(va.font=Da.font);break;case "captions":sa=
ea;Da={};(Ca=sa.ga("Normal"))&&(Da.Normal=Ca);(Ca=sa.ga("Rollover"))&&(Da.Rollover=Ca);(sa=sa.ga("Down"))&&(Da.Down=sa);va.captions=Da;break;default:Object(e.j)("unrecognised widget child: "+Da)}ea.$a();(Da=pa[va.fieldName])?(va=a(Da,va),la.push(va)):Object(e.j)("ignoring widget with no corresponding field data: "+va.fieldName);break;default:Object(e.j)("Unknown element encountered in PDFInfo: "+va)}return!0}return!1},function(){ea.$a();ka({calculationOrder:qa,widgets:la,fields:pa,documentActions:ra,
pages:ua,custom:[]})},ha)}r.r(xa);r.d(xa,"parse",function(){return b});var e=r(2),h=r(1);r.n(h);var n=r(122),z=r(4),x=r(7),ba=r(20),ia=r(107),ca=r(17)}}]);}).call(this || window)
