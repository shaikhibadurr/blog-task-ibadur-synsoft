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
  function getCategoryStatus(category: string) {
    switch (category.toLocaleLowerCase()) {
      case 'leadership':
      case 'design':
      case 'podcasts':
        return 'primary'

      case 'product':
        return 'secondary'

      case 'software development':
        return 'success'

      default:
        return 'primary'
    }
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <HomeTemplate blogs={blogs} getCategoryStatus={getCategoryStatus} />
  )
}

export default Home