import React, { useState } from "react";
import MainLayout from "./../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images, stables } from "../../constants";
import { Link, useParams } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentContainer from "../../components/comment/CommentContainer";
import SocialShareButton from "../../components/SocialShareButton";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getPost } from "../../service/index/post";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  console.log("USERID: ", userState.userInfo.id);
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);
  const [body, setBody] = useState(null);
  console.log(slug);

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const postData = await getPost({ slug });
      console.log("PostData: ", postData);
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: `/blog/${postData.slug}` },
      ]);
      // setBody(parseJsonToHtml(postData?.body));
      return postData;
    },
    queryKey: ["blog", slug],
  });

  const { data: postsData } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message={"Couldn't fetch the posts data"} />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full h-[400px] object-cover"
              src={
                data?.photo
                  ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo
                  : images.samplePostImage
              }
              alt={data?.title}
            />
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              {data?.title}
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quo delectus aut et illo a commodi! Odio odit tenetur
                recusandae? Fugiat enim quidem minus, quis molestiae sequi
                pariatur nulla.
              </p>
            </div>
            <CommentContainer
              comments={data?.comments}
              className={"mt-10"}
              logginedUserId={userState?.userInfo?.id}
              postSlug={slug}
            />
          </article>
          <div>
            <SuggestedPosts
              header="Latest Articles"
              className={"mt-8 lg:mt-0 lg:max-w-xs"}
              posts={postsData}
              tags={data?.tags}
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButton
                url={encodeURI(window.location.href)}
                title={encodeURIComponent(data?.title)}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
