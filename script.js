function generate(){
    
    let issueContainer = document.getElementById("issueContainer");
    fetch("./issues.json")
    .then(res=>res.json()
    ).then(data=>{
        // console.log(data);
        for(let i=data.length-1;i>=0;i--){
            // console.log(data);
            let link = document.createElement("a");
            link.href = data[i].link;
            link.className = "containerLink";
            let title = document.createElement("h1");
            title.innerHTML = data[i].title;
            title.className = "postTitle";
            let image = document.createElement("img");
            image.src = data[i].image;
            image.className = "postImage";
            image.height = image.height * (data[i].scale/100);
            image.width = image.width * (data[i].scale/100);
            let body = document.createElement("p");
            body.innerHTML = data[i].body;
            body.className = "postBody";
            let container = document.createElement("div");
            container.className = "postContainer";
            
            if(image.width!==0){
                container.style.maxWidth = image.width+"px";
                link.style.backgroundColor = image.width+"px";
            }
            // console.log(image.width);
            container.appendChild(title);
            container.appendChild(image);
            container.appendChild(body);
            link.appendChild(container);
            issueContainer.appendChild(link);
        }
    })
}
window.addEventListener("load",(e)=>{
generate();
})