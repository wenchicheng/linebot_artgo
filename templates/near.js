export default () => {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'http://linecorp.com/'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Brown Cafe',
          weight: 'bold',
          size: 'xl'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Place',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Time',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1
                },
                {
                  type: 'text',
                  text: '10:00 - 23:00',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5
                }
              ]
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: '導航帶我去！',
            uri: 'https://www.google.com/maps/search/市場'
          }
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          margin: 'sm'
        }
      ],
      flex: 0
    }
  }
}

// encodeURI() 中文轉換編碼的語法
// decodeURI() 編碼的語法轉成中文
// template.quickReply.items[0].action.uri = encodeURI('https://www.google.com/maps/search/市場')

//   {
//     type: 'bubble',
//     hero: {
//       type: 'image',
//       url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
//       size: 'full',
//       aspectRatio: '20:13',
//       aspectMode: 'cover',
//       action: {
//         type: 'uri',
//         uri: 'http://linecorp.com/'
//       }
//     },
//     body: {
//       type: 'box',
//       layout: 'vertical',
//       contents: [
//         {
//           type: 'text',
//           text: 'Brown Cafe',
//           weight: 'bold',
//           size: 'xl'
//         }
//       ]
//     }
//   }
// }
