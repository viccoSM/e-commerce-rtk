import React, {memo, useEffect, useState} from 'react';
import {useGetListProductQuery} from "../../services/product";
import Loading from "../../components/Loading";
import CardProduct from "./CardProduct";
import CardCategory from "./CardCategory";

const Home = () => {
  const [limit, setLimit] = useState(5)
  const [category, setCategory] = useState('')

  const handleCategory = (val:string) => {
    setLimit(5)
    setCategory(val)
  }

  const {
    data: products,
    error: errorProducts,
    isLoading: loadingProducts,
    isFetching: fetchingProducts,
    ...restProduct
  } = useGetListProductQuery({params: {limit}, category})

  useEffect(() => {
    restProduct.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, category])

  return (
    <section className="container mx-auto py-4 px-2 sm:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <CardCategory category={category} setCategory={handleCategory}/>
        <div className='md:col-span-3 sm:col-span-2'>
          <div className='flex justify-between items-center py-3'>
            <h2 className='text-xl font-semibold'>Proudcts</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {products?.map((product, idx) => (
              <div className='flex justify-center w-full' key={idx}>
                <CardProduct {...product}/>
              </div>
            ))}
          </div>
          <div className='w-full py-4 flex justify-center'>
            {errorProducts && <h2 className='text-xl font-semibold'>Product can't show</h2>}
            {
              loadingProducts || fetchingProducts
                ? <Loading/>
                : (
                  <button
                    className='py-2 px-3 border border-custom-red text-custom-red'
                    onClick={() => setLimit(limit + 5)}
                  >
                    More Product
                  </button>
                )
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Home);