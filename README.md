# JS 비동기처리

<aside>
💡 **자바스크립트는 동기식 언어이다.**
자바스크립트는 한 번에 하나의 작업을 수행한다.
→ 한 작업이 실행되는 동안 다른 작업은 멈춘 상태를 유지하고 자신의 차례를 기다린다.

</aside>

자바스크립트 엔진 이해

[setTimeout(foo, 0)에서 foo는 정말 0ms 후에 실행될까?](https://velog.io/@edie_ko/javascript-eventloop)

### 자바스크립트의 비동기 처리를 위해 아래의 방법들을 사용

# 1. Callback 함수

### 문제점

콜백 함수를 중첩해서 사용하게 되면 많은 코드 들여쓰기로 인해 코드 가독성이 떨어지고, 콜백 지옥에 빠지게 되기 때문에, 복잡한 프로젝트에서는 사용을 피한다.

# 2. Promise

데이터를 얻는데까지 지연 시간이 발생하는 경우에 사용한다.

**생성 방법**

```jsx
// new 키워드 사용.
const promise = new Promise(function(resolve, refect) {...});

// 함수의 리턴값으로 Promise 사용하기
function returnPromise() {
	return new Promise((resolve, reject) => {...});
```

서버에서 응답을 제대로 받으면 → resolve 함수 호출 → then()으로 응답 처리

서버의 응답이 없을 시에는 → reject 함수 호출 → catch()로 에러 처리

```jsx
// 예시 코드
function getData() {
	return new Promise(function(resolve, reject) {
		$.get('url 주소/products/1', function(response) {
			if (response)
				resolve(response);

			reject(new Error("Request is failed"));
		});
	});
}

getData().then(function(data) {
	console.log(data);
}).catch(function(err) {
	console.error(err);
});
```

### fetch 함수

<aside>
💡 fetch() 함수는 Promise 타입의 객체를 반환하다. 반환된 객체는 API 호출이 성공했을  경우에는 응답(reponse)을 resolve하고, 실패했을 경우에는 예외(error)를 reject한다.

</aside>

```jsx
// fetch() 사용법
fetch(url, options)
  .then((response) => console.log("response:", response))
	.catch((error) => console.log("error:", error));

// 함수 인자의 options부분에는 HTTP method, HTTP headers, HTTP body를 설정해줄 수 있다.

// 예시 코드
fetch("https://abcdefg.asdf.com/posts", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		title: "Test",
		body: "I am testing!",
		userId: 1,
	}),
}).then((response) => console.log(response));
```

### **문제점**

- **디버깅 문제**: then을 연쇄적으로 호출하게 되는 경우, 만약 아래와 같은 에러가 발생했을때 어떤 then()에서 문제가 발생한 건지 혼란스러울 수 있다.
    
    ```bash
    ReferenceError: user1 is not defined
        at fetch.then.then.then.then.then (<anonymous>:7:29)
    ```
    
- **예외 처리 문제**: Promise를 사용하면 try/catch 대신에 catch() 메서드를 이용하여 예외 처리를 해야한다. 만약 동기 코드와 비동기 코드가 섞여 있을 경우 예외 처리가 난해해진다.
- **들여쓰기 문제**: then()의 콜백 함수나 여러 개의 Promise 사용으로 인해 많은 들여쓰기를 하게 되어 코드 가독성이 떨어진다.

# 3. async/await

```jsx
// 예시 코드
async function fetchAuthorName(postId) {
	const postResponse = await fetch(
		`https://abcdefg.asdf.com/posts/${postId}`
	);
	const post = await postResponse.json();
	const userId = post.userId;
	const userResponse = await fetch(
		`https://abcdefg.asdf.com/users/${userId}`
	);
	const user = await userResponse.json();
	return user.name;
}

fetchAuthorName(1).then((name) => console.log("name:", name));
```

async 키워드가 붙은 함수 내에서만 await 키워드를 사용할 수 있다.

await를 사용하면 해당 결과값을 가져올 때까지 기다려준다.

코드의 가독성이 좋고, try/catch를 이용한 예외 처리도 가능하다.
