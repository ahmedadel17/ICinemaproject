function Createuser(props) {
  return (
    <div className="flex mt-5">
      <img
        src="https://img.freepik.com/free-vector/social-biography-concept-illustration_114360-7181.jpg?size=626&ext=jpg&ga=GA1.2.80988938.1676138881&semt=ais"
        alt="desciption"
        className="w-64 h-44 rounded-xl object-cover outline outline-2 outline-primary"
      />

      <div className="w-full">
        <h1 className="text-lg font-bold dark:text-white ml-4">{props.name}</h1>
        <h2 className="mt-2 dark:text-white ml-4">{props.description}</h2>

        <div className="flex mt-5">
          <div className="mx-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              Create user
            </label>

            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="w-96 mx-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
            >
              Create password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <button className="bg-black text-primary border border-primary hover:bg-slate-800 text-lg rounded-xl w-48 h-10 mt-7">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createuser;
