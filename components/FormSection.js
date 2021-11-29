import Info from "./Info";
import Gender from "./Gender";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import Optins from "./Optins";

export default function FormSection() {
  return (
    <div className="max-w-3xl px-2 mx-auto text-center">
      <h2 className="text-white text-center text-4xl lg:text-5xl mb-12 font-bold">
        Sign up, stay tuned
      </h2>
      <Info />
      <Gender />
      <FirstQuestion />
      <SecondQuestion />
      <ThirdQuestion />
      <Optins />
      <button className="bg-red-600 text-white w-3/4 lg:w-1/2 mx-auto my-10 py-3 rounded shadow-xl">
        Count me in
      </button>
    </div>
  );
}
