import React from "react";

const Blog = () => {
  return (
    <div className="my-container lg:-mt-28">
      <div className="max-w-xl mb-5 sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl">
          <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Answering</span>
            </span>{" "}
            these question .
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="rounded-lg shadow-md p-3 hover:border-2">
            <p className="mb-4 text-2xl font-medium">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-1">
                A.
              </span>{" "}
              When should you use context API?
            </p>
            <p className="text-gray-700">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-2 text-lg">
                Answer.
              </span>{" "}
              : I can use Context API to store the current theme of my
              application and make it available to all components. This way,
              whenever the user switches the theme all components will be
              updated with the new theme. If I build my own router, I might want
              to know whether it’s active or not that time I will use it. Also
              when need to manage complex state I will use it.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-3 hover:border-2">
            <p className="mb-4 text-2xl font-medium">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-1">
                B.
              </span>{" "}
              What is a custom hook?
            </p>
            <p className="text-gray-700">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-2 text-lg">
                Answer.
              </span>{" "}
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks. The main reason to write a
              custom hook is for code reusability. For example, instead of
              writing the same code across multiple components that use the same
              common stateful logic (say a “setState” or localStorage logic),
              you can put that code inside a custom hook and reuse it.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-3 hover:border-2">
            <p className="mb-4 text-2xl font-medium">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-1">
                C.
              </span>{" "}
              What is useRef?
            </p>
            <p className="text-gray-700">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-2 text-lg">
                Answer.
              </span>{" "}
              The useRef Hook allows me to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-3 hover:border-2">
            <p className="mb-4 text-2xl font-medium">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-1">
                D.
              </span>{" "}
              What is useMemo?
            </p>
            <p className="text-gray-700">
              <span className="underline decoration-wavy decoration-yellow-500 decoration-2 text-lg">
                Answer.
              </span>
              The useMemo Hook allows me to memoize expensive functions so that
              I can avoid calling them on every render. I simple pass in a
              function and an array of inputs and useMemo will only recompute
              the memoized value when one of the inputs has changed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
