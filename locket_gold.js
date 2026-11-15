const url = $request.url;
const body = $response.body;

let obj = JSON.parse(body);

obj["is_premium"] = true;
obj["gold_member"] = true;
obj["photobooth_unlock"] = true;
obj["ai_filter"] = true;

$done({body: JSON.stringify(obj)});