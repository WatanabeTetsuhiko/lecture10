// ここにアプリのロジックを書く

var displayAddResult = function(result){
  var output = document.querySelector("#add-result");
  if(result.type != "success"){
    output.textContent = "エラーがおきました!";
  }else{
    output.textContent = result.data;
  }
};

var add = function(){
  var inputA = document.querySelector("#add-a");
  var inputB = document.querySelector("#add-b");
  var data = {
    a: inputA.value,
    b: inputB.value
  };
  jQuery.get("/add", data, displayAddResult, "json");
};

var sendAddRequestButton = document.querySelector("#send-add-request");
sendAddRequestButton.addEventListener("click", add);
