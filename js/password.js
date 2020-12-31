
const remote = require('electron').remote
let w = remote.getCurrentWindow()
if(localStorage.getItem('password')){
    prompt({
    title:'登入',
    label:'請輸入密碼'
}).then((r)=>{
    if(r!=null){
        if(r!=localStorage.getItem('password')){
            w.close()
        }else{
            $('.passAll').toggleClass("d-none")
        }
    }else{
        w.close()
    }
})
}else{
    prompt({
        title:'設定',
        label:'請設定密碼'
    }).then((r)=>{
        if(r!=null){
            localStorage.setItem('password',String(r))
            $('.passAll').toggleClass("d-none")
        }else{
            w.close()
        }
    })
}

