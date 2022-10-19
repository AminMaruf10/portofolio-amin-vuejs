<template>
  <div class="project">
    <center><h1>Project</h1></center>
    <br>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="https://drive.google.com/file/d/13QQ-ntgCrkUgb7vngqoYfNZKAlF8dw_M/view?usp=sharing">
          <img src="../views/calculator.jpeg" alt="Calculator" width="600" height="600">
        </a>
        <div class="desc">Project Calculator</div>
      </div>
    </div>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="https://drive.google.com/file/d/1nR9mMBjdlLFKbtoxPMH34BteknEJZ8o9/view?usp=sharing">
          <img src="../views/crud.jpeg" alt="Calculator" width="600" height="600">
        </a>
        <div class="desc">Project CRUD Inventaris</div>
      </div>
    </div>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="https://drive.google.com/file/d/14OHuskjvW0gGmC2PkZsvhWeACuRHe04P/view?usp=sharing">
          <img src="../views/hotel.jpeg" alt="Calculator" width="600" height="600">
        </a>
        <div class="desc">Project Sistem Informasi Reservasi Berbasis WEB</div>
      </div>
    </div>
  </div>
</template>

<style>

div.gallery {
  border: 1px solid #ccc;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 10px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 30%;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

</style>
