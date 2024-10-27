---
title: AdrenalMNIST3D
description: 
meta:
  -name: keywords
  content: AdrenalMNIST3D, 3D, dataset
tags:
  - AdrenalMNIST3D
  - 3D
---

 <div class="container"> 
  <DetailSection
    :image="image"
    :title="title"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>

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
