import styled from "styled-components";

const ProductWrapper = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  width: 100%;
  overflow-x: hidden;

  .btn_light {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 24px;
    background-color: #fff;
    color: #ff5314;
    cursor: pointer;
    height: 38px;

    &.active {
      background-color: #ff5314;
      color: white;
      border: none;
      padding: 7px 24px;
      border-radius: 5px 0 0 5px;
    }
    &.b_radius2 {
      border-radius: 0 5px 5px 0;
    }
    &.b_radius {
      border-radius: 5px 0 0 5px;
    }
  }
  .save_btn {
    background-color: transparent !important;
  }

  @media screen and (max-width: 500px) {
    .button {
      font-size: 10px;
    }
    .modal_product {
      h3 {
        font-size: 18px;
      }
      .input::-webkit-input-placeholder {
        font-size: 10px !important;
      }
      .input::-moz-placeholder {
        font-size: 10px !important;
      }
      .input:-ms-input-placeholder {
        font-size: 10px !important;
      }
      .input::-ms-input-placeholder {
        font-size: 10px !important;
      }
      .input::placeholder {
        font-size: 10px !important;
      }
    }
  }
  .PrivateTabIndicator-colorSecondary-5 {
    display: none !important;
  }
  .MuiTabs-flexContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
    padding: 0 !important;
    width: 300px;
  }
  .MuiPaper-elevation4 {
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 0 !important;
    border: none !important;
    outline: none;
  }
  .MuiBox-root-11,
  .MuiBox-root-31 {
    padding: 0px !important;
  }
  .MuiAppBar-colorPrimary {
    background: white !important;
  }
  .MuiAppBar-colorPrimary {
    width: 310px;
    height: 35px !important;
    border-bottom: 0px !important;
  }
  .MuiTabs-root {
    display: block;
  }
  .MuiTab-root {
    width: 100px !important;
    font-size: 13px;
    min-height: 35px;
    margin: 0;
    padding: 0;
    background: transparent !important;
  }
  .MuiTab-root:nth-child(1) {
    background: #ff5314 !important;
    color: #fff;
    border-radius: 10px 0 0 10px;
  }
  .MuiTab-root:nth-child(2) {
    background: #fff !important;
    color: #ff5314;
    border: 1px solid rgba(168, 160, 160, 1);
    border-radius: 0 5px 5px 0;
  }
  .MuiTabs-scroller {
    border-radius: 5px;
  }
  .subtitle {
    font-weight: 700;
    font-size: 15px;
    color: rgba(0, 0, 0, 1);
  }
  .datas_subtitle {
    height: 55px !important;
  }
  .LeftSide {
    width: 340px;
    margin-top: 130px;
    .input {
      width: 68%;
      border: none;
      outline: none;
      background-color: rgba(234, 231, 231, 1);
      padding: 8px 4px;
      font-weight: bold;
      &::-webkit-input-placeholder {
        font-weight: bold;
        color: black;
      }
      &::-moz-placeholder {
        font-weight: bold;
        color: black;
      }
      &:-ms-input-placeholder {
        font-weight: bold;
        color: black;
      }
      &::-ms-input-placeholder {
        font-weight: bold;
        color: black;
      }
      &::placeholder {
        font-weight: bold;
        color: black;
      }
    }
    .btn_secondary {
      background-color: rgba(234, 231, 231, 1);
    }
    .checkbox {
      width: 20px;
      height: 20px;
      background-color: #ff5314 !important;
    }
    .box {
      width: 20px;
      height: 20px;
      border: 1px solid #eae7e7;
      background: #eae7e7;
      outline: none;
      border-radius: 2px;
      &.active {
        background-color: #ff5314 !important;
        border: none;
      }
    }
    .icon {
      color: #ff5314 !important;
      cursor: pointer;
    }
    .orange_btn {
      background-color: #fff;
      color: #ff5314;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 6px 20px;
      font-size: 12px;
      border-radius: 0 5px 5px 0;
      &.active {
        background-color: #ff5314;
        padding: 7px 20px;
        border: none;
        color: #fff;
        border-radius: 5px 0 0 5px;
      }
    }
  }
  .Sidebar {
    -webkit-box-flex: 3 !important;
    -ms-flex: 3 !important;
    flex: 3 !important;
    .border_ {
      border-bottom: 3px solid #969696;
      width: 402px;
      margin: auto;
    }
    .icon {
      width: 30.2px;
      height: 30px;
    }
    ul {
      .li {
        font-weight: bold;
        font-size: 24.0473px;
        line-height: 100%;
      }
    }

    .card_product {
      margin-bottom: 30px;
      height: 340px;
      .cards_border {
        border: 3px solid #2525eb;
        background-color: white;
        width: 100%;
        z-index: 600;
        position: relative;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
        height: 100%;
        overflow: hidden;

        .skidka {
          width: 135px;
          height: 33.43px;
        }
        .phone_photo {
          width: 140px;
          height: 140px;
          -o-object-fit: contain;
          object-fit: contain;
        }
        .descripton {
          font-size: 9px;
          color: #8d8989;
          text-transform: uppercase;
          -webkit-transition: 1s;
          -o-transition: 1s;
          transition: 1s;
        }

        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 475px;
          z-index: 700;
        }
      }
    }
    @media screen and (max-width: 1195px) {
      .cards_border {
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 500px !important;
          z-index: 700;
        }
      }
    }

    @media screen and (max-width: 1027px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 440px !important;
          z-index: 700;
        }
      }
    }
    @media screen and (max-width: 990px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 420px !important;
          z-index: 700;
        }
      }
    }
    @media screen and (max-width: 766px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 440px !important;
          z-index: 700;
        }
      }
    }
    @media screen and (max-width: 575px) {
      .cards_border {
        height: 100% !important;
        &:hover .descripton {
          visibility: visible;
          position: absolute;
          z-index: 700;
        }
        &:hover {
          height: 420px !important;
          z-index: 700;
        }
      }
    }
    .title {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 42px;
      font-weight: 700;
    }
    .text_secondary {
      background-color: #e2e38c;
      font-weight: 500;
      font-size: 15.285px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 16.285px;
      -webkit-text-decoration: line-through 1px rgba(0, 0, 0, 1);
      text-decoration: line-through 1px rgba(0, 0, 0, 1);
    }
    .subtitle {
      font-weight: 700;
      font-size: 14.2732px;
    }
    .aksiya__ {
      font-size: 10.285px;
    }
    .aksiya {
      font-size: 8.22803px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    .small_price,
    .big_text {
      font-weight: bold;
      line-height: 92%;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      color: #000000;
    }
    .small_price {
      font-size: 20px;
    }
    .big_text {
      font-size: 25px;
    }
    .desc {
      color: rgba(168, 160, 160, 1);
      border-bottom: 1px solid rgba(200, 200, 200, 1);
      font-weight: 500;
      font-size: 10.285px;
      line-height: 115.5%;
      /* or 12px */
      letter-spacing: 0.025em;
      -webkit-text-decoration-line: underline;
      text-decoration-line: underline;
    }
  }
  @media screen and (max-width: 1100px) {
    .rightSide {
      display: none !important;
    }
  }
  .rightSide {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 90px !important;
    .phone {
      width: 84.1px;
      height: 116px;
    }
    .desc {
      font-size: 12px;
    }
    .subtitle {
      font-size: 13px;
    }
    .bg_success {
      color: rgba(168, 160, 160, 1);
      font-weight: 500;
      font-size: 14px;
      -webkit-text-decoration: line-through 1px rgba(0, 0, 0, 1);
      text-decoration: line-through 1px rgba(0, 0, 0, 1);
    }
    .aksiya {
      background-color: #e2e38c;
      font-size: 11px;
    }
    .price {
      font-size: 17px;
    }
    .big_text {
      font-size: 25px;
    }
  }
  .myinput {
    width: 20px;
    height: 20px;
    cursor: pointer;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
  .myinput[type="checkbox"]:before {
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    background: #eae7e7 !important;
  }
  .myinput[type="checkbox"]:after {
    position: relative;
    display: block;
    left: 0px;
    top: -20px;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    border: 1px solid #eae7e7 !important;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
  }
  .myinput[type="checkbox"]:checked:after {
    background-color: #ff5314;
  }
  /* Large checkboxes */
  .myinput.large {
    height: 22px;
    width: 22px;
  }
  .myinput.large[type="checkbox"]:before {
    width: 20px;
    height: 20px;
  }
  .myinput.large[type="checkbox"]:after {
    top: -20px;
    width: 16px;
    height: 16px;
  }
  .text {
    font-weight: bold;
    font-size: 32.0473px;
    line-height: 100%;
  }
  .li {
    font-weight: bold;
    font-size: 42px;
    line-height: 100%;
  }
  .pro_orange {
    background-color: #ff5314;
    color: white;
    padding: 2px 10px;
  }
  .numbers {
    color: rgba(85, 85, 85, 1);
  }

  //slider
  .MuiSlider-root {
    color: #ff5314 !important;
  }
  .MuiSlider-thumb {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
  }
  @media screen and (max-width: 500px) {
    .MuiSlider-thumb {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 8px !important;
    }
  }
  @media screen and (max-width: 400px) {
    .MuiSlider-thumb {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 14px !important;
    }
  }
  .MuiSlider-valueLabel {
    left: -5px !important;
  }
  @media screen and (max-width: 1850px) {
    .li {
      font-size: 42px;
    }
  }
  @media screen and (max-width: 1441px) {
    .li {
      font-size: 30px;
    }
    @media screen and (max-width: 1200px) {
      .D_flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .LeftSide {
        -webkit-box-flex: 150px;
        -ms-flex: 150px;
        flex: 150px;
      }
      .Sidebar {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      .rightSide {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }
    @media screen and (max-width: 1025px) {
      .D_flex {
        display: -ms-grid !important;
        display: grid !important;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .LeftSide {
        width: 100%;
      }
      .Sidebar {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      .rightSide {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }
    @media screen and (max-width: 1024px) {
      .bottom_text {
        display: none;
      }
      .bottom_block_text {
        display: block !important;
      }
      .text {
        font-size: 25px;
      }
      .li {
        font-size: 18px;
      }
      .right_flex {
        border: 3px solid #2525eb;
        padding: 20px;
      }
      .rightSide {
        margin-top: 0;
      }
    }
    @media screen and (max-width: 855px) {
      .li {
        font-size: 20px;
      }
    }
    @media screen and (max-width: 760px) {
      .D_flex {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .LeftSide {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        .container {
        }
      }
      .Sidebar {
        width: 100%;
      }
      .rightSide {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
      .text {
        font-size: 20px;
      }
      .li {
        font-size: 17px;
      }
    }
    @media screen and (max-width: 510px) {
      .text {
        font-size: 16px;
      }
      .li {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 385px) {
      .li {
        font-size: 11px !important;
      }
    }
  }
  .filter_sm {
    display: none;
    border: 1px solid black;
    padding: 5px 28px;
    border-radius: 7px;
    background-color: white;
  }
  @media screen and (max-width: 520px) {
    .filter_sm {
      display: block !important;
    }
    .left_access {
    }
  }
  .left_access {
    display: block;
  }
`;

export default ProductWrapper;
