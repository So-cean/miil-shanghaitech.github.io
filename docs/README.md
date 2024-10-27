---
home: true
title: Home
heroImage: "/image/intro.png"
actions:
  - text: Get Started
    link: "https://github.com/JamesQFreeman/LoRA-ViT"
    type: primary

  - text: Paper 
    link: "https://arxiv.org/abs/2311.08236"
    type: secondary

features:
  - title: Low-Rank Adaptation
    details: Adopts low-rank adaptation instead of resource-demanding fine-tuning, efficiently adapting ViT models with minimal additional parameters.
  - title: Multi-Task Capability
    details: Enables the development of a single CAD model for multiple clinical tasks, supporting various diagnosis tasks across different imaging modalities.
  - title: Storage Efficiency
    details: Adds only about 0.5MB of storage space, making it highly efficient in terms of storage requirements.
  - title: Fast Model Switching
    details: Allows for extremely fast model switching in deployment and inference, enhancing real-world usability.
  - title: High Performance
    details: Achieves competitive results on various diagnosis tasks using only a few trainable parameters, comparable to fully fine-tuned ViT models.
  - title: Lightweight Solution
    details: Provides a lightweight solution for developing CAD models, addressing challenges such as limited storage space and time-consuming model switching.

footer: © 2024 MeLo. All rights reserved. Powered by VuePress
---

Welcome to the MeLo project! This is the content of the home page. Check [Home Page Docs][default-theme-home] for more details.


<div style="display: flex; flex-wrap: wrap; gap: 16px;">
<Card
  image="/image/sz_chest_xray.png"
  title="SZ Chest X-ray"
  Task="Tuberculosis Diagnosis"
  ViT="base-ImageNet"
  Rank="4"
  downloadlink="https://absterzhu.github.io/melo.github.io/static/melo/ChinaSetAllFiles_base_lora_4_4.safetensors"
  routePath="/model/AdrenalMNIST/"
/>

<Card
  image="/image/bloodcell.jpg"
  title="Bloodcell"
  Task="Blood Cell Identification"
  ViT="base-ImageNet"
  Rank="4"
  downloadlink="https://absterzhu.github.io/melo.github.io/static/melo/blood-cells_base_lora_4_4.safetensors"
  routePath="/model/AdrenalMNIST/"
/>

<Card
  image="/image/nih_chest_xray.jpg"
  title="NIH Chest X-ray"
  Task="Thoracic Disease Diagnosis"
  ViT="base-ImageNet"
  Rank="4"
  downloadlink="https://absterzhu.github.io/melo.github.io/static/melo/nih_base1_lora_4_4.safetensors"
  routePath="/model/AdrenalMNIST/"
/>

<Card
  image="/image/mamo.jpg"
  title="INBreast"
  Task="Breast Malignancy Diagnosis"
  ViT="base-ImageNet"
  Rank="4"
  downloadlink="https://absterzhu.github.io/melo.github.io/static/melo/inbreast_base1_lora_4_4.safetensors"
  routePath="/model/AdrenalMNIST/"
/>
</div>

[default-theme-home]: https://vuejs.press/reference/default-theme/frontmatter.html#home-page
