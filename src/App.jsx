import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [stockData, setStockData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5087/api/stocks");
      setStockData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Stock Data</h1>
      
      {stockData ? (
        <div>
          {stockData.map((stock) => (
            <div key={stock.id} style={{ marginBottom: "20px" }}>
              <p>
                <strong>ID:</strong> {stock.id}
              </p>
              <p>
                <strong>Name:</strong> {stock.companyName}
              </p>
              <p>
                <strong>Price:</strong> ${stock.purchase}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}

export default App;
