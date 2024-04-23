import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/home/Banner"
import AllCourses from "@/components/home/AllCourses";
import AllCategories from "@/components/home/AllCategories";
import AllSubCategory from "@/components/home/AllSubCategory";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });

const HomePage = ({allCourses, allCategories, allSubCategories}) => {
  return (
    <>
    <Head>
      <title>Frontend-Task</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Banner />
    <AllCourses allCourses={allCourses} />
    <AllCategories allCategories={allCategories} />
    <AllSubCategory allSubCategories={allSubCategories} />
    </>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page){
  return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
  try {
    const coursesRes = await axios.get(
    "https://easy-learning-platform.vercel.app/api/v1/courses"
  );
  const coursesData = await coursesRes.data;

  const categoriesRes = await axios.get(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  );
  const categoriesData = await categoriesRes.data;

  const subCategoryRes = await axios.get("https://easy-learning-platform.vercel.app/api/v1/sub-categories")
  const subCategoryData = await subCategoryRes.data


  return {
    props: {
      allCourses: coursesData,
      allCategories: categoriesData,
      allSubCategories: subCategoryData 
    },
  };
  } catch (error) {
    console.error(error)
  }
};