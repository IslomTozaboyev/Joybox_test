import styled from "styled-components";

const HomeWrapper = styled.div`
  /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.3.6,
* Autoprefixer: v10.3.1
* Browsers: last 4 version
*/

  font-family: "roboto", sans-serif;
  overflow: auto !important;
  .blue {
    background-color: #2525eb;
  }
  .orange {
    background-color: #ff4001;
  }

  .container-1 {
    color: white;
    .top_title1 {
      font-size: 14px !important;
    }
    .threePhone {
      width: 250px;
      -o-object-fit: contain !important;
      object-fit: contain !important;
    }
    .text {
      padding: 10px 30px !important;
      .big_title {
        font-weight: bold;
        font-size: 37px;
        line-height: 100%;
        text-transform: uppercase;
      }
    }
    .mini-content {
      border: none;
      padding: 8px;
      position: relative;
      z-index: 0;
      .title {
        font-weight: normal;
        font-size: 13px;
        line-height: 100%;
      }
      .subtitle {
        font-weight: bold;
        font-size: 12px;
        line-height: 100%;
      }
      .oldPrice {
        font-weight: bold;
        font-size: 11px;
        line-height: 100%;
        -webkit-text-decoration-line: line-through;
        text-decoration-line: line-through;
        padding: 0;
        margin: 0;
        margin-bottom: 3px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: end;
      }
      .priceDec {
        background-color: #ff5314;
        padding: 7px 4px;
        /* margin-right: -8px !important; */
        .price {
          font-size: 10px;
          line-height: 100%;
          padding: 0;
          margin: 0;
          -webkit-box-align: baseline !important;
          -ms-flex-align: baseline !important;
          align-items: baseline !important;
          .priceNum {
            font-size: 16px;
            line-height: 100%;
            letter-spacing: 0.045em;
            text-transform: lowercase;
            padding: 0;
            margin: 0;
          }
        }
      }
      .bottom-text {
        font-weight: normal !important;
        font-size: 8px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        padding: 0;
        margin: 0 8px 8px 0 !important;
      }
      .miniContentLogo {
        margin-top: 7px;
      }
    }
    .flex1 {
      .text {
        padding: 10px 20px;
        .subtitle {
          font-weight: bold;
          font-size: 11px;
          line-height: 100%;
        }
        .title {
          font-weight: bold;
          font-size: 29.974px;
          line-height: 100%;
          text-transform: uppercase;
        }
      }
      .textPrice {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
    }
    .flex2 {
      border: 2px solid #fff;
      .threePhone_title {
        font-size: 36px;
        line-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        .threePhone {
          margin: auto;
        }
      }
    }
    .flex3 {
      .home_wonder_title {
        font-weight: bold;
        font-size: 52px;
        line-height: 100%;
      }
    }
    .flex8 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      Button {
        background-color: transparent;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        border-radius: 0;
        color: white;
        text-transform: capitalize;
        padding: 0 35px;
        font-weight: lighter;
      }
    }
    .flex9 {
      padding: 10px 30px;
      p {
        font-size: 22px;
        line-height: 100%;
      }
    }
    @media screen and (max-width: 600px) and (min-width: 320px) {
      .flex1 {
        display: none;
      }
      .flex2 {
        width: 62.1% !important;
        /* height: 250px !important; */
        img {
          margin: 30px 0 30px 0 !important;
          width: 70% !important;
          /* object-fit: cover !important; */
          height: 70%;
        }
      }
      .flex3 {
        .home_wonder_title {
          font-weight: bold;
          font-size: 15px !important;
          line-height: 100% !important;
        }
      }
      .flex8 {
        /* padding: 10px 0 10px 10px !important; */
        .mini-content-flex8 {
          display: block !important;
          position: relative;
        }
        .buttons {
          display: none;
        }
        .big_title {
          display: block !important;
          font-weight: bold !important;
          font-size: 22px !important;
          line-height: 111% !important;
        }
        .prices {
          position: absolute;
          right: 0;
          top: 40%;
          .oldPrice {
            margin: 0 !important;
          }
          .priceDec {
            /* justify-content: flex-end; */
            background-color: #ff5314;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 5px 5px 5px 0;
            margin: 5px auto !important;
            .priceNum {
              margin: 0;
              padding: 0;
            }
          }
          .rentPrice {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            font-size: 12px !important;
          }
        }
        .mini-content {
          display: -webkit-box !important;
          display: -ms-flexbox !important;
          display: flex !important;
          -ms-flex-wrap: wrap !important;
          flex-wrap: wrap !important;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          .title-2 {
            display: none;
          }
          .titles-1 {
            display: -ms-grid !important;
            display: grid !important;
            width: 65%;
            .samsung_title {
              font-size: 9px;
            }
            .small_title {
              display: block !important;
              -webkit-box-align: end !important;
              -ms-flex-align: end !important;
              align-items: end !important;
              margin-top: 50px !important;
              font-size: 5px;
              line-height: 100%;
            }
            .text-end {
              text-align: left !important;
            }
          }
          .bottom-text {
            display: none;
          }
        }
      }
      .flex9 {
        padding: 10px !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
        p {
          font-weight: normal !important;
          font-size: 10px !important;
          line-height: 100% !important;
        }
      }
      .flex10 {
      }
    }
  }

  //productDay
  .productDay {
    background-image: url("BgProductDay.png");
    background-size: cover;
    width: 100% !important;
    /* padding: 30px; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    h2 {
      font-size: 29px;
    }
    .productBoard {
      width: 100%;
      background-color: white;
      padding: 30px 40px !important;
      .oldPrice {
        font-size: 20px;
        text-decoration: line-through;
        font-weight: bold;
      }
      .salePrice {
        font-size: 12px;
        font-weight: bold;
        background-color: #d3e38c;
        padding: 2px 5px;
        color: black !important;
      }
      .bgPrice {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap !important;
        flex-wrap: nowrap !important;
        background-color: #ff5314;
        color: white;
        padding: 5px 15px;
        margin-top: 10px;
        .small {
          font-size: 12px !important;
          padding: 0;
          margin: 0;
        }
        .price__ {
          font-size: 18px;
          margin: 0;
          padding: 0;
        }
      }
    }

    @media screen and (max-width: 920px) {
      .productBoard {
        padding: 20px !important;
      }
    }
    @media screen and (max-width: 850px) {
      .productBoard {
        padding: 20px !important;
        .right_title {
          font-size: 17px !important;
        }
        .price__ {
          font-size: 13px !important;
        }
      }
    }
    @media screen and (max-width: 720px) {
      .priceContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .productDay {
        padding: 0 !important;
      }
      .right_green_price,
      .oldPrice {
        font-size: 10px !important;
      }
      .price__ {
        font-size: 10px !important;
      }
      .productDayWasher {
        width: 180px !important;
      }
    }

    @media screen and (max-width: 690px) {
      .priceContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .productDay {
        padding: 0 !important;
      }
      .right_green_price,
      .oldPrice {
        font-size: 9px !important;
      }
      .productDayWasher {
        width: 165px !important;
      }
      .right_title {
        font-size: 4px;
      }
      .productBoard {
        .price__ {
          font-size: 10px !important;
        }
        .small {
          font-size: 1px !important;
        }
      }
    }

    @media screen and (max-width: 500px) {
      .priceContainer {
        display: block;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .bgPrice {
          width: 100%;
        }
      }
      .productDay {
        padding: 0 !important;
      }
    }
    .yellowCont {
      background-color: #fff9b0;
      display: inline-block;
      padding: 7px 15px;
      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  //Container-2
  .container-2 {
    background: url("/bgContainer2.jpeg"), #2525eb;
    background-size: 100% 100%;
    color: white;
    padding: 30px 30px;
    margin-bottom: 30px;
    .container2_photo {
      width: 100% !important;
    }
    .cards {
      margin-bottom: 30px;
      .card {
        border: 2px solid #ff8253;
        margin: auto;
        -webkit-box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
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
          /* max-height: 206px; */
          max-width: 172px;
          margin: auto !important;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .bag {
          background-color: #ff5314;
        }
      }
    }
  }

  //ChooseClients
  .choose {
    margin-bottom: 30px;
    .choose-card {
      border: 10px solid #ff8253;
      margin: auto;
      position: relative;
      .skidka {
        position: absolute;
        top: 0;
        left: 0;
      }
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
        max-width: 162px;
        margin: auto !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .bag {
        background-color: #ff5314;
      }
      .dot_blue {
        width: 10px;
        height: 10px;
        background-color: #2525eb;
      }
      .dot1 {
        position: absolute;
        top: -10px;
        left: -10px;
      }
      .dot2 {
        position: absolute;
        top: -10px;
        right: -10px;
      }
      .dot3 {
        position: absolute;
        bottom: -10px;
        left: -10px;
      }
      .dot4 {
        position: absolute;
        bottom: -10px;
        right: -10px;
      }
    }
  }

  //Container-mi
  .container-mi {
    background-color: #a8c9c8;
    height: 90px;
    position: relative !important;

    .miicon {
      margin: 25px 12px;
    }
    .img {
      position: absolute !important;
      right: 0px !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      img {
        max-width: 100% !important;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }

  //New-Products
  .new-products {
    padding: 0 30px;
    margin-bottom: 30px;
    .new-product-cards {
      border: 5px solid #2525eb;
      padding: 0 !important;
      .new-product-card {
        border: 2.5px solid #2525eb66;
        /* max-width: 230px; */
        margin: 0;
        border-top: 0;
        border-bottom: 0;
        position: relative;
        .title {
          line-height: 16px;
          font-size: 14px;
          margin-bottom: 10px !important;
          text-transform: uppercase !important;
        }
        .small {
          .oldPrice {
            font-size: 10px;
            text-decoration: line-through;
            color: gray;
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
            font-size: 22px;
          }
          .rentPrice {
            font-size: 10px;
            text-decoration: underline;
            color: gray;
          }
          .small_price {
            font-size: 16px !important;
          }
        }
        img {
          max-height: 206px;
          max-width: 172px;
        }
        .dot_orange {
          width: 5px;
          height: 5px;
          background-color: #ff5314;
        }
        .dot1 {
          position: absolute;
          left: -5px;
          top: -5px;
        }
        .dot2 {
          position: absolute;
          right: -5px;
          top: -5px;
        }
        .dot3 {
          position: absolute;
          left: -5px;
          bottom: -5px;
        }
        .dot4 {
          position: absolute;
          right: -5px;
          bottom: -5px;
        }
      }
    }
  }
  .button {
    button {
      padding: 10px 35px;
      background-color: #ff5314;
      color: white;
      font-weight: bold;
      border-radius: 15px;
    }
  }
  @media screen and (max-width: 750px) {
    .discount {
      position: absolute !important;
      /* top: 13.5px !important;
      left: 121px !important; */
      top: 0px !important;
      left: 0px !important;
    }
    .acer {
      position: absolute !important;
      top: 55px !important;
      left: 47% !important;
    }

    .new-products {
      .new-product-card {
        .oldPrice,
        .sum {
          font-size: 10px !important;
          line-height: 115%;
        }
        .badgePrice {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center !important;
          -ms-flex-align: center !important;
          align-items: center !important;
          p {
            font-size: 10px;
            line-height: 115%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .discount {
      position: absolute !important;
      top: 13.5px !important;
      left: 16.1% !important;
    }
  }
  @media screen and (max-width: 570px) {
    .discount {
      position: absolute !important;
      top: 13.5px !important;
      left: 3.7% !important;
    }
  }

  //Laptops
  .laptops {
    padding: 0 16px;
    margin-bottom: 30px;
    height: auto;
    .acer {
      position: absolute;
      top: 55px;
      left: 37%;
    }
    .swiper_content .button_next {
      right: -0.5% !important;
    }
    .swiper-button-next {
      right: -0.5%;
    }

    .swiper_content .button_prev {
      left: -0.7% !important;
    }
    .swiper-button-prev {
      left: -0.7%;
    }

    .laptop-card {
      border: 2px solid #2525eb;
      margin: auto;
      position: relative;
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
        max-height: 206px;
        max-width: 172px;
      }
      .bag {
        background-color: #ff5314;
      }
      .discount {
        position: absolute;
        top: 0px !important;
        left: 0px !important;
      }
    }
  }

  @media screen and (max-width: 1800px) {
    .big_title {
      font-weight: bold !important;
      font-size: 29px !important;
      line-height: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    .new-products .title {
      font-size: 13px !important;
    }
    .new_photos {
      width: 150px !important;
    }
    .oldPrice,
    .salePrice .badgePrice {
      font-size: 14px !important;
    }

    .right_title {
      font-size: 24px !important;
    }
    .price {
      font-size: 12px !important;
    }
    .flex9 {
      p {
        font-size: 19px !important;
      }
    }
  }
  @media screen and (max-width: 1105px) {
    .five {
      display: none !important;
    }
    .flex9 {
      p {
        font-size: 13px !important;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .new-products .title {
      font-size: 12px !important;
    }
    .new_photos {
      width: 130px !important;
    }
    .oldPrice,
    .salePrice,
    .badgePrice,
    .sum {
      font-size: 12px !important;
    }
    .small_price {
      font-size: 12px;
    }
    .rentPrice {
      font-size: 11px;
    }
    .bag {
      padding: 15px;
    }
    .left_title {
      font-size: 12px;
    }
    .left_clock {
      font-size: 25px;
    }
    .left_subtitle {
      font-size: 14px;
    }
    .yellowCont p {
      font-size: 14px;
    }
    .yellowCont h2 {
      font-size: 25px;
    }
    .right_title {
      font-size: 20px !important;
    }
    .price {
      font-size: 9px !important;
    }
  }
  @media screen and (max-width: 1200px) {
    .threePhone {
      /* width: 180px !important; */
      height: 80%;
      margin-top: 25px;
    }
    .threePhone_title {
      font-size: 32px !important;
    }
    .flex3 .home_wonder_title {
      font-size: 40px !important;
    }
    .btn_links {
      font-size: 14px !important;
      padding: 0 22px !important;
    }
    .productDayText .left_clock {
      font-size: 10px !important;
    }
  }
  @media screen and (max-width: 1070px) {
    .fiveNew {
      display: none !important;
    }
  }

  @media screen and (min-width: 1025px) {
    .mini-content {
      border: 5px solid #fff !important;
      .dot_orange {
        width: 5px;
        height: 5px;
        background-color: #ff5314;
      }
      .dot1 {
        position: absolute;
        left: -5px;
        top: -5px;
      }
      .dot2 {
        position: absolute;
        right: -5px;
        top: -5px;
      }
      .dot3 {
        position: absolute;
        left: -5px;
        bottom: -5px;
      }
      .dot4 {
        position: absolute;
        right: -5px;
        bottom: -5px;
      }
    }
  }

  @media screen and (max-width: 1025px) {
    .container-1 {
      .big_title {
        font-weight: bold;
        font-size: 27px !important;
        line-height: 100%;
        text-transform: uppercase;
      }
      .text {
        padding: 10px 10px !important;
        .top_title1 {
          display: none !important;
          font-weight: bold;
          font-size: 29px !important;
          line-height: 100% !important;
        }
      }
      .textPlayS {
        display: none !important;
      }
      .small_title {
        padding: 10px;
      }
      .samsung_title {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        padding: 10px;
      }
      .subtitle,
      .top_title {
        display: none !important;
      }
      .textPrice {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-pack: end !important;
        -ms-flex-pack: end !important;
        justify-content: flex-end !important;
      }
      .miniContentLogo {
        display: none;
      }
      .rentPrice {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        font-weight: normal;
        font-size: 17px;
        line-height: 100%;
      }
      .bottom-text {
        display: none !important;
      }
      .priceNum {
        font-weight: bold;
        font-size: 29px;
        line-height: 100%;
        letter-spacing: 0.045em;
        text-transform: lowercase;
        -webkit-box-align: end !important;
        -ms-flex-align: end !important;
        align-items: flex-end !important;
      }
    }
    .threePhone {
      margin: auto !important;
    }

    .big_title {
      font-size: 17px !important;
    }
    .small_title {
      font-size: 5px !important;
      display: block !important;
    }
    .oldPrice {
      /* text-align: right !important; */
      margin-top: 10px !important;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: end;
    }
    .price {
      display: -webkit-box !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -webkit-box-pack: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .btn_links {
      font-size: 11px !important;
      padding: 0 15px !important;
    }
  }

  @media screen and (max-width: 1000px) {
    .threePhone {
      width: 150px !important;
      height: 60%;
      margin-top: 50px;
    }
    .flex2 .threePhone_title {
      font-size: 26px !important;
    }
    .flex3 .home_wonder_title {
      font-size: 30px !important;
    }
  }

  @media screen and (max-width: 830px) {
    .threePhone {
      height: 65%;
      margin-top: 60px;
    }
    .flex2 .threePhone_title {
      font-size: 22px !important;
    }
    .btn_links {
      font-size: 14px !important;
      padding: 0 12px !important;
    }
    .title-section {
      font-size: 20px !important;
    }
  }
  @media screen and (max-width: 600px) {
    .threePhone {
      width: 120px !important;
      height: 50%;
    }
    .flex2 .threePhone_title {
      font-size: 12px !important;
    }
  }
  @media screen and (max-width: 950px) {
    .four {
      display: none !important;
    }
    .new-products {
      .new-product-card {
        .oldPrice,
        .sum {
          font-size: 7px !important;
          line-height: 115%;
        }
        .badgePrice {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center !important;
          -ms-flex-align: center !important;
          align-items: center !important;
          p {
            font-size: 5px;
            line-height: 115%;
          }
        }
        .prices {
          font-size: 13px;
          line-height: 92%;
          margin-top: 5px;
        }
      }
    }
  }
  @media screen and (max-width: 780px) {
    .fourNew {
      display: none !important;
    }
  }
  @media screen and (max-width: 750px) {
    .three {
      display: none !important;
    }
    .fourNew {
      display: none !important;
    }
    .lg {
      display: none !important;
    }
    .home_photo {
      width: 100px !important;
    }
    .apple {
      width: 80px !important;
    }
    .productDayWasher {
      width: 200px !important;
    }
  }
  @media screen and (max-width: 500px) {
    .two {
      display: none !important;
    }

    .new-product-cards {
      img {
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .title-section {
      font-size: 40px !important;
    }
  }
  @media screen and (max-width: 800px) {
    .title-section {
      font-size: 37px !important;
    }
    .container-1 {
      .flex1 {
        .rentPrice {
          font-weight: normal;
          font-size: 13px !important;
          line-height: 100%;
          margin: 5px !important;
        }
      }
      .threePhone_title {
        font-weight: bold;
        font-size: 23px !important;
        line-height: 100%;
        .threePhone {
          width: auto !important;
          height: auto !important;
        }
      }
    }
  }
  @media screen and (max-width: 650px) {
    .title-section {
      font-size: 31px !important;
    }
    .threeNew {
      display: none !important;
    }
  }
  @media screen and (max-width: 450px) {
    .twoNew {
      display: none !important;
    }
    .new-products {
      .new-product-card {
        .oldPrice,
        .sum {
          font-size: 12px !important;
          line-height: 115%;
        }
        .badgePrice {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center !important;
          -ms-flex-align: center !important;
          align-items: center !important;
          p {
            font-size: 10px;
            line-height: 115%;
          }
        }
        .prices {
          font-size: 30px;
          line-height: 92%;
          margin-top: 5px;
        }
      }
    }
  }
  .title-section {
    font-size: 45px;
    font-weight: bold;
  }
  .brands {
    .button_bottom {
      padding: 10px 40px;
      background-color: #ff5314;
      color: white;
      font-weight: bold;
      border-radius: 15px;
      width: auto;
      border: none;
    }
  }
  .home_photo {
    width: 150px;
  }
  .apple {
    width: 100px;
  }
  .bag {
    background-color: #ff5314;
    padding: 20px;
    margin: auto;
    border-radius: 50%;
    position: relative;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;

export default HomeWrapper;
