import clientPromise from "../../../lib/mongodb";
// import { requireAuth } from "../../../lib/requireAuth";

async function fetchDiscs(discParam) {
  const client = await clientPromise;
  const db = client.db("Public");
  let discs;

  if (discParam == null) {
    discs = await db.collection("discs").find().sort({ metacritic: -1 }).toArray();
  } else {
    discs = await db
      .collection("discs")
      .find({ name_slug: { $regex: new RegExp(encodeURIComponent(discParam), "i") } })
      .sort({ metacritic: -1 })
      .toArray();
  }

  return discs;
}

export async function GET(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.get("host") ?? ""}`);
    const discParam = url.searchParams.get("name");
    const discs = await fetchDiscs(discParam);

    return new Response(JSON.stringify(discs), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching discs:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
