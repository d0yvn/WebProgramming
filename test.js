
var mongoose = require('mongoose');
const foods = require('./models/foods');


// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

var data = [{
    "category": "중식",
    "title": "탕수육",
    "time": 30,
    "link": "https://www.10000recipe.com/recipe/3366518",
    "__v": 0,
    "food_style": [
      "든든한 한끼",
      "맛있는 안주"
    ],
    "ingredients": [
      "후추",
      "소금",
      "전분",
      "설탕",
      "간장",
      "식초",
      "케찹",
      "당근",
      "양파",
      "식용유",
      "청주","돼지고기"
    ]
  },{
    "category": "한식",
    "title": "스팸마요덮밥",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6878335",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "계란",
      "양파",
      "간장",
      "맛술",
      "설탕",
      "후추",
      "김","스팸"
    ]
  },{
    "category": "한식",
    "title": "김치볶음밥",
    "time": 15,
    "link": "https://www.10000recipe.com/recipe/5590466",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "김치",
      "굴소스",
      "올리고당",
      "고추장",
      "맛술",
      "참기름",
      "후추","스팸"
    ]
  },{
    "category": "한식",
    "title": "소고기무국",
    "time": 30,
    "link": "https://www.10000recipe.com/recipe/6878335",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "무",
      "양파",
      "숙주",
      "다시마",
      "마늘",
      "파",
      "마른새우",
      "소고기"
    ]
  },{
    "category": "한식",
    "title": "불고기",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6880674",
    "food_style": [
      "든든한 한끼","밑반찬"
    ],
    "ingredients": [
      "간장",
      "참기름",
      "설탕",
      "당근",
      "버섯",
      "마늘",
      "후추",
      "소고기"
    ]
  },{
    "category": "한식",
    "title": "된장찌개",
    "time": 25,
    "link": "https://www.10000recipe.com/recipe/6954444",
    "food_style": [
      "든든한 한끼","밑반찬"
    ],
    "ingredients": [
      "다시마",
      "고춧가루",
      "파",
      "고추",
      "버섯",
      "마늘",
      "된장",
      "두부",
      "소고기"
    ]
  },{
    "category": "한식",
    "title": "김치찌개",
    "time": 30,
    "link": "https://www.10000recipe.com/recipe/1785098",
    "food_style": [
      "든든한 한끼","밑반찬"
    ],
    "ingredients": [
      "김치",
      "참기름",
      "양파",
      "고추",
      "파",
      "간장",
      "후추",
      "소금",
      "미림",
      "돼지고기"
    ]
  },{
    "category": "한식",
    "title": "잡채",
    "time": 60,
    "link": "https://www.10000recipe.com/recipe/6905889",
    "food_style": [
      "든든한 한끼","밑반찬","면류"
    ],
    "ingredients": [
      "당면",
      "참기름",
      "양파",
      "고추",
      "참기름",
      "간장",
      "후추",
      "소금",
      "올리고당",
      "파프리카",
      "당근",
      "버섯",
      "소고기"
    ]
  },{
    "category": "한식",
    "title": "제육볶음",
    "time": 60,
    "link": "https://www.10000recipe.com/recipe/6897988",
    "food_style": [
      "든든한 한끼","밑반찬","맛있는 안주"
    ],
    "ingredients": [
      "참기름",
      "간장",
      "고춧가루",
      "후추",
      "설탕",
      "고추장",
      "마늘",
      "파",
      "돼지고기"
    ]
  },{
    "category": "한식",
    "title": "콩나물불고기",
    "time": 30,
    "link": "https://www.10000recipe.com/recipe/6883016",
    "food_style": [
      "든든한 한끼","밑반찬","맛있는 안주"
    ],
    "ingredients": [
      "콩나물",
      "고춧가루",
      "간장",
      "설탕",
      "고추장",
      "마늘",
      "파",
      "돼지고기"
    ]
  },{
    "category": "한식",
    "title": "갈릭마요새우",
    "time": 15,
    "link": "https://www.10000recipe.com/recipe/6872474",
    "food_style": [
      "든든한 한끼","밑반찬","맛있는 안주"
    ],
    "ingredients": [
      "마요네즈",
      "마늘",
      "설탕",
      "후추",
      "소금",
      "새우"
    ]
  },{
    "category": "중식",
    "title": "새우계란볶음밥",
    "time": 15,
    "link": "https://www.10000recipe.com/recipe/6934273",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "밥",
      "당근",
      "양파",
      "계란",
      "파",
      "간장",
      "굴소스",
      "소금",
      "후추",
      "참기름",
      "새우"
    ]
  },{
    "category": "중식",
    "title": "깐풍기",
    "time": 60,
    "link": "https://www.10000recipe.com/recipe/6950112",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "마늘",
      "후추",
      "우유",
      "양파",
      "파",
      "고추",
      "간장",
      "참기름",
      "굴소스",
      "닭고기"
    ]
  },{
    "category": "중식",
    "title": "깐풍기",
    "time": 60,
    "link": "https://www.10000recipe.com/recipe/6950112",
    "food_style": [
      "든든한 한끼"
    ],
    "sub_ingredients": [
      "마늘",
      "후추",
      "우유",
      "양파",
      "파",
      "고추",
      "간장",
      "참기름",
      "굴소스",
      "닭고기"
    ]
  },{
    "category": "중식",
    "ingredients": [
      "라면",
      "양파",
      "양배추",
      "대파",
      "진간장",
      "고춧가루",
      "돼지고기"
    ],
    "title": "짬뽕라면",
    "time": 30,
    "link": "https://www.10000recipe.com/recipe/6889275",
    "food_style": [
      "면류","든든한 한끼"
    ]
  },{
    "category": "중식",
    "ingredients": [
      "만두",
      "대파",
      "마늘",
      "간장",
      "설탕",
      "식초",
      "물엿",
      "후추"
    ],
    "title": "깐풍만두",
    "time": 15,
    "link": "https://www.10000recipe.com/recipe/6902300",
    "food_style": [
      "맛있는 안주","밑반찬"
    ]
  },{
    "category": "중식",
    "ingredients": [
      "돼지고기",
      "양파",
      "파",
      "참기름",
      "소금",
      "물",
      "간장",
      "설탕",
      "꿀"
    ],
    "title": "동파육",
    "time": 90,
    "link": "https://www.10000recipe.com/recipe/6867023",
    "food_style": [
      "맛있는 안주"
    ]
  },{
    "category": "일식",
    "title": "가지덮밥",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6939787",
    "food_style": [
      "든든한 한끼"
    ],
    "ingredients": [
      "계란",
      "양파",
      "간장",
      "마늘",
      "설탕",
      "맛술",
      "후추",
      "돼지고기"
    ]
  },{
    "category": "일식",
    "title": "메밀소바",
    "time": 10,
    "link": "https://www.10000recipe.com/recipe/6863839",
    "food_style": [
      "든든한 한끼","면류","일식"
    ],
    "ingredients": [
      "가쓰오다시",
      "양파",
      "간장",
      "맛술",
      "설탕",
      "메밀면",
      "김",
      "돼지고기"
    ]
  },{
    "category": "일식",
    "title": "일식돈까스",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6929417",
    "food_style": [
      "든든한 한끼","밑반찬","일식"
    ],
    "ingredients": [
      "계란",
      "밀가루",
      "간장",
      "소금",
      "식빵",
      "소주",
      "김",
      "돼지고기"
    ]
  },{
    "category": "일식",
    "title": "미소된장국",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6863868",
    "food_style": [
      "든든한 한끼","밑반찬","일식"
    ],
    "ingredients": [
      "시금치",
      "멸치",
      "파",
      "소금",
      "고추",
      "된장",
      "버섯",
      "돼지고기"
    ]
  },{
    "category": "일식",
    "title": "규동",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6659367",
    "food_style": [
      "밑반찬","일식"
    ],
    "ingredients": [
      "시금치",
      "멸치",
      "파",
      "소금",
      "설탕",
      "간장",
      "김",
      "소고기"
    ]
  },{
    "category": "일식",
    "title": "부타동",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6925870",
    "food_style": [
      "든든한 한끼","일식"
    ],
    "ingredients": [
      "양파",
      "마늘",
      "파",
      "소금",
      "설탕",
      "간장",
      "고추",
      "소고기"
    ]
  },{
    "category": "일식",
    "title": "두부튀김",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6850303",
    "food_style": [
      "든든한 한끼","일식","밑반찬"
    ],
    "ingredients": [
      "양파",
      "두부",
      "파",
      "식초",
      "맛술",
      "설탕",
      "간장",
      "돼지고기"
    ]
  },{
    "category": "중식",
    "title": "깐풍만두",
    "time": 15,
    "link": "https://www.10000recipe.com/recipe/6902300",
    "food_style": [
      "든든한 한끼","중식","밑반찬"
    ],
    "ingredients": [
      "만두",
      "물엿",
      "파",
      "식초",
      "마늘",
      "설탕",
      "간장",
      "돼지고기"
    ]
  },{
    "category": "중식",
    "title": "잡채",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6836361",
    "food_style": [
      "든든한 한끼","중식","밑반찬"
    ],
    "ingredients": [
      "만두",
      "물엿",
      "파",
      "식초",
      "마늘",
      "설탕",
      "간장",
      "돼지고기"
    ]
  },{
    "category": "중식",
    "title": "멘보샤",
    "time": 20,
    "link": "https://www.10000recipe.com/recipe/6836361",
    "food_style": [
      "든든한 한끼","중식","밑반찬"
    ],
    "ingredients": [
      "새우",
      "후추",
      "파",
      "식초",
      "맛술",
      "설탕",
      "간장",
      "돼지고기"
    ]
  }]

const food = require('./models/foods');

foods.collection.insertMany