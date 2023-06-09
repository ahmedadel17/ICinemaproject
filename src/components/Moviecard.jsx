import { dataIcon } from "../assets";

function Moviecard({ img, title, starring, features, releaseDate }) {
  return (
    <div className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md dark:shadow-darkShadow dark:bg-dark">
      <img
        src={img}
        alt={title + " poster"}
        className="w-32 object-cover rounded-lg border-yellow-500 border-2"
      />

      <div>
        <h1 className="font-light text-base text-dark mb-1 dark:text-white">
          {title}
        </h1>

        <h2 className="font-light text-base text-dark mb-4 dark:text-white">
          Starring: {starring}
        </h2>

        {features && (
          <ul className="flex justify-between items-center flex-wrap gap-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="w-1/2 flex items-center gap-2">
                <img
                  src={dataIcon}
                  alt="data icon"
                  className="w-6 h-6 object-contain dark:invert"
                />

                <span className="text-base font-light text-dark dark:text-white">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <h3 className="text-base font-light text-dark dark:text-white">
          Release date:{releaseDate}
        </h3>
      </div>
    </div>
  );
}

export default Moviecard;
