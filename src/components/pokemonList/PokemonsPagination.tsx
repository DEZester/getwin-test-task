import { FC } from "react";
import { getPaginationItems } from "../../features/expansionsFuncs";

type Props = {
  nextPage: () => void;
  prevPage: () => void;
  setCurrentPage: (e: number) => void;
  currentPage: number;
  maxPage: number;
};

const PokemonsPagination: FC<Props> = ({
  nextPage,
  prevPage,
  currentPage,
  maxPage,
  setCurrentPage,
}) => {
  return (
    <div className="pagination">
      <button className="pagination__page-btn" onClick={prevPage}>
        <i className="pagination__btn-icon pagination__arrowBack"></i>
      </button>
      <ul className="pagination__pages">
        {getPaginationItems(currentPage, maxPage, 7).map((pageNum, idx) => (
          <li
            className={
              pageNum == currentPage
                ? "pagination__page pagination__page_active"
                : "pagination__page"
            }
            key={idx}
            onClick={() => setCurrentPage(pageNum)}
          >
            <a className="pagination__page-link">
              {!isNaN(pageNum) ? pageNum : "..."}
            </a>
          </li>
        ))}
      </ul>
      <button className="pagination__page-btn" onClick={nextPage}>
        <i className=" pagination__btn-icon pagination__arrowNext"></i>
      </button>
    </div>
  );
};

export default PokemonsPagination;
