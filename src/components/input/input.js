import React from "react";
import styles from "./input.module.scss";

export const Input = ({ label, list, id, onChange, ...props }) => {
  const findValue = ({ target }) =>
    onChange(list.find(item => item.name === target.value));
    
  return (
    <>
      <input
        className={styles.input}
        placeholder={label}
        list={`${id}_list`}
        id={id}
        onChange={findValue}
        {...props}
      ></input>
      <label htmlFor={id}>{label}</label>
      <datalist id={`${id}_list`}>
        {list.map(({ id, name, key }) => (
          <option id={id} value={name} key={key} />
        ))}
      </datalist>
    </>
  );
};

export default Input;
