import React, {memo, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetDetailProductQuery} from "../../services/product";
import Loading from "../../components/Loading";
import {Minus, Plus, Star} from "react-feather";
import {usePostCartMutation} from "../../services/cart";
import {getDetailUser} from "../../services/user";

const Index = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const [count, setCount] = useState(1)
  const [price,  setPrice] = useState(0)

  const {data, isLoading, error, isSuccess} = useGetDetailProductQuery(Number(id))
  const [addCart, {isSuccess:successAddCart}] = usePostCartMutation()
  const {data: user} = getDetailUser.useQueryState(null)

  const handleAddCart = async () => {
    addCart({
      userId: Number(user?.id),
      products:[{productId:Number(id),quantity: count}]
    })
  }

  useEffect(() => {
    if(isSuccess){
      const newPrice = count * Number(data?.price)
      setPrice(Number(newPrice?.toFixed(2)))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, isSuccess])

  useEffect(() => {
    if(successAddCart) navigate('/carts')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successAddCart])

  return (
    <section className="container mx-auto py-4 px-2 sm:px-0">
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-6 px-4'>
        <div className="w-full sm:col-span-2 h-[450px] bg-white rounded-xl p-6 flex justify-center items-center">
          {isLoading && <Loading/>}
          {error && <h2>Cant image</h2>}
          <img className='max-w-[300px] h-full object-fill' src={data?.image} alt=""/>
        </div>
        <div className="w-full sm:col-span-2 h-full bg-white rounded-xl p-6 space-y-6">
          {isLoading ? <Loading/> : (
            <>
              <h1 className='text-4xl font-bold'>{data?.title}</h1>
              <div className="space-y-4">
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
        <div className="col-auto">
          <div className='rounded-lg bg-white p-6 text-center space-y-4'>
            <p className='text-xl'>${price}</p>
            <div className="flex items-center w-full justify-between">
              <button disabled={count === 1} onClick={() => setCount(count - 1)}>
                <Minus/>
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>
                <Plus/>
              </button>
            </div>

            <button
              className='py-2 px-3 w-full bg-custom-red text-white'
              onClick={handleAddCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Index);