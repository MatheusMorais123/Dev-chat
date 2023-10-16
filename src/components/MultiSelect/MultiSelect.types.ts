type Option = {
  value: string | number;
  label: string;
};

export type MultiSelectProps = {
  placeholder?: string;
  options: Option[];
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (newValue: Option | Option[]) => void;
};
