const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegular)
    ? setEmailError("البريد الالكتروني غير صالح")
    : setEmailError("");
};

const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegular = /\d+/;
  return phone && !phone.match(phoneRegular) 
    ? setPhoneError("الرقم غير صالح")
    : setPhoneError("");
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 2
    ? setFullNameError("الإسم قصير جدا")
    : fullName && fullName.length > 50
    ? setFullNameError("الإسم طويل جدا")
    : setFullNameError("");
};

const validateMsg = ({ msg, setMsgError }) => {
  msg && msg.length > 800 ? setMsgError("الرسالة طويلة جدا") : setMsgError("");
};

export { validateEmail, validatePhone, validateFullName, validateMsg };
