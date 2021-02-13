# Korean_Dictionary_Api_Bot
메신저봇R | 국립국어원의 API를 가져옵니다.

어디가문제인지 잘 모르것다 배열로 불러오는게 아니라 html로 불러오는것 같아서 definition을 못지우겠음

20210212
성공! 사실 어제 성공했는데 귀찮아서 오늘 쓰게됨

[핵심 포인트]
#15번째 줄에 있는
//var I_main = JSON.parse(Utils.xmlToJson(String(Js.connect(url+msg.substr(4)).get())))["channel"];

Utils.xmlToJson
-> xml형식의 문자열을 Json형식의 문자열로 변환해줍니다.
구현: 다른 파일에 되어있음
