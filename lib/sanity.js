import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";
import blogSerializers from "./blogSerializer";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v1",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
};

export const sanityClient = createClient(config);
export const previewSubscription = createPreviewSubscriptionHook(config);
export const imageUrl = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: blogSerializers,
});
