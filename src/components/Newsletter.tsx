export const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-4 sm:px-8 lg:px-40"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Stay Updated with the Latest Listings
        </h2>
        <p className="mb-8 text-gray-200">
          Subscribe to get exclusive real estate updates, market insights, and
          special offers.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full py-3 pl-4 pr-32 rounded-md bg-white text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
