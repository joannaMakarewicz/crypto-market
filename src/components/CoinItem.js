import React from 'react'

const CoinItem = (props) => {
    console.log(props);
  return (
    <div className='coins__row'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='coins__img'>
            <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.current_price} $</p>
        <p>{props.coins.price_change_percentage_24h} %</p>
        <p className='coins__mobile'>{props.coins.total_volume} $</p>
        <p className='coins__mobile'>{props.coins.market_cap} $</p>
    </div>
  )
}

export default CoinItem
