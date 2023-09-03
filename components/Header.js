/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <>
      <div className="grotesk mt-3 mb-16 flex items-center justify-between py-4  sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 ">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            SeqrHive
          </a>
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="#services" className="pr-12 text-xl text-black service-hover">
              Services.
              <div className="service-hover-box">
                <div className="w-full px-4 py-4">
                  <nav className="list-none">
                    <li className="py-2">
                      <a href="/">Web development</a>
                    </li>
                    <li className="py-2">
                      <a href="/">App Development</a>
                    </li>
                    <li className="py-2">
                      <a href="/">Security</a>
                    </li>
                  </nav>
                </div>
              </div>
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              About us.
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Contact.
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <a
              className="primary-btn mt-2"
              href="/"
            >
              Request a call back
            </a>
          </div>
          <button className="lg:pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
