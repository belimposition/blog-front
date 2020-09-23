import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styled, { css } from 'styled-components/macro';
import ReactInputMask from 'react-input-mask';

import { DEFAULT_INPUT_MAX_LENGTH } from '@constants/inputMaxLength';

import trimInputValue from '@shared/trimInputValue/index';

export const ICON_SIDE = {
  left: 'left',
  right: 'right',
}

export const InputField = styled(ReactInputMask)`
  appearance: none;
  border: none;
  width: 100%;
  height: 100%;
  background: var(--color-btn-default-disabled);
  padding: 0 16px;
  outline: 0;
  font-family: var(--font-graphik);
  font-size: 14px;
  line-height: 20px;
  color: var(--color-btn-black);
  border-radius: 4px;

  &[type='password'] {
    padding-left: 16px;
    padding-right: 60px;
  }

  &:disabled {
    pointer-events: none;
    background-color: #fefefe;
    border: 1px solid var(--color-btn-default-disabled);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: text;

  ${InputField} {
    border: 1px solid
      ${(props) => (props.isError ? 'var(--color-red) !important' : 'var(--color-btn-default-disabled)')};
    ${({ isWithoutFocus }) => !isWithoutFocus && css`
      &:focus {
        border-color: black !important;
      }
    `}
  }

  &:hover ${InputField} {
    border-color: ${(props) => (props.isDisabled ? 'var(--color-btn-default-disabled)' : '#E1E1E1')};
    border-color: ${(props) => (props.isError ? 'var(--color-red)' : '#E1E1E1')};
  }
`;

export const InputPaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  right: 15px;
  padding: 0;
  width: 100%;
  max-width: calc(100% - 30px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: var(--font-graphik);
  font-size: 14px;
  line-height: 22px;
  color: var(--color-btn-text-default-disabled);
  transform: translateY(-50%);
`;

export const Message = styled.span`
  position: absolute;
  top: calc(100% + 4px);
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  color: ${(props) => (props.isError ? 'var(--color-red)' : 'var(--color-black)')};
`;

export const PasswordButton = styled.button`
  position: absolute;
  top: 4px;
  right: 18px;
  width: 50px;
  height: 50px;
  background: ${(props) => (props.showEye
    ? 'url(../../../static/icons/input/openEye.svg)'
    : 'url(../../../static/icons/input/closedEye.svg)')};
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  outline: none;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  background: ${({ iconSrc }) => `url(${iconSrc})`};
  background-repeat: no-repeat;
`;

export const InputComponentWrapper = styled.div`
  position: relative;
  height: 100%;
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};
  user-select: ${(props) => (props.isDisabled ? 'none' : '')};

  ${Icon} {
    ${({ iconSide }) => (iconSide === ICON_SIDE.right ? css`right: 16px;` : css`left: 16px;`)}
  }

  ${InputField} {
    ${({ iconSide, iconSrc }) => (Boolean(iconSrc) && iconSide === ICON_SIDE.right
    ? css`
        padding-right: 40px;
      `
    : css`
        padding-right: 16px;
      `)
}
    ${({ iconSide, iconSrc }) => (Boolean(iconSrc) && iconSide === ICON_SIDE.left
    ? css`
        padding-left: 40px;
      `
    : css`
        padding-left: 16px;
      `)
}
  }

  ${InputPaceholder} {
    ${({ iconSide, iconSrc }) => Boolean(iconSrc) && iconSide === ICON_SIDE.left
      && css`
        left: 40px;
      `
}
  }
`;


const InputComponent = (props, ref) => {
  const {
    isDisabled,
    isError,
    isAlwaysShowMask,
    isWithoutFocus,
    autoComplete = 'on',
    isAutoFocus,
    formatChars,
    mask,
    maskChar = '',
    inputPlaceholder,
    subLabelText,
    type,
    className = '',
    ariaLabel = '',
    id,
    pattern,
    name,
    dataTestId = undefined,
    placeholder,
    value,
    iconSide,
    iconSrc,
    maxLength = DEFAULT_INPUT_MAX_LENGTH,
    onKeyPress = () => {},
    onBlur = () => {},
    onFocus = () => {},
    onChange = () => {},
    onClick = () => {},
  } = props;
  const inputRef = useRef(null);
  const [isPasswordShown, setShowPassword] = useState(false);
  const [isShowPlaceholder, setShowPlaceholder] = useState(false);

  useImperativeHandle(ref, () => inputRef.current);

  const handleBlur = useCallback(
    (event) => {
      if (!value) {
        setShowPlaceholder(true);
      }

      const trimmedValue = trimInputValue(event);
      onChange(trimmedValue);
      onBlur(event);
    },
    [onBlur, onChange, value],
  );

  useEffect(() => {
    setShowPlaceholder(!value || String(value).length === 0);
  }, [value]);

  const handleFocus = (event) => {
    setShowPlaceholder(false);
    onFocus(event);
  };
  const handleEyeClick = () => setShowPassword(!isPasswordShown);
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleWrapperClick = () => {
    if (inputRef.current && isShowPlaceholder) {
      setShowPlaceholder(false);
      inputRef.current.focus();
    }
  };


  return (
    <InputComponentWrapper
      isDisabled={Boolean(isDisabled)}
      className={className}
      data-testid={dataTestId}
      iconSrc={iconSrc}
      iconSide={iconSide}
    >
      <InputWrapper
        onClick={!isDisabled ? handleWrapperClick : undefined}
        isDisabled={Boolean(isDisabled)}
        isError={Boolean(isError)}
        isWithoutFocus={Boolean(isWithoutFocus)}
      >
        {isShowPlaceholder && (
          <InputPaceholder>
            {placeholder}
          </InputPaceholder>
        )}
        <InputField
          mask={mask}
          name={name}
          maskChar={maskChar}
          formatChars={formatChars}
          alwaysShowMask={isAlwaysShowMask}
          autoFocus={isAutoFocus}
          placeholder={inputPlaceholder}
          onKeyPress={onKeyPress}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={onClick}
          disabled={isDisabled}
          value={value}
          id={id}
          inputRef={(e) => {
            inputRef.current = e;
          }}
          pattern={pattern}
          type={isPasswordShown ? 'text' : type}
          aria-label={ariaLabel}
          autoComplete={autoComplete}
          maxLength={!mask ? maxLength : undefined}
        />
        {iconSrc && (
          <Icon iconSrc={iconSrc} />
        )}
        {type === 'password' && (
          <PasswordButton
            type="button"
            onClick={handleEyeClick}
            showEye={isPasswordShown}
          />
        )}
      </InputWrapper>
      <Message isError={Boolean(isError)}>{subLabelText}</Message>
    </InputComponentWrapper>
  );
};

const Input = forwardRef(InputComponent);


export default Input;
