// 点击显示新增表单
var abtn = $('#add')
abtn.click(showAndHide)
//点击确定新增密码
var achb = $('#addCheck')
achb.click(addPassword)
//点击取消新增密码
var acnb = $('#addCancel')
acnb.click(cancelPassword)
//點擊修改密碼
var cabtn = $('#change')
cabtn.click(changePassword)
var checkCount = {}
var keyid = {}
function changePassword() {
    var cbox = $('input.cbx')
    for (let i = 0; i < cbox.length; i++) {
        if (cbox[i].checked) {
            $('input#company').val(store.get(String(cbox[i].getAttribute('id'))).company)
            $('input#account').val(store.get(String(cbox[i].getAttribute('id'))).account)
            $('input#password').val(store.get(String(cbox[i].getAttribute('id'))).password)
            keyid.i = String(cbox[i].getAttribute('id'))
            checkCount.i = 1
            init()
            break
        }
    }
    if (checkCount.i==1) {
        showAndHide()
    }
    
}

function addPassword() {
    showAndHide()
    if (checkCount.i == 1) {
        var pwf = new Object()
        pwf.company = $('input#company').val();
        pwf.account = $('input#account').val();
        pwf.password = $('input#password').val();
        $('input#company').val('')
        $('input#account').val('')
        $('input#password').val('')
        console.log(keyid.i);
        store.set(keyid.i,pwf)
    } else {
        var key = String(setid())
        var pwf = new Object()
        pwf.company = $('input#company').val();
        pwf.account = $('input#account').val();
        pwf.password = $('input#password').val();
        $('input#company').val('')
        $('input#account').val('')
        $('input#password').val('')
        store.set(key, pwf)
    }
    init()
}

function cancelPassword() {
    showAndHide()
    $('input#company').val('')
    $('input#account').val('')
    $('input#password').val('')
}
//自動賦予id
function setid() {
    var id
    for (let i = 0; i < store.size +2; i++) {
        if (store.has(String(i)) == false) {
            console.log(i);
            id = i
            return id
        }
    }
}