let body = JSON.parse($response.body);

body["data"]["isfree"] = 1;

$done({ body: JSON.stringify(body) });