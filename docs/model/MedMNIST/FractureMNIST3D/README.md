

<div class="container">
  <DetailSection
    image="/image_dataset/FractureMNIST3D.jpg"
    title="FractureMNIST3D"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
</div>

<script lang="ts" setup>
const datasetInfo: DatasetInfo = {
  description: "The FractureMNIST3D is based on the RibFrac Dataset, containing around 5,000 rib fractures from 660 computed tomography 153 (CT) scans. The dataset organizes detected rib fractures into 4 clinical categories (i.e., buckle, nondisplaced, displaced, and segmental rib fractures). As we use low-resolution images, we disregard segmental rib fractures and classify 3 types of rib fractures (i.e., buckle, nondisplaced, and displaced). For each annotated fracture area, we calculate its center and resize the center-cropped 64mm×64mm×64mm image into 28×28×28. The official split of training, validation and test set is used.",
  task: 'multi-class',
  label: {
            "0": "buckle rib fracture",
            "1": "nondisplaced rib fracture",
            "2": "displaced rib fracture",
        },
  n_samples: {
    train: "1027", 
    test: "240", 
    validation: "103" 
  }
}

const trainingPara: TrainingPara = {
  learning_rate: "1e-4",
  convergence_epoch: "15",
  training_epoch: "100",
  other: ""
}
</script>

