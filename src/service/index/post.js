import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get(`/api/post`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getPost = async ({ slug }) => {
  try {
    const { data } = await axios.get(`/api/post/${slug}`);
    console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
