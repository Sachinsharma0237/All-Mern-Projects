/* dom manipulation */
const $ = require("jquery");

$(document).ready(function(){

    $(".cell").on( "click", function(){
        
        let rowid = Number($(this).attr("rowid"));
        let colid = Number($(this).attr("colid"));
        let address = String.fromCharCode(65 + colid) + rowid + "";
        $("#address").val(address);

    });

    $("#address").on("change", function(){
        let value = $("#address").val();
        let res = value.split("");
        let rowid = res[0].charCodeAt(0) - 65;
        let colid = parseInt(res[1]);
    });

    






});
