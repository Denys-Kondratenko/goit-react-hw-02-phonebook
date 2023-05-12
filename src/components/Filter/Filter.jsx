import PropTypes from 'prop-types';
import { Input } from 'components/AddContactForm/AddContactForm.styled';
import { Formik, Form } from 'formik';

export const Filter = ({ initialValues, onChange }) => {
  return (
    <Formik initialValues={initialValues}>
      <Form autoComplete="off">
        <label htmlFor="filter">
          Find contacts by name
          <Input
            name="filter"
            value={initialValues.filter}
            onChange={onChange}
          />
        </label>
      </Form>
    </Formik>
  );
};

Filter.propTypes = {
  initialValues: PropTypes.shape({ filter: PropTypes.string.isRequired }),
  onChange: PropTypes.func.isRequired,
};
