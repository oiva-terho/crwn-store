import './form-input.styles.scss';

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="input">
      <input className="input-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "input-shrink" : ""
          } input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
