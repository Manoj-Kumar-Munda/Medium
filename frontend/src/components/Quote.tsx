import React from "react";

const Quote = () => {
  return (
    <div className="grow basis-96 bg-gray-200 w-full ">
      <div className="h-full  grid place-content-center w-full">
        <div className="px-4">
          <q className="text-3xl font-bold">
            The customer service I received was exceptional. The support team
            went above and beuond to address my concerns.
          </q>

          <div className="mt-6">
            <p className="text-xl font-semibold">Jules Winfield</p>
            <p className="text-lg text-gray-400">CEO, Acme Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
