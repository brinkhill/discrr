import Searchbar from "./components/searchbar/main/searchbar";

export default async function Page() {
  const discs = await getDiscs();
  console.log("got it");
  return (
    <div className="main">
      <Searchbar allDiscs={discs}></Searchbar>
    </div>
  );
}

async function getDiscs() {
  const res = await fetch("https://discrr.com/api/simple");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
