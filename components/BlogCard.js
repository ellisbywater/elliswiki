export default function BlogCard({ title, date, summary, slug }) {
  return (
    <div className="p-6 bg-white text-black border-4 hover:bg-black hover:text-white border-black rounded cursor-pointer shadow-lg m-3">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">First Post</h1>
        <h3 className="text-sm italic">November 24, 2021</h3>
      </div>
      <div className="w-full">
        <div className="p-4 text-center">
          <h1 className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
      </div>
    </div>
  );
}
