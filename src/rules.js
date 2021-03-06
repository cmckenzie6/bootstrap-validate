module.exports = {
    /**
     * @param input HTMLInputElement
     * @param min number
     */
  min: (input, min) => input.value.length >= min,
    /**
     * @param input HTMLInputElement
     * @param max number
     */
  max: (input, max) => input.value.length <= max,
    /**
     * @param input HTMLInputElement
     */
  email: (input) => {
    let isValid;
    if (!input.hasAttribute('type')) {
      input.setAttribute('type', 'email');
      isValid = input.valid;
    } else {
      isValid = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input.value);
    }
    return isValid;
  },
};
