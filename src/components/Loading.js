import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const loadingTitle = keyframes`
  0% {
    color: #000;
  }
  100% {
    color: white;
  }
`;
const loading = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;
const Wrapper = styled.div`
  align-items: center;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  width: 100vw;
  h3 {
    animation: ${loadingTitle} 2s infinite alternate linear;
  }
`;
const Emoji = styled.span`
  animation: ${loading} 3s infinite linear;
  display: inline-block;
`;

const Loading = () => {
  const [loadingCount, setLoadingCount] = useState(0);

  useEffect(() => {
    let timer1, timer2;
    if (loadingCount >= 99) {
      timer2 = setInterval(
        () => setLoadingCount((prev) => (prev * 10 + 1) / 10),
        1000
      );
    }
    if (loadingCount < 99) {
      timer1 = setInterval(() => setLoadingCount((prev) => prev + 1), 10);
    }
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [loadingCount]);
  return (
    <Wrapper>
      <h3>
        <Emoji>
          <span role="img" aria-label="img">
            👨🏻‍🚀
          </span>
        </Emoji>
        LOADING...
      </h3>
      <p>{loadingCount}%</p>
    </Wrapper>
  );
};

export default Loading;
