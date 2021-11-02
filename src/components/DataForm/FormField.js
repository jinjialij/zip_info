import { ErrorMessage, useField } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && `is-invalid`
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage className="error" component="div" name={field.name} />
    </div>
  );
};

export default FormField;
