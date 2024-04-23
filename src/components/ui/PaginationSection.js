import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationSection({ itemsPerPage, totalItems, paginate, currentPage }) {
     const pageNumbers = [];

  // Calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
     <Pagination className="mt-16 container mx-auto">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink onClick={() => paginate(number)} isActive={currentPage === number} disabled={currentPage === pageNumbers.length}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
