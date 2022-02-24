import "../../../style/userListPageStyle/pagination/Pagination.css";
import Button from "../../sharedComponents/Button";

function Pagination({ page, changePage }) {
  const previousPage = () => {
    if (page <= 0) return;
    changePage((number) => number - 1);
  };

  const nextPage = () => {
    changePage((number) => number + 1);
  };

  return (
    <main className="pagination">
      <Button title="Previous" handleClick={previousPage} />
      <div className="pagination__value">
        <strong>Page No. {page}</strong> (10/page)
      </div>
      <Button title="Next" handleClick={nextPage} />
    </main>
  );
}

export default Pagination;
