const Store = require('electron-store');
const store = new Store();
const prompt = require('electron-prompt');

/* #region  add form */
function showAndHide()
{
    $('.add-form').toggleClass("d-none");
}
/* #endregion */