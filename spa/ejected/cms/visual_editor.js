import{SvelteComponent,add_flush_callback,append,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import DynamicFormInput from"./dynamic_form_input.js";import ButtonWrapper from"./button_wrapper.js";import Button from"./button.js";function get_each_context(e,t,n){const s=e.slice();return s[8]=t[n][0],s[9]=t[n][1],s[10]=t,s[11]=n,s}function create_each_block(e){let n,s,i=e[8]+"",c,r,l,t,d,m,u,h,o;function f(t){e[4](t,e[8])}function p(t){e[5](t)}function g(t){e[6](t)}function v(t){e[7](t)}let a={label:e[8]};return e[0].fields[e[8]]!==void 0&&(a.field=e[0].fields[e[8]]),e[1]!==void 0&&(a.showMedia=e[1]),e[2]!==void 0&&(a.changingAsset=e[2]),e[3]!==void 0&&(a.localMediaList=e[3]),t=new DynamicFormInput({props:a}),binding_callbacks.push(()=>bind(t,"field",f)),binding_callbacks.push(()=>bind(t,"showMedia",p)),binding_callbacks.push(()=>bind(t,"changingAsset",g)),binding_callbacks.push(()=>bind(t,"localMediaList",v)),{c(){n=element("div"),s=element("label"),c=text(i),l=space(),create_component(t.$$.fragment),this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var a,o=children(n);s=claim_element(o,"LABEL",{for:!0,class:!0}),a=children(s),c=claim_text(a,i),a.forEach(detach),l=claim_space(o),claim_component(t.$$.fragment,o),o.forEach(detach),this.h()},h(){attr(s,"for",r=e[8]),attr(s,"class","svelte-15qb3w8"),attr(n,"class","field svelte-15qb3w8")},m(e,i){insert(e,n,i),append(n,s),append(s,c),append(n,l),mount_component(t,n,null),o=!0},p(n,a){e=n,(!o||a&1)&&i!==(i=e[8]+"")&&set_data(c,i),(!o||a&1&&r!==(r=e[8]))&&attr(s,"for",r);const l={};a&1&&(l.label=e[8]),!d&&a&1&&(d=!0,l.field=e[0].fields[e[8]],add_flush_callback(()=>d=!1)),!m&&a&2&&(m=!0,l.showMedia=e[1],add_flush_callback(()=>m=!1)),!u&&a&4&&(u=!0,l.changingAsset=e[2],add_flush_callback(()=>u=!1)),!h&&a&8&&(h=!0,l.localMediaList=e[3],add_flush_callback(()=>h=!1)),t.$set(l)},i(e){if(o)return;transition_in(t.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(n),destroy_component(t)}}}function create_default_slot(e){let t,s,n,o;return t=new Button({props:{commitList:[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}],buttonText:"Save",action:e[0].isNew?"create":"update",encoding:"text"}}),n=new Button({props:{commitList:[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}],buttonText:"Delete",action:"delete",encoding:"text"}}),{c(){create_component(t.$$.fragment),s=space(),create_component(n.$$.fragment)},l(e){claim_component(t.$$.fragment,e),s=claim_space(e),claim_component(n.$$.fragment,e)},m(e,i){mount_component(t,e,i),insert(e,s,i),mount_component(n,e,i),o=!0},p(e,s){const o={};s&1&&(o.commitList=[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}]),s&1&&(o.action=e[0].isNew?"create":"update"),t.$set(o);const i={};s&1&&(i.commitList=[{file:e[0].filepath,contents:JSON.stringify(e[0].fields,void 0,"	")}]),n.$set(i)},i(e){if(o)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),o=!1},d(e){destroy_component(t,e),e&&detach(s),destroy_component(n,e)}}}function create_fragment(e){let n,i,s,a,o=Object.entries(e[0].fields),t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block(get_each_context(e,o,n));const r=e=>transition_out(t[e],1,1,()=>{t[e]=null});return s=new ButtonWrapper({props:{$$slots:{default:[create_default_slot]},$$scope:{ctx:e}}}),{c(){n=element("form");for(let e=0;e<t.length;e+=1)t[e].c();i=space(),create_component(s.$$.fragment),this.h()},l(e){n=claim_element(e,"FORM",{class:!0});var o=children(n);for(let e=0;e<t.length;e+=1)t[e].l(o);i=claim_space(o),claim_component(s.$$.fragment,o),o.forEach(detach),this.h()},h(){attr(n,"class","svelte-15qb3w8")},m(e,o){insert(e,n,o);for(let e=0;e<t.length;e+=1)t[e].m(n,null);append(n,i),mount_component(s,n,null),a=!0},p(e,[a]){if(a&15){o=Object.entries(e[0].fields);let s;for(s=0;s<o.length;s+=1){const r=get_each_context(e,o,s);t[s]?(t[s].p(r,a),transition_in(t[s],1)):(t[s]=create_each_block(r),t[s].c(),transition_in(t[s],1),t[s].m(n,i))}group_outros();for(s=o.length;s<t.length;s+=1)r(s);check_outros()}const c={};a&4097&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){if(a)return;for(let e=0;e<o.length;e+=1)transition_in(t[e]);transition_in(s.$$.fragment,e),a=!0},o(e){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);transition_out(s.$$.fragment,e),a=!1},d(e){e&&detach(n),destroy_each(t,e),destroy_component(s)}}}function instance(e,t,n){let{content:s}=t,{showMedia:o}=t,{changingAsset:i}=t,{localMediaList:a}=t;function r(t,o){e.$$.not_equal(s.fields[o],t)&&(s.fields[o]=t,n(0,s))}function c(e){o=e,n(1,o)}function l(e){i=e,n(2,i)}function d(e){a=e,n(3,a)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"showMedia"in e&&n(1,o=e.showMedia),"changingAsset"in e&&n(2,i=e.changingAsset),"localMediaList"in e&&n(3,a=e.localMediaList)},[s,o,i,a,r,c,l,d]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,showMedia:1,changingAsset:2,localMediaList:3})}}export default Component