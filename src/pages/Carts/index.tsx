import React, {memo, useEffect} from 'react';
import { useLazyGetListCartUserQuery} from "../../services/cart";
import {getDetailUser} from "../../services/user";
import CardCart from "./CardCart";
import {formatDate} from "../../utils/date";

const Carts = () => {
  const {data: user} = getDetailUser.useQueryState(null)
  const [getListCartUser, {data:carts}] = useLazyGetListCartUserQuery()

  useEffect(() => {
    if(user?.id) getListCartUser(user?.id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <section className="container mx-auto py-4 sm:px-0">
      <div className="px-4 w-full space-y-6">
        {carts?.map(({date, products}, idx) => (
          <div key={idx} className='max-w-xl mx-auto'>
            <p className='text-xl mb-4'>{formatDate(String(date))}</p>
            <div className='space-y-2'>
              {products.map((product, prdIdx) => (
                <CardCart key={prdIdx} id={product.productId} quantity={product.quantity}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(Carts);