import React from 'react';
import image from '../assets/news.png';
import './NewsItem.css';

export const NewsItem = ({ title, description, src, url, data }) => {
  
  const formatarDataAmericana = (dataString) => {
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const dataFormatada = new Intl.DateTimeFormat('en-US', options).format(new Date(dataString));
    return dataFormatada;
  };

  return (
    <>
      <a href={url}>
        <div className="card card text-white bg-dark mb-4">
          <img className="card-img-top" src={src ? src : image} alt="Card cover image" />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">{description ? description.slice(0, 90) : '...'}</p>
            <p className="card-text"><small className="text-muted">{formatarDataAmericana(data)}</small></p>
          </div>
        </div>
      </a>
    </>
  );
};
