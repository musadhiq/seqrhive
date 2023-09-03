/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto grid-container">
      <div className="grid-lines">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>
        <span className="line line-5"></span>
      </div>
      <section className="w-full text-black">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4 landing-hero">
          <div>
            <h2 className=" lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block bg-white">
              With SeqrHive, secure your&nbsp;
              <span className="text-[#485ED8]">
                cyberspace <br />
              </span>
              and your <span className="text-[#485ED8]"> digital</span> life
            </h2>

            <p className="mt-8 max-w-6xl  text-xl font-semibold text-[#404040]">
              In today's interconnected and technology-driven landscape, ensuring the safety and confidentiality of our digital assets has become more essential than ever. We, at SeqrHive, are dedicated to protecting your system, application, or your network from potential security breaches and vulnerabilities. With high-end penetration testing services, we make it cent per cent sure that your business-critical data stays beyond the reach of hackers.
            </p>
          </div>
        </div>

        <div className="mx-auto px-5 pt-32  lg:px-14 mt-0 bg-white lg:mt-40" id="services">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              What we <span className="text-[#485ED8]">Offer?</span>
            </h2>
          </div>
          <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className="text-2xl text-black">
              In collaboration with leading penetration testing companies in India and the USA, we offer comprehensive risk management services that encompass not only <span className="text-[#485ED8]">security</span>  and penetration testing but also <span className="text-[#485ED8]">App development</span>  and <span className="text-[#485ED8]">Web development</span>. Our holistic approach ensures smart, simplified, and safer user experiences for our clients, delivering end-to-end solutions for all your digital needs.
            </h3>
          </div>
        </div>
        <div className="invisible mx-auto flex justify-center  p-3 pb-16 lg:visible lg:px-2">
          <img className="lg:w-5/7
                hidden
                w-5/8
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-2/5" src="/images/services.svg" alt="img" />
        </div>
        <div className="text-black">
          <div className="mx-auto flex flex-col items-center gap-10 pt-32 lg:flex-row">
            <div className="lg:mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6 bg-white ">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl service-title" index="1">
                Web Development
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                At SeqrHive, we specialize in crafting bespoke websites that are tailored to meet your unique requirements. Our commitment goes beyond just building a website from scratch; we also provide ongoing maintenance and security services to ensure your online presence remains robust and protected. With our meticulously designed websites, you can strengthen and enhance your online footprint, effectively engaging your audience and achieving your digital goals with confidence.{" "}
              </p>
              <a href="/" className="underline-blue font-semibold">
                  Learn more
                </a>
            </div>
            <div className="lg:w-full lg:max-w-2xl service-images">
              <img className="w-4/6" src="/images/web-development.svg" alt="img" />
            </div>
          </div>
          <div className="mt-10">
            <div className="mx-auto flex flex-col  py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl service-images">
                <img className="w-4/6" src="/images/app-development.svg" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24 bg-white ">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl service-title" index="2">
                  App Development
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                  SeqrHive is your gateway to unlocking the full potential of your app concepts. Whether you're a startup looking to disrupt the market or an established business aiming to expand your digital presence, we've got you covered. Our mobile application development services are finely tuned to cater to the specific needs of your industry. Together, we'll bring your innovative app ideas to life, ensuring a seamless, user-friendly, and industry-ready solution that sets you apart from the competition.
                </p>
                <a href="/" className="underline-blue font-semibold">
                  Learn more
                </a>
              </div>
              <div className=" lg:hidden lg:w-full lg:max-w-xl service-images">
                <img className="w-3/6" src="/images/app-development.svg" alt="img" />
              </div>
            </div>
          </div>
          <div className=" mx-auto flex flex-col items-center gap-10  lg:flex-row">
            <div className="lg:mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6 bg-white ">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl service-title" index="3">
                Security
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                At SeqrHive, our team collaborates closely with leading security testing companies to fortify the security of your app and website. We pride ourselves on being your one-stop solution, offering a comprehensive suite of security and penetration testing services. Our mission is to enhance your digital platforms, providing smarter, simplified, and safer user experiences for your customers. With our expertise, your online assets are in trusted hands, ensuring robust protection and peace of mind.{" "}
              </p>
              <a href="/" className="underline-blue font-semibold">
                  Learn more
                </a>
            </div>
            <div className="lg:w-full lg:max-w-2xl service-images">
              <img className="w-4/6" src="/images/security.svg" alt="img" />
            </div>
          </div>
          <div className="my-24 p-4 text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24  rounded lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                  GET A PERFECT MASH-UP OF DEDICATED ENGINEERS, TOP TECH SKILLS, AND STELLAR PROJECT IDEAS.
                </h2>
                <p className="text-md mb-8 lg:text-xl">
                  Using deep domain expertise of our software developers and Security experts we create impactful digital solutions that drive meaningful change with a strategic vision.
                </p>
                <a
                  className="primary-btn"
                  href="/"
                >
                  Talk to Us
                </a>
              </div>
              <div className="w-4/6 lg:pr-12 lg:w-2/6">
                <img
                  src="/images/ideas.svg"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="image"
                />
                <img
                  src="/images/ideas.svg"
                  className="inline-block object-cover object-center lg:hidden"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center bg-white ">
                <h3 className="mb-8 text-5xl font-bold text-black">
                  Get in <span className="text-[#485ED8]">touch</span>  with Us.
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                  Still, have doubts? Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </h3>
              </div>
              <form action="#" class="space-y-8 bg-white ">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-black">Your email <span className="text-[#485ED8]">(so we can reply you)</span></label>
                  <input type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@example.com" required />
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-black">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-black">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="primary-btn bg-[#485ED8]">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
