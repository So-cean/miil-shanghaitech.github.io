<div class="container">
  <DetailSection
    image="/image_dataset/OrganAMNIST.jpg"
    title="OrganAMNIST"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description:"The OrganAMNIST is based on 3D computed tomography (CT) images from Liver Tumor Segmentation Benchmark (LiTS). It is renamed from OrganMNIST_Axial (in MedMNIST v1) for simplicity. We use bounding-box annotations of 11 body organs from another study to obtain the organ labels. Hounsfield-Unit (HU) of the 3D images are transformed into gray-scale with an abdominal window. We crop 2D images from the center slices of the 3D bounding boxes in axial views (planes). The images are resized into 1×28×28 to perform multi-class classification of 11 body organs. 115 and 16 CT scans from the source training set are used as training and validation set, respectively. The 70 CT scans from the source test set are treated as the test set.",
  task: 'multi-class',
  label:  {
            "0": "bladder",
            "1": "femur-left",
            "2": "femur-right",
            "3": "heart",
            "4": "kidney-left",
            "5": "kidney-right",
            "6": "liver",
            "7": "lung-left",
            "8": "lung-right",
            "9": "pancreas",
            "10": "spleen",
        },
  n_samples: {
    train: "34561", 
    test: "17778", 
    validation: "6491" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "65",
  training_epoch: "100",
  other: ""
}
</script>