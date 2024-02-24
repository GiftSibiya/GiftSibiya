// Importing Dependancies //
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//--//

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2wizkn",
        "template_1pty1ei",
        form.current,
        "o2u4FEWu0DhUYr0uE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank You, I will get back to you as soon as I can");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[240px] w-[100vw] h-[600px] bg-[#67bcaa] ">
      {/* Contact From */}
      <div className="h-[370px] w-[90vw] rounded-[20px] p-2 border-2 border-white bg-[orange]">
        <form
          className="flex flex-col h-full items-center "
          ref={form}
          onSubmit={sendEmail}
        >
          <p className=" my-2 "> Get In Touch With Me </p>
          <label>Name</label>
          <input
            required
            className="w-[80%] h-[50px] rounded-xl p-2"
            type="text"
            name="from_name"
          />
          <label>Email</label>
          <input
            required
            className="w-[80%] h-[50px] rounded-xl p-2"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            required
            className="w-[80%] h-[160px] rounded-xl p-2 resize-none"
            name="message"
          />
          <input
            className="bg-[#67bcaa] p-2 w-[100px] rounded-lg mt-2"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div className="flex felx-col w-[50vw] justify-end">
        {/* Footer Things */}
        <div className=" h-full w-[45vw] mt-3 font-[50px]">
          <h5 className="text-center">Follow Me:</h5>
          <div className="m-5">
            <p className="flex justify-between ">
              {" "}
              TikTok: <a href="https://www.tiktok.com/@b0b0.sa">
                @b0b0.sa
              </a>{" "}
            </p>
            <p className="flex justify-between ">
              {" "}
              Instagram:{" "}
              <a href="https://www.instagram.com/b0b0_sa/">@b0b0_sa</a>{" "}
            </p>
            <p className="flex justify-between ">
              {" "}
              Email:{" "}
              <a href="sibiya.bobo@gmail.com"> giftsibiya.gb@gmail.com </a>{" "}
            </p>
            <p className="flex justify-between ">
              {" "}
              Whatsapp: <a href="">071 244 2080</a>{" "}
            </p>
          </div>
        </div>
        <div className=" "></div>
      </div>
    </section>
  );
}

export default Footer;
