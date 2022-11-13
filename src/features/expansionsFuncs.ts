export const capLetName = (str: string): string => {
  const strWithCapLet: string = str
    ? str.slice(0, 1).toUpperCase() + str.slice(1)
    : "";
  return strWithCapLet;
};

export const searchPokemons = (pokemonList: any[], searchValue: string) => {
  if (searchValue !== "") {
    return pokemonList.filter(
      (pok) =>
        capLetName(pok.name || pok.pokemon.name) ===
        capLetName(searchValue.toLowerCase())
    );
  }
  return pokemonList;
};

export function getPaginationItems(
  currentPage: number,
  lastPage: number,
  maxLength: number
) {
  const res: Array<number> = [];

  // handle lastPage less than maxLength
  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i);
    }
  }

  // handle ellipsis logics
  else {
    const firstPage = 1;
    const confirmedPagesCount = 3;
    const deductedMaxLength = maxLength - confirmedPagesCount;
    const sideLength = deductedMaxLength / 2;

    // handle ellipsis in the middle
    if (
      currentPage - firstPage < sideLength ||
      lastPage - currentPage < sideLength
    ) {
      for (let j = 1; j <= sideLength + firstPage; j++) {
        res.push(j);
      }

      res.push(NaN);

      for (let k = lastPage - sideLength; k <= lastPage; k++) {
        res.push(k);
      }
    }

    // handle two ellipsis
    else if (
      currentPage - firstPage >= deductedMaxLength &&
      lastPage - currentPage >= deductedMaxLength
    ) {
      const deductedSideLength = sideLength - 1;

      res.push(1);
      res.push(NaN);

      for (
        let l = currentPage - deductedSideLength;
        l <= currentPage + deductedSideLength;
        l++
      ) {
        res.push(l);
      }

      res.push(NaN);
      res.push(lastPage);
    }

    // handle ellipsis not in the middle
    else {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
      let remainingLength = maxLength;

      if (isNearFirstPage) {
        for (let m = 1; m <= currentPage + 1; m++) {
          res.push(m);
          remainingLength -= 1;
        }

        res.push(NaN);
        remainingLength -= 1;

        for (let n = lastPage - (remainingLength - 1); n <= lastPage; n++) {
          res.push(n);
        }
      } else {
        for (let o = lastPage; o >= currentPage - 1; o--) {
          res.unshift(o);
          remainingLength -= 1;
        }

        res.unshift(NaN);
        remainingLength -= 1;

        for (let p = remainingLength; p >= 1; p--) {
          res.unshift(p);
        }
      }
    }
  }

  return res;
}

const typesArr: string[] = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

// export const pokClassByType = (responseType: string): string => {
//   let resClass: string = "pokemonCard__type";
//   typesArr.forEach((type: string) => {
//     if (responseType === type) {
//       resClass = `pokemonCard__type pokemonCard__type_${type}`;
//     }
//   });
//   return resClass;
// };

export const pokClassByType = (responseType: string): string =>
  typesArr.reduce(
    (acc: string, type: any): any =>
      responseType === type ? `${acc} pokemonCard__type_${type}` : acc,
    "pokemonCard__type"
  );
