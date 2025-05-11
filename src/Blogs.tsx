import { MdArrowOutward } from "react-icons/md";

const Dev_to = [
//   {
//     title:
//       "What Happens When a Database Crashes Mid-Transaction? Understanding Recovery and Data Integrity",
//     url: "https://dev.to/itxsahil/what-happens-when-a-database-crashes-mid-transaction-understanding-recovery-and-data-integrity-4090",
//   },
  {
    title:
      "Building an Express web App for File Uploads and Dynamic Image Processing on the fly",
    url: "https://dev.to/itxsahil/building-an-express-web-app-for-file-uploads-and-dynamic-image-processing-on-the-fly-1k0l",
  },
  {
    title:"Build a Contact Form with Resend, AWS Lambda and ReactJS so that your end-users can send you emails",
    url:"https://dev.to/itxsahil/build-a-contact-form-with-resend-aws-lambda-and-reactjs-2edb"
  }
];

const Blogs = () => {
  return (
    <div className="text-white flex justify-center items-center gap-10">
      <ul className="md:max-w-[600px] w-full mt-20">
        {Dev_to.map((item, index) => (
          <li key={index} className="mb-6 m-3 group transition-all duration-200">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center hover:underline text-base md:text-lg font-medium transition-all duration-300 hover:text-cyan-400"
            >
              <span className="group-hover:text-cyan-400 transition-colors duration-300">
                {item.title}
              </span>
              <MdArrowOutward className="text-xl min-w-[20px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-cyan-400" />
            </a>
            <hr className="mt-2 border-neutral-700" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
