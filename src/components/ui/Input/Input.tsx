import validateField from '../../../utils/validations';

import './Input.scss';

function Input(props: any) {
  return (
    <div className="input-wrapper">
    <input
      type={props.type || 'text'}
      {...props}
    />
    {props.validations.map((validation: any, index: number) =>
      !validateField(props.value, [ validation.type ]) &&
      <span key={`${validation.type}-${index}`} className="form-group-error">{validation.error}</span>)}
    </div>
  );
}

export default Input;
