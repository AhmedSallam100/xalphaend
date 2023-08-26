import axios from "axios";

export const EmailForm = async ({ fullName, phone, email, msg, setSend }) => {
  try {
    const data = { fullName, phone, email, msg, setSend };
    let res = await axios.post(
      `https://xalphaend.onrender.com/send`,
      data
    );
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
  }
};
