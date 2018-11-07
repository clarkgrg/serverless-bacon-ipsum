const render = (content) => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Serverless Bacon Ipsum</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      .container {
        background-color: #D8F1FF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 500px;
      }
      .title {
        font-size: 24px;
        font-family: Helvetica, Arial, sans-serif; 
        color: #333333;
      }
      .content {
        font-size: 18px;
        font-family: Helvetica, Arial, sans-serif; 
        color: #333333;
        margin-top: 20px;
        width: 500px;
      }
      .credit {
        font-size: 12px;
        font-family: Helvetica, Arial, sans-serif; 
        color: #333333;
        margin-top: 200px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="title">Bacon Ispum Generator</div>
      <div class="content">${content}</div>
      <div class="credit">Meaty messages by <a href="https://baconipsum.com/json-api/">Bacon Ipsum Generator</a></div>
    </div>
  </body>
  </html>`;
};

module.exports = {
  render
};