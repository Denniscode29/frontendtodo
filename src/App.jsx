import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="hero bg-white min-h-screen">
          <div className="hero-content flex-col items-center text-center ">
            <img src="/src/assets/book.jpg" className="w-[35rem]" alt="" />
            <div>
              <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-shadow-black">
                Add, mark and complete your tasks easily.
              </h1>
              <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white
       bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Learn more
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg p-18 w-full max-w-12xl">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-black">
              Here you can do as below
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full sm:w-80 md:w-80 h-[380px] border border-gray-200 rounded-lg shadow-sm bg-[#ffffff] flex flex-col overflow-hidden transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out">
                <div className="w-full h-[200px]">
                  <img
                    src="/src/assets/pen.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-[#4DA8DA]">
                    Write a daily to-do list
                  </h5>
                  <p className="text-[#4DA8DA] font-small text-lg xl:text-start text-justify">
                    Have lots of things to do? Write everything down in TODOU so
                    you don't forget!
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-80 md:w-80 h-[380px] border border-gray-200 rounded-lg shadow-sm bg-[#ffffff] flex flex-col overflow-hidden">
                <div className="w-full h-[200px]">
                  <img
                    src="/src/assets/time.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-[#4DA8DA] ">
                    Mark tasks as complete
                  </h5>
                  <p className="text-[#4DA8DA] font-small text-lg xl:text-start text-justify">
                    Every time you complete a task, just mark it off — and feel
                    the satisfaction!
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-80 md:w-80 h-[380px] border border-gray-200 rounded-lg shadow-sm bg-[#ffffff] flex flex-col overflow-hidden">
                <div className="w-full h-[200px]">
                  <img
                    src="/src/assets/write.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-[#4DA8DA]">
                    Remind important things on time
                  </h5>
                  <p className="text-[#4DA8DA] font-small text-lg xl:text-start text-justify">
                    TODOU can help you remember assignments before the deadline
                    arrives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
export default Home;
