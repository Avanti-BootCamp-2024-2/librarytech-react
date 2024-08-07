import React from 'react';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <img src={book.coverUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button className="btn">Trocar</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;