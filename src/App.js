import { useEffect, useState } from "react";
import NewsItem from "./components/NewsItem/item/NewsItem";
import classes from "./App.module.css";
function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const data = await res.json();

    setData(data.slice(0, 10));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.wraper}>
      <header className={classes.header}>
        <h2>Hacker News</h2>
      </header>
      <main className={classes.main}>
        {data.map((item, index) => (
          <div className={classes.items} key={item}>
            <span className={classes.num}>{index + 1}.</span>{" "}
            <NewsItem data={item} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
