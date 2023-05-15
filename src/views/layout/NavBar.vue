<template>
  <div class="fixed-bottom">
    <div class="back-shadow"></div>
    <div class="container pb-2">
      <div class="card">
        <div class="card-body p-2 d-flex justify-content-between">
          <button class="btn btn-outline-primary rounded-pill">
            <!-- <svg style="vertical-align: bottom;" width='24px' height='24px' viewBox='0 0 24 24'><g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g transform='translate(-432.000000, 0.000000)'><g transform='translate(432.000000, 0.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' fill-rule='nonzero'></path><path d='M13.9091,18.2894 C14.2678,18.4533 14.6149,18.5876 14.9479,18.6928 C16.6458,19.2293 17.7643,18.9637 18.3641,18.3639 C18.964,17.7641 19.2295,16.6455 18.6931,14.9476 C18.5879,14.6146 18.4536,14.2675 18.2896,13.9088 C17.6997,14.687 17.0162,15.4692 16.2428,16.2426 C15.4694,17.016 14.6873,17.6995 13.9091,18.2894 Z M12.0002,17.1996 C12.9131,16.5786 13.8664,15.7906 14.8286,14.8284 C15.7908,13.8662 16.5788,12.9129 17.1998,12 C16.5788,11.087 15.7908,10.1337 14.8286,9.1715 C13.8664,8.20935 12.9131,7.42136 12.0002,6.80033 C11.0873,7.42137 10.1339,8.20938 9.17175,9.17157 C8.20958,10.1337 7.4216,11.0871 6.80056,12 C7.4216,12.9129 8.20958,13.8662 9.17175,14.8284 C10.1339,15.7905 11.0873,16.5786 12.0002,17.1996 Z M5.71074,13.9088 C6.30069,14.687 6.98411,15.4692 7.75753,16.2426 C8.53098,17.016 9.31315,17.6995 10.0914,18.2894 C9.73263,18.4534 9.3855,18.5877 9.05247,18.6929 C7.35455,19.2293 6.23604,18.9638 5.63621,18.364 C5.03639,17.7641 4.77084,16.6456 5.30727,14.9477 C5.41249,14.6147 5.54679,14.2676 5.71074,13.9088 Z M4.44449,12 C3.98846,12.8026 3.63901,13.5892 3.40019,14.3452 C2.75464,16.3885 2.8692,18.4254 4.222,19.7782 C5.5748,21.131 7.6117,21.2455 9.65499,20.6 C10.4109,20.3612 11.1976,20.0117 12.0002,19.5557 C12.8028,20.0117 13.5895,20.3611 14.3454,20.5999 C16.3887,21.2455 18.4255,21.1309 19.7783,19.7781 C21.1311,18.4253 21.2457,16.3884 20.6002,14.3451 C20.3613,13.5892 20.0119,12.8026 19.5559,12 C20.0119,11.1974 20.3613,10.4107 20.6002,9.65481 C21.2457,7.61152 21.1311,5.57462 19.7783,4.22182 C18.4255,2.86903 16.3887,2.75446 14.3454,3.40001 C13.5895,3.63883 12.8028,3.98826 12.0002,4.44426 C11.1976,3.98822 10.4109,3.63877 9.65499,3.39994 C7.6117,2.75439 5.5748,2.86896 4.222,4.22176 C2.8692,5.57455 2.75464,7.61145 3.40019,9.65474 C3.63901,10.4107 3.98846,11.1973 4.44449,12 Z M5.71074,10.0911 C6.30069,9.31292 6.98411,8.53078 7.75753,7.75736 C8.53098,6.98391 9.31315,6.30047 10.0914,5.7105 C9.73263,5.54655 9.3855,5.41224 9.05247,5.30703 C7.35455,4.77059 6.23604,5.03615 5.63621,5.63597 C5.03639,6.23579 4.77084,7.35431 5.30727,9.05222 C5.41249,9.38526 5.54679,9.73238 5.71074,10.0911 Z M13.9091,5.71052 C14.2678,5.54659 14.6149,5.4123 14.9479,5.30709 C16.6458,4.77066 17.7643,5.03621 18.3641,5.63604 C18.964,6.23586 19.2295,7.35438 18.6931,9.05229 C18.5879,9.3853 18.4536,9.73239 18.2896,10.0911 C17.6997,9.31289 17.0162,8.53072 16.2428,7.75729 C15.4694,6.98388 14.6873,6.30047 13.9091,5.71052 Z M13.5001,12.0001 C13.5001,12.8285 12.8285,13.5001 12.0001,13.5001 C11.1716,13.5001 10.5001,12.8285 10.5001,12.0001 C10.5001,11.1717 11.1716,10.5001 12.0001,10.5001 C12.8285,10.5001 13.5001,11.1717 13.5001,12.0001 Z' fill='currentColor'></path></g></g></g></svg> -->
            <svg
              style="vertical-align: bottom"
              width="22px"
              height="22px"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M224 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM414 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.7 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C-10.3 346.9 1 301.2 34 256C1 210.8-10.3 165.1 10.4 128C30.6 91.7 72.9 78.7 125.6 84.8C147.6 32.7 181.2 0 224 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM258.9 99.7C242.1 65.9 227.9 64 224 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM78.2 304.8C59.4 335 64 348.7 66.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM304 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
            <small> Inicio</small>
          </button>
          <button
            class="btn btn-white rounded-pill"
            data-bs-toggle="offcanvas"
            data-bs-target="#off-canvas-products"
            aria-controls="off-canvas-products"
          >
            <svg style="vertical-align: bottom" width="22px" height="22px" fill="currentColor" viewBox="0 0 448 512" > <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /> </svg>
            <small> Inicio</small>
          </button>
          <button
            class="btn btn-white rounded-pill"
            data-bs-toggle="offcanvas"
            data-bs-target="#off-canvas-stock"
            aria-controls="off-canvas-stock"
          >
            <svg style="vertical-align: bottom" width="22px" height="22px" fill="currentColor" viewBox="0 0 576 512" > <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> <path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z" /> </svg>
            <small> Stock</small>
          </button>
          <button
            class="btn btn-white rounded-pill"
            data-bs-toggle="offcanvas"
            data-bs-target="#off-canvas-recipes"
            aria-controls="off-canvas-recipes"
          >
            <!-- <svg style="vertical-align: bottom;" width='22px' height='22px' fill="currentColor" viewBox="0 0 576 512">! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg> -->
            <svg style="vertical-align: bottom" width="22px" height="22px" fill="currentColor" viewBox="0 0 512 512" >
              <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M241.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C73.1 78.4 57.2 94.9 47.4 115L10.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM192 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM128 336a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
            <small> Recetas</small>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="off-canvas-home"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">Opciones de Home</div>
  </div>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="off-canvas-products"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Productos</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">
      <button class="btn btn-primary me-2">Nuevo producto</button>
      <button class="btn btn-primary me-2">Buscar producto</button>
      <button class="btn btn-primary me-2">Ver todos</button>
    </div>
  </div>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="off-canvas-stock"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Stock</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">
      <button class="btn btn-primary me-2">Stockear</button>
      <button class="btn btn-primary me-2">Buscar producto</button>
      <button class="btn btn-primary me-2">Reportes</button>
    </div>
  </div>
  <div
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="off-canvas-recipes"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Recetas</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body small">
      <button class="btn btn-primary me-2">Nueva receta</button>
      <button class="btn btn-primary me-2">Buscar receta</button>
      <button class="btn btn-primary me-2">Ver todas</button>
    </div>
  </div>
</template>

<style>
.back-shadow {
    height: 120px;
    background: linear-gradient(#fff0,#fff);
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>