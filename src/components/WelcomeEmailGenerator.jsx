import React, { useState, useEffect, useRef } from 'react';

const WelcomeEmailGenerator = () => {
  const [name, setName] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');
  const iframeRef = useRef(null);

  const emailTemplate = `<html>
  <head>
    <title></title>
  </head>

  <body
    style="
    max-width: 100%;
      width: 100%;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgb(236, 236, 236);
      cursor: auto;
    "
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="
        width: 100% !important;
        max-width: 600px;
        table-layout: fixed;
        border-collapse: collapse;
        box-sizing: border-box;
        width: 600px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
        background-color: rgba(255, 255, 255, 1);
      "
    >
      <tbody>
        <tr id="Header" style="vertical-align: top">
          <td
            id="Header"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 600px;
              height: 98px;
              padding-left: 10px;
              padding-right: 10px;
              padding-top: 9px;
              padding-bottom: 9px;
              background-color: rgba(55, 57, 53, 1);
            "
          >
            <a
              href="https://parametr.space/?utm_source=unisender&amp;utm_medium=email&amp;utm_campaign=build_f"
              target="_blank"
              ><img
                src="https://static.tildacdn.com/tild6134-3430-4233-a630-633337376663/EmailLogo.png"
                style="width: 340px; height: 44px"
            /></a>
            <table
              id="Header"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 580px;
                height: auto;
              "
            >
              <tbody>
                <tr height="24" width="24"></tr>
                <tr id="Frame 1">
                  <td height="12" style="display: inline-block" width="231">
                    <img
                      src="https://static.tildacdn.com/tild3932-6134-4466-b433-376466666532/emaildescription.png"
                      style="width: 231px; height: 12px"
                    />
                  </td>
                  <td
                    height="12"
                    style="
                      padding: 0;
                      box-sizing: border-box;
                      font-family: TT Firs Neue, sans-serif;
                      font-weight: Regular;
                      font-size: 11px;
                      line-height: 12.210000157356262px;
                      text-align: right;
                      color: rgba(255, 255, 255, 1);
                      text-decoration: none;
                    "
                    width="349"
                  >
                    <a
                      href="tel:+74951411840"
                      style="
                        color: rgba(255, 255, 255, 1);
                        text-decoration: none;
                      "
                      >+7 495 141 18 40</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr id="96%" style="vertical-align: top">
          <td
            align="center"
            id="96%"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 570px;
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            "
          >
            <table
              id="96%"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 570px;
                height: auto;
              "
            >
              <tbody>
                <tr height="20" width="20"></tr>
                <tr id="ImageWithText" style="vertical-align: top">
                  <td
                    :=""
                    id="ImageWithText"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: auto;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                    "
                  >
                    <table
                      id="ImageWithText"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr id="Text" style="vertical-align: top">
                          <td
                            :=""
                            id="Text"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: auto;
                              height: auto;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                              background-color: rgba(255, 255, 255, 1);
                            "
                          >
                            <table
                              id="Text"
                              style="
                                vertical-align: top;
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            >
                              <tbody>
                                <tr
                                  height="35"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Bold;
                                      font-size: 25px;
                                      line-height: 35px;
                                      text-align: left;
                                      color: rgba(0, 0, 0, 1);
                                    "
                                  >
                                  ${name || '[Имя]'}, добрый день!
                                  </td>
                                </tr>
                                <tr height="20" width="20"></tr>
                                <tr
                                  height="auto"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 16px;
                                      line-height: 22.399999618530273px;
                                      text-align: left;
                                      color: #999999;
                                    "
                                  >
                                  С нетерпением ждём вас в команде Parametr – молодой, амбициозной и динамично развивающейся компании.
                                  </td>
                                </tr>
                                <tr height="20" width="20"></tr>
                                <tr id="Text" style="vertical-align: top">
                                  <td
                                    :=""
                                    id="Text"
                                    style="
                                      vertical-align: top;
                                      box-sizing: border-box;
                                      width: 570px;
                                      height: 1px;
                                      padding-left: 0px;
                                      padding-right: 0px;
                                      padding-top: 0px;
                                      padding-bottom: 0px;
                                      background-color: rgba(217, 217, 217, 1);
                                    "
                                  >
                                  </td>
                                </tr>                
                                <tr height="20" width="20"></tr>
                                <tr
                                  height="auto"
                                  id="AAAAAAAAAAAAAAAAAAA"
                                  width="556"
                                >
                                  <td
                                    style="
                                      vertical-align: top;
                                      padding: 0;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 16px;
                                      line-height: 22.399999618530273px;
                                      text-align: left;
                                      color: #999999;
                                    "
                                  >
                                  Parametr – это девелопер полного цикла, задающий новые стандарты на рынке коммерческой недвижимости. Компетенции нашей команды включают разработку концепции, проектирование, строительство и управление готовыми объектами недвижимости.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr height="245" id="Image Frame Container" width="556">
                          <td
                            :=""
                            height="245"
                            id="Image Frame Container"
                            width="556"
                          >
                            <img
                              src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                              style="width: 570px; height: 245px"
                            />
                            <table
                              id="Image Frame Container"
                              style="
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            ></table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: auto;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(255, 255, 255, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr height="20" width="20"></tr>
                        <tr id="Text" style="vertical-align: top">
                          <td
                            :=""
                            id="Text"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: 570px;
                              height: 1px;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                              background-color: rgba(217, 217, 217, 1);
                            "
                          >
                          </td>
                        </tr>        
                        <tr height="20" width="20"></tr>        
                        <tr
                        height="35"
                        id="AAAAAAAAAAAAAAAAAAA"
                        width="556"
                      >
                        <td
                          style="
                            vertical-align: top;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: Arial, sans-serif;
                            font-weight: Bold;
                            font-size: 22px;
                            line-height: 22px;
                            text-align: left;
                            color: rgba(0, 0, 0, 1);
                          "
                        >
                        Parametr входит в состав группы ПИК и ставит перед собой цель создавать продукты нового уровня.
                        </td>
                      </tr>
                      <tr height="20" width="20"></tr>        
                        <tr height="auto" id="AAAAAAAAAAAAAAAAAAA" width="556">
                          <td
                            style="
                              vertical-align: top;
                              padding: 0;
                              box-sizing: border-box;
                              font-family: Arial, sans-serif;
                              font-weight: Regular;
                              font-size: 16px;
                              line-height: 22.399999618530273px;
                              text-align: left;
                              color: #9A9A9A;
                            "
                          >
                          Именно поэтому для нашей компании мы выбрали такое название.
                          В математике «параметр» – переменная, от которой зависит решение задачи. Приставка «пара» также означает преодоление границ, выход за пределы. На рынке стандартного продукта мы предлагаем решения, которое поднимают качество работы наших резидентов на новый уровень.
                        <br>
                        <br>
                        Мы являемся многофункциональной, гибкой платформой для развития и масштабирования бизнеса наших клиентов и гордимся тем, что меняем отношение к индустриально-логистическому сегменту.                        </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr height="245" id="Image Frame Container" width="556">
                          <td
                            :=""
                            height="245"
                            id="Image Frame Container"
                            width="556"
                          >
                            <img
                              src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                              style="width: 570px; height: 245px"
                            />
                            <table
                              id="Image Frame Container"
                              style="
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 570px;
                                height: auto;
                              "
                            ></table>
                          </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr id="96%" style="vertical-align: top">
          <td
            align="center"
            id="96%"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 570px;
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              padding-top: 0px;
              padding-bottom: 0px;
            "
          >
            <table
              id="96%"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 570px;
                height: auto;
              "
            >
              <tbody>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 570px;
                      height: 1px;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(217, 217, 217, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    ></table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
                <tr
                height="auto"
                id="AAAAAAAAAAAAAAAAAAA"
                width="556"
              >
                <td
                  style="
                    vertical-align: top;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                    font-weight: Regular;
                    font-size: 16px;
                    line-height: 22.399999618530273px;
                    text-align: left;
                    color: #999999;
                  "
                >
                Мы рады, что к нашей команде присоединился новый сильный игрок, чтобы вместе совершенствовать и реализовывать идеи и достигать поставленных целей.              </td>
              </tr>
                <tr height="20" width="20"></tr>
                <tr height="245" id="Image Frame Container" width="556">
                  <td
                    :=""
                    height="245"
                    id="Image Frame Container"
                    width="556"
                  >
                    <img
                      src="https://img.hiteml.com/en/v5/user-files?userId=5206765&amp;resource=himg&amp;disposition=inline&amp;name=684opxbw76ajjep4qn6oe9f8dc4bapnk9mzzxgsdbjcgnrca9n3ke53k1x9zdh9prd88b1k5z65kb815wgkzze4yasykxbwupok8fumt8n56sxu5egpqo"
                      style="width: 570px; height: 245px"
                    />
                    <table
                      id="Image Frame Container"
                      style="
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    ></table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
                <tr id="Text" style="vertical-align: top">
                  <td
                    :=""
                    id="Text"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 570px;
                      height: 40px;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      background-color: rgba(255, 255, 255, 1);
                    "
                  >
                    <table
                      id="Text"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 570px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr
                          height="40"
                          id="AAAAAAAAAAAAAAAAAAA"
                          width="556"
                          align="center"
                        >
                            <td
                              height="37"
                              style="
                                padding: 7px 20px;
                                border-radius: 20px;
                                display: inline-block;
                                background-color: #373936;
                                box-sizing: border-box;
                                font-family: Arial, sans-serif;
                                font-weight: Regular;
                                font-size: 16px;
                                line-height: 24px;
                                text-align: left;
                                color: #ffffff;
                              "
                              width="170"
                            >
                                                    <a
                              href="https://kuvekino-prom.ru/kupit-sklad-v-novoj-moskve/?utm_source=unisender&amp;utm_medium=email&amp;utm_campaign=build_f"
                              style="color: #ffffff; text-decoration: none"
                              target="_blank">
                                Смотреть видео
                                </a>
                            </td>
                        </tr>
                        <tr height="20" width="20"></tr>
                        <tr
                        height="auto"
                        id="AAAAAAAAAAAAAAAAAAA"
                        width="556"
                      >
                        <td
                          style="
                            vertical-align: top;
                            padding: 0;
                            box-sizing: border-box;
                            font-family: Arial, sans-serif;
                            font-weight: Regular;
                            font-size: 16px;
                            line-height: 22.399999618530273px;
                            text-align: left;
                            color: #999999;
                          "
                        >
                        Посмотрите видео о компании, чтобы узнать больше о том, для кого мы работаем и какие цели перед собой ставим. И подписывайтесь на нашу страничку на Я. Дзен, где мы не только делимся новостями компании, но и размещаем полезный видео-контент, интересные статьи про архитектуру, клиентов, рынок индустриальной недвижимости, мировой опыт и многое другое.
                        <br>
                        <br>
                        В случае возникновения любых вопросов, пожалуйста, обращайтесь.
                        <br>
                        <br>
                        Кузнецова Юлия,<br>
Руководитель HR-проектов <br>
Parametr<br>
T: +7 903 765 20 52<br>
E: kuznetsovaiub@pik.ru<br>
                      </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr height="20" width="20"></tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr id="Frame 3" style="vertical-align: top">
          <td
            :=""
            id="Frame 3"
            style="
              vertical-align: top;
              box-sizing: border-box;
              width: 600px;
              height: 217px;
              padding-left: 17px;
              padding-right: 17px;
              padding-top: 20px;
              padding-bottom: 20px;
              background-color: rgba(55, 57, 54, 1);
            "
          >
            <table
              id="Frame 3"
              style="
                vertical-align: top;
                border-collapse: collapse;
                table-layout: fixed;
                width: 566px;
                height: auto;
              "
            >
              <tbody>
                <tr id="Frame 4" style="vertical-align: top">
                  <td
                    :=""
                    id="Frame 4"
                    style="
                      vertical-align: top;
                      box-sizing: border-box;
                      width: 175px;
                      height: auto;
                      padding-left: 0px;
                      padding-right: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                    "
                  >
                    <table
                      id="Frame 4"
                      style="
                        vertical-align: top;
                        border-collapse: collapse;
                        table-layout: fixed;
                        width: 175px;
                        height: auto;
                      "
                    >
                      <tbody>
                        <tr id="Frame 2087324712" style="vertical-align: top">
                          <td
                            :=""
                            id="Frame 2087324712"
                            style="
                              vertical-align: top;
                              box-sizing: border-box;
                              width: 175px;
                              height: auto;
                              padding-left: 0px;
                              padding-right: 0px;
                              padding-top: 0px;
                              padding-bottom: 0px;
                            "
                          >
                            <table
                              id="Frame 2087324712"
                              style="
                                vertical-align: top;
                                border-collapse: collapse;
                                table-layout: fixed;
                                width: 175px;
                                height: auto;
                              "
                            >
                              <tbody>
                                <tr id="Text">
                                  <td
                                    height="20"
                                    style="
                                      padding: 0;
                                      display: inline-block;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 18px;
                                      line-height: 20px;
                                      text-align: left;
                                      color: #ffffff;
                                      text-decoration: none;
                                    "
                                    width="175"
                                  >
                                    <a
                                      href="tel:+74951411840"
                                      style="
                                        color: rgba(255, 255, 255, 1);
                                        text-decoration: none;
                                      "
                                      >+7 495 141 18 40</a
                                    >
                                  </td>
                                </tr>
                                <tr height="6" width="6"></tr>
                                <tr id="Text">
                                  <td
                                    height="20"
                                    style="
                                      padding: 0;
                                      display: inline-block;
                                      box-sizing: border-box;
                                      font-family: Arial, sans-serif;
                                      font-weight: Regular;
                                      font-size: 18px;
                                      line-height: 20px;
                                      text-align: left;
                                      color: #ffffff;
                                      text-decoration: none;
                                    "
                                    width="175"
                                  >
                                    <a
                                      class="goto-anchor goto-anchor"
                                      style="
                                        color: #ffffff;
                                        font-family: 'arial';
                                        font-size: 18px;
                                        line-height: 14px;
                                        text-decoration: none;
                                      "
                                      target="_blank"
                                      title="prom@pik.ru"
                                      >prom@pik.ru</a
                                    >
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr height="100" width="100"></tr>
                <tr height="15" id="AAAAAAAAAAAAAAAAAAA" width="566">
                  <td
                    style="
                      vertical-align: top;
                      padding: 0;
                      box-sizing: border-box;
                      font-family: Arial, sans-serif;
                      font-weight: Regular;
                      font-size: 12px;
                      line-height: 15px;
                      text-align: left;
                      color: #ffffff;
                    "
                  >
                    Вы получили это письмо, потому что мы считаем вас партнёром
                    или другом компании Parametr. Если вы не хотите получать
                    такие письма в дальнейшем, вы
                    <a
                      class="goto-anchor goto-anchor"
                      style="
                        color: #ffffff;
                        font-family: 'arial';
                        font-size: 12px;
                        line-height: 14px;
                        text-decoration: underline;
                      "
                      target="_blank"
                      title="Отписаться"
                      >можете отписаться</a
                    >.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

useEffect(() => {
    if (iframeRef.current && activeTab === 'preview') {
      const doc = iframeRef.current.contentDocument;
      doc.open();
      doc.write(emailTemplate);
      doc.close();
    }
  }, [emailTemplate, activeTab]);  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="card">
          <h1>Генератор приветственной рассылки</h1>
          
          <div className="input-group">
            <label htmlFor="name">Имя нового члена команды</label>
            <input
              id="name"
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button onClick={copyToClipboard}>
            {copied ? 'Скопировано!' : 'Скопировать в буфер обмена'}
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="card">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Превью
            </button>
            <button 
              className={`tab ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              HTML Код
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'preview' ? (
              <div className="iframe-container">
                <iframe
                  ref={iframeRef}
                  title="Email Preview"
                  className="preview-iframe"
                />
              </div>
            ) : (
              <div className="code-container">
                <pre>{emailTemplate}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .container {
          display: flex;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
        }
        
        .left-panel {
          width: 300px;
          flex-shrink: 0;
          .card{
          height: fit-content}
        }
        
        .right-panel {
          flex: 1;
          min-width: 0;
        }
        
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        
        .right-panel .card {
          padding: 0;
          overflow: hidden;
        }
        
        h1 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .input-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #ddd;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 14px;
          color: #666;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #007bff;
          border-bottom-color: #007bff;
        }
        
        .tab:hover {
          color: #007bff;
        }
        
        .tab-content {
          flex: 1;
          overflow: hidden;
        }
        
        .code-container {
          background: #f5f5f5;
          padding: 20px;
          height: 100%;
          overflow: auto;
        }
        
        pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          font-size: 14px;
        }
        
        button {
          width: 100%;
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
        
        button:not(.tab):hover {
          background: #0056b3;
        }

        .iframe-container {
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
        }

        .preview-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          
          .left-panel {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeEmailGenerator;