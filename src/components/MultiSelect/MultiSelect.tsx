import Select, { StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';

import { S, MultiSelectProps } from '.';

const animatedComponents = makeAnimated();

const MultiSelect = ({
  placeholder = 'Selecione...',
  options,
  isDisabled,
  isLoading,
  isMulti,
  isClearable = false,
  isSearchable = false,
  onChange,
}: MultiSelectProps) => {
  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      ...S.getControlCustomStyles(state),
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      ...S.getMenuCustomStyles(state),
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      ...S.getOptionCustomStyles(state),
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      ...S.getPlaceholderCustomStyles(state),
    }),
  };

  return (
    <S.Wrapper>
      <Select
        className="multi-select"
        classNamePrefix="multi-select"
        styles={styles as StylesConfig}
        onChange={onChange}
        components={animatedComponents}
        options={options}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        closeMenuOnSelect={!isMulti}
        placeholder={placeholder}
      />
    </S.Wrapper>
  );
};

export default MultiSelect;
