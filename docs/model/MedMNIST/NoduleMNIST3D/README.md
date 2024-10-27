

<div class="container">
  <DetailSection
    image="/image_dataset/NoduleMNIST3D.jpg"
    title="NoduleMNIST3D"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description: "The NoduleMNIST3D is based on the LIDC-IDRI, a large public lung nodule dataset, containing images from thoracic CT scans. The dataset is designed for both lung nodule segmentation and 5-level malignancy classification task. To perform binary classification, we categorize cases with malignancy level 1/2 into negative class and 4/5 into positive class, ignoring the cases with malignancy level 3. We split the source dataset with a ratio of 7:1:2 into training, validation and test set, and center-crop the spatially normalized images (with a spacing of 1mm×1mm×1mm) into 28×28×28.",
  task: 'binary-class',
  label: {"0": "benign", "1": "malignant"},
  n_samples: {
    train: "1158", 
    test: "310", 
    validation: "165" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "1e-5",
  convergence_epoch: "40",
  training_epoch: "100",
  other: ""
}
</script>

