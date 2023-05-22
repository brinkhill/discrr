import clientPromise from "../../../lib/mongodb";
// import { requireAuth } from "../../../lib/requireAuth";

export async function GET(req, res) {
  // Use the middleware function to check for authentication
  // const authResult = await requireAuth(req, res);
  // if (authResult) {
  //   return authResult;
  // }

  // Proceed with your normal route handling code
  const url = new URL(req.url, `http://${req.headers.get("host") ?? ""}`);
  const discParam = url.searchParams.get("name");
  const client = await clientPromise;
  const db = client.db("Public");
  const discs =
    discParam == null
      ? await db.collection("discs").find().sort({ metacritic: -1 }).toArray()
      : await db
          .collection("discs")
          .find({ name_slug: { $regex: new RegExp(encodeURIComponent(discParam), "i") } })
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
