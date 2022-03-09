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
    C: '일단 다시 들어가서 거울을 다시 본다',
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
    title: '이런사람이 있다고???',
    dsc: '개발자도 예상치 못한 극강의 캐릭터 이정도 캐릭터면 2022년에도 달라지지 않겠죠? 한결같으실겁니다',
    image: './img/0.png',
  },
  1: {
    title: '2021년처럼 지나갈 2022년',
    dsc: '아마 지금과 같은 2022년을 보내게 되실꺼에요. 귀찮더라도 새로운걸 시작해 보는건 어떨가요?',
    image: './img/1.png',
  },
  2: {
    title: '편안한 2022년',
    dsc: '앞으로의 2022년 편안한 2022년이 될거에요. 만약 조금의 설렘을 원한다면 안하는 걸 해보는것도 좋은 방법이에요!!',
    image: './img/2.png',
  },
  3: {
    title: '평소보다 바쁜 2022년',
    dsc: '2022년은 여느해보다 조금 바쁘실거 같아요.예정에 없던 일들도 생길 수 있으니 컨디션 관리 스케줄 관리 꼼곰히!!',
    image: './img/3.png',
  },
  4: {
    title: '조금은 피곤할 수 있는 2022년',
    dsc: '2022년은 조금 피곤할 수 있을거 같아요. 집에서든 사회에서든 피로감이 들 수 있지만, 그건 당신을 찾는 곳이 많다는 얘기이니 화이팅!!',
    image: './img/4.png',
  },
  5: {
    title: '안정적인 2022년',
    dsc: '2022년은 자리를 잡아 안정적인 1년이 될거 같아요. 안정적이길 좋아하는 당신에게는 편안한 한해가 될 수 도 있겠네요.',
    image: './img/5.png',
  },
  6: {
    title: '새로운걸 시작하기 딱 좋은 2022년',
    dsc: '조금 지루할 수도 있는 한해를 보냈다면 2022년 새로운 걸 도전하기 딱 좋은 시기가 될거에요! 쌓아 놓은 에너지로 한번 해봅시다!!',
    image: './img/6.jpg',
  },
  7: {
    title: '원하는대로 이루어질 2022년',
    dsc: '2021년 한해동안 열심히 뿌려놨다면 거둬들이는게 있을 2022년이에요! 열심히 일한 당신 즐기십시오',
    image: './img/7.png',
  },
  8: {
    title: '안정적인 2022년',
    dsc: '2022년은 자리를 잡아 안정적인 1년이 될거 같아요. 안정적이길 좋아하는 당신에게는 편안한 한해가 될 수 도 있겠네요.',
    image: './img/8.png',
  },
  9: {
    title: '여유가 필요해보이는 2022년',
    dsc: '주위사람들에게 바쁜사람이라고 인식되고 있을 당신, 이제는 여유가 좀 필요해요. 주위보다 자신을 좀 둘러보는 건 어떨까요?',
    image: './img/9.png',
  },
  10: {
    title: '건강건강겅강 2022년',
    dsc: '2021년 너무 열심히 살았어요. 건강챙겨야 합니다. 영양제는 만병통치약이 아닙니다. 건강챙겨야 해요!',
    image: './img/10.png',
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
  let i = count;
  document.getElementById('qus').setAttribute('style', 'display:none');
  document.getElementById('testResult').setAttribute('style', 'display:block');
  document.getElementById('img').setAttribute('src', r[i]['image']);
  document.getElementById('titResult').innerText = r[i]['title'];
  document.getElementById('dscResult').innerText = r[i]['dsc'];
}
