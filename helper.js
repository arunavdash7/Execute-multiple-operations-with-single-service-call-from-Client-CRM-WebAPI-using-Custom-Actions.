// Get the Client URL
var clientUrl = Xrm.Page.context.getClientUrl();
var CONST_API_VER = "/api/data/v8.2/";
 
 
//Create new Tasks
function CreateTasks() {
 debugger;
// Get new Sample data.
var data = SampleData();
 
var customActionName = "new_ExecuteMultipleOperation";
 
// Prepare Service URL.
var serviceUrl = clientUrl + CONST_API_VER + customActionName;
 
// Prepare Request object which accepts JSON data and returns JSON information.
var req = new XMLHttpRequest();
req.open("POST", serviceUrl, false);
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.send(JSON.stringify(data));
 
// Check the request status and show the error message if any.
if (req.status == 204) {
alert("Created tasks !!")
alert(data)
} else {
var error = JSON.parse(req.response).error;
alert(error.message);
}
}
 
 
// Create Sample data for 10 tasks, which associate with "a" account.
function SampleData()
{
var data = {};
var collection = [];
for (var i = 0; i < 10; i++) {
var ent = {};
ent["@odata.type"] = "Microsoft.Dynamics.CRM.task";
ent["subject"] = "test " + i;
ent["regardingobjectid_account@odata.bind"] = "/accounts(CDA20220-0A88-E711-8122-C4346BDC0E01)";
collection.push(ent);
}
data.Entities = collection;
 
return data;
}
