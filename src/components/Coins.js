import React from 'react';
import CoinItem from './CoinItem';
import Coin from '../pages/Coin';
import { Link } from 'react-router-dom';
import './Coins.scss';

const Coins = (props) => {

  return (
    <main className='container'>
        <div className='coins'>
            <p>#</p>
            <p className='coins__name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='coins__mobile'>Volume</p>
            <p className='coins__mobile'>Mkt Cap</p>
        </div>

        {props.coins.map(coins => {
            return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                    <CoinItem coins={coins}/>
                </Link>
            )
        })}
    </main>
  )
}

export default Coins
