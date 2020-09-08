import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';
import Animator from './Animator';

export default function SocialForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  function onSubmit(data) {
    console.log(data);
    setSocial(data);
    history.push('/review');
  }

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Where can we find you on social?</h2>

        <input
          type='text'
          name='twitter'
          placeholder='What is your twitter?'
          defaultValue={social.twitter}
          ref={register({ required: true })}
        />
        <p>{errors.twitter && 'Twitter is required.'}</p>

        <input
          type='text'
          name='facebook'
          placeholder='What is your Facebook?'
          defaultValue={social.facebook}
          ref={register({
            required: true,
          })}
        />
        <p>{errors.facebook && 'Facebook is required.'}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  );
}
