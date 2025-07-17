!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio</title>

  <!-- Font Awesome CDN for icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-..."
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />

  <!-- Your CSS file -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar">
    <a href="#" class="logo">Portfolio</a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <div class="bar-animation">
    <div class="bar" style="--i:6;"></div>
    <div class="bar" style="--i:5;"></div>
    <div class="bar" style="--i:4;"></div>
    <div class="bar" style="--i:3;"></div>
    <div class="bar" style="--i:2;"></div>
    <div class="bar" style="--i:1;"></div>
  </div>

  <section class="home">
    <div class="home-info">
      <h1>Sejal Dhiraj Sonar</h1>
      <h2>I am a Frontend Developer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maxime fuga vero ex error cupiditate provident maiores similique repellat,
        exercitationem laboriosam magni tenetur velit quisquam,
        rerum, dolores architecto molestiae! Repellendus, voluptas!
      </p>
      <div class="btn-sci">
        <a href="#" class="btn">Download CV</a>
        <div class="sci">
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div class="home-img">
      <div class="img-box">
        <div class="img-item">
          <!-- Optional styling or animation background here -->
        </div>
        <img src="WhatsApp Ima<ge 2025-04-08 at 11.38.17_dc7f4a29.jpg" alt="Sejal Dhiraj Sonar" />
      </div>
    </div>
  </section>
  <script src="script.js"></script>
</body>
</html>
