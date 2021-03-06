
const Js = org.jsoup.Jsoup;
const allsee = "\u200d".repeat(500);
const n = "\n";
const nn = "\n".repeat(2);
const Key = ""; // 국립국어원 API
var Final = [];

var url = "https://stdict.korean.go.kr/api/search.do?certkey_no=2045&key="+Key+"&type_search=search&target=8&num=100&q=";


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
try {
  if (msg.startsWith (".사전 ")) {
     var I_main = JSON.parse(Utils.xmlToJson(String(Js.connect(url+msg.substr(4)).get())))["channel"];
    /*
    replier.reply(JSON.stringify(I_main,null,4));
    replier.reply(I_main["total"]);
    */
    if (I_main["total"] == 1) {
      
      Final.push(
        I_main["item"]["word"]+" 「"+I_main["item"]["pos"] +"」 ("+ I_main["item"]["sense"]["type"] +")"
        +n +"정의: "+I_main["item"]["sense"]["definition"]
        +n +"국립국어원 바로가기 => " + I_main["item"]["sense"]["link"] +n
      );
    } else {
      for (i=0; i<I_main["total"]; i++) {
        Final.push(
          I_main["item"][i]["word"]+String(i+1)+" 「"+I_main["item"][i]["pos"] +"」 ("+ I_main["item"][i]["sense"]["type"] +")"
          +n +"정의: "+I_main["item"][i]["sense"]["definition"]
          +n +I_main["item"][i]["sense"]["link"] +n
        );
      }
    }
    
    replier.reply(
       "<\""+msg.substr(4)+"\" 검색결과>" +allsee +n
      +n+"요청 단어: " + msg.substr(4)
      +n+"단어 뜻 개수: " + I_main["total"]
      +nn+Final.join(n)
      +nn+"위 결과는 국립국어원의 정보를 바탕으로 출력됩니다."
      +n+"국립국어원 바로가기: "+ I_main["link"]
   );
      
    Final = [];
  }
} catch(e) {
  replier.reply(e);
  Final = [];
  }
}
