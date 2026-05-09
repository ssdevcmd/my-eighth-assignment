import HeroSlider from "@/components/banner/HeroSlider";
import PopularCourses from "@/components/PopularCourses";




export default function Home() {
  return (
    <div>
      {/* <h2 className="text-4xl text-center text-orange-500">Homepage</h2> */}

      <HeroSlider></HeroSlider>
      <PopularCourses></PopularCourses>
    </div>
  );
}
