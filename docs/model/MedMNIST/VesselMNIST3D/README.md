 <div class="container"> 
  <DetailSection
    image="/image_dataset/VesselMNIST3D.jpg"
    title="VesselMNIST3D"
    :trainingpara="trainingPara"
    :datasetinfo="datasetInfo"
  />
  </div>


<script lang="ts" setup>

const datasetInfo: DatasetInfo = {
  description: "The VesselMNIST3D is based on an open-access 3D intracranial aneurysm dataset, IntrA, containing 103 3D models (meshes) of entire brain vessels collected by reconstructing MRA images. 1,694 healthy vessel segments and 215 aneurysm segments are generated automatically from the complete models. We fix the non-watertight mesh with PyMeshFix and voxelize the watertight mesh with trimesh into 28×28×28 voxels. We split the source dataset with a ratio of 7:1:2 into training, validation and test set.",
  task: 'binary-class',
  label:{"0": "vessel", "1": "aneurysm"},
  n_samples: {
    train: "1335", 
    test: "382", 
    validation: "191" 
  }
}


const trainingPara: TrainingPara = {
  learning_rate: "3e-4",
  convergence_epoch: "25",
  training_epoch: "50",
  other: ""
}
</script>

