type FieldType = 'text' | 'image';

type FieldControl = {
  id: string;
  type: FieldType;
  label: string;
  value: string | number | boolean;
  displayOrder: number;
  required?: boolean;
  maxLength?: number;
  placeHolder?: string;
}; 

export type {
  FieldControl,
};
