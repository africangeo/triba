document.write(`<style>
    .books-container-6526ac47bc9677004a194c8b {
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 600px;
    }
    
    @keyframes initAnimation-6526ac47bc9677004a194c8b {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-30deg);
      }
    }
    
    .books-container-6526ac47bc9677004a194c8b .books {
      width: 200px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateY(-30deg);
      transition: transform 1s ease;
      animation: 1s ease 0s 1 initAnimation-6526ac47bc9677004a194c8b;
    }
    
    .books-container-6526ac47bc9677004a194c8b .books:hover {
      transform: rotateY(0deg);
    }
    
    .books-container-6526ac47bc9677004a194c8b .books > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      transform: translateZ(25px);
      background-color: #01060f;
      border-radius: 0 2px 2px 0;
      box-shadow: 5px 5px 20px #aaaaaa;
      background-color: #01060f;
    }
    
    .books-container-6526ac47bc9677004a194c8b .books::before {
      position: absolute;
      content: ' ';
      left: 0;
      top: 3px;
      width: 48px;
      height: 194px;
      transform: translateX(172px) rotateY(90deg);
      background: linear-gradient(90deg, 
        #fff 0%,
        #f9f9f9 5%,
        #fff 10%,
        #f9f9f9 15%,
        #fff 20%,
        #f9f9f9 25%,
        #fff 30%,
        #f9f9f9 35%,
        #fff 40%,
        #f9f9f9 45%,
        #fff 50%,
        #f9f9f9 55%,
        #fff 60%,
        #f9f9f9 65%,
        #fff 70%,
        #f9f9f9 75%,
        #fff 80%,
        #f9f9f9 85%,
        #fff 90%,
        #f9f9f9 95%,
        #fff 100%
        );
    }
    
    .books-container-6526ac47bc9677004a194c8b .books::after {
      position: absolute;
      top: 0;
      left: 0;
      content: ' ';
      width: 200px;
      height: 200px;
      transform: translateZ(-25px);
      background-color: #01060f;
      border-radius: 0 2px 2px 0;
      box-shadow: -10px 0 50px 10px #aaaaaa;
    }
  </style>

    <div class="books-container-6526ac47bc9677004a194c8b">
      <div class="books">
        <img alt="Untitled books" src="assesol/other/Oldmagic.jpg" />
      </div>
    </div>
  `)