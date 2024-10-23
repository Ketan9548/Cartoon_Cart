import React from 'react'

const Tomjerry = () => {
  const image = [
    {
      id:1,
      url: "https://m.media-amazon.com/images/I/71QTjGr53JL._AC_UF894,1000_QL80_.jpg",
      name: "Doraemon"
    },
    {
      id:2,
      url: "https://m.media-amazon.com/images/I/71QTjGr53JL._AC_UF894,1000_QL80_.jpg",
      name: "Ben-10-alian"
    },
    {
      id:3,
      url: "https://m.media-amazon.com/images/I/71QTjGr53JL._AC_UF894,1000_QL80_.jpg",
      name: "Ben-10-alian"
    },
    {
      id:4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrbvPC2wNXb54pMVCWYkJFIiebwQmTYWpcA&s",
      name: "Ben-10-alian-force"
    },
    {
      id:5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrbvPC2wNXb54pMVCWYkJFIiebwQmTYWpcA&s",
      name: "Ben-10-alian"
    },
    {
      id:6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrbvPC2wNXb54pMVCWYkJFIiebwQmTYWpcA&s",
      name: "Ben-10-ultimate"
    },
    {
      id:7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrbvPC2wNXb54pMVCWYkJFIiebwQmTYWpcA&s",
      name: "Ben-10-alian-ultimate"
    },
    {
      id:8,
      url: "https://thumbs.dreamstime.com/b/beautiful-standee-movie-called-tom-jerry-display-cinema-to-promote-movie-bangkok-thailand-feb-beautiful-212380489.jpg",
      name: "Ben-10"
    },
    {
      id:9,
      url: "https://m.media-amazon.com/images/S/pv-target-images/f826121e1eeefae4d9ba42d4968f11e1f32a9c8c3a05c780e858a5b1225aaa61.jpg",
      name: "Ben-10-ultimate"
    },
    {
      id:10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTaJ9aNmkJ8gGElRLCk9SW6_cuh1pQ6XKoA&s",
      name: "Ben-10"
    },
    {
      id:11,
      url: "https://m.media-amazon.com/images/S/pv-target-images/f826121e1eeefae4d9ba42d4968f11e1f32a9c8c3a05c780e858a5b1225aaa61.jpg",
      name: "Ben-10-alian"
    },
    {
      id:12,
      url: "https://m.media-amazon.com/images/S/pv-target-images/f826121e1eeefae4d9ba42d4968f11e1f32a9c8c3a05c780e858a5b1225aaa61.jpg",
      name: "Ben-10-alian"
    }
  ]
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-orange-400 to-slate-400'>
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

export default Tomjerry