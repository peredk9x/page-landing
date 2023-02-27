/*  Json 
  - Là định dạng dữ liệu(chuỗi)
  - Javascript Object Notation
  - Number, object, array, boolean, null

*/
/*Examples*/
var user = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jerry",
  },
];
var api = [
  {
    id: 1,
    user_id: 1,
    content: "Are you sure you want to",
  },
  {
    id: 2,
    user_id: 2,
    content: "I trust you",
  },
];

function getApi() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(api);
    }, 1000);
  });
}

getApi().then(function (data) {
  console.log(data);
});
