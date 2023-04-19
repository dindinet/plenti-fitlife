import{readable}from"../../web_modules/svelte/store/index.mjs";import{createSessionStore}from"./session.js";import{createDataStore}from"./storage.js";import{env}from"../../generated/env.js";import{makeUrl}from"./url_checker.js";import adminMenu from"./admin_menu.js";export const repoUrl=makeUrl(env.cms.repo);const local=env.local,settings={server:repoUrl.origin,group:repoUrl.pathname.split("/")[1],repository:repoUrl.pathname.split("/")[2],redirectUrl:env.cms.redirectUrl,appId:env.cms.appId},localTokenStore=createDataStore("local_tokens");let localTokens;localTokenStore.subscribe(e=>{localTokens=e});const tokenStore=createDataStore("gitlab_tokens");let tokens,isExpired;tokenStore.subscribe(e=>{tokens=e,isExpired=tokens&&Date.now()>(tokens.created_at+tokens.expires_in)*1e3});const codeVerifierStore=createDataStore("gitlab_code_verifier");let codeVerifier;codeVerifierStore.subscribe(e=>codeVerifier=e);const stateStore=createSessionStore("gitlab_state");let state;stateStore.subscribe(e=>state=e);const getUser=()=>({isBeingAuthenticated:Boolean(state)||tokens&&isExpired,isAuthenticated:localTokens||tokens&&!isExpired,tokens,finishAuthentication(e){if(e&&state&&e.get("state")===state)return stateStore.set(null),history.replaceState(null,"",location.pathname),requestAccessToken(e.get("code"));if(tokens&&isExpired)return requestRefreshToken();console.error("Invalid parameters or state")},refresh(){let e=JSON.parse(localStorage.getItem("PLENTI_CMS_GITLAB_TOKENS"));this.isAuthenticated=typeof e?.access_token!="undefined",this.tokens=e},login(){return requestAuthCode()},logout(){if(local){localTokenStore.set(null);return}tokenStore.set(null),codeVerifierStore.set(null)},menu:adminMenu});export const user=readable(getUser(),e=>{localTokenStore.subscribe(()=>e(getUser())),tokenStore.subscribe(()=>e(getUser())),stateStore.subscribe(()=>e(getUser()))});const generateString=()=>{const e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.",t=Array.from(crypto.getRandomValues(new Uint8Array(128)));return t.map(t=>e[t%e.length]).join("")},hash=async e=>{const t=new TextEncoder,n=t.encode(e),s=await crypto.subtle.digest("SHA-256",n),o=String.fromCharCode(...new Uint8Array(s));return btoa(o).split("=")[0].replace(/\+/g,"-").replace(/\//g,"_")},requestAuthCode=async()=>{if(local){localTokenStore.set(!0);return}stateStore.set(generateString()),codeVerifierStore.set(generateString());const e=await hash(codeVerifier),{server:t,redirectUrl:n,appId:s}=settings;window.location.href=t+"/oauth/authorize?client_id="+encodeURIComponent(s)+"&redirect_uri="+encodeURIComponent(n)+"&response_type=code&state="+encodeURIComponent(state)+"&code_challenge="+encodeURIComponent(e)+"&code_challenge_method=S256"},requestAccessToken=async e=>{const{server:n,redirectUrl:s,appId:o}=settings,i=await fetch(n+"/oauth/token?client_id="+encodeURIComponent(o)+"&code="+encodeURIComponent(e)+"&grant_type=authorization_code&redirect_uri="+encodeURIComponent(s)+"&code_verifier="+encodeURIComponent(codeVerifier),{method:"POST"}),t=await i.json();if(t.error)throw new Error(t.error_description);tokenStore.set(t)},requestRefreshToken=async()=>{const{server:t,redirectUrl:n,appId:s}=settings;if(!codeVerifier)throw new Error("Code verifier not saved to session storage");const o=await fetch(t+"/oauth/token?client_id="+encodeURIComponent(s)+"&refresh_token="+encodeURIComponent(tokens.refresh_token)+"&grant_type=refresh_token&redirect_uri="+encodeURIComponent(n)+"&code_verifier="+encodeURIComponent(codeVerifier),{method:"POST"}),e=await o.json();if(e.error)throw new Error(e.error_description);tokenStore.set(e)}