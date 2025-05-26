import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <div>
        <footer
          className="h-full w-full bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 text-white py-6 rounded-xl"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="container mx-auto text-center">
            <p className="font-mulish-600 text-sm">
              &copy; {new Date().getFullYear()} Rasya Nouval Nugraha. All rights
              reserved.
            </p>
            <div className="social-media flex justify-center gap-4 mt-2">
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
        </footer>
      </div>
    </div>
  );
};

export default Footer;
