## Abstract
The common practice in developing computer-aided diagnosis (CAD) models based on transformer architectures usually involves fine-tuning from ImageNet pre-trained weights. However, with recent advances in large-scale pre-training and the practice of scaling laws, Vision Transformers (ViT) have become much larger and less accessible to medical imaging communities. Additionally, in real-world scenarios, the deployments of multiple CAD models can be troublesome due to problems such as limited storage space and time-consuming model switching. To address these challenges, we propose a new method MeLo (Medical image Low-rank adaptation), which enables the development of a single CAD model for multiple clinical tasks in a lightweight manner. It adopts low-rank adaptation instead of resource-demanding fine-tuning. By fixing the weight of ViT models and only adding small low-rank plug-ins, we achieve competitive results on various diagnosis tasks across different imaging modalities using only a few trainable parameters. Specifically, our proposed method achieves comparable performance to fully fine-tuned ViT models on four distinct medical imaging datasets using about 0.17% trainable parameters. Moreover, MeLo adds only about 0.5MB of storage space and allows for extremely fast model switching in deployment and inference.


## Model

<!-- <figure>
  <img src="./image/bloodcell.jpg" alt="VuePress Hope 图标">
  <figcaption>VuePress Hope 图标</figcaption>
</figure> -->

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


## 我的页面

<MyComponent></MyComponent>


  <TrainingParaSection
    :trainingpara="trainingPara"
  />

<script lang="ts" setup>
const image = '/image_dataset/AdrenalMNIST3D.jpg';
const title = 'AdrenalMNIST3D';

const datasetInfo: DatasetInfo = {
  description: 'The AdrenalMNIST3D is a new 3D shape classification dataset, consisting of shape masks from 1,584 left and right adrenal glands (i.e., 792 patients). Collected from Zhongshan Hospital Affiliated to Fudan University, each 3D shape of adrenal gland is annotated by an expert endocrinologist using abdominal computed tomography (CT), together with a binary classification label of normal adrenal gland or adrenal mass. Considering patient privacy, we do not provide the source CT scans, but the real 3D shapes of adrenal glands and their classification labels. We calculate the center of adrenal and resize the center-cropped 64mm×64mm×64mm volume into 28×28×28. The dataset is randomly split into training/validation/test set of 1,188/98/298 on a patient level.',
  task: 'Binary-Class',
  label: {"0": "normal", "1": "hyperplasia"},
  n_samples: {
    train: "1188", 
    test: "298", 
    validation: "98" 
  }
}


const trainingPara: TrainingPara = {
  learning_rate: "1e-5",
  convergence_epoch: "40",
  training_epoch: "100",
  other: ""
}
</script>
