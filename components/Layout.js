import Navbar from "./navigation";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
    </div>
  );
}
