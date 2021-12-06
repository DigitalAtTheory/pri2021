import { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Gender from "./Gender";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Optins from "./Optins";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FormSection() {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [gender, setGender] = useState(null);
  const [firstAnswer, setFirstAnswer] = useState(null);
  const [secondAnswer, setSecondAnswer] = useState(null);
  const [thirdAnswer, setThirdAnswer] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [manufacturer, setManufacturer] = useState(false);
  const [raceOil, setRaceOil] = useState(false);
  const [kalitta, setKalitta] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
  });
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
  });
  const [genderRef, genderInView] = useInView({
    triggerOnce: true,
  });
  const [firstQuestionRef, firstQuestionInView] = useInView({
    triggerOnce: true,
  });
  const [secondQuestionRef, secondQuestionInView] = useInView({
    triggerOnce: true,
  });
  const [thirdQuestionRef, thirdQuestionInView] = useInView({
    triggerOnce: true,
  });
  const [optinsRef, optinsInView] = useInView({
    triggerOnce: true,
  });
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
  });

  const router = useRouter();

  const handleInput = (e) => {
    switch (e.target.id) {
      case "age":
        setAge(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "zipCode":
        setZipCode(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleChooseRadial = (e, localFunction, id) => {
    switch (id) {
      case "gender":
        setGender(e);
        break;
      case "oilChange":
        setFirstAnswer(e);
        break;
      case "personalCar":
        setSecondAnswer(e);
        break;
      case "whatOil":
        setThirdAnswer(e);
        break;
      default:
        break;
    }
    localFunction(e);
  };

  const handleOptin = (e) => {
    switch (e.target.id) {
      case "privacyPolicy":
        privacyPolicy ? setPrivacyPolicy(false) : setPrivacyPolicy(true);
        break;
      case "manufacturer":
        manufacturer ? setManufacturer(false) : setManufacturer(true);
        break;
      case "raceOil":
        raceOil ? setRaceOil(false) : setRaceOil(true);
        break;
      case "kalitta":
        kalitta ? setKalitta(false) : setKalitta(true);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const formData = {
      age,
      email,
      zip_code: zipCode,
      gender,
      oil_change: firstAnswer,
      personal_car: secondAnswer,
      what_oil: thirdAnswer,
      privacy_policy: privacyPolicy,
      manufacturer,
      race_oil: raceOil,
      kalitta,
    };

    if (!formData.gender) {
      setError(true);
      setErrorMessage("Please choose a gender option.");
    } else if (!formData.age) {
      setError(true);
      setErrorMessage("Please enter your age.");
    } else if (!formData.email) {
      setError(true);
      setErrorMessage("Please enter your email.");
    } else if (!formData.zip_code) {
      setError(true);
      setErrorMessage("Please enter your zip code.");
    } else if (!formData.oil_change) {
      setError(true);
      setErrorMessage("Please tell use how you change your oil.");
    } else if (!formData.personal_car) {
      setError(true);
      setErrorMessage("Please tell us the make of your primary car.");
    } else {
      if (error) setError(false);

      await axios
        .post("api/physical", formData)
        .then((res) => router.push("/thank-you"));
    }
  };

  return (
    <div className="max-w-3xl px-2 mx-auto text-center">
      <motion.h2
        ref={titleRef}
        animate={{ opacity: titleInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="text-white text-center text-3xl lg:text-5xl mb-12 font-bold"
      >
        Sign up and stay tuned for more exclusive content around Kalitta
        Motorsports and Mobil 1 in 2022.
      </motion.h2>
      <motion.div
        ref={infoRef}
        animate={{
          y: infoInView ? 0 : 200,
          opacity: infoInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Info
          age={age}
          email={email}
          zipCode={zipCode}
          handleInput={handleInput}
        />
      </motion.div>
      <motion.div
        ref={genderRef}
        animate={{
          y: genderInView ? 0 : 200,
          opacity: genderInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Gender handleChooseRadial={handleChooseRadial} />
      </motion.div>
      <motion.div
        ref={firstQuestionRef}
        animate={{
          y: firstQuestionInView ? 0 : 200,
          opacity: firstQuestionInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <FirstQuestion handleChooseRadial={handleChooseRadial} />
      </motion.div>
      <motion.div
        ref={secondQuestionRef}
        animate={{
          y: secondQuestionInView ? 0 : 200,
          opacity: secondQuestionInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <SecondQuestion handleChooseRadial={handleChooseRadial} />
      </motion.div>
      <motion.div
        ref={thirdQuestionRef}
        animate={{
          y: thirdQuestionInView ? 0 : 200,
          opacity: thirdQuestionInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <ThirdQuestion handleChooseRadial={handleChooseRadial} />
      </motion.div>
      <motion.div
        ref={optinsRef}
        animate={{
          y: optinsInView ? 0 : 200,
          opacity: optinsInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <Optins
          handleOptin={handleOptin}
          privacyPolicy={privacyPolicy}
          manufacturer={manufacturer}
          raceOil={raceOil}
          kalitta={kalitta}
        />
      </motion.div>
      <motion.div
        ref={buttonRef}
        animate={{
          opacity: buttonInView ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white w-3/4 lg:w-1/2 mx-auto my-10 py-3 rounded shadow-xl"
        >
          Count me in
        </button>
      </motion.div>
      {error && (
        <div className="text-red-400 mb-12">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
