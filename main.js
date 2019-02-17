function writeCode(preResult, code, callback) {
  let domCode = document.querySelector("#code")
  let n = 0;
  domCode.innerHTML = preResult || ''
  let timerId = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(preResult + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = preResult + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(timerId)
      if (callback !== undefined) {
        callback.call()
      } else {
        document.querySelectorAll('.token').forEach(element => {
          element.classList.add('highlight')
        });
      }
    }
  }, 10)
}

function writeContentMarkdown(content, callback) {
  let domPaper = document.querySelector('#paper > .content')
  let n = 0
  let timerId = setInterval(() => {
    n += 1
    domPaper.innerHTML = content.substring(0, n)
    domPaper.scrollTo = domPaper.scrollHeight

    if (n > content.length) {
      window.clearInterval(timerId)
      callback.call()
    }
  }, 10);
}

var result = `
  /*
   * 面试官你好，我是 浓缩小超人
   * 我将以动画的形式来介绍我自己
   * 只用文字介绍太单调了
   * 我就用代码来介绍吧
   * 首先准备一些样式
  */

  *{
    transition: all 0.3s;
  }

  html {
    background: rgb(222,222,222)'
    font-size: 16px;
  }

  #code {
    border: 1px solid red;
    padding: 16px;
  }

  /* 加一点代码高亮 */
  .token.selector {
    color: #690;
  }

  .token.property {
    color: #905;
  }

  .token.function {
    color: #DD4A68;
  }

  /* 我来介绍一下我自己吧 */
  /* 我需要一张白纸 */

  #code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
  }

  #paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  #paper > .content {
    background: white;
    height: 100%;
    width: 100%;
  }

`
var result2 = `
  #paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #paper > .content {
    background: white;
    height: 842px;
    width: 595px;
    overflow: hidden;
  }

`
var md = `
  # 浓缩小超人的简历


  ## 自我介绍

  我叫 浓缩小超人
  1990 年 8 月出生
  毕业于大连东软信息学院
  希望应聘前端开发岗位

  ## 技能介绍

  1. Ruby On Rails
  2. JavaScript
  3. css
  4. React


  ## 项目介绍

  1. 轮播
  2. 简历
  3. 画板


  ## 联系方式

  Email: ns@gmail.com
  手机：1881888888

`

var result3 = `
/*
* 结下来把 Markdown 变成 HTML
*/

`

var result4 = `
/*
* 接下来给 HTML 加样式
*/
#paper > .content  {
  padding: 20px;
}

#paper > .content  ol {
  padding-left: 30px;
}

#paper > .content  p {
  font-size: 16px;
  line-height: 20px;
}

#paper > .content h1 {
  padding: 155px 0 0;
}

#paper > .content.roll-angle {
  position: relative;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
}

#paper > .content.roll-angle:before {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  width: 0px;
  height: 0px;
  border-bottom: 150px solid #eee;
  border-left: 150px solid #ddd;
  /* border- */
  box-shadow: 7px 7px 7px rgba(0,0,0,0.3);
}

`

var result6 = `
/* 开始吧 */
`

var result5 = `
/*
* 这就是我的会动动简历
* 谢谢观赏
*/

`

writeCode('', result, () => {
  generatePaper(() => {
    writeCode(
      result,
      result2,
      () => {
        writeCode(result + result2, result6, () => {
          writeContentMarkdown(md, () => {
            writeCode(result + result2 + result6, result3, () => {
              writeContentMarkdown(marked(md), () => {
                writeCode(result + result2 + result3 + result6, result4, () => {
                  writeCode(result + result2 + result3 + result4 + result6, result5)
                })
              })
            })
          })
        })
      }
    )
  })
})

function generatePaper(callback) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content roll-angle'
  paper.appendChild(content)
  document.body.appendChild(paper)
  callback.call()
}





