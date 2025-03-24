export function getUserID(){
    let userID = localStorage.getItem("userID");

    if(!userID){
        userID = "xxxx-xxxx-xxxx-xxxx".replace(/[x]/g, () =>
            (Math.random() * 16 | 0).toString(16)
        );
        localStorage.setItem("userID",userID);
        localStorage.setItem("visitCount", 0);
        
    }

    return userID;
}

//방문 횟수를 localstorage에서 가져온다.
export function getVisitCount() {
    let visitCount = localStorage.getItem("visitCount");
    return visitCount ? parseInt(visitCount, 10) : 0;
}

//방문할 때 마다 방문횟수 증가가
export function incrementVisitCount(){
    let visitCount = getVisitCount();

    visitCount++;
    localStorage.setItem("visitCount", visitCount);
}