import { compose, withHandlers, withProps, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getForm, getValidations, getErrors, getLoadings, getLoading } from 'selectors/signup';
import * as signupActions from 'actions/signup';
import { omit } from 'lodash/fp';
import Input from 'components/Input';

const mapStateToProps = createSelector(
  getForm,
  getValidations,
  getErrors,
  getLoadings,
  getLoading,
  (form, validations, errors, loadings, loading) => ({
    form,
    validations,
    errors,
    loadings,
    loading,
  })
);

const omitProps = compose(mapProps, omit);

const outputValidMessage = validMessage => {
  if (typeof validMessage === 'function') {
    return validMessage;
  }
  return () => validMessage;
};

const Composed = Base => compose(
  connect(mapStateToProps),
  withHandlers({
    onChange: ({ dispatch, formKey, transform }) => event => {
      const value = transform ? transform(event.target.value) : event.target.value;
      dispatch(signupActions.formUpdate(formKey, value));
    },
  }),
  withProps(({ form, validations, errors, loadings, formKey, validText, loading }) => ({
    value: form.get(formKey),
    valid: validations.get(formKey),
    error: errors.get(formKey),
    loading: loadings.get(formKey),
    disabled: loading,
    validText: validText && outputValidMessage(validText)(form.get(formKey)),
  })),
  omitProps([
    'dispatch',
    'form',
    'formKey',
    'tramsform',
    'validations',
    'errors',
    'loadings',
  ])
)(Base);

export default Composed(Input);
