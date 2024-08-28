// 數據類型
// var：函數作用範圍，提升，允許重新賦值和重新聲明。
// let：塊作用範圍，不提升，允許重新賦值，但不能重新聲明。
// const：塊作用範圍，不提升，不允許重新賦值（但對物件的內容可變），必須在聲明時初始化。
var age = 18; // number
var high = 18.5; // float
var weight = 1e+10; // 科學記數
var hi = 'Hi! How are you today?'; // String
var getBike = false; //boolean
let result; // undefind
console.log(result);
let data = null; //null
var sym1 = Symbol('ID'); // Symbol (具有唯一性)
var sym2 = Symbol('ID');
console.log(sym1 === sym2); // false

// BigInt (ES11)
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);


// -----------------------------------------------------
// Object 物件語法

// 1.創建物件 
// 字面量語法
let item = {
    id: '11425',
    consumable: true,
    gold: '500',
    test: 'test'
};
// 構造函數
let item2 = new Object();
item2.id = '11500';
item2.consumable = false;
item2.gold = '340';
item2.test = 'test';

// 2.讀取物件屬性
// 點操作符
console.log(item.id);
// 方括號操作符
console.log(item2['gold']);
// 方括號操作符允許變量作為key
let item2Consumable = 'consumable'
console.log(item2[item2Consumable]);

// 3.更新屬性 
// 點操作符
item.id = '11450';
// 方括號操作符
item2['id'] = '11550';

// 4.添加屬性
// 點操作符
item.drop = true;
// 方括號操作符
item2['drop'] = false;

// 5.刪除屬性
delete item.test
delete item2.test

// 6.檢查屬性是否存在
// in操作符
console.log('name' in item);
console.log('id' in item);
// hasOwnProperty方法
console.log(item2.hasOwnProperty('name'));
console.log(item2.hasOwnProperty('id'));

// 7.遍歷物件屬性
// for循環
for (let key in item) {
    if (item.hasOwnProperty(key)) {
        console.log(key + ': ' + item[key]);
    } else {
        console.log("This Object haven't any keys");
    }
}
// Object.keys (數組方式獲取屬性名)
console.log(Object.keys(item));
// Object.value (數組方式獲取值)
console.log(Object.values(item2));
// Object.entries (數組方式獲得屬性名與值)
console.log(Object.entries(item2));

// 8.合併物件 (從最後一個屬性往後新增)
// 須注意:兩種方法的屬性存取方式不同
// Object.assign
let addItemInfo = {
    dropPersen: '0.24',
    block: false
};
Object.assign(item, addItemInfo)
console.log(Object.entries(item));
// spread operator 擴展運算符 (ES6)
item2 = {
    id: '11550',
    consumable: false,
    gold: '340',
    addItemInfo
};
console.log(Object.entries(item2));

// 9.對物件凍結 (防止對物件進行修改)
// Object.freeze
let itemID = Object.freeze({ id: '12450' });
itemID.id = '123';  // 無法修改
console.log(Object.entries(itemID)); // 12450
// Object.seal (防止添加或刪除屬性，但允許修改現有屬性)
let item2Seal = Object.seal({ id: '12450', consumable: true, gold: '440' });
item2Seal.id = '13000'; // 成功更改成13000
item2Seal.drop = true;  // 無法成功新增drop屬性
console.log(Object.entries(item2Seal));

// 10.克隆物件
// 淺拷貝（使用 Object.assign 或擴展運算符）只演示assign
let copyItem2Seal = Object.assign(Object.entries(item2Seal))
console.log(copyItem2Seal);
// 深拷貝（需要遞歸複製，或者使用 JSON 方法）
let deepCopy = JSON.parse(JSON.stringify(Object.entries(itemID)))
console.log(deepCopy);

// -----------------------------------------------------
// 進階方法 (特殊方法)

// 1.forEach
// 對數組中的每個元素執行指定的回調函數。forEach 不返回任何值。
// array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3];
numbers.forEach(num => console.log(num));

