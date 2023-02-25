import React, {FC, memo} from 'react';
import {useGetListCategoryQuery} from "../../services/product";
import clsxm from "../../utils/clsxm";

interface CardCategoryProps {
  category: string | ''
  setCategory: (val:string  ) => void
}

const CardCategory: FC<CardCategoryProps> = ({category, setCategory}) => {
  const {data} = useGetListCategoryQuery(null)

  return (
    <div>
      <div className='flex justify-between items-center py-3'>
        <h2 className='text-xl font-semibold'>Category</h2>
      </div>

      <div className='w-full bg-white p-4 rounded-xl'>
        <ul>
          {data?.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => setCategory(item)}
                className={clsxm('w-full py-2 text-left border-b',
                  category === item && 'text-custom-red'
                )}
              >
                {item}</button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setCategory('')}
              className='w-full py-2 text-left border-b'
            >
              Reset
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(CardCategory);