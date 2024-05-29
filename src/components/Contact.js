const Contact = () => {
    return (
        <div className=" flex items-center justify-center py-1 ">
          <div className="max-w-md w-full p-6 rounded-lg">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-orange-600">Contact Us</h1>
              <form className="space-y-4 py-8">
                <div>
                  <label className="block text-left mb-1 font-semibold">Username:</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-2 outline-none border-b border-black"
                  />
                </div>
                <div>
                  <label className="block text-left mb-1 font-semibold">Email:</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-2 outline-none border-b border-black"
                  />
                </div>
                <div>
                  <label className="block text-left mb-1 font-semibold">Message:</label>
                  <textarea 
                    placeholder="Enter your message" 
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                    rows="4"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
};

export default Contact;