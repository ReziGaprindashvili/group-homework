// ExampleComponent.js
import React , { useState, useEffect } from 'react';
import Orders from "./Orders"

const OrderList = () => {
    const [data, setData] = useState([]); // State to store fetched data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State to track any error
  
    // Fetch data from data.json
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/data.json'); // Fetch the data.json file from the public folder
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setData(jsonData); // Store the data in the state
          setLoading(false); // Set loading to false after data is fetched
        } catch (err) {
          setError(err.message); // Handle error if any
          setLoading(false);
        }
      };
  
      fetchData(); // Call the fetch function when the component mounts
    }, []);
  
    // Handle the loading state
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Handle any error that occurred during fetching
    if (error) {
      return <div>Error: {error}</div>;
    }


    //   const [data, setData] = useState(jsonData);
  

//   useEffect(() => {
//     const fetchData = () => {
//         const response = fetch('../../../data.json')
//         const jsonData = response.json();
//         setData(jsonData);
//     }
//   }, [])


  return (
    <div className="card-list">
        {data.map((order, index) => <Orders key={order.index} price={order.price} category={order.category} name={order.name} image={order.image.thumbnail}/>)}

    </div>
  );
}
export default OrderList