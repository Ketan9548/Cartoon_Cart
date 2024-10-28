import { NavLink } from "react-router-dom";

const Information = () => {
  const banner = {
    Doraemon: {
      url: "https://p325k7wa.twic.pics/high/doraemon/doraemon/00-page-setup/doraemon_game-thumbnail.jpg?twic=v1/resize=760/step=10/quality=80",
    },
    Ben10: {
      url: "https://occ-0-8407-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYJjYUCmXJvmLkirQQTEbDpZTyKVaWPm_xkAmi2k-WNXgbOSUytlt6FRFqKEjIjysLJvMAu1OgvzixtBvzoXXkd3scZmXQsnfPlW.jpg?r=332",
    },
    Naruto: {
      url: "https://m.media-amazon.com/images/S/pv-target-images/0c9ce4e037546965d6b1f3807e9f8f549a113d32066b2bdb22ada5d179c0d89a.jpg",
    },
  };
  return (
    <>
      <div className="md:flex">
        <div className="w-screen bg-light-blue-100">
          <NavLink
            to="/doraemon"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={banner.Doraemon.url}
              alt="Doraemon Info...."
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Doraemon 22st century Robot
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Doraemon is a male robotic earless cat that travels back in time
                from the 22nd century to aid a preteen boy named Nobita. An
                official birth certificate for the character gives him a birth
                date of 3 September 2112 and lists his city of residency as
                Kawasaki, Kanagawa, the city where the manga was created
              </p>
            </div>
          </NavLink>
        </div>
        <div className="w-screen bg-light-green-100">
          <NavLink
            to="/Ben_10"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={banner.Ben10.url}
              alt="Doraemon Info...."
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ben 10 - A boy with amazing super power Watch
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Ben Tennyson, a 10-year-old boy, finds a watch-like device
                called the Omnitrix that allows him to transform into aliens
                with different abilities. He uses these powers to fight evil
                with his cousin Gwen and grandfather Max.
              </p>
            </div>
          </NavLink>
        </div>
        <div className="w-screen bg-orange-100">
          <NavLink
            to="/Naruto"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={banner.Naruto.url}
              alt="Doraemon Info...."
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                12-year-old Boy with amazing hidden Ninja Power
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Naruto Uzumaki is a 12-year-old orphan with spiky blond hair and
                blue eyes who wants to be the Hokage, the leader of the Hidden
                Leaf Village. Naruto was treated poorly as a child due to a
                secret about his birth. He bonds with his teacher, Iruka Umino,
                and graduates as a ninja.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Information;
