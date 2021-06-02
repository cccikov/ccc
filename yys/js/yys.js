$(function() {
    var data = {};

    if (theSameDay()) { //同一天
        console.log("同一天");
        data = ccc.getStorage("yys") != undefined ? ccc.getStorage("yys") : ccc.strToJson($("#result").val());
        $("#result").val(syntaxHighlight(data));
    } else {//不是同一天
        console.log("不是同一天");
        data =  ccc.strToJson($("#result").val());
        ccc.setStorage("yys", data);
        ccc.setStorage("time", (new Date()).getTime());
    }

    console.log(data);

    // 载入数据
    for (var i in data) {
        var id = i,
            len = data[i].number.length,
            number = data[i].number; //御魂具体数据
        for (var j = 0; j < len; j++) {
            var sum = number[j].sum;
            var tosum = number[j].tosum;
            var topInput = $("#" + id).find("li").eq(j).find(">input");
            topInput.val(sum);
            var len2 = number[j].tosum.length;
            for (var k = 0; k < len2; k++) {
                var input = $("#" + id).find("li").eq(j).find("label input").eq(k);
                input.val(number[j].tosum[k]);
            }
        }
    }

    /*input输入的时候*/
    $("input").on("input", function() {
        var that = $(this);
        var val = that.val();
        val = Number(val);
        that.val(val);
        var wrap = that.parents(".mitama"); //整个御魂对象
        var li = that.parents("li");
        var position = li.index();
        var levelPosition = that.index() - 1;
        var id = wrap[0].id; //御魂的拼音，作为id
        var name = wrap.find("h5").html();
        if (!data[id]) {
            data[id] = new mitama(name, id);
        }

        var numObj = data[id].number;
        var type = that.parents("label").attr("data-name");
        var typePosition = that.parents(".type").find("input").index(that); //.type里面的第几个input
        var input = li.find(">input");
        numObj[position].tosum[typePosition] = val;
        var sum = arrSum(numObj[position].tosum);
        numObj[position].sum = sum;
        input.val(sum);
        numObj[position][type][levelPosition] = val;

        ccc.setStorage("yys", data);
        $('#result').val(syntaxHighlight(data));

    }).on("focus", function() {
        this.select();
    });


});




/*json格式化*/
// function syntaxHighlight(json) {
//     if (typeof json != 'string') {
//         json = JSON.stringify(json, undefined, 4);//其实就这个字符串已经格式化了
//     }
//     json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
//     return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
//         var cls = 'number';
//         if (/^"/.test(match)) {
//             if (/:$/.test(match)) {
//                 cls = 'key';
//             } else {
//                 cls = 'string';
//             }
//         } else if (/true|false/.test(match)) {
//             cls = 'boolean';
//         } else if (/null/.test(match)) {
//             cls = 'null';
//         }
//         return '<span class="' + cls + '">' + match + '</span>';
//     });
// }

// 数组计算总数
function arrSum(arr) {
    var len = arr.length;
    sum = 0;
    for (var i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum;
}

function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 4); //其实就这个字符串已经格式化了
        return json
    }
}

/*判断是否同一天*/
function theSameDay() {
    var oldTime = Number(ccc.getStorage("time")) || 0;
    var newTime = (new Date()).getTime();
    var oldDay = (new Date(oldTime)).getDate();
    var newDay = (new Date(newTime)).getDate();
    return oldDay == newDay;
}

/*御魂构造函数*/
function mitama(name, id) {
    this.name = name;
    this.id = id;
    this.number = [];
    this.number[0] = {
        "sum": 0,
        "tosum": [0, 0, 0],
        "attack": [0, 0, 0],
    };
    this.number[1] = {
        "sum": 0,
        "tosum": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "attack": [0, 0, 0],
        "health": [0, 0, 0],
        "defense": [0, 0, 0],
        "speed": [0, 0, 0]
    };
    this.number[2] = {
        "sum": 0,
        "tosum": [0, 0, 0],
        "defense": [0, 0, 0],
    };
    this.number[3] = {
        "sum": 0,
        "tosum": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "attack": [0, 0, 0],
        "health": [0, 0, 0],
        "defense": [0, 0, 0],
        "effect": [0, 0, 0],
        "resisted": [0, 0, 0]
    };
    this.number[4] = {
        "sum": 0,
        "tosum": [0, 0, 0],
        "health": [0, 0, 0],
    };
    this.number[5] = {
        "sum": 0,
        "tosum": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "attack": [0, 0, 0],
        "health": [0, 0, 0],
        "defense": [0, 0, 0],
        "critical": [0, 0, 0],
        "critical-damage": [0, 0, 0]
    };
}
