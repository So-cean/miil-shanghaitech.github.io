<div class="container">
  <DetailSection
    image="/image_dataset/DermaMNIST.jpg"
    title="DermaMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description: "The DermaMNIST is based on the HAM10000, a large collection of multi-source dermatoscopic images of common pigmented skin lesions. The dataset consists of 10,015 dermatoscopic images categorized as 7 different diseases, formulized as a multi-class classification task. We split the images into training, validation and test set with a ratio of 7:1:2. The source images of 3×600×450 are resized into 3×28×28.",
  task: 'multi-class',
  label: {
            "0": "actinic keratoses and intraepithelial carcinoma",
            "1": "basal cell carcinoma",
            "2": "benign keratosis-like lesions",
            "3": "dermatofibroma",
            "4": "melanoma",
            "5": "melanocytic nevi",
            "6": "vascular lesions",
        },
  n_samples: {
    train: "7007", 
    test: "2005", 
    validation: "1003" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "25",
  training_epoch: "100",
  other: ""
}
</script>


