export interface IPaginationProps {
    page: number;
    totalPages: number;
    total: number;
    pageSize: number;
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