// 2.map
// 創建一個新數組，數組中的每個元素是通過調用提供的函數對原數組中的每個元素進行處理後得到的。
// var newArray = array.map(callback(currentValue [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

// 3.filter
// 創建一個新數組，數組中的元素是通過測試提供的函數對原數組中的每個元素進行測試後得到的。
// **通過測試元素的會被放到新數組**
// let newArray = array.filter(callback(element [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3, 4];
var numfilter = numbers.filter(num => num % 2 === 0);
console.log(numfilter); // 輸出 [2, 4]

// 4.reduce (reduceRight則是從右邊開始向左累加)
// 對數組中的每個元素執行指定的回調函數，最終將其累加成一個單一值（例如總和）。
// let result = array.reduce(callback(accumulator, currentValue [, index [, array]])[, initialValue]);
// ex:
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 5.some
// 測試數組中的至少一個元素是否通過了提供的函數。只要有一個元素通過測試，返回 true，否則返回 false
// let result = array.some(callback(element [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3, 4, 5];
var hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // 輸出 true

// 6.every
// 測試數組中的所有元素是否都通過了提供的函數。如果所有元素都通過測試，返回 true，否則返回 false
// **全部都要通過測試才會輸出true 否則false**
// ex:
var numbers = [2, 4, 6];
var allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // 輸出 true

// 7.find
// 返回數組中第一個通過測試的元素。如果沒有元素通過測試，返回 undefined。
// let result = array.find(callback(element [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3, 4];
var found = numbers.find(num => num > 2);
console.log(found); // 輸出 3

// 8.findIndex
// 返回數組中第一個通過測試的元素的索引。如果沒有元素通過測試，返回 -1。
// let index = array.findIndex(callback(element [, index [, array]])[, thisArg]);
// ex:
var numbers = [24, 36, 40, 45];
var foundIndex = numbers.findIndex(num => num % 5 === 0);
console.log("可以被5整除的數字在第(" + foundIndex + ")個索引");

// 9.sort 不知原理
// 對數組中的元素進行排序。sort 方法會改變原數組並返回排序後的數組。
// array.sort([compareFunction]);
// ex:
var numbers = [4, 2, 5, 1, 3];
var numberSort = numbers.sort((a, b) => a - b);
console.log(numberSort); // 輸出 [1,2,3,4,5]

// 10.reverse
// 顛倒數組中元素的順序。reverse 方法會改變原數組並返回顛倒後的數組。
// array.reverse();
// ex:
var hi = ['o', 'l', 'l', 'e', 'h'];
var hiReverse = hi.reverse();
console.log(hiReverse); // 輸出['h','e','l','l','o']

// 11.concat
// 合併兩個或多個數組，返回一個新數組。
// let newArray = array.concat(value1[, value2[, ...[, valueN]]]);
// ex:
var a = [1, 2, 3];
var b = [4, 5, 6];
var aConcatB = a.concat(b);
console.log(aConcatB); // 輸出 [1, 2, 3, 4, 5, 6]

// 12.slice
// 返回數組的一部分，選擇由開始和結束索引指定的元素。原數組不會被改變。
// 會輸出頭+中間部分的元素，end元素不輸出
// let newArray = array.slice([begin[, end]]);
// exL
var numbers = [17, 26, 35, 48, 59];
var sliced = numbers.slice(0, 1); // end為索引1，所以26不輸出
console.log(sliced); // 輸出 17

// 13.splice
// 對數組進行(增刪改)操作。可以刪除、添加或替換數組中的元素
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
// ex:
var numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 2, 'd', 'a', 'b'); // 開始索引,刪除記數，新增元素
console.log(numbers); // 輸出 [1,2,'d','a','b',5]

// 14.join
// 將數組中的所有元素轉換為一個字符串，並使用指定的分隔符連接。
// let string = array.join([separator]);
// ex:
var numbers = [1, 2, 3, 4, 5];
var joined = numbers.join('-');
console.log(joined); // 輸出 1-2-3-4-5

