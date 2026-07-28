function Pagination({ page, setPage }) {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        ← Назад
      </button>

      <span className="page-number">
        Страница {page}
      </span>

      <button
        className="pagination-button"
        onClick={() => setPage(page + 1)}
      >
        Вперед →
      </button>
    </div>
  );
}

export default Pagination;