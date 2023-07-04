import AppCard from "./AppCard";
import BookmarkCard from "./BookmarkCard";
import FeaturedNews from "./FeaturedNews";
import PrayerTime from "./PrayerTime";
import Greetings from "./Greetings";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Greetings />
      <PrayerTime />
      <AppCard />
      <BookmarkCard />
      <FeaturedNews />
    </div>
  );
};

export default Home;
