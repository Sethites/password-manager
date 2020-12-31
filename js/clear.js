function clearStore() {
    var n = Math.floor(Math.random()* 100) 
    prompt({
        label: '請輸入' + n
    }).then((r) => {
            if (r == n) {
                store.clear()
                init()
            }
        }

    )


}

var cbtn = $("button#clear")

cbtn.click(clearStore)