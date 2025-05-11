import { useState } from "react";
const Contact = () => {
  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isMailSuccess, setMailSuccess] = useState<boolean>(false);
  const [isMailSending, setMailSending] = useState<boolean>(false);

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      return {
        message: "All field required",
        status: false,
      };
    }
    return {
      message: "",
      status: true,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailSending(true);
    const { status, message }: { status: boolean; message: string } =
      validateForm();
    if (!status) {
      setMailSending(false);
      alert(message);
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_MAIL_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMailSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setMailSending(false);
        setTimeout(() => {
          setMailSuccess(false);
        }, 1000);
      }
      // console.log(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMailSending(false);
      setMailSuccess(false);

      alert("Something went wrong");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-60 z-50">
      <div className="bg-zinc-900 rounded-xl p-6 w-80 md:w-full max-w-lg shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label className="block text-sm font-medium  text-white">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none placeholder-zinc-400"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium  text-white">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none placeholder-zinc-400"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Subject (10 words min)
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none placeholder-zinc-400"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Message (20 words min)
            </label>
            <textarea
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none placeholder-zinc-400"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          {isMailSending ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-200"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full text-white py-2 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
            >
              {isMailSuccess ? "Sent successfully" : "Send"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
