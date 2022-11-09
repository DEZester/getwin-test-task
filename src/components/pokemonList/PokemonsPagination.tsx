import { FC, useRef } from "react";

type Props = {
  nextPage?: () => void;
  prevPage?: () => void;
};

const PokemonsPagination: FC<Props> = ({ nextPage, prevPage }) => {
  const btnPrevPageRef = useRef<HTMLButtonElement>(null);
  const btnNextPageRef = useRef<HTMLButtonElement>(null);

  const iconNextDisabled: string = btnNextPageRef.current?.disabled
    ? "pagination__page-icon pagination__arrowNext pagination__arrowNext_disabled"
    : "pagination__page-icon pagination__arrowNext";

  const iconPrevDisabled: string = btnPrevPageRef.current?.disabled
    ? "pagination__page-icon pagination__arrowBack pagination__arrowBack_disabled"
    : "pagination__page-icon pagination__arrowBack";

  return (
    <div className="pagination">
      <button
        className="pagination__page-btn"
        onClick={prevPage}
        ref={btnPrevPageRef}
      >
        <i className={iconPrevDisabled}></i>
      </button>
      <span>Pagination</span>
      <button
        className="pagination__page-btn"
        onClick={nextPage}
        ref={btnNextPageRef}
      >
        <i className={iconNextDisabled}></i>
      </button>
    </div>
  );
};

export default PokemonsPagination;
