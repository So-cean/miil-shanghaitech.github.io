// .vuepress/types/trainingpara.d.ts

export interface TrainingPara {
  learning_rate: string;
  convergence_epoch: string;
  training_epoch: string;
  other: string;
}

export const defaultTrainingPara: TrainingPara = {
  learning_rate: "",
  convergence_epoch: "",
  training_epoch: "",
  other: "",
};
