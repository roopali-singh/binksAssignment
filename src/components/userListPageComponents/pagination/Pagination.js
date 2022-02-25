import {
  TOTAL_USERS,
  USERS_PER_PAGE,
} from "../../../context/constants/userConstants";
import "../../../style/userListPageStyle/pagination/Pagination.css";
import Button from "../../sharedComponents/Button";

function Pagination({ page, changePage }) {
  const number_of_pages = TOTAL_USERS / USERS_PER_PAGE;

  // check for float
  const total_pages =
    number_of_pages !== parseInt(number_of_pages)
      ? parseInt(number_of_pages) + 1
      : parseInt(number_of_pages);

  const previousPage = () => {
    if (page <= 1) return;
    changePage((number) => number - 1);
  };

  const nextPage = () => {
    if (page >= total_pages) return;
    if (page) changePage((number) => number + 1);
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
