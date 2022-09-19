import{SvelteComponent,add_flush_callback,append,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../../../web_modules/svelte/internal/index.mjs";import DynamicFormInput from"../dynamic_form_input.js";function get_each_context(e,t,n){const s=e.slice();return s[10]=t[n][0],s[11]=t[n][1],s[12]=t,s[13]=n,s}function create_each_block(e){let n,s,i=e[10]+"",r,c,m,t,l,d,f,u,h,o;function p(t){e[6](t,e[10])}function g(t){e[7](t)}function v(t){e[8](t)}function b(t){e[9](t)}let a={label:e[10],parentKeys:e[4]+"."+e[10],schema:e[5]};return e[0][e[10]]!==void 0&&(a.field=e[0][e[10]]),e[1]!==void 0&&(a.showMedia=e[1]),e[2]!==void 0&&(a.changingAsset=e[2]),e[3]!==void 0&&(a.localMediaList=e[3]),t=new DynamicFormInput({props:a}),binding_callbacks.push(()=>bind(t,"field",p)),binding_callbacks.push(()=>bind(t,"showMedia",g)),binding_callbacks.push(()=>bind(t,"changingAsset",v)),binding_callbacks.push(()=>bind(t,"localMediaList",b)),{c(){n=element("div"),s=element("label"),r=text(i),m=space(),create_component(t.$$.fragment),h=space(),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var a,o=children(n);s=claim_element(o,"LABEL",{for:!0}),a=children(s),r=claim_text(a,i),a.forEach(detach),m=claim_space(o),claim_component(t.$$.fragment,o),h=claim_space(o),o.forEach(detach),this.h()},h(){attr(s,"for",c=e[10]),attr(n,"class","field")},m(e,i){insert(e,n,i),append(n,s),append(s,r),append(n,m),mount_component(t,n,null),append(n,h),o=!0},p(n,a){e=n,(!o||a&1)&&i!==(i=e[10]+"")&&set_data(r,i),(!o||a&1&&c!==(c=e[10]))&&attr(s,"for",c);const h={};a&1&&(h.label=e[10]),a&17&&(h.parentKeys=e[4]+"."+e[10]),a&32&&(h.schema=e[5]),!l&&a&1&&(l=!0,h.field=e[0][e[10]],add_flush_callback(()=>l=!1)),!d&&a&2&&(d=!0,h.showMedia=e[1],add_flush_callback(()=>d=!1)),!f&&a&4&&(f=!0,h.changingAsset=e[2],add_flush_callback(()=>f=!1)),!u&&a&8&&(u=!0,h.localMediaList=e[3],add_flush_callback(()=>u=!1)),t.$set(h)},i(e){if(o)return;transition_in(t.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(n),destroy_component(t)}}}function create_fragment(e){let n,o,s=Object.entries(e[0]),t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){n=element("fieldset");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){n=claim_element(e,"FIELDSET",{});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach)},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null);o=!0},p(e,[o]){if(o&63){s=Object.entries(e[0]);let a;for(a=0;a<s.length;a+=1){const i=get_each_context(e,s,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(n,null))}group_outros();for(a=s.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<s.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){e&&detach(n),destroy_each(t,e)}}}function instance(e,t,n){let{field:s}=t,{showMedia:o}=t,{changingAsset:i}=t,{localMediaList:a}=t,{parentKeys:r}=t,{schema:c}=t;function l(t,o){e.$$.not_equal(s[o],t)&&(s[o]=t,n(0,s))}function d(e){o=e,n(1,o)}function u(e){i=e,n(2,i)}function h(e){a=e,n(3,a)}return e.$$set=e=>{"field"in e&&n(0,s=e.field),"showMedia"in e&&n(1,o=e.showMedia),"changingAsset"in e&&n(2,i=e.changingAsset),"localMediaList"in e&&n(3,a=e.localMediaList),"parentKeys"in e&&n(4,r=e.parentKeys),"schema"in e&&n(5,c=e.schema)},[s,o,i,a,r,c,l,d,u,h]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,showMedia:1,changingAsset:2,localMediaList:3,parentKeys:4,schema:5})}}export default Component