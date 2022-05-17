import { useState } from 'react';

function useLocaleStorage(key, initialValue) {
  const [localeStorageValue, setLocaleStorageValue] = useState(() =>
    getLocaleStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueToStore =
      value instanceof Function ? value(localeStorageValue) : value;

    //set to state
    setLocaleStorageValue(value);

    //set to locale storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localeStorageValue, setValue];
}

function getLocaleStorageValue(key, initialValue) {
  const itemFromStorage = JSON.parse(localStorage.getItem(key));
  return itemFromStorage ? itemFromStorage : initialValue;
}

export default useLocaleStorage;
