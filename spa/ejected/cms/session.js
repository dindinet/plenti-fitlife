import{writable}from"../../web_modules/svelte/store/index.mjs";export function createSessionStore(e){e=e.toUpperCase(),e="PLENTI_CMS_"+e;let t=sessionStorage.getItem(e);t?t=JSON.parse(t):t=null;const n=writable(t);return n.subscribe(t=>{sessionStorage.setItem(e,JSON.stringify(t))}),n}