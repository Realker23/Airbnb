import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
// import Image from "next/image";

export default async function Home() {
  const {props} = await getExploreData();
  const {exploreData, liveData} = props;
  // console.log(props.exploreData);
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from a server - API endpoint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>

          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3  overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>

          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getExploreData() {
  // not able to use "https://links.papareact.com/pyp"
  const responseExploreData = await fetch(
    "https://www.jsonkeeper.com/b/4G1G",

    {
      cache: "force-cache",
    }
  );
  const exploreData = await responseExploreData.json();

  const responseLiveData = await fetch("https://www.jsonkeeper.com/b/VHHT", {
    cache: "force-cache",
  });
  const liveData = await responseLiveData.json();

  return {
    props: {
      exploreData,
      liveData,
    },
  };
}
