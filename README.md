<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>JUNE-XD WATSAPP BOT</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      background: #00ff44;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: Arial, sans-serif;
      overflow: hidden;
    }
    .front-text {
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 2px 2px 8px #0008;
      letter-spacing: 2px;
      z-index: 2;
      animation: fadeInDown 1.5s;
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-40px);}
      to { opacity: 1; transform: translateY(0);}
    }
    .photo-animated {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      border: 6px solid #fff;
      object-fit: cover;
      margin-top: 80px;
      box-shadow: 0 6px 24px #0005;
      animation: bounce 2s infinite alternate;
      z-index: 1;
    }
    @keyframes bounce {
      0% { transform: translateY(0);}
      100% { transform: translateY(-20px);}
    }
  </style>
</head>
<body>
  <div class="front-text">JUNE-XD WATSAPP BOT</div>
  <img src="your-photo.gif" alt="Animated Photo" class="photo-animated" />
</body>
</html>
