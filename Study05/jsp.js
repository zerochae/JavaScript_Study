    
    var request={}; // {}은 new Object()의 리터럴 표현
                    // []은 new Array()의 리터럴 표현   
    //request라는 빈객체 생성, 빈객체를 namespace로 이용
    //1개의 name에 대해 처리
    request.getParameter = function (p_name) {
        if(location.href.indexOf("?") == -1) {
            return NULL;
        } 
        var v_queryString = location.href.split("?")[1];
        var v_items = v_queryString.split("&");

        for (var i = 0; i < v_items.length; i++) {
            var v_name = v_items[i].split("=")[0];
            var v_value = v_items[i].split("=")[1];
            if (v_name == p_name) {
                 return decodeURIComponent(v_value);
            }
        }
    }
    //같은 name으로 여러개 처리
    request.getParameterValues = function (p_name) {
        if(location.href.indexOf("?") == -1) {
            return NULL;
        } 
        var v_queryString = location.href.split("?")[1];
        var v_items = v_queryString.split("&");
        var v_rslt =[];
        for (var i = 0; i < v_items.length; i++) {
            var v_name = v_items[i].split("=")[0];
            var v_value = v_items[i].split("=")[1];
            if (v_name == p_name) {
                 v_rslt.push(decodeURIComponent(v_value));
            }
        }
        return v_rslt;
    }

    var out={};
    out.print=function(p_msg){
        document.write(p_msg);
    }

    out.println=function(p_msg){
        //document.writeln(p_msg);
        out.print(p_msg);
        out.print("<br>");
    } 
