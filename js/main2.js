
let arts = document.querySelectorAll('article'); //노드리스트(유사배열)
let lis = document.querySelectorAll(".leftnav li"); //노드리스트(유사배열)

//스크롤 이벤트
document.addEventListener("scroll",function(){
    lis[0].addEventListener("click",this.fullscreenElement(){
        li.addEventListener("click", function(){
            else.preventDefault();
            window.scrollTo({top: index*5000, behavior:"smooth" });
        })
    })
    //이벤트 발생시마다 스크롤탑을 여기다가 넣어준다.
    let sct = this.documentElement.scrollTop;
    arts.forEach((ar,index)=>{
        let zoomNum = (index *-5000)+sct;
        console.log(zoomNum);
        ar.style.transform = `translateZ(${zoomNum}px)`;
        if(sct > 1000 + (4000*index));
            ar.classList.add('on');
            arts.forEach((ar.index2=>{
                if(index! = index2){
                    ar.classList.remove('on');
                }
            })
        }
    })
    //0번째 아티클은 sct값이 1000보다 커지면 on 0
    if(sct >= 1000){
        arts[0].classList.add('on');
        arts[1].classList.remove('on');
        arts[2].classList.remove('on');
        arts[3].classList.remove('on');
        arts[4].classList.remove('on');
    }
    if(sct >= 1000){
        arts[0].classList.add('on');
        arts[1].classList.remove('on');
        arts[2].classList.remove('on');
        arts[3].classList.remove('on');
        arts[4].classList.remove('on');

    }
    if(sct >= 1000){
        arts[0].classList.add('on');
        arts[1].classList.remove('on');
        arts[2].classList.remove('on');
        arts[3].classList.remove('on');
        arts[4].classList.remove('on');

    }
    if(sct >= 1000){
        arts[0].classList.add('on');
        arts[1].classList.remove('on');
        arts[2].classList.remove('on');
        arts[3].classList.remove('on');
        arts[4].classList.remove('on');

    }
    if(sct >= 1000){
        arts[0].classList.add('on');
        arts[1].classList.remove('on');
        arts[2].classList.remove('on');
        arts[3].classList.remove('on');
        arts[4].classList.remove('on');

    }
    //1번째 아티클은 sct값이 6000보다 커지면 on 1
    //2번째 아티클은 sct값이 11000보다 커피면 on 2
    //3번째 아티클은 sct값이 16000보다 커지면 on 3
    //4번째 아티클은 sct값이 21000보다 커지면 on 4
    //li를 클릭하면
    //0번째 li 0
    //1번째 li 5000
    //2번째 10000
    //3번째 15000
    //4번째 20000
    lis[0].addEventListener("click",this.fullscreenElement(){
        li.addEventListener("click", function(){
            else.preventDefault();
            window.scrollTo({top: index*5000, behavior:"smooth" });
        })
    })
