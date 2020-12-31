const { clipboard } = require('electron')
const { dialog } = require('electron').remote


//store.delete(key)


var count
function copyPwd() {
    var cbox = $('input.cbx')
    good:
    for (let i = 0; i < cbox.length; i++) {
        
        if (cbox[i].checked) {
            var text = '賬號： '+store.get(String(cbox[i].getAttribute('id'))).account+' 密碼： '+store.get(String(cbox[i].getAttribute('id'))).password
            clipboard.writeText(text)
            const response = dialog.showMessageBox(null,{message:'已複製到剪貼簿',title:'提示'});
            console.log(response);

            count = 1
            break good
        }
        
    }
    if (count == 1) {
        init()
    }
}




var copybtn = $('button#copy')
copybtn.click(copyPwd)