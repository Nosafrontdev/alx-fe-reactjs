import { useEffect, useState } from "react";
function HomePage() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('src/data.json')
        .then((response)=> {
            if (!response.ok){
                throw new Error('failed to fetch data');
            }
            return response.json();
        })
     .then ((data) => setData(data))
     .catch((error)=> {
        setError(`Error loading data: ${error.message}`);
     }
    );
    },[]);
      
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Fetcher</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;