// .vuepress/types/datasetinfo.d.ts

export interface DatasetInfo {
  description: string;
  task: string;
  label: {[key: string]: string};
  n_samples: Sample;
}
interface Sample {
  train: string;
  test: string;
  validation: string;
}


export const defaultDatasetInfo: DatasetInfo = {
  description: '',
  task: '',
  label: {} as {[key: string]: string}, 
  n_samples: {
    train: '',
    test: '',
    validation: ''
  }
};