// 15.includes
// 測試數組中是否包含指定的元素。如果包含返回 true，否則返回 false。
// let result = array.includes(valueToFind[, fromIndex]);
// ex:
var numbers = [17, 34, 45, 69];
console.log(numbers.includes(7)); // 輸出false
console.log(numbers.includes(69)); // 輸出true

// 16.flat 不知原理
// 將多維數組展平為一維數組。可以指定展平的層數。
// let newArray = array.flat([depth]);
// ex:
var nested = [1, [2, [3, [4]]]];
var flatted = nested.flat(2)
console.log(flatted); // 輸出 [1, 2, 3, [4]]

// 17.flatmap
// 首先對數組中的每個元素應用函數，然後將結果展平為一維數組。
// let newArray = array.flatMap(callback(currentValue [, index [, array]])[, thisArg]);
// ex:
var numbers = [1, 2, 3];
var mapped = numbers.flatMap(num => num * 2);
console.log(mapped); // 輸出 [1, 2, 2, 4, 3, 6]

// -----------------------------------------------------
// ---------------------API操作-------------------------
// -----------------------------------------------------
// Fetch 階段一
// 用途是向伺服器送出request，請求成功會回傳一個promise的Object裡面會有抓取的資料。
// let promise = fetch(url, [options])
// ex:
const link = "https://randomuser.me/api/"
// let promise = fetch(link, [options]);
// options是可選的参數，例如method、header
// 如果只有url，沒有[options]，就會預設這個請求的HTTP請求方法是GET。
fetch(link)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(`Error:${error}`);
    })
// 我們可以從status和ok查看HTTP狀態。
// ok是一個布林值，如果status是200-299，它就是true。

// 階段二
// response.json()：把資料轉成JSON格式
// response.text()：把資料轉成text格式(變成純字串)
// response.blob()：把資料轉成Blob物件
// response.formData()：把資料轉成FormData物件
// response.arrayBuffer()：把資料轉成二進制數組
fetch(link)
    .then(response => response.json())  // 把資料轉成JSON格式
    .then(json => { // 會直接接受response.json()回傳的js對象
        console.log(json);
    })
    .catch((error) => {
        console.log(`Error:${error}`);
    })


// -----------------------------------------------------
// ------------------操作HTML元素屬性-------------------
// -----------------------------------------------------
// 1.getAttribute(attributeName)
// 獲取指定元素的指定屬性
// ex:
let value = element.getAtttribute("body");

// 2.setAttribute(attributeName, value)
// 設定指定元素的屬性
// ex:
element.setAttribute("id", "newId");

// 3.element.attributeName
// 直接通過屬性名訪問元素的某個屬性。常用於標準屬性的如:id, className, vlaue
// ex:
let id = element.id;
element.className = "newClass";

// 4.element.propertyName
// 訪問或設置HTML元素的DOM屬性(通常與HTML屬性一致，但不完全相同，如:checked，disabled)
// ex:
let checked = checkboxElement.checked;
checkboxElement.disabled = true;

// 5.dataset
// 訪問自定義的data-*屬性，返回一個包含所有data-*屬性的對象
// ex:
let dataValue = element.dataset.somekey;
element.dataset.somekey = "newValue";

// 6.classList
// 處理元素的class屬性，以便添加、刪除、切換或檢查類名
// ex:
element.classlist.add("newClass");
element.classlist.remove("oldClass");
let hasClass = element.classlist.contains("someClass");

// 7.style
// 訪問或設定元素的內聯樣式
// ex:
element.style.color = "red";
let bgColor = element.style.backgroundColor; // 會獲取到背景顏色

// 8.textContent 和 innerText
// textContent獲取或設定元素的文本內容(包括隱藏的文本)，innerText則指獲取或設定
// ex:
let text = element.textContent; //獲取文本內容
element.innerText = "New Text"; //設定新文本內容

