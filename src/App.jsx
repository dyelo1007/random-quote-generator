import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";

const App = () => {
  const [quotes, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "6F0nwFpPdL0LaQ/TJniN/A==Rn3SuDdhhscwgm97" },
      });
      console.log(response.data);
      setQuote(response.data[0]);
    } catch (error) {
      console.log("Error fetching quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="min-h-screen bg-[#e0e0e0] flex justify-center items-center">
      <QuoteCard
        title={"Random Quote Generator"}
        quote={quotes.quote}
        author={quotes.author}
        onClick={fetchQuote}
        btnName={"New Quote"}
      />
    </div>
  );
};

export default App;
