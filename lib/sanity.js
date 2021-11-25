import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: "j09o7lej",
  dataset: "development",
  apiVersion: "v1",
  useCdn: false,
};

export const sanityClient = createClient(config);
export const previewSubscription = createPreviewSubscriptionHook(config);
export const imageUrl = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});
