import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Book.css";
import star from "../assets/star.png";

export default function Book({ search }) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "Whatever-you-want" },
      })
      .then((res) => setdata(res.data.books))
      .catch((err) => console.log(err));
  }, []);
  console.log(search, "Book");
  return (
    <div className="books">
      {data
        .filter((book) => {
          if (search == "") {
            return book;
          } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
            return book;
          }
        })
        .map((book) => (
          <div key={book.id} className="book-tile">
            <img
              className="img"
              src={book.imageLinks.smallThumbnail}
              alt={book.title}
            />
            <div className="book-details">
              <h5>{book.title}</h5>
              <div className="rate">
                <img className="star" src={star} />
                <p>
                  <i>{book.averageRating || "-.-"}</i>
                </p>
              </div>
              <p>Free</p>
            </div>
          </div>
        ))}
    </div>
  );
}
