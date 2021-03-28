// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'] + " ➠ " + obj['isp'];
var ip = obj['query'];
var description = '运营商:'+obj['isp'] + '\n'+'地区:' +obj['regionName']+ '\n' + 'IP:'+ obj['query'] + '\n' + "数据中心:" + obj['org'];
$done({title, subtitle, ip, description});
