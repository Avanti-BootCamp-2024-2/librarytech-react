import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import api from '../api';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/livros');
        const mockBooks = response.data.map( (livro) => {
          return { id: livro.id, title: livro.titulo, author: livro.autor }
        })
        setBooks(mockBooks);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os livros. Por favor, tente novamente.');
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Livros Disponíveis para Troca</h1>
      <BookList books={books} />
    </div>
  );
};

export default BooksPage;