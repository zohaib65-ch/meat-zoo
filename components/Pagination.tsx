import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-surface bg-brand-white text-brand-dark transition hover:bg-brand-cream disabled:opacity-30 disabled:hover:bg-brand-white cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all cursor-pointer ${
              currentPage === page ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" : "bg-brand-white text-brand-dark hover:bg-brand-cream"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-surface bg-brand-white text-brand-dark transition hover:bg-brand-cream disabled:opacity-30 disabled:hover:bg-brand-white cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
