<div class="container">
  <DetailSection
    :image="image"
    :title="title"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const image = '/image_dataset/PneumoniaMNIST.jpg';
const title = 'PneumoniaMNIST';

const datasetInfo: DatasetInfo = {
  description:"The PneumoniaMNIST is based on a prior dataset of 5,856 pediatric chest X-Ray images. The task is binary-class classification of pneumonia against normal. We split the source training set with a ratio of 9:1 into training and validation set and use its source validation set as the test set. The source images are gray-scale, and their sizes are (384−2,916)×(127−2,713). We center-crop the images and resize them into 1×28×28.",
  task: 'binary-class',
  label: {"0": "normal", "1": "pneumonia"},
  n_samples: {
    train: "4708", 
    test: "624", 
    validation: "524" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "8",
  training_epoch: "50",
  other: ""
}
</script>
