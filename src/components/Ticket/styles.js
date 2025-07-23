import { css } from '@emotion/core';

export const styWrapper = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Work+Sans:wght@300;400;600&display=swap');

  .container {
    margin: 30px auto;
    overflow: hidden;
    box-shadow: 0 0 12px rgba(202, 202, 204, 0.5);
    background-color: #fffafc;
    border-radius: 12px;
    padding: 0 24px;
  }

  .details {
    color: #555;
    padding: 24px 0;
    border-top: 1px dashed #f7a6c1;
    font-family: 'Work Sans', sans-serif;
    text-align: center;
  }

  .tinfo {
    font-size: 11px;
    font-weight: 400;
    color: #f14e95;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px 0 6px;
  }

  .tdata {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
    color: #333;
  }

  .tdata.additional {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }

  .name {
    font-size: 1.4em;
    font-weight: 600;
    color: #e91e63;
  }

  #qrcode {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }

  .badge {
    font-size: 12px;
    border-radius: 8px;
    padding: 4px 10px;
  }

  .badge-success {
    background-color: #a5d6a7;
    color: #1b5e20;
  }

  .btn {
    margin-right: 4px;
    margin-top: 16px;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    transition: 0.3s;
    padding: 10px 24px;
    border: none;
    cursor: pointer;
  }

  .primary {
    background: #f14e95;
    color: #fff;
  }

  .btn.attend {
    background: #ff80ab;
    color: white;
  }

  .btn.decline {
    background: #ccc;
    color: #333;
  }

  ul {
    text-align: left;
    margin: 12px auto;
    display: inline-block;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  textarea {
    font-family: 'Work Sans', sans-serif;
  }
`;

export const styTicket = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 18px);
  padding: 0 20px;

  .homepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .title {
    font-family: 'UVN Chinh Luan', cursive;
    font-weight: 600;
    letter-spacing: 4px;
    font-size: 45px;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .sub-title-ticket {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.7rem;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .input-ticket {
    width: 85vw;
    min-width: auto;

    input {
      font-family: 'Work Sans', Courier, monospace;
      font-size: 18px;
      width: 100%;
      text-align: center;
      border-radius: 12px;
      padding: 10px 30px 10px 10px;
      background: transparent;
      border: 0.5px solid rgba(0, 0, 0, 0.3);
    }

    input[type='text']:disabled {
      background: #dddddd;
    }
  }
`;
