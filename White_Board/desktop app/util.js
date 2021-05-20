function createSticky(){
        
        let sticky = document.createElement("div");
        sticky.classList.add("sticky");

        let stickyHeader = document.createElement("div");
        stickyHeader.classList.add("sticky-header");

        let close = document.createElement("div");
        close.classList.add("close");
        close.textContent = "x";

        let confirmClose = document.createElement("div");
        confirmClose.classList.add("confirm-close");
        confirmClose.classList.add("hide");
        confirmClose.textContent = "Are you sure ?"

        let yes = document.createElement("button");
        yes.classList.add("yes");
        yes.textContent = "Yes";

        let no = document.createElement("button");
        no.classList.add("no")
        no.textContent = "No";

        let minimize = document.createElement("div");
        minimize.classList.add("minimize");
        minimize.textContent = "-";

        let stickyContent = document.createElement("div");
        stickyContent.classList.add("sticky-content");

//--------------------------------All Events--------------------------------------------------------------------------

        yes.addEventListener("click", function(){
            sticky.remove();
        });

        no.addEventListener("click", function(){
            confirmClose.classList.add("hide");
        });

        close.addEventListener("click", function(){
            if(confirmClose.classList.contains("hide")){
                confirmClose.classList.remove("hide");
            }
        });
        
        minimize.addEventListener("click", function(){
            stickyContent.style.display =  stickyContent.style.display == "none" ? "inline-block" : "none";
        });
    
//--------------------------Hold and Move Event-----------------------------------------------------------------------
        
        let initialX;
        let initialY;
        let isStickyHold = false;
        stickyHeader.addEventListener("mousedown", function(e){
            initialX = e.clientX;
            initialY = e.clientY;
            isStickyHold = true;
        });
        stickyHeader.addEventListener("mousemove", function(e){
            if(isStickyHold){
                let finalX = e.clientX;
                let finalY = e.clientY;
                let dx = finalX - initialX;
                let dy = finalY - initialY;
                let { top : stickyTop, left : stickyLeft } = sticky.getBoundingClientRect();
                sticky.style.top = stickyTop + dy + "px";
                sticky.style.left = stickyLeft + dx + "px";
                initialX = finalX;
                initialY = finalY;
            }
        });
        stickyHeader.addEventListener("mouseup", function(e){
            isStickyHold = false;
        });
//--------------------------Hold and Move Event-------------------------------------------------
       
        stickyHeader.append(minimize);
        stickyHeader.append(close);
        //Bubbling Event
        sticky.append(confirmClose);      
        confirmClose.append(yes);
        confirmClose.append(no);
        sticky.append(stickyHeader);
        sticky.append(stickyContent);
        document.body.append(sticky);

        return stickyContent;
}