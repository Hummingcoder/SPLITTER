import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import { AppContextProvider } from "./AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <main className="font-SpaceMono w-full min-h-screen bg-lightgrayishcyan grid place-content-center">
        <img
          className="w-[70px] md:mt-[4vh] mx-auto mt-[8vh]"
          src="./images/logo.svg"
          alt="logo-image"
        />
        <section className="bg-white mt-[6vh] w-[100%]  mx-auto rounded-2xl max-w-[800px] shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mb-12">
          <Input />
          <Output />
        </section>
      </main>
    </AppContextProvider>
  );
};

export default App;
