const q = {
  0: {
    A: '일단 기분이 좋아서 아무말 대잔치를 시작한다.',
    B: '엥 그게 단데?라고 얘기하고 화제를 넘긴다',
    C: '왜 집중하지...하면서 점점 목소리가 작아진다.',
  },
  1: {
    title: '간만에 친구들모임 옷장을 열었는데 정말 입을 옷이 1도 없다',
    A: '약속 시간보다 빨리 출발해서 옷을 사입는다.',
    B: '그래도 그중에 제일 아끼는 옷을 꺼내서 스타일링 해본다',
    C: '친구들 만나는데, 아무거나 입지 뭐...',
  },
  2: {
    title: '간만에 간 분위기 좋은 레스토랑, 친구가 사진을 찍어주겠다고 한다.',
    A: '이미 셀카로 사진을 수십장 찍고 있다.',
    B: '최선을 다해 분위기를 잡아 본다. 친구의 핸드폰을 확인하고 원하는 구도를 요구한다.',
    C: '2-3장 정도 찍고, 마음에 든다고 한다',
  },
  3: {
    title:
      '인스타에 올라온 우리 동네 새로운 맛집, 찾아가 봤더니 웨이팅이 20팀이다.',
    A: '그래도 가보고 싶다 20팀을 기다린다.',
    B: '집앞이니 다음에 오면 된다 생각하고, 지나갈때마다 한번씩 살펴본다.',
    C: '인스타 맛집에 관심 없다',
  },
  4: {
    title:
      '오늘 뭔가 착장이 굉장히 마음에 든다. 문밖을 나갔는데 사람들이 나를 쳐다본다.',
    A: '역시 오늘 착장이 성공적이야',
    B: '왜 쳐다보지? 뭐가 이상한가?',
    C: '그냥 가던길 간다',
  },
  5: {
    title: '자가격리 4일째...뭐하고 있을까?',
    A: ' 자가격리 4일째 스토리를 올리고 있다.',
    B: '친구들에게 카톡하며 지겨움을 토로한다',
    C: '그동안 밀린 넷플릭스를 보고 있다',
  },
  6: {
    title: '회사에서 내 책상 뒤가 사람이 많이 다니는 복도쪽이다. 어떡할까?',
    A: '복도에 지나가는 사람들과 인사한다.',
    B: '스크린 세이버를 사다 붙인다.',
    C: '누가 지나가도 별로 신경쓰이지 않는다.',
  },
  7: {
    title: '옷장을 열어보자. 옷장에 색깔이 몇가지?',
    A: '이걸 어떻게 다세????',
    B: '대충 5~8가지 정도???',
    C: '1-3개',
  },
  8: {
    title: '헬스장에 갔는데 트레이너가 계속 다가와서 말을 건다',
    A: '엄청 친절하시네? 라고 생각한다.',
    B: '왜 자꾸 말을 걸지??? 불편하다고 생각한다.',
    C: '말을 끊기 위해 이어폰을 낀다',
  },
  9: {
    title: '새로운 것을 시작하기 전에 나는?',
    A: '주변에 조언을 구하고, 여러 정보를 우선 수집한다.',
    B: '관련 커뮤니티에 가입한다.',
    C: '관련 정보들을 파일로 정리해서 비교 분석 한다',
  },
  10: {
    title: '주위사람들이 나를 다른 사람에게 소개할때, 이런 얘기를 많이 한다',
    A: '애는 착해',
    B: '내가 되게 좋아하는 사람이야',
    C: '정말 진국이야',
  },
};

