import React, { useEffect, useState } from "react";

import classes from "./NewsItem.module.css";

import { GoPerson, GoHeart, GoClock } from "react-icons/go";
const NewsItem = ({ data }) => {
  const [topic, setTopic] = useState({});

  useEffect(() => {
    const getNewsData = async (id) => {
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const data = await res.json();
      console.log(data);
      setTopic(() => ({
        title: data.title,
        score: data.score,
        author: data.by,
        time: Math.floor(data.time / 3600000),
        coments: data.descendants,
      }));
    };
    getNewsData(data);
  }, []);

  return (
    <div className={classes.wraper}>
      <div className={classes.title}>{topic.title}</div>
      <div className={classes.detials}>
        <div className={classes.points}>
          <GoHeart /> {topic.score}
        </div>
        <div className={classes.author}>
          <GoPerson />
          {topic.author}
        </div>
        <div className={classes.author}>
          <GoClock />
          {topic.time} days ago
        </div>
        <div className={classes.coments}>{topic.coments} comments</div>
      </div>
    </div>
  );
};

export default NewsItem;
