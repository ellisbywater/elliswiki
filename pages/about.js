export default function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="p-6 text-center mb-20">
        <h1 className="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-black">
          ABOUT ME
        </h1>
      </div>
      <div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-6">
            <div className="text-center">
              <h3 className="text-2xl p-3 mb-2">Ellis Garaudy</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <div className="text-center">
              <h1>Image</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
