import Head from "next/head";
import { imageUrl } from "@/lib/sanity";

export default function SEO({ settings }) {
  return (
    <>
      <Head>
        <title> {settings.title}</title>
        <link rel="icon" href={imageUrl(settings.slogo).url()} />
        <meta name="description" content={settings.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}
