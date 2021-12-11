import "tailwindcss/tailwind.css";
import { sanityClient } from "@/lib/sanity";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, settings }) {
  return (
    <Layout settings={settings}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const seoQuery = `*[_type == "siteSettings"][0]{
    title,
    description,
    url,
    xslogo,
    slogo,
    }`;
  const data = await sanityClient.fetch(seoQuery);
  console.log("Data", data);
  return {
    settings: data,
  };
};

export default MyApp;
