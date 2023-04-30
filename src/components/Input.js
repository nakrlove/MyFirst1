import React from 'react';
import PropTypes from 'prop-types';
import { useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(props => ({
  placeholder: props.placeholder ,
  placeholderTextColor: props.borderColor,
}))`
  width: ${({width}) => width - 150 }px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: ${props => props.borderColor};
  font-size: 24px;
  color: #ffffff;
`;

const Input = props => {

  console.log(props.value)
  const width = useWindowDimensions().width;
  return <StyledInput placeholder={props.placeholder}
                      borderColor={props.borderColor}  
                      onChangeText={props.onChangeText}
                      onSubmitEditing={props.onSubmitEditing}  
                      onBlur={props.onBlur}
                      value={props.value}
                      width={width} 
                      maxLength={50}
                      autoCaptialize="none"
                      returnKeyType="done"
                      keyboardAppearance="dark"
                      autoCorrect={false}/>;
};

Input.defaultProps = {
  borderColor: '#3498db',
  fontSsize: '24px',
  color: '#ffffff',
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}
export default Input;
