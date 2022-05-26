let date = new Date();
schedule = new Array(43)
for ( let i=0 ; i<43 ; i++ )
  schedule[i] = ""
information = new Array(43)
for ( let i=0 ; i<43 ; i++ )
  information[i] = ""
schedule[1] = "관람회"
information[1] = "서울과학기술대학교 컴퓨터공학과주관의 졸업작품 관람회가5.21-5.25 기간에 있음"
schedule[5] = "신록예찬"
information[5] = "봄 여름 가을 겨울, 두루 사시를 두고, 자연이 우리에게 내리는 혜택에는 제한이 없다. 그러나 그 중에도 그 혜택을 풍성히 아낌없이 내리는 시절은 봄과 여름이요. 그 중에서도 그 혜택을 가장 아름답게 내는 것은 봄, 봄 가운데도 만산에 녹엽이 싹트는 이 때일 것이다."
schedule[10] = "신록예찬"
information[10] = "눈을 들어 하늘을 우러러보고 먼 산을 보라. 어린애의 웃음같이 깨끗하고 명랑한 오월의 하늘, 나날이 푸르러가는 이 산 저 산, 나날이 새로운 경이를 가져오는 이 언덕 저 언덕, 그리고 하늘을 달리고 녹음을 스쳐 오는 맑고 향기로운 바람-우리가 비록 빈한하여 가진 것 없다 할지라도 우리는 이러한 때 모든 것을 가진 듯하고, 우리 마음이 비록 가난하여 바라는 바, 기대하는 바가 비록 없다 할지라도, 하늘을 달리어 녹음을 스쳐오는 바람은 다음 순가에라도 곧 모든 것을 가져올 듯하지 아니한가?"
schedule[15] = "신록예찬"
information[15] = "오늘도 하늘은 더할 나위 없이 맑고, 우리 연전 일대를 덮은 신록은 어제보다도 한층 더 깨끗하고 신선하고 생기 있는 듯하다. 나는 오늘도 나의 문법 시간이 끝나자 큰 무거운 짐이나 벗어 놓은 듯이 옷을 훌훌 떨며, 본관 서쪽 숲 사이에 있는 나의 자리를 찾아 올라간다.  나의 자리래야 솔밭 사이에 있는 겨우 걸터앉을 만한 조그마한 소나무 그루터기 지나지 못하지마는, 오고 가는 여러 동료가 나의 자리라고 명명하여 주고, 또 나 자신도 하루 동안에 가장 바쁜 시간을 이 자리에서 가질 수 있으므로, 신간의 여유 있는 때마다 나는 한 특권이나 차지하듯이, 이 자리를 찾아 올라와 앉아 있기를 좋아한다."
schedule[20] = "신록예찬"
information[20] = "물론 나에게 멀리 군속을 떠나 고고한 가운데 처하기를 원하는 선골이 있다거나, 또는 나의 성미가 남달리 괴팍하여 사람을 싫어한다거나 하는 것은 아니다. 나는 역시 사람 사리에 처하기를 즐거워하고, 사람을 그리워하는 갑남을녀의 하나요. 또 사람이란 모든 결점이 있음에도 불구하고, 역시 가장 아름다운존재의 하나라고 생각한다. 그리고 또, 사람으로서도 아름다운 사람이 되려면 반드시 사람 사이에 살고, 사람 사이에서 울고 웃고 부대껴야 한다고 생각한다."
schedule[25] = "신록예찬"
information[25] = "그러나 이러한 때-푸른 하늘과 찬란한 태양이 있고, 황홀한 신록이 모든 산, 모든 언덕을 덮는 이때, 기쁨의 속삭임이 하늘과 땅, 나무와 나무, 풀잎과 풀잎 사이에 은밀히 수수되고, 그들의 기쁨의 노래가 금시라고 우렁차게 터져 나와, 산과 들을 흔들 듯한 이러한 때을 당하면 나의 곁에 비록 친한 동무가 있고, 그이 재미있는 이야기가 있다 할지라도, 이러한 자연의 곁눈을 팔지 않을 수 없으며, 그의 기쁨의 노래에 귀를 기울이지 아니할 수 없게 된다."
schedule[30] = "신록예찬"
information[30] = "그리고 또, 어떻게 생각하면 우리 사람이란-세속에 얽매여, 머리 위에 푸른 하늘이 있는 것을 알지 못하고, 주머니의 돈을 세고, 지위를 생각하고, 명예를 생각하는데 여념이 없거나, 또는 오욕칠정에 사로잡혀 서로 미워하고 시기하고 질투하는 마음에 영일을 가지지 못하는 우리 사람이란, 어떻게 비소하고 어떻게 저속한 것인지."

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
    dates[i] = `<div class="date"><span class=${condition}>${date}<p>${schedule[i+1]}</p></span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+parseInt((date.innerText).split('<')[0]) === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }

document.querySelectorAll('.date').forEach((date, i) => {
  //console.log(i + date);
  date.onclick = (e) => {
      document.querySelector("#schedtitle").innerHTML = "<h1>" + schedule[i+1] + "</h1>"
      document.querySelector("#schedinfo").innerHTML = "<h3>" + information[i+1] + "</h3>"
      document.querySelector("#schedimg").src = document.querySelectorAll("img")[i+1].src

    }
});


};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}

const goToday = () => {
  date = new Date();
  renderCalender();
};


