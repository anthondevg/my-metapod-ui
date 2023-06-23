import React, { useEffect, useState } from "react";
import tw from "twin.macro";

export default function Pagination({ handlePagination }) {
  const [offsetArray, setOffsetArray] = useState([]) as any;

  useEffect(() => {
    // count: 50
    let totalPages = 50 / 10;

    for (let i = 0; i < totalPages; i++) {
      if (i === 0) {
        setOffsetArray((offsetArray) => [...offsetArray, 0]);
        continue;
      }

      let newOffset = i * 10;
      setOffsetArray((offsetArray) => [...offsetArray, newOffset]);
    }
  }, []);

  return (
    <nav aria-label="Page mb-6 navigation example">
      <ul tw="inline-flex -space-x-px">
        {offsetArray.map((offset, i) => {
          return (
            <li key={i}>
              <a
                onClick={() => {
                  handlePagination(offset);
                }}
                tw="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {i + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
