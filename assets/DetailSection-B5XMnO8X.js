import c from"./ImageSection-7EzUWV7U.js";import d from"./InfoSection-cepFX8CL.js";import{d as _}from"./datasetinfo-DQ6rqaU3.js";import{d as f}from"./trainingpara-4xAYGu1R.js";import{f as l,_ as m,o as p,c as g,a as n,d as r,t as u}from"./app-CTHM7WM6.js";const S=l({__name:"DetailSection",props:{image:{},title:{},trainingpara:{},datasetinfo:{}},setup(o,{expose:i}){i();const t=o,e={..._,...t.datasetinfo},s={...f,...t.trainingpara},a={props:t,datasetinfo:e,trainingpara:s,ImageSection:c,InfoSection:d};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),h={class:"detail"},v={class:"content-section"},I={class:"info-container"},D={class:"center-title"};function x(o,i,t,e,s,a){return p(),g("div",h,[n("div",v,[r(e.ImageSection,{image:t.image},null,8,["image"]),n("div",I,[n("h3",D,u(t.title),1),r(e.InfoSection,{datasetinfo:e.datasetinfo,trainingpara:e.trainingpara})])])])}const P=m(S,[["render",x],["__scopeId","data-v-efaf66a1"],["__file","DetailSection.vue"]]);export{P as default};