"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[7238],{22021:function(e,t,n){n.d(t,{gP:function(){return l}});var o=n(72791);const r={prefix:String(Math.round(1e10*Math.random())),current:0},s=o.createContext(r);let a=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function l(e){let t=(0,o.useContext)(s);return t!==r||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,o.useMemo)((()=>e||"react-aria"+t.prefix+"-"+ ++t.current),[e])}},71306:function(e,t,n){n.d(t,{$F:function(){return a},PB:function(){return s}});const o="data-rr-ui-",r="rrUi";function s(e){return"".concat(o).concat(e)}function a(e){return"".concat(r).concat(e)}},74784:function(e,t,n){const o=n(72791).createContext(null);o.displayName="NavContext",t.Z=o},78633:function(e,t,n){n.d(t,{h:function(){return r}});const o=n(72791).createContext(null),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null};t.Z=o},90522:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(72791);function r(){return(0,o.useReducer)((function(e){return!e}),!1)[1]}},13808:function(e,t,n){n.d(t,{Z:function(){return r}});var o=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return o(e.querySelectorAll(t))}},7238:function(e,t,n){n.d(t,{Z:function(){return de}});var o=n(81694),r=n.n(o),s=n(72791),a=n(13808),l=n(3070),c=n(80239),u=n(37215),i=n(90522),d=n(92444),p=n(22519);var f=s.createContext(null),g=n(66068),v=n(86192),m=n(66595),h=n(81012),w=n(80184);const y=["children"];const b=()=>{};function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,s.useContext)(f),[n,o]=(0,g.Z)(),r=(0,s.useRef)(!1),{flip:a,offset:l,rootCloseEvent:c,fixed:u=!1,placement:i,popperConfig:d={},enableEventListeners:p=!0,usePopper:w=!!t}=e,y=null==(null==t?void 0:t.show)?!!e.show:t.show;y&&!r.current&&(r.current=!0);const{placement:x,setMenu:C,menuElement:Z,toggleElement:k}=t||{},P=(0,v.Z)(k,Z,(0,h.ZP)({placement:i||x||"bottom-start",enabled:w,enableEvents:null==p?y:p,offset:l,flip:a,fixed:u,arrowElement:n,popperConfig:d})),E=Object.assign({ref:C||b,"aria-labelledby":null==k?void 0:k.id},P.attributes.popper,{style:P.styles.popper}),N={show:y,placement:x,hasShown:r.current,toggle:null==t?void 0:t.toggle,popper:w?P:null,arrowProps:w?Object.assign({ref:o},P.attributes.arrow,{style:P.styles.arrow}):{}};return(0,m.Z)(Z,(e=>{null==t||t.toggle(!1,e)}),{clickTrigger:c,disabled:!y}),[E,N]}function C(e){let{children:t}=e,n=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,y);const[o,r]=x(n);return(0,w.jsx)(w.Fragment,{children:t(o,r)})}C.displayName="DropdownMenu",C.defaultProps={usePopper:!0};var Z=C,k=n(22021);const P=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},E=()=>{};function N(){const e=(0,k.gP)(),{show:t=!1,toggle:n=E,setToggle:o,menuElement:r}=(0,s.useContext)(f)||{},a=(0,s.useCallback)((e=>{n(!t,e)}),[t,n]),l={id:e,ref:o||E,onClick:a,"aria-expanded":!!t};return r&&P(r)&&(l["aria-haspopup"]=!0),[l,{show:t,toggle:n}]}function j(e){let{children:t}=e;const[n,o]=N();return(0,w.jsx)(w.Fragment,{children:t(n,o)})}j.displayName="DropdownToggle";var S=j,T=n(78633),D=n(74784),M=n(15341),O=n(71306);const R=["eventKey","disabled","onClick","active","as"];function I(e){let{key:t,href:n,active:o,disabled:r,onClick:a}=e;const l=(0,s.useContext)(T.Z),c=(0,s.useContext)(D.Z),{activeKey:u}=c||{},i=(0,T.h)(t,n),d=null==o&&null!=t?(0,T.h)(u)===i:o;return[{onClick:(0,p.Z)((e=>{r||(null==a||a(e),l&&!e.isPropagationStopped()&&l(i,e))})),"aria-disabled":r||void 0,"aria-selected":d,[(0,O.PB)("dropdown-item")]:""},{isActive:d}]}const F=s.forwardRef(((e,t)=>{let{eventKey:n,disabled:o,onClick:r,active:s,as:a=M.ZP}=e,l=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,R);const[c]=I({key:n,href:l.href,disabled:o,onClick:r,active:s});return(0,w.jsx)(a,Object.assign({},l,{ref:t},c))}));F.displayName="DropdownItem";var A=F;function B(){const e=(0,i.Z)(),t=(0,s.useRef)(null),n=(0,s.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function L(e){let{defaultShow:t,show:n,onSelect:o,onToggle:r,itemSelector:i="* [".concat((0,O.PB)("dropdown-item"),"]"),focusFirstItemOnShow:g,placement:v="bottom-start",children:m}=e;const[h,y]=(0,c.$c)(n,t,r),[b,x]=B(),C=b.current,[Z,k]=B(),E=Z.current,N=(0,u.Z)(h),j=(0,s.useRef)(null),S=(0,s.useRef)(!1),D=(0,s.useContext)(T.Z),M=(0,s.useCallback)((function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;y(e,{originalEvent:t,source:n})}),[y]),R=(0,p.Z)(((e,t)=>{null==o||o(e,t),M(!1,t,"select"),t.isPropagationStopped()||null==D||D(e,t)})),I=(0,s.useMemo)((()=>({toggle:M,placement:v,show:h,menuElement:C,toggleElement:E,setMenu:x,setToggle:k})),[M,v,h,C,E,x,k]);C&&N&&!h&&(S.current=C.contains(document.activeElement));const F=(0,p.Z)((()=>{E&&E.focus&&E.focus()})),A=(0,p.Z)((()=>{const e=j.current;let t=g;if(null==t&&(t=!(!b.current||!P(b.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=(0,a.Z)(b.current,i)[0];n&&n.focus&&n.focus()}));(0,s.useEffect)((()=>{h?A():S.current&&(S.current=!1,F())}),[h,S,F,A]),(0,s.useEffect)((()=>{j.current=null}));const L=(e,t)=>{if(!b.current)return null;const n=(0,a.Z)(b.current,i);let o=n.indexOf(e)+t;return o=Math.max(0,Math.min(o,n.length)),n[o]};return(0,d.Z)("keydown",(e=>{var t,n;const{key:o}=e,r=e.target,s=null==(t=b.current)?void 0:t.contains(r),a=null==(n=Z.current)?void 0:n.contains(r);if(/input|textarea/i.test(r.tagName)&&(" "===o||"Escape"!==o&&s))return;if(!s&&!a)return;if("Tab"===o&&(!b.current||!h))return;j.current=e.type;const c={originalEvent:e,source:e.type};switch(o){case"ArrowUp":{const t=L(r,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),h){const e=L(r,1);e&&e.focus&&e.focus()}else y(!0,c);return;case"Tab":(0,l.ZP)(document,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=b.current)&&t.contains(e.target)||y(!1,c)}),{once:!0});break;case"Escape":"Escape"===o&&(e.preventDefault(),e.stopPropagation()),y(!1,c)}})),(0,w.jsx)(T.Z.Provider,{value:R,children:(0,w.jsx)(f.Provider,{value:I,children:m})})}L.displayName="Dropdown",L.Menu=Z,L.Toggle=S,L.Item=A;var K=L,_=n(52134);const $=s.createContext({});$.displayName="DropdownContext";var U=$,q=n(56236),G=n(10162);const H=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,eventKey:s,disabled:a=!1,onClick:l,active:c,as:u=q.Z,...i}=e;const d=(0,G.vE)(n,"dropdown-item"),[p,f]=I({key:s,href:i.href,disabled:a,onClick:l,active:c});return(0,w.jsx)(u,{...i,...p,ref:t,className:r()(o,d,f.isActive&&"active",a&&"disabled")})}));H.displayName="DropdownItem";var W=H,z="undefined"!==typeof n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,J="undefined"!==typeof document||z?s.useLayoutEffect:s.useEffect,Q=n(73201),V=(n(42391),n(91991)),X=n(5715);n(92176);function Y(e,t){return e}function ee(e,t,n){let o=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?o=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?o=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(o=e?n?"right-end":"left-end":n?"right-start":"left-start"),o}const te=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,align:a,rootCloseEvent:l,flip:c,show:u,renderOnMount:i,as:d="div",popperConfig:p,variant:f,...g}=e,v=!1;const m=(0,s.useContext)(X.Z),h=(0,G.vE)(n,"dropdown-menu"),{align:y,drop:b,isRTL:C}=(0,s.useContext)(U);a=a||y;const Z=(0,s.useContext)(V.Z),k=[];if(a)if("object"===typeof a){const e=Object.keys(a);if(e.length){const t=e[0],n=a[t];v="start"===n,k.push("".concat(h,"-").concat(t,"-").concat(n))}}else"end"===a&&(v=!0);const P=ee(v,b,C),[E,{hasShown:N,popper:j,show:S,toggle:T}]=x({flip:c,rootCloseEvent:l,show:u,usePopper:!m&&0===k.length,offset:[0,2],popperConfig:p,placement:P});if(E.ref=(0,Q.Z)(Y(t),E.ref),J((()=>{S&&(null==j||j.update())}),[S]),!N&&!i&&!Z)return null;"string"!==typeof d&&(E.show=S,E.close=()=>null==T?void 0:T(!1),E.align=a);let D=g.style;return null!=j&&j.placement&&(D={...g.style,...E.style},g["x-placement"]=j.placement),(0,w.jsx)(d,{...g,...E,style:D,...(k.length||m)&&{"data-bs-popper":"static"},className:r()(o,h,S&&"show",v&&"".concat(h,"-end"),f&&"".concat(h,"-").concat(f),...k)})}));te.displayName="DropdownMenu",te.defaultProps={flip:!0};var ne=te,oe=n(43360);const re=s.forwardRef(((e,t)=>{let{bsPrefix:n,split:o,className:a,childBsPrefix:l,as:c=oe.Z,...u}=e;const i=(0,G.vE)(n,"dropdown-toggle"),d=(0,s.useContext)(f),p=(0,s.useContext)(V.Z);void 0!==l&&(u.bsPrefix=l);const[g]=N();return g.ref=(0,Q.Z)(g.ref,Y(t)),(0,w.jsx)(c,{className:r()(a,i,o&&"".concat(i,"-split"),!!p&&(null==d?void 0:d.show)&&"show"),...g,...u})}));re.displayName="DropdownToggle";var se=re,ae=n(66543);const le=(0,ae.Z)("dropdown-header",{defaultProps:{role:"heading"}}),ce=(0,ae.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),ue=(0,ae.Z)("dropdown-item-text",{Component:"span"}),ie=s.forwardRef(((e,t)=>{const{bsPrefix:n,drop:o,show:a,className:l,align:u,onSelect:i,onToggle:d,focusFirstItemOnShow:p,as:f="div",navbar:g,autoClose:v,...m}=(0,c.Ch)(e,{show:"onToggle"}),h=(0,s.useContext)(V.Z),y=(0,G.vE)(n,"dropdown"),b=(0,G.SC)(),x=(0,_.Z)(((e,t)=>{var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===v?"click"===n:"inside"===v?"rootClose"!==n:"outside"!==v||"select"!==n)&&(null==d||d(e,t))})),C=ee("end"===u,o,b),Z=(0,s.useMemo)((()=>({align:u,drop:o,isRTL:b})),[u,o,b]);return(0,w.jsx)(U.Provider,{value:Z,children:(0,w.jsx)(K,{placement:C,show:a,onSelect:i,onToggle:x,focusFirstItemOnShow:p,itemSelector:".".concat(y,"-item:not(.disabled):not(:disabled)"),children:h?m.children:(0,w.jsx)(f,{...m,ref:t,className:r()(l,a&&"show",(!o||"down"===o)&&y,"up"===o&&"dropup","end"===o&&"dropend","start"===o&&"dropstart")})})})}));ie.displayName="Dropdown",ie.defaultProps={navbar:!1,align:"start",autoClose:!0};var de=Object.assign(ie,{Toggle:se,Menu:ne,Item:W,ItemText:ue,Divider:ce,Header:le})},91991:function(e,t,n){const o=n(72791).createContext(null);o.displayName="InputGroupContext",t.Z=o},5715:function(e,t,n){const o=n(72791).createContext(null);o.displayName="NavbarContext",t.Z=o}}]);
//# sourceMappingURL=7238.8f911c08.chunk.js.map