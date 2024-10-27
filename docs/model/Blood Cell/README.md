 <div class="container"> 
  <DetailSection
    image="/image_dataset/Blood Cell.jpg"
    title="Blood Cell"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>


<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: 'The Blood Cell dataset is a comprehensive collection of blood cell images, consisting of 12,500 augmented images categorized into four different cell types: Eosinophil, Lymphocyte, Monocyte, and Neutrophil. Each cell type is grouped into separate folders, with approximately 3,000 images per cell type. The dataset also includes an additional set of 410 original images (pre-augmentation) with detailed subtype labels and bounding boxes for each cell. These images are provided in JPEG format, with accompanying XML metadata for bounding boxes and CSV files for cell type labels. This dataset is valuable for developing automated methods to detect and classify blood cell subtypes, which have important medical applications. The dataset is randomly split into training, validation, and test sets to facilitate machine learning model development and evaluation.',
  task: 'multi-class',
  label: {
    "0": "Eosinophil",
    "1": "Lymphocyte",
    "2": "Monocyte",
    "3": "Neutrophil"
    },
  n_samples: {
    "train": "9375",
    "test": "2500",
    "validation": "625"
  }
}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "12",
  training_epoch: "50",
  other: ""
}
</script>

