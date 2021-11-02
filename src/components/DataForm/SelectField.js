import { ErrorMessage, useField } from "formik";

const SelectField = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-select ${meta.touched && meta.error && `is-invalid`}`}
        {...field}
        {...props}
        autoComplete="off"
      >
        {options &&
          options.length > 0 &&
          options.map((el) => {
            return (
              <option key={el.id} value={el.key}>
                {el.value}
              </option>
            );
          })}
      </select>
      <ErrorMessage className="error" component="div" name={field.name} />
    </div>
  );
};

export default SelectField;
