import clientPromise from "../../../lib/mongodb";

export async function GET(req, res) {
  // Proceed with your normal route handling code
  const url = new URL(req.url, `http://${req.headers.get("host") ?? ""}`);
  const discParam = url.searchParams.get("name");
  const client = await clientPromise;
  const db = client.db("Public");
  const discs =
    discParam == null
      ? await db
          .collection("discs")
          .find({}, { projection: { name: 1, brand: 1, name_slug: 1, _id: 0 } })
          .sort({ metacritic: -1 })
          .toArray()
      : await db
          .collection("discs")
          .find(
            { name_slug: { $regex: new RegExp(encodeURIComponent(discParam), "i") } },
            { projection: { name: 1, brand: 1, name_slug: 1, _id: 0 } }
          )
          .sort({ metacritic: -1 })
          .toArray();

  try {
    return new Response(JSON.stringify(discs), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
