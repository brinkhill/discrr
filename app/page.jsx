import Searchbar from "./components/searchbar/main/searchbar";

export default async function Page() {
 const discs = await getDiscs();
 return (
  <div className="main">
   <Searchbar allDiscs={discs}></Searchbar>
  </div>
 );
}
//grabs discs on page load to speed up process
async function getDiscs() {
 const res = await fetch("https://discrr.com/api/simple");
 if (!res.ok) {
  throw new Error("Failed to fetch data");
 }
 return res.json();
}
