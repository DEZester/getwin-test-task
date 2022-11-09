import { FC } from "react";

type Props = {
  nextPage?: () => void;
  prevPage?: () => void;
};

const PokemonsPagination: FC<Props> = ({ nextPage, prevPage }) => {
  return (
    <div className="pagination">
      <button className="pagination__page-btn" onClick={prevPage}>
        <i className="pagination__page-icon pagination__arrowBack"></i>
      </button>
      <span>Pagination</span>
      <button className="pagination__page-btn" onClick={nextPage}>
        <i className="pagination__page-icon pagination__arrowNext"></i>
      </button>
    </div>
  );
};

export default PokemonsPagination;
