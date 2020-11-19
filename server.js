const express = require('express');

const app = express();

const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
app.use('*', (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  // res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With,Accept,Authorization');
  // res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method.toLocaleLowerCase() === 'options') {
    return end()
  }
  next();
});

app.use(bodyParser.json())

const secret = 'wenlong666'

app.get('/test', (req, res) => {
  res.send({test:'test'})
})

app.post('/login', (req, res) => {
  const { username } = req.body
  if (username === 'admin') { // 如果访问的是 admin用户，就添加cookie
    res.json({
      code: 0,
      username: 'admin',
      token: jwt.sign({ username: 'admin' }, secret, {
        expiresIn:20
      })
    })
  } else {
    res.json({
      code: 1,
      data:'用户不存在'
    })
  }
})


app.get('/validate', (req, res) => {
  const token = req.headers.authorization
  jwt.verify(token, secret, (err, decode) => { // 验证token 的可靠性
    if (err) {
      return res.json({
        code: 1,
        data:'token失效了。。。'
      })
    }

    res.json({
      username: decode.username,
      code: 0, // 延长token 的过期时间
      token: jwt.sign({ username: 'admin' }, secret, {
        expiresIn:20
      })
    })
  })
})

app.get('/roleAuth', (req, res) => {
  res.json({
    menuList: [
      {
        pid: -1,
        name: '购物车',
        id: 1,
        auth: 'cart',
      },
      {
        pid: 1,
        name: '购物车列表',
        id: 4,
        auth: 'cart-list',
      },
      { 
        pid: 4,
        name: '彩票',
        id: 5,
        auth: 'lottery',
      },
      {
        pid: 4,
        name: '商品',
        id: 6,
        auth: 'product',
      },
    ],
  });
});
app.listen(3006, () => {
  console.log('http://localhost:3006  is running...')
});
