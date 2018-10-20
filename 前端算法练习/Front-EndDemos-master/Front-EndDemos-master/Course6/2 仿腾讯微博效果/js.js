/**
 * Created by CUMTHYB on 2017/6/16.
 */

var GetElement = {
    ByID : function(ID){
        return document.getElementById(ID);
    },
    ByClassName : function(ClassName, ParentElement){
        return (ParentElement || document).getElementsByTagName(ClassName);
    },
    ByTagName : function(TagName, Obj){
        return (Obj || document).getElementsByTagName(TagName);
    }
}

var EventUtil = {
    addHandler : function(oElement, sEvent, fnHandler){
        oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : (oElement["_" + sEvent + fnHandler] = fnHandler, oElement[sEvent + fnHandler] = function(){oElement["_" + sEvent + fnHandler]()}, oElement.attachEvent("on" + sEvent, oElement[sEvent + fnHandler]))
    },
    removeHandler : function(oElement, sEvent, fnHandler){
        oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, oElement[sEvent + fnHandler])
    }
}

var comment = function(name, comment, date, imgsrc){
    this._userName = name;
    this._comment = comment;
    this._date = date;
    this._imgSrc = imgsrc;
    this.SetUserName = function(userName){
        this._userName = userName;
    };
    this.GetUserName = function(){
        return this._userName;
    };
    this.SetComment = function(comments){
        this._comment = comments;
    };
    this.GetComment = function(){
        return this._comment;
    };
    this.SetCommentDate = function(date){
        this._date = date;
    };
    this.GetCommentDate = function(){
        return this._date;
    };
    this.GetImgSrc = function(){
        return this._imgSrc;
    };
}

window.onload = function(){
    var userObj = GetElement.ByID("userName");
    var face = GetElement.ByID("face");
    var username, imgsrc, commentContent, date;
    var commentObj = GetElement.ByID("conBox");
    var senBtnObj = GetElement.ByID("sendBtn");
    var maxNum = GetElement.ByID("maxNum");
    var commentUl = GetElement.ByID("commentList").lastElementChild;
    var commentList = GetElement.ByTagName("li", commentUl);

    EventUtil.addHandler(face, "click", function(e){
        if(e.target && e.target.nodeName.toUpperCase() == "IMG"){
            imgsrc = e.target.src;
        }
    });

    EventUtil.addHandler(userObj, "blur", function(e){
        if(e.target && e.target.nodeName.toLowerCase() == "input"){
            username = e.target.value;
        }
    });
    EventUtil.addHandler(userObj, "keyup", Check);
    EventUtil.addHandler(commentObj, "keyup", Check);


    EventUtil.addHandler(commentObj, "blur", function(e){
        if(e.target && e.target.nodeName.toLowerCase() == "textarea"){
            commentContent = e.target.value;
        }
    });

    EventUtil.addHandler(senBtnObj, "click", CreateComment);

    function StructComment(){
        return new comment(username, commentContent, new Date(), imgsrc);
    }

    function CreateComment(){
        var newcomment = StructComment();
        var newElement = document.createElement("li");

        newElement.innerHTML = "<div class=\"userPic\"><img src=\"" + newcomment.GetImgSrc() + "\" alt=\"pic\"></div><div class=\"content\"><p class=\"userMesInfo\"><a  class=\"msgInfo\">" + newcomment.GetUserName() + "：</a><span >" + newcomment.GetComment() + "</span></p><p class=\"commentTime\">" + newcomment.GetCommentDate() + "</p></div>";
        commentList.length ? commentUl.insertBefore(newElement, commentList[0]) : commentUl.appendChild(newElement);
    }

    function Check(){
        var maxLength = 140;
        if(this.tagName.toLowerCase() == "input"){
            maxLength = 10
        }
        var str = this.value.replace(/\s/, '');
        if(str.length > maxLength){
            alert("长度超过" + maxLength);
            str = str.slice(0, maxLength);
        }
        if(maxLength==140){
            maxNum.innerText=140-str.length;
        }
        this.value = str;
    }


}