import HeroSlider from "@/components/banner/HeroSlider";
import LearningTips from "@/components/banner/LearningTips";
import PopularCourses from "@/components/banner/PopularCourses";
import TopInstructor from "@/components/banner/TopInstructor";
import TrendingCourses from "@/components/banner/TrendingCourses";




export default async function Home() {
  return (
    <div>
      {/* <h2 className="text-4xl text-center text-orange-500">Homepage</h2> */}

      <HeroSlider></HeroSlider>
      <PopularCourses></PopularCourses>
      <TrendingCourses></TrendingCourses>
      <LearningTips></LearningTips>
      <TopInstructor></TopInstructor>
    </div>
  );
}
