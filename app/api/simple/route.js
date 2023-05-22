import clientPromise from "../../../lib/mongodb";

async function fetchDiscs(discParam) {
  const client = await clientPromise;
  const db = client.db("Public");
  let discs;

  const query = discParam == null ? {} : { name_slug: { $regex: new RegExp(encodeURIComponent(discParam), "i") } };

  const projection = { name: 1, brand: 1, name_slug: 1, _id: 0 };

  discs = await db.collection("discs").find(query, { projection }).sort({ metacritic: -1 }).toArray();

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
