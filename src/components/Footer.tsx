const Footer = () => {
  return (
    <footer className="w-full text-white flex items-center border-t border-transparent backdrop-blur-lg dark:border-gray-800 z-50 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 
          <a
            href="https://x.com/SahilKh32102162"  // Replace with your actual Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-500 hover:text-cyan-600"
          >
            {" "}Sahil Khan
          </a>. 
          All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer