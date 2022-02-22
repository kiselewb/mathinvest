const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch')
    let linkSelect = document.querySelector('.menu__link-select')
    if (linkSelect) {
        linkSelect.addEventListener("click", () => {
            linkSelect.parentElement.classList.toggle('_active')
        })
    }
} else {
    document.body.classList.add('_pc')
}

const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body')
    iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

$(document).ready(function(){
    $('.about-main__slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
              }
          }
      ]
    });
  });
  $('.rates-main__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 15000,
    fade: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
  });
  $(document).ready(function(){
    $('.about-main__partners-slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
            }
        },
      ],
    });
  });

let tabLinks= document.querySelectorAll('.rates-offer__item[data-goto]');

if (tabLinks.length > 0) {
    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', (elem) => {
            let tabLink = elem.target
            if (tabLink.dataset.goto && document.querySelector(tabLink.dataset.goto)) {
                let gotoBlock = document.querySelector(tabLink.dataset.goto)
                let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
            }
        })
    })
}


// =======================================
  var HIDDEN_CLASS_NAME = 'hidden'
  var TARGET_CLASS_NAME = 'target'
  var SOURCE_CLASS_NAME = 'source'
  
  var targetIdToShow = 1
  
  function main() {
      var targets = getElements(TARGET_CLASS_NAME)
      var sources = getElements(SOURCE_CLASS_NAME)
      sources.forEach(function (sourceNode) {
          var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
          sourceNode.addEventListener('click', function () {
              showTarget(targets, sourceNodeId)
          })
      })
      showTarget(targets, targetIdToShow)
  }
  
  function getElements(type) {
      return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
          var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
          var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
          return target1Num > target2Num
      })
  }
  
  function extractId(targetNode, baseClass) {
      var currentClassIndex = targetNode.classList.length
      while (currentClassIndex--) {
          var currentClass = targetNode.classList.item(currentClassIndex)
          var maybeIdNum = parseInt(currentClass.split('-')[1])
          if (isNaN(maybeIdNum)) {
              continue
          }
          var classStrinToValidate = baseClass + '-' + maybeIdNum
          if (classStrinToValidate === currentClass) {
              return maybeIdNum
          }
      }
  }
  
  function showTarget(targets, targetId) {
      targets.forEach(function (targetNode, targetIndex) {
      var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
          if (currentTargetNodeId === targetId) {
              targetNode.classList.remove(HIDDEN_CLASS_NAME)
          } else {
              targetNode.classList.add(HIDDEN_CLASS_NAME)
          }
      })
  }
  
  main()