

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 bottom-0">
      <div className="container mx-auto flex flex-wrap justify-between leading-7">

        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul>
            <li>Who we are</li>
            <li>Work with us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <ul>
            <li>Address: 123 Food Street, Flavor Town</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: contact@foodie.com</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
          <h4 className="text-lg font-bold mb-4">Learn More</h4>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 px-4">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 cursor-pointer">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-500 text-center">
        <p className="mt-4">&copy; 2024 Foodie. All Rights Reserved.</p>
      </div>
    </footer>
  );
  };
  
export default Footer;