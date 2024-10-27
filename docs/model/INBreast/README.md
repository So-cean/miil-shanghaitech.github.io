 <div class="container"> 
  <DetailSection
    image="/image_dataset/INBreast.png"
    title="INBreast"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>

<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: 'INBreast dataset includes 410 digital mammography images obtained from 115 patients, comprising 339 non-malignant and 71 malignant cases. The diagnostic task follows the BI-RADS assessment of masses to classify these mammography images into non-malignant and malignant categories. BloodCell dataset consists of 12,500 augmented images representing four subtypes of blood cells: Eosinophil, Lymphocyte, Monocyte, and Neutrophil. The objective of this dataset is to accurately identify the respective types of blood cells. NIH Chest X-ray 14 dataset contains 112,120 frontal-view chest X-ray images annotated with 14 common thoracic diseases. The task involves diagnosing the diseases present in each chest X-ray image. ',
  task: 'Binary-Class',
  label: {
			"0": "normal",
			"1": "lesion"
  },
  n_samples: {
    "train": "90",
    "test": "25",
    "validation": "0"
	}

}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "",
  training_epoch: "",
  other: "5折 50/折"
}
</script>
