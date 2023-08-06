import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary2/7 py-10 md:py-12 lg:py-18">
      <div className="container">
        <SectionTitle
          title="Berita Terkini"
          paragraph="Yuk update berita terkini terkait Perumda Air Minum Kota Probolinggo"
          center
          mb="50px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
