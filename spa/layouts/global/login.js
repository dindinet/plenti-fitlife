import{SvelteComponent,append,attr,bubble,children,claim_element,claim_space,claim_text,detach,element,empty,globals,init,insert,listen,noop,prevent_default,run_all,safe_not_equal,space,stop_propagation,subscribe,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";const{window:window_1}=globals;function create_if_block(e){let c,s,t,l,i,a,f,r,u,m,h,o,n,d,p,g,v;return{c(){c=element("div"),s=element("div"),t=svg_element("svg"),l=svg_element("path"),i=svg_element("line"),a=svg_element("line"),f=space(),r=element("section"),u=element("h1"),m=text("Admin Login"),h=space(),o=element("button"),n=svg_element("svg"),d=svg_element("path"),p=text(`
                    GitLab OAuth`),this.h()},l(e){c=claim_element(e,"DIV",{class:!0});var g,v,b,j,y,_,w=children(c);s=claim_element(w,"DIV",{class:!0}),g=children(s),t=claim_element(g,"svg",{xmlns:!0,class:!0,width:!0,height:!0,viewBox:!0,"stroke-width":!0,stroke:!0,fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0},1),v=children(t),l=claim_element(v,"path",{stroke:!0,d:!0,fill:!0},1),children(l).forEach(detach),i=claim_element(v,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(i).forEach(detach),a=claim_element(v,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),children(a).forEach(detach),v.forEach(detach),f=claim_space(g),r=claim_element(g,"SECTION",{class:!0}),b=children(r),u=claim_element(b,"H1",{}),_=children(u),m=claim_text(_,"Admin Login"),_.forEach(detach),h=claim_space(b),o=claim_element(b,"BUTTON",{class:!0}),j=children(o),n=claim_element(j,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,class:!0,fill:!0},1),y=children(n),d=claim_element(y,"path",{d:!0},1),children(d).forEach(detach),y.forEach(detach),p=claim_text(j,`
                    GitLab OAuth`),j.forEach(detach),b.forEach(detach),g.forEach(detach),w.forEach(detach),this.h()},h(){attr(l,"stroke","none"),attr(l,"d","M0 0h24v24H0z"),attr(l,"fill","none"),attr(i,"x1","18"),attr(i,"y1","6"),attr(i,"x2","6"),attr(i,"y2","18"),attr(a,"x1","6"),attr(a,"y1","6"),attr(a,"x2","18"),attr(a,"y2","18"),attr(t,"xmlns","http://www.w3.org/2000/svg"),attr(t,"class","icon icon-tabler icon-tabler-x svelte-1uz487"),attr(t,"width","44"),attr(t,"height","44"),attr(t,"viewBox","0 0 24 24"),attr(t,"stroke-width","1.5"),attr(t,"stroke","#2c3e50"),attr(t,"fill","none"),attr(t,"stroke-linecap","round"),attr(t,"stroke-linejoin","round"),attr(d,"d","M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z"),attr(n,"width","50px"),attr(n,"height","50px"),attr(n,"viewBox","0 0 1024 1024"),attr(n,"xmlns","http://www.w3.org/2000/svg"),attr(n,"class","icon"),attr(n,"fill","#fc6d26"),attr(o,"class","gitlab svelte-1uz487"),attr(r,"class","content-wrapper staff"),attr(s,"class","modal svelte-1uz487"),attr(c,"class","modal-wrapper svelte-1uz487")},m(b,j){insert(b,c,j),append(c,s),append(s,t),append(t,l),append(t,i),append(t,a),append(s,f),append(s,r),append(r,u),append(u,m),append(r,h),append(r,o),append(o,n),append(n,d),append(o,p),g||(v=[listen(t,"click",e[3]),listen(o,"click",prevent_default(e[4])),listen(s,"click",stop_propagation(e[5])),listen(c,"click",e[3])],g=!0)},p:noop,d(e){e&&detach(c),g=!1,run_all(v)}}}function create_fragment(e){let n,s,o,t=e[0]&&e[0]==="#login"&&create_if_block(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(i,a){t&&t.m(i,a),insert(i,n,a),s||(o=listen(window_1,"hashchange",e[2]),s=!0)},p(e,[s]){e[0]&&e[0]==="#login"?t?t.p(e,s):(t=create_if_block(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i:noop,o:noop,d(e){t&&t.d(e),e&&detach(n),s=!1,o()}}}function instance(e,t,n){let a,i=noop,r=()=>(i(),i=subscribe(o,e=>n(6,a=e)),o);e.$$.on_destroy.push(()=>i());let{hash:s}=t,{user:o}=t;r();const c=()=>{n(0,s=window.location.hash)},l=()=>{n(0,s=""),window.location.hash=""},d=()=>{a.login(),window.location.hash=""};function u(t){bubble.call(this,e,t)}return e.$$set=e=>{"hash"in e&&n(0,s=e.hash),"user"in e&&r(n(1,o=e.user))},[s,o,c,l,d,u]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{hash:0,user:1})}}export default Component