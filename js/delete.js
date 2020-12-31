//store.delete(key)


var count

function deletePwd() {
    
    var cbox = $('input.cbx')
    for (let i = 0; i < cbox.length; i++) {
        if (cbox[i].checked) {
            store.delete(String(cbox[i].getAttribute('id')))
        }
        count = 1
    }
    if (count == 1) {
        init()
    }
}




var dbtn = $('button#delete')
dbtn.click(deletePwd)