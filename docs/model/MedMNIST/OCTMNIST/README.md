

<div class="container">
  <DetailSection
    image="/image_dataset/OCTMNIST.jpg"
    title="OCTMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description: "The OCTMNIST is based on a prior dataset of 109,309 valid optical coherence tomography (OCT) images for retinal diseases. The dataset is comprised of 4 diagnosis categories, leading to a multi-class classification task. We split the source training set with a ratio of 9:1 into training and validation set, and use its source validation set as the test set. The source images are gray-scale, and their sizes are (384−1,536)×(277−512). We center-crop the images and resize them into 1×28×28.",
  task: 'multi-class',
  label: {
            "0": "choroidal neovascularization",
            "1": "diabetic macular edema",
            "2": "drusen",
            "3": "normal",
        },
  n_samples: {
    train: "97477", 
    test: "1000", 
    validation: "10832" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "10",
  training_epoch: "50",
  other: ""
}
</script>

