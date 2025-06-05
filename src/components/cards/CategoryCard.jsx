import React from 'react';
import styled from 'styled-components';

export default function CategoryCard({ name, icon, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <StyledWrapper>
      <a className="card" href="#" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="overlay" />
        <div className="circle">{icon}</div>
        <p>{name}</p>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 321px;
    background: #fff;
    border-top-right-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0 14px 26px rgba(22,101,52,0.08);
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
    text-decoration: none;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    .card {
      width: 92vw;
      max-width: 420px;
      margin-bottom: 1.5rem;
      height: 270px;
      border-radius: 18px;
    }
  }
  .card:hover {
    transform: translateY(-5px) scale(1.015) translateZ(0);
    box-shadow: 0 24px 36px rgba(22,101,52,0.13), 0 24px 46px rgba(22,101,52,0.10);
  }
  .card:hover .overlay {
    transform: scale(4) translateZ(0);
  }
  .card:hover .circle {
    border-color: #e6f4ec;
    background: #e6f4ec;
  }
  .card:hover .circle:after {
    background: #e6f4ec;
  }
  .card:hover p {
    color: #166534;
  }
  .card:active {
    transform: scale(1) translateZ(0);
    box-shadow: 0 15px 24px rgba(22,101,52,0.11), 0 15px 24px rgba(22,101,52,0.08);
  }
  .card p {
    font-size: 17px;
    color: #166534;
    margin-top: 30px;
    z-index: 1000;
    font-family: 'Be Vietnam Pro', 'Source Sans Pro', sans-serif;
    font-weight: 700;
    transition: color 0.3s cubic-bezier(.4,2,.6,1);
    text-align: center;
  }
  .circle {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #166534;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
    font-size: 3.2rem;
    color: #166534;
  }
  .circle:after {
    content: "";
    width: 92px;
    height: 92px;
    display: block;
    position: absolute;
    background: #e6f4ec;
    border-radius: 50%;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: background 0.3s cubic-bezier(.4,2,.6,1);
  }
  .circle > * {
    position: relative;
    z-index: 1;
  }
  .overlay {
    width: 92px;
    position: absolute;
    height: 92px;
    border-radius: 50%;
    background: #e6f4ec;
    top: 70px;
    left: 50px;
    z-index: 0;
    transition: transform 0.3s cubic-bezier(.4,2,.6,1);
  }
`; 