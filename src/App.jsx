import React from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-6 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl font-mulish-600">
            <img src={DataImage.HeroImage} alt="" className="w-10 rounded-md" />
            <q>Crafting solutions, one line at a time.😎</q>
          </div>
          <h1 className="text-5xl/tight mb-6 font-mulish-700">
            Hi, I’m Rasya Nouval Nugraha
          </h1>
          <p className="font-mulish-600 text-base/loose mb-6 opacity-50 ">
            I enjoy building web applications that solve real-world problems.
            From backend logic to frontend interactions, I approach development
            with precision, patience, and a drive for excellence. Let’s bring
            ideas to life through code.
          </p>
          <div className="flex items-center sm:gap-4 gap-2 font-mulish-700">
            <a
              href="/Rasya_Nouval_Nugraha_CV.pdf"
              target="_blank"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500"
            >
              See Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
          <div className="social-media flex items-center gap-4 mt-6">
            <a href="https://www.instagram.com/rsyaanvl/">
              <i class="ri-instagram-line ri-xl"></i>
            </a>
            <a href="https://github.com/rasyanouvalnugraha">
              <i class="ri-github-fill ri-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/rasya-nouval-24a07b272/">
              <i class="ri-linkedin-fill ri-xl"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-2s"
        />
      </div>
      {/* about */}
      <div className="about mt-12 sm:mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt=""
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="font-mulish-600 text-base/loose mb-10 ">
            Hello, I’m Rasya Nouval Nugraha, a passionate web developer who
            loves building simple, clean, and effective solutions through code.
            I focus on creating user-friendly websites that solve real problems.
          </p>
          <div className="flex items-center justify-between font-mulish-700">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6 ">
              <div>
                <h1 className="text-3xl mb-1 ">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Project's Done</p>
              </div>
              <div>
                <h1 className="text-3xl mb-1 ">
                  3<span className="text-violet-500">+</span>
                </h1>
                <p>Year Expreience</p>
              </div>
            </div>
            {/* social media link */}
          </div>
        </div>

        <div className="tools mt-8 sm:mt-32">
          <h1
            className="text-5xl/snug xl:text-4xl/snug font-mulish-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 font-mulish-600"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are some tools that I use to create websites.
          </p>
          <div className="tools-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-start gap-4 p-4 border border-zinc-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-zinc-900 hover:bg-zinc-800 group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 rounded-lg bg-zinc-800 p-2 group-hover:bg-zinc-700 transition duration-300"
                />
                <div>
                  <h1 className="text-xl font-mulish-700 text-white group-hover:text-zinc-100 transition duration-300">
                    {tool.nama}
                  </h1>
                  <p className="text-sm font-mulish-600 text-zinc-400 opacity-50">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* project */}
        <div className="project mt-8 sm:mt-32 py-10" id="project">
          <h1
            className="text-center text-4xl mb-2 font-mulish-700"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Project
          </h1>
          <p
            className="text-base/loose text-center font-mulish-600 opacity-50"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Below are some of the projects I have made
          </p>
          <div className="project-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="project-item bg-zinc-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <a href={proyek.demo} target="_blank" rel="noopener noreferrer">
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className="w-full h-48 object-cover rounded-xl mb-4 transition duration-300 hover:scale-105"
                  />
                </a>
                <h2 className="text-xl font-mulish-700 text-white mb-2">
                  {proyek.nama}
                </h2>
                <p className="text-sm font-mulish-600 text-zinc-300 mb-4 leading-relaxed">
                  {proyek.desk}
                </p>
                <div className="tools-list flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-violet-600/80 text-white px-3 py-1 rounded-full text-sm font-mulish-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* contact */}
        <div className="contact mt-8 sm:mt-24 py-10" id="contact">
          <h1
            className="text-4xl mb-2 font-mulish-600 text-center"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50 font-mulish-600"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Connect With Me.
          </p>
          <form
            action="https://formsubmit.co/rasyanouval45c@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 xl:max-w-2/3 lg:w-4/5 sm:w-fit mx-auto rounded-md"
            autoComplete="off"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mulish-700">Fullname</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  className="font-mulish-600 border border-zinc-500 p-2 rounded-md focus:outline-none focus:border-violet-700"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mulish-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  className="font-mulish-600 border border-zinc-500 p-2 rounded-md focus:outline-none focus:border-violet-700"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mulish-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="45"
                  rows="7"
                  placeholder="Enter Message"
                  required
                  className="font-mulish-600 rounded-md border border-zinc-500 p-2 focus:outline-none focus:border-violet-700"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-violet-700 text-white px-6 py-3 rounded-md font-mulish-700 hover:bg-violet-500 transition duration-300 w-full"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
