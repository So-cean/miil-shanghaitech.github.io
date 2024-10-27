import{f as l,_ as s,c as r,a as d,d as c,r as p,o as m}from"./app-CTHM7WM6.js";const h=l({__name:"index.html",setup(o,{expose:a}){a();const t={datasetInfo:{description:"The Blood Cell dataset is a comprehensive collection of blood cell images, consisting of 12,500 augmented images categorized into four different cell types: Eosinophil, Lymphocyte, Monocyte, and Neutrophil. Each cell type is grouped into separate folders, with approximately 3,000 images per cell type. The dataset also includes an additional set of 410 original images (pre-augmentation) with detailed subtype labels and bounding boxes for each cell. These images are provided in JPEG format, with accompanying XML metadata for bounding boxes and CSV files for cell type labels. This dataset is valuable for developing automated methods to detect and classify blood cell subtypes, which have important medical applications. The dataset is randomly split into training, validation, and test sets to facilitate machine learning model development and evaluation.",task:"multi-class",label:{0:"Eosinophil",1:"Lymphocyte",2:"Monocyte",3:"Neutrophil"},n_samples:{train:"9375",test:"2500",validation:"625"}},trainingPara:{learning_rate:"3e-4",convergence_epoch:"12",training_epoch:"50",other:""}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),f={class:"container"};function _(o,a,n,e,t,g){const i=p("DetailSection");return m(),r("div",null,[d("div",f,[c(i,{image:"/image_dataset/Blood Cell.jpg",title:"Blood Cell",trainingpara:e.trainingPara,datasetinfo:e.datasetInfo})])])}const y=s(h,[["render",_],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/model/Blood%20Cell/","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1730043944000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":1}]},"filePathRelative":"model/Blood Cell/README.md"}');export{y as comp,v as data};
