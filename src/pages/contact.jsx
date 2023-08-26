import React, { useEffect, useState } from "react";
import Aside from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import MainTitle from "../components/MainTitle";
import {
  validateEmail,
  validateFullName,
  validateMsg,
  validatePhone,
} from "../components/Validator";
import InlineError from "../components/inlineError";
import { EmailForm } from "../APIS/EmailForm";
import { toast } from "react-toastify";
import Toast from "../components/Toast";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [fullNameError, setFullNameError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [emailError, setEmailError] = useState();
  const [msgError, setMsgError] = useState();
  const [btnLoading, setBtnLoading] = useState(false);
  const [send, setSend] = useState("tst");

  useEffect(() => {
    // Validation
    validateFullName({ fullName, setFullNameError });
    validatePhone({ phone, setPhoneError });
    validateEmail({ email, setEmailError });
    validateMsg({ msg, setMsgError });

    if (send) {
      toast.success(send.msg);
    }
  }, [fullName, phone, email, msg, send]);

  // ===============

  const submitHundler = (e) => {
    e.preventDefault();

    toast.success("تم إرسال رسالتك بنجاح!");

    // toast.error("حدث خطأ أثناء إرسال رسالتك!");

    setBtnLoading(true);
    if (!fullNameError && !phoneError && !emailError && !msgError) {
      EmailForm({ fullName, phone, email, msg, setSend }).then(() => {
        setBtnLoading(false);
      });
    }
  };
  console.log(send);

  return (
    <>
      {/* <Toast /> */}
      <div className="page d-flex">
        <p
          id="none"
          className="my-1 text-sm text-red-600 font-subMain font-meduim"
        ></p>
        <Aside />
        <div className="content w-full">
          <Header />
          <MainTitle title="تواصل معنا" />
          <div className="form-container">
            <form onSubmit={submitHundler} className="mail-form">
              <div className="top-inputs">
                <div>
                  <input
                    id="name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="الإسم"
                    required
                  />
                  {fullNameError && <InlineError error={fullNameError} />}
                </div>
                <div>
                  <input
                    id="phone"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="الرقم"
                  />
                  {phoneError && <InlineError error={phoneError} />}
                </div>
              </div>
              <div className="bottom-inputs">
                <input
                  id="mail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الالكتروني"
                  required
                />
                {emailError && <InlineError error={emailError} />}
                <textarea
                  id="msg"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="رسالتك هنا"
                  required
                ></textarea>
                {msgError && <InlineError error={msgError} />}
              </div>
              <button
                type="submit"
                disabled={btnLoading && true}
                className="send-mail-btn"
              >
                {btnLoading ? "..جاري الإرسال" : "إرسال الرسالة"}
              </button>
            </form>
          </div>
          <ScrollUp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
