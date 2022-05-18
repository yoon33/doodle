import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../auth-context';
import { useDispatch } from 'react-redux';
import {login} from '../../slices/userSlice'

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value:'', isValid: false}
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});

  const[passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: null});

  const authCtx = useContext(AuthContext);
  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6);
  // }, [enteredEmail, enteredPassword])

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailState,passwordState]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //  event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   authCtx.onLogin(emailState.value, passwordState.value);
  // };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login());
  };
  return (
    <Card className={classes.login}>
      <h1>Thank you for visiting my Facebook clone. Use any login credentials you wish to enter the site.
        Email must be valid (i.e. contain an `@` and a domain extension).
        Password must have at least 6 characters.
      </h1>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
