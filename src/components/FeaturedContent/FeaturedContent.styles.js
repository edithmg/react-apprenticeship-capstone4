import styled from 'styled-components';

export const StyledBanners = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;

export const SwiperImg = styled.div`
  display: block;
  position: relative;
  width: 100vw;
  height: 90vh;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media all and (max-width: 480px) {
    height: 40vh;
  }
`;

export const SwiperLabel = styled.div`
  text-align: center;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: gray;
  font-size: 42px;
  background-color: white;
  padding: 2rem;
  @media all and (max-width: 480px) {
    font-size: 14px;
    padding: 0.5rem;
  }
`;
