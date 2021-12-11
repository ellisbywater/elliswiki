import Navbar from "./Navigation";
import SEO from "./SEO";

export default function Layout({ settings, children }) {
  return (
    <div className="bg-white">
      <SEO settings={settings} />
      <Navbar />
      {children}
    </div>
  );
}
