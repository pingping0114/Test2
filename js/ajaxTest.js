/**
 * Created by shelly on 2016/12/15.
 */

function AjaxObject(){}

function createAjaxObject(){
    var xmlHttp;
    if (window.ActiveXObject){
        xmlHttp = new ActiveXObject();
    }else if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }
    return xmlHttp;
}

AjaxObject.prototype = createAjaxObject();
AjaxObject.prototype.doGet = function(url){
    this.open("GET",url);
    this.send(null);
    this.onreadystatechange = function() {
        if ((this.readyState == 4) && (this.status == 200)) {
            alert('success');
        } else {
            alert('fail');
        }
    }

};


function doGet(url){
    var xmlHttp = createAjaxObject()
    url="http://www.baidu.com";
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function() {
        if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
            alert('success');
        } else {
            alert('fail');
        }
    }
}

