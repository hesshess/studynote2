//"data-include" 속성을 갖는 모든 요소에 대한 탐색
Array.from(document.querySelectorAll('*[data-include]')).map(async (v, i) => {
  //ex) data-include="inc/header.html"
  const include = v.dataset.include;
  let html = null;

  try {
    //inc/header.html 소스코드 가져옴
    const response = await axios.get(include);
    console.log(response);
    html = response.data;
  } catch (e) {
    console.error(e);
  }

  if (html != null) {
    //v안에 넣는것이 아니라 v자체를 교체함
    v.outerHTML = html;
  }
});
