import { useEffect, useState } from "react";
function HomePage() {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('./data.json')
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
        <div>
            <h1> Recipe fetcher </h1>
            {error && <p> {error} </p>}
            {data.map((item) => (
                <p key = {item.id}> {item.title} {item.summary} {item.image}</p>
            ))}

        </div>
    );
}

export default HomePage;