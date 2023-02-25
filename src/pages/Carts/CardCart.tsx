import React, {FC, memo} from 'react';
import {useGetDetailProductQuery} from "../../services/product";
import Loading from "../../components/Loading";

interface CardCartProps {
  id: number,
  quantity: number
}

const CardCart:FC<CardCartProps> = ({id, quantity}) => {

  const {data, isLoading} = useGetDetailProductQuery(Number(id))

  return (
    <div className='w-full flex space-x-3 p-4 rounded-xl bg-white max-w-xl mx-auto'>
      <img className='object-fill w-[130px] h-[160px]' src={data?.image} alt=""/>
      <div className='w-full space-y-2'>
        {isLoading ? <Loading/> : (
          <>
            <div className='flex justify-between'>
              <p className="text-xl max-w-[250px]">
                {data?.title}
              </p>
              <p className='text-2xl'>
                {quantity}
              </p>
            </div>
            <p>{
              String(data?.description).length > 150
                ? data?.description.substring(0, 150) + '...'
                : data?.description
            }</p>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(CardCart);