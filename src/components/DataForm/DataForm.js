import { Formik, Form } from "formik";
import * as Yup from "yup";
import AsyncSelectionField from "./AsyncSelectionField";

const DataForm = (props) => {
  const initialValue = {
    city: "",
    state: "",
    country: "",
    postcode: "",
  };

  const schema = Yup.object().shape({
    city: Yup.string().required("Required").min(1).max(45),
    state: Yup.string().required("Required").min(1).max(45),
    country: Yup.string().required("Required").min(1).max(45),
    postcode: Yup.string().required("Required").min(1).max(11),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={(values, formikBag) => {
        // props.onAddDuckData(values);
        formikBag.resetForm(true);
      }}
    >
      {(formik) => (
        <Form>
          {/* Fetch data from api */}

          <AsyncSelectionField
            label="Country"
            name="country"
            options={props.countries}
          />
          <AsyncSelectionField
            label="State/Province"
            name="state"
          ></AsyncSelectionField>
          <AsyncSelectionField label="City" name="city"></AsyncSelectionField>

          <div className="text-center">
            <button className="btn btn-primary mb-5 mt-2 justify" type="submit">
              Get
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DataForm;
