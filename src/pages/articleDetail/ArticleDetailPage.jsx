import React from "react";
import MainLayout from "./../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from './container/SuggestedPosts';
import CommentContainer from "../../components/comment/CommentContainer";

const breadCrumbData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Blog Detail", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.post1,
    title: "Man Workig with Laptop",
    createdAt: "2020-02-03T07:49:00.894+00:00"
  },
  {
    _id: "2",
    image: images.post1,
    title: "Post 1",
    createdAt: "2020-02-03T07:49:00.894+00:00"
  },
  {
    _id: "3",
    image: images.post1,
    title: "Man Workig with Laptop",
    createdAt: "2020-02-03T07:49:00.894+00:00"
  }
  ,  {
    _id: "4",
    image: images.post1,
    title: "Post 2",
    createdAt: "2020-02-03T07:49:00.894+00:00"
  },
  {
    _id: "5",
    image: images.post1,
    title: "Man Workig with Laptop",
    createdAt: "2020-02-03T07:49:00.894+00:00"
  }
]

const tagsData = [
    "Technology",
    "Science",
    "Health",
    "Travel",
    "Food",
    "Fashion",
    "Lifestyle",
    "Fitness",
    "Business",
]
const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbData} />
          <img
            className="rounded-xl w-full"
            src={images.post1}
            alt="man-working"
          />
          <Link
            to={"/blog?category=selectedCategory"}
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">Man doing Hard work</h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo
              delectus aut et illo a commodi! Odio odit tenetur recusandae?
              Fugiat enim quidem minus, quis molestiae sequi pariatur nulla.
              Error, labore placeat. Ad consectetur maiores quisquam quos eum
              ullam inventore distinctio atque enim iure officia, dignissimos
              officiis alias culpa fuga.
            </p>
          </div>
          <CommentContainer className={'mt-10'} logginedUserId="a" />
        </article>
        <SuggestedPosts header="Latest Articles" className={"mt-8 lg:mt-0 lg:max-w-xs"} posts={postsData} tags={tagsData} />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
