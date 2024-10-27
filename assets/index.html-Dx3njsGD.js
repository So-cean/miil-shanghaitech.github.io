import{f as r,_ as s,c,a as d,d as l,r as p,o as _}from"./app-CTHM7WM6.js";const m=r({__name:"index.html",setup(n,{expose:a}){a();const t={datasetInfo:{description:"The RetinaMNIST is based on the DeepDRiD challenge, which provides a dataset of 1,600 retina fundus images. The task is ordinal regression for 5-level grading of diabetic retinopathy severity. We split the source training set with a ratio of 9:1 into training and validation set, and use the source validation set as the test set. The source images of 3×1,736×1,824 are center-cropped and resized into 3×28×28.",task:"ordinal-regression",label:{0:"0",1:"1",2:"2",3:"3",4:"4"},n_samples:{train:"1080",test:"400",validation:"120"}},trainingPara:{learning_rate:"3e-4",convergence_epoch:"7",training_epoch:"100",other:""}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),h={class:"container"};function f(n,a,i,e,t,g){const o=p("DetailSection");return _(),c("div",null,[d("div",h,[l(o,{image:"/image_dataset/RetinaMNIST.jpg",title:"RetinaMNIST",trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const S=s(m,[["render",f],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/model/MedMNIST/RetinaMNIST/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1730043944000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":1}]},"filePathRelative":"model/MedMNIST/RetinaMNIST/README.md"}');export{S as comp,v as data};
