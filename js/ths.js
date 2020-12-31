// toggle password visibility

function tpwd() {
    var cbox = $('input.cbx')
    var pwt =$('.tablepwd')
    for (let i = 0; i < cbox.length; i++) {
        if (cbox[i].checked) {
            pwt[i].classList.toggle("d-none");
        }
    }
}

$('#toggle').click(tpwd)