// 9.innerHTML 和 outerHTML
// innerHTML用於獲取或設定元素的HTML內容，outerHTML用於獲取或設置元素自身及其內容的HTML
// ex:
let htmlContent = element.innerHTML;
element.outerHTML = "<div>New Element</div>";

// 10.value
// 獲取或設定表單元素的位置，適用於<input>、<textarea>、<select>，等元素
// ex:
let inputValue = inputElement.value;
inputElement.value = "newValue";


// -----------------------------------------------------
// -------------firebase realtime database--------------
// -----------------------------------------------------

// 初始化 initialize
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update, get, remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCwGdR-3aFaKU6OY_qZDbbyyX9E5vkFOOg",
    authDomain: "github-crud-ed61b.firebaseapp.com",
    projectId: "github-crud-ed61b",
    storageBucket: "github-crud-ed61b.appspot.com",
    messagingSenderId: "1094516833746",
    appId: "1:1094516833746:web:2fd069720847b274ef9c0b",
    databaseURL: ""
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const usersRef = ref(database, 'users' + username); // 資料庫路徑

// create 新增資料進資料庫
try {
    const getEmail = document.querySelector("#email").value;
    const getUsername = document.querySelector("#getUsername").value;
    const getPassword = document.querySelector("#getPassword").value;
    const getUuid = document.querySelector("#uuid").value;

    set(usersRef), {
        // 範例
        email: getEmail,
        username: getUsername,
        password: getPassword,
        uuid: getUuid
    }
        .then(function () {
            alert("Register success! 註冊成功!");
        })
        .catch(function (error) {
            alert("Error:" + error)
        })

} catch {
    console.log(error);
}

// read 獲取資料庫資料
// 監聽資料是否有變動後讀取資料庫
const getEmail = document.querySelector("#email").value;
const getUsername = document.querySelector("#getUsername").value;
const getPassword = document.querySelector("#getPassword").value;
const refCount = ref(database, "users/" + username);
const userRef = ref(database, "users/" + username);
onValue(refCount, (snapshot) => { // snapshot 資料庫快照
    const data = snapshot.val();
    console.log(data.username);
    console.log(data.password);
    console.log(data.email);
})
// 獲取一次資料庫資料，而不是持續監聽
get(userRef).then((snapshot) => {
    const data = snapshot.val();
    console.log(data.username);
    console.log(data.password);
    console.log(data.email);
})

// update 更新資料庫資料
getUsername = document.querySelector("#uesrname").value;
getPassword = document.querySelector("#password").value;
getEmail = document.querySelector("#email").value;

update(userRef, {
    username: getUsername,
    password: getPassword,
    email: getEmail
})

// delete 刪除資料庫內的資料
remove(userRef + password); //刪除密碼
remove(userRef + email); //刪除信箱
remove(userRef + username); //刪除用戶名

// -----------------------------------------------------
// --------------firebase authentication----------------
// -----------------------------------------------------

// 初始化
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const authApp = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 創建憑證帳戶 createUserWithEmailAndPassword
const authCreateSubmit = document.querySelector("#auth-create-submit");

function createAuthUsers() {
    authCreateSubmit.addEventListener("click", (event) => {
        try {
            const email = document.querySelector("#auth-get-email")
            const password = document.querySelector("#auth-get-password")
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential;
                    alert("創建帳戶中!");
                })
                .catch((error) => {
                    alert("發生未知錯誤");
                    console.log(error.code + error.message);
                })
        }
        catch {
        }
    })
}
// 登陸憑證帳戶 signInWithEmailAndPassword
const authLoginSubmit = document.querySelector("#auth-login-submit")
function loginAuthUsers() {
    authLoginSubmit.addEventListener((event) => {
        try {
            const email = document.querySelector("#auth-get-email")
            const password = document.querySelector("#auth-get-password")
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential;
                    alert("登陸帳號中");
                    window.location.href = "memberPage.html";
                })
                .catch((error) => {
                    alert("發生未知錯誤");
                    console.log(error.code + error.message);

                })
        }
        catch {
        }
    })
}
