import{f as s,v as c,_ as f,o as u,c as _,d as t,m as l,b as a}from"./app-CTHM7WM6.js";const p=s({__name:"DownloadSection",setup(i,{expose:o}){o();function r(){console.log("follow")}function e(){console.log("like")}function d(){console.log("download")}const n={follow:r,like:e,download:d,get ElButton(){return c}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function w(i,o,r,e,d,n){return u(),_("div",null,[t(e.ElButton,{type:"primary",onClick:e.follow},{default:l(()=>o[0]||(o[0]=[a("Follow")])),_:1}),t(e.ElButton,{type:"success",onClick:e.like},{default:l(()=>o[1]||(o[1]=[a("Like")])),_:1}),t(e.ElButton,{type:"warning",onClick:e.download},{default:l(()=>o[2]||(o[2]=[a("Download")])),_:1})])}const m=f(p,[["render",w],["__scopeId","data-v-f37e7ccf"],["__file","DownloadSection.vue"]]);export{m as default};