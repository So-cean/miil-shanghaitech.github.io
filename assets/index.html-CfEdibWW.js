import{_ as s,c as l,a,b as o,d as t,o as n,r}from"./app-CTHM7WM6.js";const m={},d={style:{display:"flex","flex-wrap":"wrap",gap:"16px"}};function g(c,i){const e=r("Card");return n(),l("div",null,[i[0]||(i[0]=a("p",null,[o("Welcome to the MeLo project! This is the content of the home page. Check "),a("a",{href:"https://vuejs.press/reference/default-theme/frontmatter.html#home-page",target:"_blank",rel:"noopener noreferrer"},"Home Page Docs"),o(" for more details.")],-1)),a("div",d,[t(e,{image:"/image/sz_chest_xray.png",title:"SZ Chest X-ray",Task:"Tuberculosis Diagnosis",ViT:"base-ImageNet",Rank:"4",downloadlink:"https://absterzhu.github.io/melo.github.io/static/melo/ChinaSetAllFiles_base_lora_4_4.safetensors",routePath:"/model/AdrenalMNIST/"}),t(e,{image:"/image/bloodcell.jpg",title:"Bloodcell",Task:"Blood Cell Identification",ViT:"base-ImageNet",Rank:"4",downloadlink:"https://absterzhu.github.io/melo.github.io/static/melo/blood-cells_base_lora_4_4.safetensors",routePath:"/model/AdrenalMNIST/"}),t(e,{image:"/image/nih_chest_xray.jpg",title:"NIH Chest X-ray",Task:"Thoracic Disease Diagnosis",ViT:"base-ImageNet",Rank:"4",downloadlink:"https://absterzhu.github.io/melo.github.io/static/melo/nih_base1_lora_4_4.safetensors",routePath:"/model/AdrenalMNIST/"}),t(e,{image:"/image/mamo.jpg",title:"INBreast",Task:"Breast Malignancy Diagnosis",ViT:"base-ImageNet",Rank:"4",downloadlink:"https://absterzhu.github.io/melo.github.io/static/melo/inbreast_base1_lora_4_4.safetensors",routePath:"/model/AdrenalMNIST/"})])])}const p=s(m,[["render",g],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/","title":"Home","lang":"en-US","frontmatter":{"home":true,"title":"Home","heroImage":"/image/intro.png","actions":[{"text":"Get Started","link":"https://github.com/JamesQFreeman/LoRA-ViT","type":"primary"},{"text":"Paper","link":"https://arxiv.org/abs/2311.08236","type":"secondary"}],"features":[{"title":"Low-Rank Adaptation","details":"Adopts low-rank adaptation instead of resource-demanding fine-tuning, efficiently adapting ViT models with minimal additional parameters."},{"title":"Multi-Task Capability","details":"Enables the development of a single CAD model for multiple clinical tasks, supporting various diagnosis tasks across different imaging modalities."},{"title":"Storage Efficiency","details":"Adds only about 0.5MB of storage space, making it highly efficient in terms of storage requirements."},{"title":"Fast Model Switching","details":"Allows for extremely fast model switching in deployment and inference, enhancing real-world usability."},{"title":"High Performance","details":"Achieves competitive results on various diagnosis tasks using only a few trainable parameters, comparable to fully fine-tuned ViT models."},{"title":"Lightweight Solution","details":"Provides a lightweight solution for developing CAD models, addressing challenges such as limited storage space and time-consuming model switching."}],"footer":"© 2024 MeLo. All rights reserved. Powered by VuePress"},"headers":[],"git":{"updatedTime":1730043944000,"contributors":[{"name":"So-cean","email":"913902676@qq.com","commits":1}]},"filePathRelative":"README.md"}');export{p as comp,u as data};