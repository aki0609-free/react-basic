import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

export const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });


  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredStreet,
      postalCode: enteredPostalCode
    });
  };

  const nameControledClasses = `${classes.control} ${formInputValidity.name ? '': classes.invalid}`;
  const streetControledClasses = `${classes.control} ${formInputValidity.street ? '': classes.invalid}`;
  const cityControledClasses = `${classes.control} ${formInputValidity.city ? '': classes.invalid}`;
  const postalCodeControledClasses = `${classes.control} ${formInputValidity.postalCode ? '': classes.invalid}`;


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControledClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid value</p>}
      </div>
      <div className={streetControledClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="name" ref={streetInputRef} />
      {!formInputValidity.street && <p>Please enter a valid value</p>}
      </div>
      <div className={cityControledClasses}>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid value</p>}
      </div>
      <div className={postalCodeControledClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid value</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}
