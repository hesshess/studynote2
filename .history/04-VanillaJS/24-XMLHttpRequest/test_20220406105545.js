/*
 * @filename    : kakao-book-search.js
 * @author      : 왕혜수 (hess90wang@gmail.com)
 * @description : 네이버 회원가입창 구현
 */

/*KAKAO REST KEY*/
const KAKAO_REST_KEY = '2e2670130617e31f34fcaa634333ee1e';

//검색위치
let sort = null;
let size = null;

//페이지번호
let currentPage = 1;

//검색어
let title = null;

//마지막 페이지인지 검사
let isEnd = false;

//검색폼의 submit 이벤트 -신규검색
document.querySelector('#searchForm').addEventListener('submit', (e) => {
  e.preventDefault();

  //검색 대상을 가져온다
  const sortField = document.querySelector('#sort');
  sort = sortField[sortField.selectedIndex].value;

  const sizeField = document.querySelector('#size');
  size = sizeField[sizeField.selectedIndex].value;

  //입력된 검색어를 가져온다
  const queryField = document.querySelector('#query');
  title = queryField.value.trim();

  //검색어가 입력되지 않은 경우에 대한 예외처리
  if (!title) {
    alert('검색어를 입력하세요');
    queryField.focus();
    return;
  }

  //신규검색
  currentPage = 1;
  search();
});

//스크롤 이벤트 - 추가검색
window.addEventListener('scroll', (e) => {
  //마지막 페이지거나 이미 로딩바가 화면에 표시되고 있다면 처리중단
  if (
    isEnd ||
    document.querySelector('#loading').classList.contains('active')
  ) {
    return;
  }

  //스크롤바의 Y좌표
  const scrollTop = window.scrollY;
  //웹브라우저의 창 높이
  const windowHeight = window.screen.availHeight;
  //HTML 문서의 높이
  const documentHeight = document.body.scrollHeight;

  //스크롤바의 반동효과를 고려해서 scrollTop + windowHeight 가 실제화면 크기보다 커 질 수도 있다
  if (scrollTop + windowHeight >= documentHeight) {
    //2페이지 이후는 추가 검색
    currentPage++;
    search();
  }
});

//Ajax요청 후 결과를 화면에 HTML로 출력하는 함수
async function search() {
  //로딩바 객체
  const loading = document.querySelector('#loading');

  //로딩바 화면에 표시하기
  loading.classList.add('active');

  //검색 결과가 표시되 영역
  const list = document.querySelector('#list');

  //1페이지에 대한 요청일 경우 기존에 표시되고 있던 검색결과가 잇다면 삭제한다
  if (currentPage == 1) {
    Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
      list.removeChild(v);
    });
  }
  //검색결과를 저장할 빈 변수
  let json = null;

  try {
    json = await axios.get(
      `https://dapi.kakao.com/v3/search/book?target=${title}`,
      {
        params: {
          query: title,
          page: currentPage,
        },
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
        },
      }
    );

    //응답결과 확인
    console.log(json);
  } catch (err) {
    console.error(err);
    alert('요청을 처리하는데 실패했습니다.');
    return;
  } finally {
    //로딩바 닫기
    loading.classList.remove('active');
  }

  if (json != null) {
    const { data } = json;

    //다음 페이지를 요청할 수 있는지를 판단하기 위한 값
    isEnd = data.meta.is_end;

    data.documents.map((v, i) => {
      const li = document.createElement('li');
      list.appendChild(li);

      const a = document.createElement('a');
      a.setAttribute('href', v.url);
      a.setAttribute('target', '_blank');
      li.appendChild(a);

      const img = document.createElement('img');
      img.classList.add('thumbnail');
      img.setAttribute('src', v.thumbnail || 'img/noimage.jpg');
      a.appendChild(img);

      const h2 = document.createElement('h2');
      h2.innerHTML = v.title;
      a.appendChild(h2);

      const p = document.createElement('p');
      p.innerHTML = v.contents;
      a.appendChild(p);

      const span1 = document.createElement('span');
      const span2 = document.createElement('span');
      const span3 = document.createElement('span');
      const span4 = document.createElement('span');
      span1.classList.add('authors');
      span2.classList.add('publisher');
      span3.classList.add('price');
      span4.classList.add('sale_price');

      span1.innerHTML = v.title;
      span2.innerHTML = v.publisher;
      span3.innerHTML = v.price;
      span4.innerHTML = v.sale_price;
      a.appendChild(span1);
      a.appendChild(span2);
      a.appendChild(span3);
      a.appendChild(span4);
    });
  }
}