const r = {
  0: {
    title: '고귀한 목련',
    dsc: '고귀함과 숭고함을 나타내는 목련을 닮은 당신, 아무리 세상이 빠르게 변해가도 본인의 색깔을 뚜렷이 지니고 갈 그런 사람입니다.',
    image: './img/0.jpg',
  },
  1: {
    title: '기품있는 매화',
    dsc: '고결한 마음을 나타내는 매화를 닮은 당신, 매화처럼 아무리 어려운 일이 있어도 끝까지 해낼 수 있는 당신은 주위사람들에게 기둥이 될 수 있는 사람일거 같네요.',
    image: './img/1.jpg',
  },
  2: {
    title: '아름다운 영혼 벚꽃',
    dsc: '화려하게 피는 벚꽃을 닮은 당신, 주위에서는 화려하게 볼 수도 있지만, 사실은 정신적인 안정을 매우 중요하게 여기기 때문에 보기보다 내면이 단단한 사람이에요.',
    image: './img/2.jpg',
  },
  3: {
    title: '작고 귀여운 민들레',
    dsc: '귀엽고 소박한 민들레를 닮은 당신, 당신은 주위에서 아껴주고 항상 귀여움을 받는 존재에요. 외적인 것도 있겠지만, 당신의 겸손하고 배려하는 마음 가짐이 그런 당신의 모습을 만든거겠죠',
    image: './img/3.jpg',
  },
  4: {
    title: '첫사랑을 떠올리게 하는 라일락',
    dsc: '향긋하고 수수한 라일락을 닮은 당신, 딱 첫사랑의 이미지를 떠올리면 당신의 이미지와 비슷할거 같은 사람이에요. 당신은 주위사람들을 기분좋게 하는 매력이 있기 때문에 사람들이 당신을 무척 좋아할거에요.',
    image: './img/4.jpg',
  },
  5: {
    title: '다양한 매력을 지닌 튤립',
    dsc: '다양한 색깔을 지닌 튤립을 닮은 당신, 당신은 여러가지 매력을 가지고 있어요. 때와 장소, 분위기에 맞게 새로운 모습을 보이는 당신은 주위에서 칭찬이 끊이지 않겠네요.',
    image: './img/5.jpg',
  },
  6: {
    title: '봄과 똑닮은 유채꽃',
    dsc: '봄의 시작을 알리는 유채꽃을 닮은 당신, 당신은 쾌활하고 명랑한 성격때문에 항상 밝은 분위기를 몰고 다니는 분위기 메이커군요.주위사람들에게 당신은 봄햇살같은 사람이에요',
    image: './img/6.jpg',
  },
  7: {
    title: '희망을 가득품은 개나라',
    dsc: '봄의 새로움을 담은 개나리를 닮은 당신, 항상 희망찬 모습으로 당신은 목표를 위해 열심히 사는 사람이에요. 그래서 주위 사람들도 당신의 그런 모습을 본받고 싶어 한답니다.',
    image: './img/7.jpg',
  },
  8: {
    title: '모든이에게 사랑받는 프리지아',
    dsc: '많은 이들이 사랑하는 프리지아를 닮은 당신, 천진난만한 모습을 보이지만, 자신의 갈길은 확실히 아는 당신은 그 모습 그대로 많은 사람들이 좋아할거에요',
    image: './img/8.jpeg',
  },
  9: {
    title: '매혹적인 라넌큘러스',
    dsc: '매력적인 라넌큘러스를 닮은 당신, 당신은 어디를 가능 주인공이 되는 존재에요. 타고난 매력이 뿜뿜하기 때문에 이성이나 동성 모두에게 인기많은 사람이네요. ',
    image: './img/9.jpg',
  },
  10: {
    title: '가녀려보이지만 강한 수선화',
    dsc: '가녀린 모습뒤에 가려진 강한 모습을 가진 수선화를 닮은 당신, 자존감이 매우 높은 당신은 타인의 말에 휩쓸리지않아요. 당신은 그 누구보다 자신을 믿기때문에 보기 보다 훨씬 강한 사람이랍니다.',
    image: './img/10.jpg',
  },
};
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const middle = document.getElementById('middle');
let count = 0;
let num = 0;

yes.addEventListener('click', function clickYes() {
  if (num <= 10) {
    count += 2;
    return next();
  } else {
    return next();
  }
});
middle.addEventListener('click', function clickmiddle() {
  if (num <= 10) {
    count += 1;
    return next();
  } else {
    return next();
  }
});
no.addEventListener('click', function clickNo() {
  if (num <= 10) {
    count += 0;
    return next();
  } else {
    return next();
  }
});

function next() {
  if (num < 10) {
    num++;
    document
      .querySelector('.progress-bar')
      .setAttribute('style', 'width: calc(100/11*' + (num + 1) + '%)');
    document.getElementById('title').innerText = q[num]['title'];
    document.getElementById('yes').innerText = q[num]['A'];
    document.getElementById('middle').innerText = q[num]['B'];
    document.getElementById('no').innerText = q[num]['C'];
  } else {
    document.getElementById('title').setAttribute('style', 'display:none');
    document.getElementById('yes').setAttribute('style', 'display:none');
    document.getElementById('middle').setAttribute('style', 'display:none');
    document.getElementById('no').setAttribute('style', 'display:none');
    document.getElementById('btnResult').setAttribute('style', 'display:block');
    btnResult.addEventListener('click', () => {
      resultPage();
    });
  }
}

function resultPage() {
  let i = parseInt(count / 2);
  document.getElementById('qus').setAttribute('style', 'display:none');
  document.getElementById('contQst').setAttribute('style', 'display:none');
  document.getElementById('testResult').setAttribute('style', 'display:flex');
  document.getElementById('img').setAttribute('src', r[i]['image']);
  document.getElementById('titResult').innerText = r[i]['title'];
  document.getElementById('dscResult').innerText = r[i]['dsc'];
}
