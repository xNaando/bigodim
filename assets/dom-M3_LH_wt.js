import{c as i,b as u,h as o,y as c}from"./index-DfMdB05d.js";const r={xs:18,sm:24,md:32,lg:38,xl:46},d={size:String};function m(e,t=r){return i(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const a={size:{type:[String,Number],default:"1em"},color:String};function l(e){return{cSize:i(()=>e.size in r?`${r[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const v=u({name:"QSpinner",props:{...a,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=l(e);return()=>o("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[o("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function S(e,t){return e!==void 0&&e()||t}function z(e,t){return e!==void 0?t.concat(e()):t}function g(e){return e.appContext.config.globalProperties.$router!==void 0}function h(e){return e.isUnmounted===!0||e.isDeactivated===!0}function p(e,t){const n=e.style;for(const s in t)n[s]=t[s]}function y(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=c(e);if(t)return t.$el||t}export{v as Q,z as a,m as b,p as c,g as d,y as g,S as h,d as u,h as v};
