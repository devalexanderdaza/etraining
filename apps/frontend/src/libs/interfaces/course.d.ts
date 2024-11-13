export interface Course {
  id?: number;
  name: string;
  category_id: number;
  modality_id: number;
  duration: number;
  couta: number;
  createdAt?: Date;
  updatedAt?: Date;
}
