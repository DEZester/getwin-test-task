import { FC } from "react";
import { pagesPerItems } from "../../features/expansionsFuncs";

type Props = {
  nextPage: () => void;
  prevPage: () => void;
};

const PokemonsPagination: FC<Props> = ({ nextPage, prevPage }) => {
  return (
    <div className="pagination">
      <button className="pagination__page-btn" onClick={prevPage}>
        <i className="pagination__btn-icon pagination__arrowBack"></i>
      </button>
      <ul className="pagination__pages">
        {pagesPerItems(10, 1154).map((number) => (
          <li className="pagination__page" key={number}>
            <a className="pagination__page-link">{number}</a>
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
