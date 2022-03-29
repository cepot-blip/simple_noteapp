import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Lottie from "lottie-web";
import { HandleRegister } from "./handleRegister";
import { Modal } from "antd";

const Splash = () => {
  const [showPassword, setShowPassword] = useState(false);

  const container = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lottie.json"),
    });

    Lottie.loadAnimation({
      container: container2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lottie2.json"),
    });

    Lottie.loadAnimation({
      container: container3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lottie3.json"),
    });
  }, []);

  const SubmitRegister = (e) => {
    HandleRegister(e)
      .then((res) => {
        if (res) {
          Modal.success({
            content: "Registrasi berhasil",
            onOk: () => {
              window.location.href = "/dashboard/home";
            },
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      className="bg-slate-300 w-screen h-screen"
    >
      <SwiperSlide className="w-full h-full flex flex-col justify-center items-center bg-blue-600 p-14 font-medium text-2xl text-white">
        <h1 className="mt-16 text-white">
          Aplikasi Note App Modern kekinian dengan mempermudah keseharian dan
          membantu akivitasmu dengan mudah .
        </h1>
        <div ref={container} className="mt-16 flex flex-col"></div>

        <div className="w-full h-12 flex justify-center items-center gap-4 mt-auto">
          <span className="bg-white w-3 h-3 rounded-full"></span>
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full h-full flex flex-col justify-center items-center bg-blue-600 p-14 font-semibold text-2xl text-white">
        <h1 className="mt-16 text-white">
          Pilihan anak muda dengan fiture simple Notemu menjadi lebih menarik
          dengan berbagai tema dan lainnya .
        </h1>

        <div className="mt-16 flex flex-col" ref={container2}></div>

        <div className="w-full h-12 flex justify-center items-center gap-4 mt-auto">
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
          <span className="bg-white w-3 h-3 rounded-full"></span>
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-full h-full flex flex-col justify-center items-center bg-blue-600 p-14 font-semibold text-2xl text-white">
        <div className=" flex flex-col pt-12 top-12" ref={container3}></div>
        <h1 className="mt-4 text-white">REGISTER</h1>
        <hr className="text-white w-full mt-2" />

        <form
          className="w-full flex flex-col gap-4 mt-4"
          onSubmit={SubmitRegister}
        >
          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              className="text-white uppercase font-medium text-lg"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full h-12 px-4 border-none rounded-md text-black"
            />
          </div>

          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              className="text-white uppercase font-medium text-lg"
            >
              Password
            </label>

            <div className="flex relative">
              <span
                htmlFor=""
                className="absolute right-4 self-center"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <>😈</> : <>😇</>}
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full h-12 px-4 border-none rounded-md text-black"
              />
            </div>
          </div>

          <button className="w-full h-12 bg-blue-400 rounded-md" type="submit">
            Register
          </button>
        </form>

        <div className="w-full h-12 flex justify-center items-center gap-4 mt-auto">
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
          <span className="bg-white/50 w-3 h-3 rounded-full"></span>
          <span className="bg-white w-3 h-3 rounded-full"></span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Splash;
