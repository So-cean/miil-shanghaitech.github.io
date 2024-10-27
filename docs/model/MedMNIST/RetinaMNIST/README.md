 <div class="container"> 
  <DetailSection
    image="/image_dataset/RetinaMNIST.jpg"
    title="RetinaMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>


<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: "The RetinaMNIST is based on the DeepDRiD challenge, which provides a dataset of 1,600 retina fundus images. The task is ordinal regression for 5-level grading of diabetic retinopathy severity. We split the source training set with a ratio of 9:1 into training and validation set, and use the source validation set as the test set. The source images of 3×1,736×1,824 are center-cropped and resized into 3×28×28.",
  task: 'ordinal-regression',
  label:  {"0": "0", "1": "1", "2": "2", "3": "3", "4": "4"},
  n_samples: {
    train: "1080", 
    test: "400", 
    validation: "120" 
  }
}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "7",
  training_epoch: "100",
  other: ""
}
</script>

