import HomeTemplate from "../templates/Home.template"
import { useEffect, useState } from "react"
import { blogApi } from "../../api/blog"
import toast from "react-hot-toast"
import { BlogProps } from "../../types/common"
import { AxiosError } from "axios"

const Home = () => {
  // ==================== || HOOKS || ==================== //
  const [blogs, setBlogs] = useState<BlogProps[]>([])

  // ==================== || FUNCTIONS || ==================== //
  const getBlogs = async () => {
    try {
      const res = await blogApi()
      const blogRes = res.data
      setBlogs(blogRes)
    } catch (err) {
      const axiosError = err as AxiosError<{ msg: string }>;
      toast.error(axiosError.response?.data?.msg || "API failed");
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <HomeTemplate blogs={blogs} />
  )
}

export default Home