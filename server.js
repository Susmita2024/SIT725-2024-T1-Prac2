const express = require('express')
const app = express()
const port = 3000

app.get('/addTwoNumbers', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    sum = num1 + num2;
    const responseBody = {
        'data': sum,
        'message': 'success',
        'statusCode' : 200
    }
    res
      .json(responseBody)
      .send();

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})