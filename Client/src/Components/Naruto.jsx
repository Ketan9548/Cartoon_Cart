
const Naruto = () => {
  const image = [
    {
      id:1,
      url: "https://img.freepik.com/premium-photo/naruto-illustration-icon-cartoon-graphic_1070876-7005.jpg",
      name: "Doraemon"
    },
    {
      id:2,
      url: "https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=980,654",
      name: "Ben-10-alian"
    },
    {
      id:3,
      url: "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640",
      name: "Ben-10-alian"
    },
    {
      id:4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4OcBblEhd0zUwN1B7M3b5SSrLzJ7hLZKQw&s",
      name: "Ben-10-alian-force"
    },
    {
      id:5,
      url: "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=640",
      name: "Ben-10-alian"
    },
    {
      id:6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3tRbHAFDqEAp93l0lZSt0DlzQltE4kU8NQ&s",
      name: "Ben-10-ultimate"
    },
    {
      id:7,
      url: "https://rukminim2.flixcart.com/image/850/1000/l071d3k0/poster/e/s/i/medium-naruto-uzumaki-on-good-quality-hd-quality-wallpaper-original-imagcfekegqr9n4p.jpeg?q=90&crop=false",
      name: "Ben-10-alian-ultimate"
    },
    {
      id:8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUn8Rv0sz5yXbjApdnrNupR1LUECHJ19KImw&s",
      name: "Ben-10"
    },
    {
      id:9,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTc4bf5MMiQEJByZ6ImZ5CET6MKxQ4DGoGw&s",
      name: "Ben-10-ultimate"
    },
    {
      id:10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTc4bf5MMiQEJByZ6ImZ5CET6MKxQ4DGoGw&s",
      name: "Ben-10"
    },
    {
      id:11,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOIe28ootFaghOWZMSaAUdJvpxUQ12_6PAw&s",
      name: "Ben-10-alian"
    },
    {
      id:12,
      url: "https://www.hindustantimes.com/ht-img/img/2023/04/09/550x309/best_fights_in_naruto-transformed_1681003346648_1681003363962_1681003363962.png",
      name: "Ben-10-alian"
    }
  ]
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-orange-500 to-slate-400'>
        {image.map((value) => (
          <div key={value.id} className="ml-5 m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg w-screen" src={value.url} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Naruto