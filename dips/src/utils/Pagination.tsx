"use client";

interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ current, total, onPageChange }: PaginationProps) {
  if (total <= 1) return null;

  return (
    <div className="pagination-wrap">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        style={{ opacity: current === 1 ? 0.5 : 1, cursor: current === 1 ? "not-allowed" : "pointer" }}
      >
        &laquo; Prev
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={page === current ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        style={{ opacity: current === total ? 0.5 : 1, cursor: current === total ? "not-allowed" : "pointer" }}
      >
        Next &raquo;
      </button>
    </div>
  );
}
