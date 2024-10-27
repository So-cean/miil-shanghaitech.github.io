import{f as s,_ as r,c as d,a as l,d as c,r as m,o as p}from"./app-CTHM7WM6.js";const h=s({__name:"index.html",setup(n,{expose:a}){a();const t={datasetInfo:{description:"The Osteoarthritis Initiative (OAI) dataset is a comprehensive, longitudinal cohort study aimed at investigating the natural history of knee osteoarthritis (OA). Sponsored by the National Institutes of Health (NIH), this multi-center study spans ten years and includes a wide range of data types such as imaging, biochemical, genetic, and risk markers. The dataset comprises thousands of knee X-ray and MRI images, along with clinical data collected from men and women across various stages of OA. This extensive dataset is invaluable for researchers aiming to understand the progression of knee osteoarthritis, develop diagnostic tools, and evaluate potential treatments. The dataset is randomly split into training, validation, and test sets to support machine learning model development and evaluation.",task:"multi-class",label:{0:"normal, no signs of osteoarthritis",1:"doubtful osteoarthritis",2:"mild osteoarthritis",3:"moderate osteoarthritis",4:"severe osteoarthritis"},n_samples:{train:"",test:"",validation:""}},trainingPara:{learning_rate:"3e-4",convergence_epoch:"7",training_epoch:"50",other:""}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),_={class:"container"};function u(n,a,i,e,t,g){const o=m("DetailSection");return p(),d("div",null,[l("div",_,[c(o,{image:"/image_dataset/OAI.png",title:"OAI",trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const v=r(h,[["render",u],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/model/OAI/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1730043944000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":1}]},"filePathRelative":"model/OAI/README.md"}');export{v as comp,I as data};