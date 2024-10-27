<div class="container">
  <DetailSection
    image="/image_dataset/OrganMNIST3D.jpg"
    title="OrganMNIST3D"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description:"The source of the OrganMNIST3D is the same as that of the Organ{A,C,S}MNIST. Instead of 2D images, we directly use the 3D bounding boxes and process the images into 28×28×28 to perform multi-class classification of 11 body organs. The same 115 and 16 CT scans as the Organ{A,C,S}MNIST from the source training set are used as training and validation set, respectively, and the same 70 CT scans as the Organ{A,C,S}MNIST from the source test set are treated as the test set.",
  task: 'multi-class',
  label:   {
            "0": "liver",
            "1": "kidney-right",
            "2": "kidney-left",
            "3": "femur-right",
            "4": "femur-left",
            "5": "bladder",
            "6": "heart",
            "7": "lung-right",
            "8": "lung-left",
            "9": "spleen",
            "10": "pancreas",
        },
  n_samples: {
    train: "971", 
    test: "610", 
    validation: "161" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "1e-5",
  convergence_epoch: "65",
  training_epoch: "100",
  other: ""
}
</script>
