import { sanityClient } from "@/lib/sanity";
import { uuid } from "@sanity/uuid";

export default async function (req, res) {
  console.log(req.body);
  try {
    const payload = req.body;
    const result = await sanityClient.create({
      _id: `submission.${uuid()}`,
      _type: "submission.form",
      created_at: new Date(),
      title: payload.name,
      data: {
        ...payload,
      },
    });
    console.log(result);
    res.status(200).json({ result, payload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
