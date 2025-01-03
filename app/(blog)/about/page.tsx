

function About() {
  return (
    <div className="about">
      <div className=" min-h-screen flex justify-center items-center">
        <div className="container text-center pt-32 px-4">
          <h2 className="text-xl font-bold">About Me</h2>
          <div
            className="mt-10 py-6 px-6 sm:px-8 text-white bg-gray-800 rounded-lg shadow-md w-full sm:w-[400px] md:w-[500px] lg:w-[550px] mx-auto transition-transform duration-300"
            data-aos="zoom-in-up"
          >
            <p className="text-lg sm:text-xl">
              I&apos;m an Applied Chemistry & Chemical Technology student with a
              passion for AI, Web 3.0, and the Metaverse. Eager to blend my
              scientific knowledge with technology to drive innovation and
              contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;