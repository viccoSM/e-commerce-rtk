import React, {memo} from 'react';
import {useParams} from "react-router-dom";
import {useGetDetailProductQuery} from "../../services/product";
import Loading from "../../components/Loading";
import {Star} from "react-feather";

const Index = () => {
  const {id} = useParams();

  const {data, isLoading, error} = useGetDetailProductQuery(Number(id))

  return (
    <section className="container mx-auto py-4 px-2 sm:px-0">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className="w-full h-[450px] bg-white rounded-xl p-6 flex justify-center items-center">
          {isLoading && <Loading/>}
          {error && <h2>Cant image</h2>}
          <img className='max-w-[300px] h-full object-fill' src={data?.image} alt=""/>
        </div>
        <div className="w-full h-full bg-white rounded-xl p-6 space-y-6">
          {isLoading ? <Loading/> : (
            <>
              <h1 className='text-4xl font-bold'>{data?.title}</h1>
              <div className="space-y-4 text-2xl">
                <div className='flex items-center space-x-3'>
                  <p>${data?.price}</p>
                  <div className="flex items-center text-yellow-500 space-x-0.5">
                    <Star width={16} height={16}/>
                    <p className='text-gray-400'>
                      {data?.rating.rate}({data?.rating.count})
                    </p>
                  </div>
                </div>
                <p>Category: {data?.category}</p>
                <p>{data?.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(Index);