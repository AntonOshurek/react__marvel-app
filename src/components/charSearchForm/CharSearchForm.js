import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss';

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const {loading, error, getCharacterByName, clearError} = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  }

  const updateChar = (name) => {
    clearError();

    getCharacterByName(name)
      .then(onCharLoaded);
  }

  const errorMessage = error ? <div className="search__critical-error"><ErrorMessage /></div> : null;
  const results = !char ? null : char.length > 0 ?
    <div className="search__inners">
      <div className="search__success">There is! Visit {char[0].name} page?</div>
      <Link to={`/characters/${char[0].id}`} className="button button__secondary">
        <div className="inner">To page</div>
      </Link>
    </div> :
    <div className="search__error">
      The character was not found. Check the name and try again
    </div>;

    return (
      <div className="search">
        <Formik
          initialValues = {{
            charName: ''
          }}
          validationSchema = {Yup.object({
            charName: Yup.string().required('This field is required')
          })}
          onSubmit = { ({charName}) => {
            updateChar(charName);
          }}
        >
        <Form>
          <label className="search__lable" htmlFor="charName">Or find a character by name:</label>
          <div className="search__inners">
            <Field
              id="charName"
              name='charName'
              type='text'
              placeholder="Enter name"/>
            <button
              type='submit'
              className="button button__main"
              disabled={loading}>
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage component="div" className="search__error" name="charName" />
        </Form>
        </Formik>
        {results}
        {errorMessage}
      </div>
    )
}

export default CharSearchForm;
