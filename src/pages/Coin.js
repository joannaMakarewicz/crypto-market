import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Coin.scss";
import DOMPurify from "dompurify";
import useWebsiteTitle from "../hooks/useWebsiteTitle";

const Coin = () => {
  const [coin, setCoin] = useState([]);

  const params = useParams();
  const setTitle = useWebsiteTitle();


  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url, { method: "GET" })
      .then((res) => {
        setCoin(res.data);
        setTitle(res.data.id.toUpperCase())
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);



  return (
    <main>
      <section className="coin">
        <header className="coin__content">
          <h1>{coin.name}</h1>
        </header>
        <article className="coin__content">
          <div className="rank">
            <span className="rank__btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="info__heading">
              {coin.image ? <img src={coin.image.small} alt="img" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="info__price">
              {coin.market_data?.current_price ? (
                <h1>$ {coin.market_data.current_price.pln.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </article>
        <article className="coin__content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.pln.toFixed(
                        1
                      )}
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <article className="coin__content">
          <div className="stats">
            <div className="stats__left">
              <div className="stats__row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="stats__row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="stats__right">
              <div className="stats__row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="stats__row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </article>
        <article className="coin__content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Coin;
