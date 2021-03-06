import styled from "styled-components";

const ProductCardWrapper = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  Button {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    &:hover {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 45.3237px;
    line-height: 100%;
  }
  .badge {
    background-color: #d3e38c;
  }
  .firstContainer {
    background-color: #eff9fe;
    .colorText {
      /* min-width: 200px !important; */
    }
    .smallimg {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      img {
        width: 40px;
        height: 40px;
      }
      .active {
        border: 1px solid blue;
      }
    }
    .bigimg {
      width: 230px !important;
    }
    .colorBoxes {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .colorBox {
        border: 2px solid black;
        border-radius: 10px;
      }
      .colorBox {
        padding: 8px;
      }
      .black {
        background-color: black;
        height: 40px;
        width: 40px;
      }
      .white {
        background-color: white;
        height: 40px;
        width: 40px;
      }
      .green {
        background-color: #6eb290;
        height: 40px;
        width: 40px;
      }
      .gray {
        background-color: #eeeded;
        height: 40px;
        width: 40px;
      }
    }
    .memorie {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .whiteBox {
        border: 2px solid black;
        border-radius: 10px;
        background-color: white;
        text-align: center;
        height: 33px;
        width: 65px;
        font-weight: bold;
      }
    }
    .prices {
      h4 {
        text-decoration: line-through;
        color: gray;
      }
      .rentPrice {
        text-decoration: underline;
        color: gray;
      }
    }
    Button {
      background-color: #ff5314;
      color: white;
      margin-bottom: 20px;
    }
    .link-korzinka {
      text-decoration: underline;
      color: gray;
    }
    .characteristic {
      border: 2px solid blue;
      width: 100%;
      .link-characteristic {
        color: blue !important;
      }
      .buttonBottom {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: 3px solid black;
        border-radius: 10px;
        background-color: #91d9f8;
        margin: 0 auto -15px;
        max-width: 65px;
        height: 45px;
        font-size: 30px;
      }
    }
    /* ???????????????? ???????????? */
    ul li:nth-child(odd) {
      background: #ceeefc;
      list-style-type: disc;
      list-style-position: inside;
      padding: 5px 0;
      padding-left: 10px;
      font-weight: bold;
    }

    /* ???????????? ???????????? */
    ul li:nth-child(even) {
      background: transparent;
      list-style-type: disc;
      list-style-position: inside;
      padding: 5px 0;
      padding-left: 10px;
      font-weight: bold;
    }
  }

  .product-swiper {
    border: 6px solid #2525eb;
    padding: 0;
    position: relative;
    .product-swiper-card {
      border-left: 5px solid #2525eb66;
      margin-left: -2.5px !important;
      margin: 0;
      .title {
        line-height: 16px !important;
        font-size: 12px;
        margin-bottom: 10px !important;
        padding: 0 !important;
        margin: 0 !important;
        text-transform: uppercase !important;
      }
      .small {
        .oldPrice {
          font-size: 10px;
          text-decoration: line-through;
          color: gray;
          padding: 0;
          margin: 0;
          .sum {
            font-size: 8px;
            text-decoration: none !important;
            -webkit-text-decoration: transparent !important;
            text-decoration: transparent !important;
          }
        }
        .badgePrice {
          font-size: 8px;
          background-color: #d3e38c;
          padding: 2px 5px;
          color: black !important;
        }
      }
      .prices {
        span {
          font-size: 25px;
        }
        .rentPrice {
          font-size: 10px;
          text-decoration: underline;
          color: gray;
        }
      }
      img {
        max-width: 172px;
        margin: auto !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
    }
    .dot_orange {
      width: 6px;
      height: 6px;
      background-color: #ff5314;
    }
    .dot1 {
      position: absolute;
      left: -6px;
      top: -6px;
      background-color: #ff5314;
    }
    .dot2 {
      position: absolute;
      right: -6px;
      top: -6px;
      background-color: #ff5314;
    }
    .dot3 {
      position: absolute;
      left: -6px;
      bottom: -6px;
      background-color: #ff5314;
    }
    .dot4 {
      position: absolute;
      right: -6px;
      bottom: -6px;
      background-color: #ff5314;
    }
  }

  .newProducts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #ff5314;
    color: white;
    margin: 20px auto;
    border-radius: 10px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  @media screen and (max-width: 1920px) and (min-width: 1440px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .badge {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
          height: 30px;
          -webkit-box-align: end !important;
          -ms-flex-align: end !important;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        h1 {
          font-size: 35px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
        .badge {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          max-width: 207px;
          height: 25px;
          font-weight: bold;
          font-size: 12px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 20px;
        }
      }
    }
    .firstContainer {
      background-color: #eff9fe;
      .firstContainerMacbook {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .images {
          width: 420px;
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
        }
        .colorMemories {
          width: 300px;
          display: block;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            .BoxPad {
              padding: 8px;
            }
          }
        }

        .priceButton {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 20px;
              line-height: 115.5%;
              -webkit-text-decoration-line: line-through;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 13px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              /* max-width: 80% !important; */
              .bigPrice {
                font-size: 50px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: 90% !important;
            .checkout {
              width: 100% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka {
              font-size: 12px;
            }
          }
        }
      }

      @media screen and (min-width: 800px) {
        .characteristic-container {
          width: 30% !important;
        }
      }

      .characteristic-container {
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .swiper-pagination {
        display: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 900px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .badge {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
          height: 30px;
          -webkit-box-align: end !important;
          -ms-flex-align: end !important;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        h1 {
          font-size: 35px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
        .badge {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          max-width: 207px;
          height: 25px;
          font-weight: bold;
          font-size: 12px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0 20px;
        }
      }
    }
    .firstContainer {
      background-color: transparent;
      .firstContainerMacbook {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .images {
          width: 480px;
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
        }
        .colorMemories {
          width: 300px;
          display: block;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .BoxPad {
            padding: 8px;
          }
        }

        .priceButton {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 20px;
              line-height: 115.5%;
              -webkit-text-decoration-line: line-through;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 13px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              /* max-width: 80% !important; */
              .bigPrice {
                font-size: 50px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            width: 90% !important;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            .checkout {
              width: 100% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka {
              font-size: 12px;
            }
          }
        }
      }

      .characteristic-container {
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .swiper-pagination {
        display: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 1200px) {
    .firstContainer {
      .characteristic-container {
        width: 30% !important;
      }
    }
  }

  @media screen and (max-width: 900px) and (min-width: 600px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: end;
      font-size: 14px;
      .p-text {
        font-weight: bold;
        font-size: 15px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      .badge {
        display: none;
      }
      .contant-title-1 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .badge {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
          height: 30px;
          -webkit-box-align: end !important;
          -ms-flex-align: end !important;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        h1 {
          font-size: 25px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }
        .badge {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          max-width: 207px;
          font-weight: bold;
          font-size: 17.1429px;
          line-height: 115.5%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }
      }
    }
    .firstContainer {
      background-color: transparent;
      .firstContainerIpad {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        .images {
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
          .bigimg {
            -webkit-box-flex: 1 !important;
            -ms-flex: 1 !important;
            flex: 1 !important;
            margin: 40px !important;
          }
        }
        .colorMemories {
          display: block;
          .BoxPad {
            padding: 4px;
          }
          .row {
            display: block;
          }
          .colorBoxes,
          .memorie {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
        }

        .priceButton {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          .prices {
            display: block;
            .oldPrice {
              font-size: 15px;
              line-height: 115.5%;
              -webkit-text-decoration-line: line-through;
              text-decoration-line: line-through;
              text-transform: uppercase;
            }
            .badge {
              font-size: 10px;
              line-height: 115.5%;
              letter-spacing: 0.025em;
              text-transform: uppercase;
              max-height: 23px;
            }
            .price {
              .bigPrice {
                font-size: 30px;
                line-height: 92%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
              }
            }
            .rentPrice {
              display: block !important;
              font-size: 14px;
            }
          }
          .button {
            /* max-width: 45% !important; */
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            .checkout {
              width: 70% !important;
              font-size: 15px;
              max-height: 50px;
              border-radius: 5px;
            }
            .link-korzinka {
              font-size: 12px;
            }
          }
        }
      }

      .characteristic-container {
        .characteristic {
          max-width: 100%;
        }
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .swiper-pagination {
        display: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .colorMemories {
        .colorBoxes {
          padding: 4px !important;
        }
        .memorie {
          padding: 4px !important;
        }
      }
    }
  }

  @media screen and (max-width: 600px) and (min-width: 0px) {
    padding: 0 !important;
    .contant-title {
      display: block;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: end;
      font-size: 14px;
      .p-text {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 13.8982px;
        line-height: 115.5%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
      }
      h1 {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
      }
      .badge {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
        margin: auto 0 !important;
        /* width: 103px; */
      }
      .contant-title-1 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .badge {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
          height: 30px;
          -webkit-box-align: end !important;
          -ms-flex-align: end !important;
          align-items: flex-end !important;
        }
      }
      .contant-title-2 {
        h1 {
          font-size: 25px;
          line-height: 115%;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }
        .badge {
          display: none;
        }
      }
    }
    .firstContainer {
      background-color: transparent;
      .images {
        max-width: 335px;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
      }
      .colorMemories {
        .colorBoxes,
        .memorie {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
        }
        .BoxPad {
          padding: 4px;
        }
        .colorText {
          font-size: 14px !important;
          width: 100% !important;
        }
      }

      .priceButton {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: auto !important;

        .prices {
          display: block;
          .oldPrice {
            font-size: 11px;
            line-height: 115.5%;
            -webkit-text-decoration-line: line-through;
            text-decoration-line: line-through;
            text-transform: uppercase;
          }
          .badge {
            font-size: 9px;
            line-height: 115.5%;
            letter-spacing: 0.025em;
            text-transform: uppercase;
          }
          .price {
            max-width: 40% !important;
            .bigPrice {
              font-size: 39px;
              line-height: 92%;
              letter-spacing: -0.03em;
              text-transform: uppercase;
            }
          }
        }
        .button {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-top: 10px !important;
          margin-bottom: 0 !important;
          .checkout {
            font-size: 12px;
            max-height: 50px;
            border-radius: 5px;
            margin-bottom: 0 !important;
          }
          .link-korzinka {
            font-size: 12px;
          }
        }
      }
      .characteristic-container {
        .link-korzinka {
          display: none;
        }
      }
    }
    .secondContainer {
      h1 {
        font-weight: bold;
        font-size: 38px;
        line-height: 100%;
      }
      .button_next,
      .button_prev,
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
      .swiper-pagination {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .swiper-pagination-bullet {
        background-color: gray !important;
      }
    }
  }
`;

export default ProductCardWrapper;
