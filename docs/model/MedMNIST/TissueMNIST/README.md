 <div class="container"> 
  <DetailSection
    image="/image_dataset/TissueMNIST.jpg"
    title="TissueMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>


<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: "We use the BBBC051, available from the Broad Bioimage Benchmark Collection. The dataset contains 236,386 human kidney cortex cells, segmented from 3 reference tissue specimens and organized into 8 categories. We split the source dataset with a ratio of 7:1:2 into training, validation and test set. Each gray-scale image is 32×32×7 pixels, where 7 denotes 7 slices. We take maximum values across the slices and resize them into 28×28 gray-scale images.",
  task: 'multi-class',
  label:  {
            "0": "Collecting Duct, Connecting Tubule",
            "1": "Distal Convoluted Tubule",
            "2": "Glomerular endothelial cells",
            "3": "Interstitial endothelial cells",
            "4": "Leukocytes",
            "5": "Podocytes",
            "6": "Proximal Tubule Segments",
            "7": "Thick Ascending Limb",
        },
  n_samples: {
    train: "165466", 
    test: "47280", 
    validation: "23640" 
  }
}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "10",
  training_epoch: "50",
  other: ""
}
</script>

