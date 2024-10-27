<div class="container">
  <DetailSection
    image="/image_dataset/PathMNIST.jpg"
    title="PathMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description:"The PathMNIST is based on a prior study for predicting survival from colorectal cancer histology slides, providing a dataset (NCT-CRC-HE-100K) of 100,000 non-overlapping image patches from hematoxylin & eosin stained histological images, and a test dataset (CRC-VAL-HE-7K) of 7,180 image patches from a different clinical center. The dataset is comprised of 9 types of tissues, resulting in a multi-class classification task. We resize the source images of 3×224×224 into 3×28×28, and split NCT-CRC-HE-100K into training and validation set with a ratio of 9:1. The CRC-VAL-HE-7K is treated as the test set.",
  task: 'multi-class',
  label: {
        "0": "adipose",
        "1": "background",
        "2": "debris",
        "3": "lymphocytes",
        "4": "mucus",
        "5": "smooth muscle",
        "6": "normal colon mucosa",
        "7": "cancer-associated stroma",
        "8": "colorectal adenocarcinoma epithelium",
    },
  n_samples: {
    train: "89996", 
    test: "7180", 
    validation: "10004" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "7",
  training_epoch: "50",
  other: ""
}
</script>
