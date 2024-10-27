 <div class="container"> 
  <DetailSection
    image="/image_dataset/OAI.png"
    title="OAI"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>


<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: 'The Osteoarthritis Initiative (OAI) dataset is a comprehensive, longitudinal cohort study aimed at investigating the natural history of knee osteoarthritis (OA). Sponsored by the National Institutes of Health (NIH), this multi-center study spans ten years and includes a wide range of data types such as imaging, biochemical, genetic, and risk markers. The dataset comprises thousands of knee X-ray and MRI images, along with clinical data collected from men and women across various stages of OA. This extensive dataset is invaluable for researchers aiming to understand the progression of knee osteoarthritis, develop diagnostic tools, and evaluate potential treatments. The dataset is randomly split into training, validation, and test sets to support machine learning model development and evaluation.',
  task: 'multi-class',
  label: {
    "0": "normal, no signs of osteoarthritis",
    "1": "doubtful osteoarthritis",
    "2": "mild osteoarthritis",
    "3": "moderate osteoarthritis",
    "4": "severe osteoarthritis"
  },
  n_samples: {
  "train": "",
  "test": "",
  "validation": ""
}

}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "7",
  training_epoch: "50",
  other: ""
}
</script>

