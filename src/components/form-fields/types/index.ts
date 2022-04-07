type Props = {
  label: string,
  value: string,
  id: string,
  isRequired?: boolean,
  onChange: (key: string, value: string) => void;
  optionValues?: string[],
};

export type {
  Props,
}