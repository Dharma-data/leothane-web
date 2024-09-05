<nav class="navbar navbar-expand-lg fixed-top" id="demo1Navbar">
  <div class="container">
    <a class="navbar-brand" href="<?= htmlspecialchars(".") ?>"><img src="image/logo/leothane2.png" alt="" data-aos="zoom-in" data-aos-duration="1000"></a>
    <a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div class="container1" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-aos="fade-down" data-aos-duration="1000">
            Hosting
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="<?= htmlspecialchars("hosting-gratis.php"); ?>">Hosting Gratis</a></li>
            <li><a class="dropdown-item" href="<?= htmlspecialchars("hosting-murah.php"); ?>">Hosting Murah</a></li>
            <li><a class="dropdown-item" href="<?= htmlspecialchars("harga-hosting.php"); ?>">Harga Hosting</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Domain
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="<?= htmlspecialchars("domain.php"); ?>">Domain Murah</a></li>
            <li><a class="dropdown-item" href="<?= htmlspecialchars("harga-domain.php"); ?>">Harga Domain</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link title" type="button" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">Layanan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?= htmlspecialchars("demo.php"); ?>" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">Demo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link title1" type="button" data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">Kontak</a>
        </li>
      </ul>
    </div>
  </div>
</nav>