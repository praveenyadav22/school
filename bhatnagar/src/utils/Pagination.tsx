"use client";

interface PaginationProps {
  currentPage: number;
  totalPages:  number;
  onPrev:      () => void;
  onNext:      () => void;
}

// ─────────────────────────────────────────────────────────────
// Pagination — reusable prev/next pagination bar
// Only renders when totalPages > 1
// Usage:
//   <Pagination
//     currentPage={currentPage}
//     totalPages={totalPages}
//     onPrev={goToPrev}
//     onNext={goToNext}
//   />
// ─────────────────────────────────────────────────────────────
const Pagination = ({ currentPage, totalPages, onPrev, onNext }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="c-pagination">
      <button
        className="c-pagination__btn"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="c-pagination__info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="c-pagination__btn"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
