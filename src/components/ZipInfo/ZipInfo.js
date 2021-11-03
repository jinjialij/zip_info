import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../DataForm/SelectField";
import FormField from "../DataForm/FormField";

const ZipInfo = (props) => {
  const initialValue = {
    country: "",
    postcode: "",
  };

  const schema = Yup.object().shape({
    country: Yup.string().required("Required").min(1).max(45),
    postcode: Yup.string().required("Required").min(1).max(11),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={(values, formikBag) => {
        // console.log(values);
        props.onGetZipInfo(values);
        formikBag.resetForm(true);
      }}
    >
      {(formik) => (
        <Form>
          <SelectField
            label="Country"
            name="country"
            options={props.countries}
          />
          <FormField label="Post/Zip code" name="postcode" type="text" />
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

export default ZipInfo;
