/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <>
      <footer className="grotesk bg-[#f9fbfb]">
        <div className="max-w-8xl mx-auto px-5 py-24 text-black">
          <div className="order-first flex flex-wrap text-left lg:justify-around">
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">SERVICES</h2>
              <nav className="list-none space-y-2 py-3">
                <li>
                  <a href="/">Web development</a>
                </li>
                <li>
                  <a href="/">App Development</a>
                </li>
                <li>
                  <a href="/">Security</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">INDUSTRIES.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Fintech</a>
                </li>
                <li>
                  <a href="/">Insurance</a>
                </li>
                <li>
                  <a href="/">Healthcare & Biotech</a>
                </li>
                <li>
                  <a href="/">Travel & Hospitality</a>
                </li>
                <li>
                  <a href="/">eCommerce & Retail</a>
                </li>
                <li>
                  <a href="/">Logistics & Transportation</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">COMPANY.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
              </nav>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/5">
              <a href="/">
                <div className="relative border border-black transition hover:border-gray-500">
                  <div className="absolute top-0 right-0 pt-2 pr-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66992 0.747559L0.669922 6.74756"
                        stroke="black"
                      />
                      <path
                        d="M0.669922 0.747559H6.66992V6.74756"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    Have a coffee with us
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="max-w-8xl mx-auto px-5 py-6">
            <div>
              <h2 className="my-4 text-sm">
              © 2023 Seqrhive. All Rights Reserved.
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
