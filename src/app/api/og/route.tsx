/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

const interBold = fetch(
  new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  const [fontBold] = await Promise.all([interBold])

  const url = new URL(req.url)
  const title = url.searchParams.get('title') || 'Hello World'

  const heading = title.length > 140 ? `${title.substring(0, 140)}...` : title
  const fontSize = title.length > 100 ? '48px' : '64px'

  try {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'linear-gradient(to bottom, #16181d, #222734)',
            height: '100%',
            width: '100%',
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 82,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
              marginTop: 64,
              fontWeight: 700,
              fontSize,
            }}
          >
            {heading}
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://github.com/mauriciomutte.png"
              alt="teste"
              style={{
                borderRadius: '50%',
                height: 82,
                width: 82,
              }}
            />
            <span
              style={{
                color: '#fff',
                fontSize: 32,
                fontWeight: 700,
                marginLeft: 32,
              }}
            >
              Maurício Mutte
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (error) {
    return new Response('Failed to fetch image', {
      status: 500,
    })
  }
}
