/*
 * @filename    : kakao-book-search.js
 * @author      : 왕혜수 (hess90wang@gmail.com)
 * @description : 카카오 책 검색 구현
 */

const KAKAO_REST_KEY = '2e2670130617e31f34fcaa634333ee1e';

let sortV = null;
let sizeV = null;
let currentPage = 1;
let queryKeyword = null;
let isEnd = false;

document.querySelector('#searchForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const sortField = document.querySelector('#sort');
  sortV = sortField[sortField.selectedIndex].value;

  const sizeField = document.querySelector('#size');
  sizeV = sizeField[sizeField.selectedIndex].value;

  const queryField = document.querySelector('#query');
  queryKeyword = queryField.value.trim();

  if (!queryKeyword) {
    alert('검색어를 입력하세요');
    queryField.focus();
    return;
  }

  currentPage = 1;
  search();
});

window.addEventListener('scroll', (e) => {
  if (
    isEnd ||
    document.querySelector('#loading').classList.contains('active')
  ) {
    return;
  }

  const scrollTop = window.scrollY;
  const windowHeight = window.screen.availHeight;
  const documentHeight = document.body.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight) {
    currentPage++;
    search();
  }
});

async function search() {
  const loading = document.querySelector('#loading');
  loading.classList.add('active');

  const list = document.querySelector('#list');
  if (currentPage == 1) {
    Array.from(list.getElementsByTagName('li')).forEach((v, i) => {
      list.removeChild(v);
    });
  }
  let json = null;
  try {
    json = await axios.get(`https://dapi.kakao.com/v3/search/book?target=/`, {
      params: {
        query: queryKeyword,
        sort: sortV,
        size: sizeV,
        page: currentPage,
      },
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
      },
    });
    console.log(json);
  } catch (err) {
    console.error(err);
    alert('요청을 처리하는데 실패했습니다.');
    return;
  } finally {
    loading.classList.remove('active');
  }

  if (json != null) {
    const { data } = json;
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

      span1.innerHTML = v.authors;
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
