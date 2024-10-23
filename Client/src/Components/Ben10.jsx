import React from 'react'

const Ben10 = () => {
    const image = [
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPpd-Cu5tyzyTa4CGa9PEOZ0kgH5-hUSjOA&s",
            name: "Ben-10"
        },
        {
            id: 2,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIm61FspV4aKNZNwAuRb9DA7i3n_RjWXm4A&s",
            name: "Ben-10-alian"
        },
        {
            id: 3,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHWKIiR86LNoYbMaILuuJrC0iBYALqMDvvwODBmuPN7jmJ6gJ_SE5jCKUMGUVuQrZDU0&usqp=CAU",
            name: "Ben-10-alian"
        },
        {
            id: 4,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4DY4Hb61Q7DI0lWX8ks0tAAL8kl6utjhw5q2gNhU6SmCEzzBY58N6PEoNYfhpY9L4Xk&usqp=CAU",
            name: "Ben-10-alian-force"
        },
        {
            id: 5,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4DY4Hb61Q7DI0lWX8ks0tAAL8kl6utjhw5q2gNhU6SmCEzzBY58N6PEoNYfhpY9L4Xk&usqp=CAU",
            name: "Ben-10-alian"
        },
        {
            id: 6,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4DY4Hb61Q7DI0lWX8ks0tAAL8kl6utjhw5q2gNhU6SmCEzzBY58N6PEoNYfhpY9L4Xk&usqp=CAU",
            name: "Ben-10-ultimate"
        },
        {
            id: 7,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4DY4Hb61Q7DI0lWX8ks0tAAL8kl6utjhw5q2gNhU6SmCEzzBY58N6PEoNYfhpY9L4Xk&usqp=CAU",
            name: "Ben-10-alian-ultimate"
        },
        {
            id: 8,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPacCu1mGKGNl_c-9_nMaQtcviosUAZze3A&s",
            name: "Ben-10"
        },
        {
            id: 9,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPacCu1mGKGNl_c-9_nMaQtcviosUAZze3A&s",
            name: "Ben-10-ultimate"
        },
        {
            id: 10,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPpd-Cu5tyzyTa4CGa9PEOZ0kgH5-hUSjOA&s",
            name: "Ben-10"
        },
        {
            id: 11,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPacCu1mGKGNl_c-9_nMaQtcviosUAZze3A&s",
            name: "Ben-10-alian"
        },
        {
            id: 12,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPacCu1mGKGNl_c-9_nMaQtcviosUAZze3A&s",
            name: "Ben-10-alian"
        }
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-green-500 to-slate-400'>
                {image.map((value) => (
                    <div key={value.id} className="ml-5 m-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-screen" src={value.url} alt={value.name} />
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

export default Ben10