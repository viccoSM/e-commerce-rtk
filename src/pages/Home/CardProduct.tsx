import React, {FC, memo} from 'react';
import {Star} from "react-feather";
import {Link} from "react-router-dom";
import {DetailProductResponse} from "../../services/product/model";

const CardProduct: FC<DetailProductResponse> = (props) => {
  return (
    <div className='bg-white px-2 py-5 rounded-lg max-w-[180px] h-[330px] overflow-hidden relative'>
      <img className='w-full h-[180px] object-fill' src={props.image} alt=""/>
      <div className="mt-2 text-sm space-y-2">
        <div className='flex items-center justify-between'>
          <p>${props.price}</p>
          <div className="flex items-center text-yellow-500 text-xs space-x-0.5">
            <Star width={16} height={16}/>
            <p className='text-gray-400'>
              {props.rating.rate}({props.rating.count})
            </p>
          </div>
        </div>
        <p>
          {
            props.title.length > 40
              ? props.title.substring(0, 40) + '...'
              : props.title
          }
        </p>
      </div>
      <Link to={`/product/${props.id}`} className='stretched-link'/>
    </div>
  );
}

export default memo(CardProduct);