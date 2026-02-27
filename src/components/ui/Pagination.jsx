function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <input
          key={i + 1}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={i + 1}
          checked={currentPage === i + 1}
          onChange={() => setCurrentPage(i + 1)}
        />
      ))}
    </div>
  );
}

export default Pagination;
